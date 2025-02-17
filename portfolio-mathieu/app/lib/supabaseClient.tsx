import { createClient } from "@supabase/supabase-js";


const SUPABASE_URL = "https://lppczpioqxeyxicmgiae.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwcGN6cGlvcXhleXhpY21naWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3ODI3MzcsImV4cCI6MjA1NTM1ODczN30.z2218lF4KTUY1n0irQSY1iaFLGCiXWNxyrBTaw7G7Zc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
