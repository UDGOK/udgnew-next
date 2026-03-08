import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { addConstructionDoc, getConstructionDocs } from "@/lib/db";
import fs from "fs";
import path from "path";

/* ─── GET: List all construction documents ─── */
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const docs = getConstructionDocs();
  return NextResponse.json(docs);
}

/* ─── POST: Upload a new construction document ─── */
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const category = (formData.get("category") as string) || "other";
    const notes = (formData.get("notes") as string) || "";
    const projectId = (formData.get("projectId") as string) || "";

    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    // Validate file type
    const allowed = [".pdf", ".jpg", ".jpeg", ".png", ".dwg", ".dxf", ".doc", ".docx", ".xls", ".xlsx"];
    const ext = path.extname(file.name).toLowerCase();
    if (!allowed.includes(ext)) {
      return NextResponse.json(
        { error: `File type ${ext} not allowed. Allowed: ${allowed.join(", ")}` },
        { status: 400 }
      );
    }

    // Max 50MB
    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Max 50MB." }, { status: 400 });
    }

    // Create upload directory
    const uploadDir = path.join(process.cwd(), "public", "portal-uploads", "construction-docs");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Write file
    const buffer = Buffer.from(await file.arrayBuffer());
    const safeFilename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const filePath = path.join(uploadDir, safeFilename);
    fs.writeFileSync(filePath, buffer);

    const user = session.user as { name?: string; email?: string; company?: string };

    const doc = {
      id: crypto.randomUUID(),
      name: file.name,
      type: ext.replace(".", ""),
      category,
      url: `/portal-uploads/construction-docs/${safeFilename}`,
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
    console.error("Construction doc upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
