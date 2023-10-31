import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wolnflaslattywukpqes.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvbG5mbGFzbGF0dHl3dWtwcWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3NDA4ODYsImV4cCI6MjAxMzMxNjg4Nn0.DR6CcUWZaSBBRExVqj8Z-qv2CY9-R9A-WasR_CG_YOA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
