import type {
  JobsPositionType,
  JobsSortType,
} from "@/features/jobs/useGetVacancies";
import { supabase } from "./supabase";

// GET VACANCIES
export async function getVacancies(
  paginationOpt: {
    withPagination: boolean;
    from: number;
    to: number;
  },
  filterOpt: {
    filterPositionValue: JobsPositionType;
    filterSortValue: JobsSortType;
  },
  searchValue?: string,
) {
  const { withPagination, from, to } = paginationOpt;
  const { filterPositionValue, filterSortValue } = filterOpt;

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
    throw new Error("Vacancies could not loaded");
  }

  return { data, count };
}
