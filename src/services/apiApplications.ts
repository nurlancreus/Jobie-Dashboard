import { supabase } from "./supabase";

export async function getApplications(
  paginationOpt: Record<string, number>,
  filterByStatus: string,
) {
  const { from, to } = paginationOpt;

  let query = supabase
    .from("applications")
    .select("*, vacancies(*, companies(*))", { count: "exact" });

  query = query.range(from, to);

  if (filterByStatus !== "all") query = query.eq("status", filterByStatus);

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Applications could not loaded");
  }

  return { data, count };
}

// Get Statuses
export async function getApplicationsStatus() {
  const { data, error } = await supabase.from("applications").select("status");

  if (error) {
    console.error(error);
    throw new Error("Applications could not loaded");
  }

  return { data };
}
