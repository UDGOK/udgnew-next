import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { getProjectsAsync, addProjectAsync, isAdmin, updateProjectAsync, deleteProjectAsync } from "@/lib/db";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const projects = await getProjectsAsync();
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress || "";
  if (!isAdmin(email)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const { title, description, location, category, scope, budgetRange, deadline, status } = body;

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
      status: (status || "active") as "active" | "upcoming" | "closed",
      documents: [],
      createdAt: new Date().toISOString(),
    };

    await addProjectAsync(project);
    return NextResponse.json(project);
  } catch (err) {
    console.error("Create project error:", err);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress || "";
  if (!isAdmin(email)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    const updated = await updateProjectAsync(id, updates);
    if (!updated) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (err) {
    console.error("Update project error:", err);
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress || "";
  if (!isAdmin(email)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    await deleteProjectAsync(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete project error:", err);
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
