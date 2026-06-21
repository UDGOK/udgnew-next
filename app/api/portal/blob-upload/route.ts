import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { put } from "@vercel/blob";

export const maxDuration = 300;

// Allowed document/image types and size cap for portal uploads.
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const ALLOWED_EXTENSIONS = [
  "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx",
  "txt", "csv", "dwg", "dxf", "rvt", "zip",
  "png", "jpg", "jpeg", "webp", "gif",
];

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 50MB." },
        { status: 413 }
      );
    }

    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return NextResponse.json(
        { error: `File type ".${ext}" is not allowed.` },
        { status: 415 }
      );
    }

    // Sanitize the filename to a safe blob key (no path segments / odd chars).
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");

    console.log(`[blob-upload] Uploading ${safeName} (${(file.size / 1024 / 1024).toFixed(2)}MB)`);

    // Upload to Vercel Blob (private store)
    const blob = await put(`uploads/${safeName}`, file, {
      access: "private",
      addRandomSuffix: true,
    });

    console.log("[blob-upload] Success:", blob.url);

    return NextResponse.json({
      url: blob.url,
      downloadUrl: blob.downloadUrl,
      pathname: blob.pathname,
    });
  } catch (error) {
    console.error("[blob-upload] Error:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Upload failed" },
      { status: 500 }
    );
  }
}
