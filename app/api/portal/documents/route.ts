import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { addConstructionDocAsync, getConstructionDocsAsync } from "@/lib/db";

export const maxDuration = 60;

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const docs = await getConstructionDocsAsync();
  return NextResponse.json(docs);
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { blobUrl, fileName, fileType, category, notes, projectId } = body;

    if (!blobUrl || !fileName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const user = await currentUser();
    const email = user?.emailAddresses?.[0]?.emailAddress || "";
    const name = `${user?.firstName || ""} ${user?.lastName || ""}`.trim();

    const doc = {
      id: crypto.randomUUID(),
      name: fileName,
      type: fileType || "pdf",
      category: category || "other",
      url: blobUrl,
      uploadedBy: email,
      uploadedByName: name,
      uploadedByCompany: (user?.publicMetadata?.company as string) || "",
      projectId: projectId || undefined,
      notes: notes || undefined,
      uploadedAt: new Date().toISOString(),
    };

    await addConstructionDocAsync(doc);

    return NextResponse.json({ success: true, document: doc });
  } catch (err) {
    console.error("Construction doc save error:", err);
    const message = err instanceof Error ? err.message : "Failed to save document";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
