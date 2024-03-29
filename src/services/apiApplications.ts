import type {
  AppsStatusType,
  AppsSortType,
} from "@/features/applications/useGetApplications";
import { supabase } from "./supabase";

//GET APPLICATIONS
export async function getApplications(
  paginationOpt: Record<string, number>,
  filterOpt: {
    filterStatusValue: AppsStatusType;
    filterSortValue: AppsSortType;
  },
) {
  const { from, to } = paginationOpt;
  const { filterStatusValue, filterSortValue } = filterOpt;

  let query = supabase
    .from("applications")
    .select("*, vacancies(*, companies(*))", { count: "exact" });

  query = query.range(from, to);

  // Filtering by status
  if (filterStatusValue !== "all")
    query = query.eq("status", filterStatusValue);

  // Sorting by date
  query = query.order("created_at", {
    ascending: filterSortValue === "newest" ? false : true,
  });

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Applications could not loaded");
  }

  return { data, count };
}

// GET APPLICATION STATUSES
export async function getApplicationStatuses() {
  const { data, error } = await supabase.from("applications").select("status");

  if (error) {
    console.error(error);
    throw new Error("Applications could not loaded");
  }

  return data;
}
