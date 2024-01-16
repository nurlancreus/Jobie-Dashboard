import { supabase } from "./supabase";

export async function getCompanies(
  paginationOpt: Record<string, number>,
  searchValue?: string,
) {
  const { from, to } = paginationOpt;

  let query = supabase
    .from("companies")
    .select("*, vacancies(id)", { count: "exact" });

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
    throw new Error("Companies could not loaded");
  }

  return { data, count };
}

export async function getCompany(id: number) {
  const { data, error } = await supabase
    .from("companies")
    .select("*, vacancies(id)")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Company not found");
  }

  return data;
}
