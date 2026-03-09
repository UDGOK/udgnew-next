import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { getDownloadUrl } from "@vercel/blob";

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "URL parameter required" }, { status: 400 });
  }

  try {
    // For Vercel Blob private/public URLs, generate a signed temporary download URL
    if (url.includes("blob.vercel-storage.com")) {
      const downloadUrl = await getDownloadUrl(url);
      return NextResponse.redirect(downloadUrl);
    }

    // For legacy local URLs, return error (old data)
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  } catch (error) {
    console.error("[serve-file] Error:", error);
    return NextResponse.json({ error: "Failed to serve file" }, { status: 500 });
  }
}
