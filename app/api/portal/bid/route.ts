import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Resend } from "resend";
import { getProjectById } from "@/lib/db";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { projectId, message, bidAmount } = body;

    if (!projectId || !message) {
      return NextResponse.json({ error: "Project and message are required" }, { status: 400 });
    }

    const project = getProjectById(projectId);
    const user = await currentUser();
    const email = user?.emailAddresses?.[0]?.emailAddress || "";
    const name = `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || email;
    const company = (user?.publicMetadata?.company as string) || "N/A";

    await resend.emails.send({
      from: "UDGOK Bid Portal <onboarding@resend.dev>",
      to: "yasir@udgok.com",
      subject: `New Bid Submission: ${project?.title || "Unknown Project"}`,
      html: `
        <h2>New Bid Submission</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Project</td><td style="padding: 8px; border: 1px solid #ddd;">${project?.title || projectId}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Bidder</td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td><td style="padding: 8px; border: 1px solid #ddd;">${company}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
          ${bidAmount ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Bid Amount</td><td style="padding: 8px; border: 1px solid #ddd;">$${bidAmount}</td></tr>` : ""}
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Bid submission error:", err);
    return NextResponse.json({ error: "Bid submission failed" }, { status: 500 });
  }
}
