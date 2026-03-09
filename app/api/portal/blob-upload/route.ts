import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { put } from "@vercel/blob";

export const maxDuration = 300;

// Simple server-side upload: receive file via FormData, upload to Vercel Blob
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

    // Upload to Vercel Blob
    const blob = await put(file.name, file, {
      access: "public",
      addRandomSuffix: true,
    });

    console.log("[blob-upload] Success:", blob.pathname, blob.url);

    return NextResponse.json({
      url: blob.url,
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
