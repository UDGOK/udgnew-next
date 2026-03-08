import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { isAdmin, addDocToProject } from "@/lib/db";
import fs from "fs";
import path from "path";

// Extend timeout for file uploads
export const maxDuration = 60;

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email || !isAdmin(session.user.email)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const projectId = formData.get("projectId") as string | null;

    if (!file || !projectId) {
      return NextResponse.json({ error: "File and projectId are required" }, { status: 400 });
    }

    // Validate file type
    const allowed = [".pdf", ".jpg", ".jpeg", ".png", ".dwg", ".dxf", ".doc", ".docx", ".xls", ".xlsx"];
    const ext = path.extname(file.name).toLowerCase();
    if (!allowed.includes(ext)) {
      return NextResponse.json({ error: `File type ${ext} not allowed. Allowed: ${allowed.join(", ")}` }, { status: 400 });
    }

    // Max 4MB (Vercel serverless body limit is 4.5MB)
    if (file.size > 4 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Max 4MB per file. Compress PDFs before uploading." }, { status: 400 });
    }

    // Create upload directory (Vercel has read-only public/, use /tmp)
    const IS_VERCEL = !!process.env.VERCEL;
    const baseDir = IS_VERCEL ? "/tmp" : path.join(process.cwd(), "public");
    const uploadDir = path.join(baseDir, "portal-uploads", projectId);
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Write file — preserve original name for clarity
    const buffer = Buffer.from(await file.arrayBuffer());
    const safeFilename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const filePath = path.join(uploadDir, safeFilename);
    fs.writeFileSync(filePath, buffer);

    // Add doc reference to project — use original filename
    const doc = {
      id: crypto.randomUUID(),
      name: file.name,
      type: ext.replace(".", ""),
      url: IS_VERCEL
        ? `/api/portal/serve-file?path=portal-uploads/${projectId}/${safeFilename}&name=${encodeURIComponent(file.name)}`
        : `/portal-uploads/${projectId}/${safeFilename}`,
      uploadedAt: new Date().toISOString(),
    };

    addDocToProject(projectId, doc);

    return NextResponse.json({ success: true, document: doc });
  } catch (err) {
    console.error("Upload error:", err);
    const message = err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
