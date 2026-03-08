import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getProjects, addProject, isAdmin } from "@/lib/db";

// GET — list all active projects (any authenticated user)
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const projects = getProjects();
  return NextResponse.json(projects);
}

// POST — create a new project (admin only)
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email || !isAdmin(session.user.email)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const { title, description, location, category, scope, budgetRange, deadline } = body;

    if (!title || !description) {
      return NextResponse.json({ error: "Title and description are required" }, { status: 400 });
    }

    const project = {
      id: crypto.randomUUID(),
      title,
      description,
      location: location || "",
      category: category || "",
      scope: scope || "",
      budgetRange: budgetRange || "",
      deadline: deadline || "",
      status: "active" as const,
      documents: [],
      createdAt: new Date().toISOString(),
    };

    addProject(project);
    return NextResponse.json(project);
  } catch (err) {
    console.error("Create project error:", err);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
