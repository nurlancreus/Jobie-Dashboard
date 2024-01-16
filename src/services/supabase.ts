import { Database } from "@/models/database.types";
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);


// VITE_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidGp6b3Bkb3N2bHRodG5odWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3ODQ0NDQsImV4cCI6MjAyMDM2MDQ0NH0.YqP7sBL6oyq8OoBfpU_9oGiMeE2dpvfzRa1iQkv35uo"
// VITE_SUPABASE_URL = "https://bbtjzopdosvlthtnhulj.supabase.co"