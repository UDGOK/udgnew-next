import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const filePath = req.nextUrl.searchParams.get("path");
  const originalName = req.nextUrl.searchParams.get("name");
  if (!filePath) {
    return NextResponse.json({ error: "Missing path" }, { status: 400 });
  }

  // Sanitize path to prevent directory traversal
  const sanitized = filePath.replace(/\.\./g, "").replace(/^\//, "");
  const fullPath = path.join("/tmp", sanitized);

  if (!fs.existsSync(fullPath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const buffer = fs.readFileSync(fullPath);
  const ext = path.extname(fullPath).toLowerCase();
  const displayName = originalName || path.basename(fullPath);

  const mimeTypes: Record<string, string> = {
    ".pdf": "application/pdf",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".doc": "application/msword",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".xls": "application/vnd.ms-excel",
    ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".dwg": "application/acad",
    ".dxf": "application/dxf",
  };

  // PDFs and images open inline in browser, other types download
  const inlineTypes = [".pdf", ".jpg", ".jpeg", ".png"];
  const disposition = inlineTypes.includes(ext) ? "inline" : "attachment";

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Content-Disposition": `${disposition}; filename="${displayName}"`,
      "Cache-Control": "private, max-age=3600",
    },
  });
}
