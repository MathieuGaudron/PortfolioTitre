import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabaseClient";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");

  if (!projectId) {
    return NextResponse.json({ error: "Project ID requis" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("commentaires")
    .select("*")
    .eq("project_id", projectId)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request) {
  const { projectId, username, text } = await req.json();

  if (!projectId || !username || !text) {
    return NextResponse.json({ error: "Données manquantes" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("commentaires") 
    .insert([{ project_id: projectId, username, text }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
