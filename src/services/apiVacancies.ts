import { supabase } from "./supabase";

export async function getVacancies(
  paginationOpt: Record<string, number>,
  searchValue?: string,
) {
  const { from, to } = paginationOpt;

  let query = supabase
    .from("vacancies")
    .select("*, companies(*)", { count: "exact" });

  if (searchValue) {
    query = query.textSearch("name", searchValue, {
      type: "websearch",
      config: "english",
    });
  }

  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Vacancies could not loaded");
  }

  return { data, count };
}
