import { supabase } from "./supabase";

export async function getVacancies(
  paginationOpt: {
    withPagination: boolean;
    from: number;
    to: number;
  },
  searchValue?: string,
) {
  const { withPagination, from, to } = paginationOpt;

  let query = supabase
    .from("vacancies")
    .select("*, companies(*)", { count: "exact" });

  if (searchValue) {
    query = query.textSearch("name", searchValue, {
      type: "websearch",
      config: "english",
    });
  }

  if (withPagination) query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Vacancies could not loaded");
  }

  return { data, count };
}
