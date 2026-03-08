import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Resend } from "resend";
import { getProjectById } from "@/lib/db";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { projectId, message, bidAmount } = body;

    if (!projectId || !message) {
      return NextResponse.json({ error: "Project and message are required" }, { status: 400 });
    }

    const project = getProjectById(projectId);
    const user = session.user as { name?: string; email?: string; company?: string };

    await resend.emails.send({
      from: "UDGOK Bid Portal <onboarding@resend.dev>",
      to: "yasir@udgok.com",
      subject: `New Bid Submission: ${project?.title || "Unknown Project"}`,
      html: `
        <h2>New Bid Submission</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Project</td><td style="padding: 8px; border: 1px solid #ddd;">${project?.title || projectId}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Bidder</td><td style="padding: 8px; border: 1px solid #ddd;">${user.name || "N/A"}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td><td style="padding: 8px; border: 1px solid #ddd;">${user.company || "N/A"}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${user.email}</td></tr>
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
