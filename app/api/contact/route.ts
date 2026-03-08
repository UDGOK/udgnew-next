import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, email, phone, company, projectType, timeline, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "UDGOK Website <noreply@udgok.com>",
      to: ["yasir@udgok.com"],
      replyTo: email,
      subject: `New Project Inquiry from ${name}${projectType ? ` — ${projectType}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #FF4800; padding: 24px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Project Inquiry</h1>
          </div>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 12px; background: #f5f5f5; font-weight: bold; width: 35%;">Name</td><td style="padding: 12px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 12px; background: #f5f5f5; font-weight: bold;">Email</td><td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 12px; background: #f5f5f5; font-weight: bold;">Phone</td><td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
            ${company ? `<tr><td style="padding: 12px; background: #f5f5f5; font-weight: bold;">Company</td><td style="padding: 12px; border-bottom: 1px solid #eee;">${company}</td></tr>` : ""}
            ${projectType ? `<tr><td style="padding: 12px; background: #f5f5f5; font-weight: bold;">Project Type</td><td style="padding: 12px; border-bottom: 1px solid #eee;">${projectType}</td></tr>` : ""}
            ${timeline ? `<tr><td style="padding: 12px; background: #f5f5f5; font-weight: bold;">Timeline</td><td style="padding: 12px; border-bottom: 1px solid #eee;">${timeline}</td></tr>` : ""}
            ${budget ? `<tr><td style="padding: 12px; background: #f5f5f5; font-weight: bold;">Budget</td><td style="padding: 12px; border-bottom: 1px solid #eee;">${budget}</td></tr>` : ""}
          </table>
          
          <div style="margin-top: 24px; padding: 20px; background: #f9f9f9; border-left: 4px solid #FF4800;">
            <h3 style="margin: 0 0 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em;">Project Description</h3>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 24px; padding: 16px; background: #0B061B; color: rgba(255,255,255,0.6); font-size: 12px;">
            Sent from udgok.com contact form
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
