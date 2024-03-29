import type {
  CompaniesPositionType,
  CompaniesSortType,
} from "@/features/companies/useGetCompanies";
import { supabase } from "./supabase";

// GET COMPANIES
export async function getCompanies(
  paginationOpt: Record<string, number>,
  filterOpt: {
    filterPositionValue: CompaniesPositionType;
    filterSortValue: CompaniesSortType;
  },
  searchValue?: string,
) {
  const { from, to } = paginationOpt;
  const { filterPositionValue, filterSortValue } = filterOpt;

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

  // Filtering by position
  if (filterPositionValue !== "your-skill")
    query = query.eq("position", filterPositionValue);

  // Sorting by date
  query = query.order("created_at", {
    ascending: filterSortValue === "newest" ? false : true,
  });

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Companies could not loaded");
  }

  return { data, count };
}

// GET COMPANY
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
