import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { isAdmin, addDocToProject } from "@/lib/db";

export const maxDuration = 60;

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email || !isAdmin(session.user.email)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const { projectId, blobUrl, fileName, fileType } = body;

    if (!projectId || !blobUrl || !fileName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const doc = {
      id: crypto.randomUUID(),
      name: fileName,
      type: fileType || "pdf",
      url: blobUrl,
      uploadedAt: new Date().toISOString(),
    };

    addDocToProject(projectId, doc);

    return NextResponse.json({ success: true, document: doc });
  } catch (err) {
    console.error("Upload error:", err);
    const message = err instanceof Error ? err.message : "Failed to save document";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
