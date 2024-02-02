import { supabase } from "./supabase";

// GET RECENT ACTIVITIES
export async function getActivities() {
  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .limit(8)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Activities could not loaded");
  }

  return data;
}
