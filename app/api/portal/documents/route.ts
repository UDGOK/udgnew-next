import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { addConstructionDoc, getConstructionDocs } from "@/lib/db";

export const maxDuration = 60;

/* ─── GET: List all construction documents ─── */
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const docs = getConstructionDocs();
  return NextResponse.json(docs);
}

/* ─── POST: Save construction document metadata (file already uploaded to Vercel Blob) ─── */
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { blobUrl, fileName, fileType, category, notes, projectId } = body;

    if (!blobUrl || !fileName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const user = session.user as { name?: string; email?: string; company?: string };

    const doc = {
      id: crypto.randomUUID(),
      name: fileName,
      type: fileType || "pdf",
      category: category || "other",
      url: blobUrl,
      uploadedBy: user.email || "",
      uploadedByName: user.name || "",
      uploadedByCompany: (user as { company?: string }).company || "",
      projectId: projectId || undefined,
      notes: notes || undefined,
      uploadedAt: new Date().toISOString(),
    };

    addConstructionDoc(doc);

    return NextResponse.json({ success: true, document: doc });
  } catch (err) {
    console.error("Construction doc save error:", err);
    const message = err instanceof Error ? err.message : "Failed to save document";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
