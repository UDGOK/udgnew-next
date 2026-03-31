import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    const body = await req.json();
    const { 
      name, email, cell, specialty, projectType, additionalInfo,
      type, rooms, lowEnd, highEnd, roiGap 
    } = body;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

    const { error } = await resend.emails.send({
      from: "UDGOK Website <noreply@udgok.com>",
      to: ["yasir@udgok.com"],
      replyTo: email,
      subject: `[Clinical Brief] New ${(type || "medical").toUpperCase()} Project: ${rooms || 0} Rooms — ${name || "Unknown"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #333;">
          <div style="background: #0B061B; padding: 40px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: #FF4800; font-size: 28px; margin: 0; text-transform: uppercase; letter-spacing: 2px;">Clinical Feasibility Brief</h1>
            <p style="color: rgba(255,255,255,0.6); margin-top: 10px;">Generated via 2026 Interactive Cost Modeler</p>
          </div>

          <div style="padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="font-size: 18px; border-bottom: 2px solid #FF4800; padding-bottom: 10px; margin-bottom: 20px;">1. Calculator Projections</h2>
            <table style="width: 100%; margin-bottom: 30px;">
              <tr>
                <td style="padding: 10px; background: #f9f9f9; font-weight: bold; width: 40%;">Practice Type</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-transform: uppercase;">${type}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #f9f9f9; font-weight: bold;">Room Count</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${rooms} ${type === "dental" ? "Operatories" : "Rooms"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #f9f9f9; font-weight: bold;">Estimated Budget</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #FF4800; font-weight: bold;">
                  ${formatter.format(lowEnd)} — ${formatter.format(highEnd)}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #f9f9f9; font-weight: bold;">Projected ROI Gap (90 Days)</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #2ecc71;">
                  + ${formatter.format(roiGap)}
                </td>
              </tr>
            </table>

            <h2 style="font-size: 18px; border-bottom: 2px solid #FF4800; padding-bottom: 10px; margin-bottom: 20px;">2. Clinical Intake</h2>
            <table style="width: 100%; margin-bottom: 30px;">
              <tr>
                <td style="padding: 10px; background: #f9f9f9; font-weight: bold; width: 40%;">Specialty / Focus</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${specialty}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #f9f9f9; font-weight: bold;">Project Scope</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${projectType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #f9f9f9; font-weight: bold;">Additional Notes</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-style: italic;">${additionalInfo || "None provided"}</td>
              </tr>
            </table>

            <h2 style="font-size: 18px; border-bottom: 2px solid #FF4800; padding-bottom: 10px; margin-bottom: 20px;">3. Practitioner Contact</h2>
            <table style="width: 100%;">
              <tr>
                <td style="padding: 10px; background: #fdf2f0; font-weight: bold; width: 40%;">Name</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #fdf2f0; font-weight: bold;">Email</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #fdf2f0; font-weight: bold;">Cell / Direct</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${cell}">${cell}</a></td>
              </tr>
            </table>

            <div style="margin-top: 40px; padding: 20px; background: #0B061B; color: #fff; text-align: center; border-radius: 8px;">
               <p style="margin: 0; font-size: 12px; letter-spacing: 1px; color: rgba(255,255,255,0.4);">
                SECURE LEAD • UDGOK CLINICAL INFRASTRUCTURE TEAM
               </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error (Estimate):", error);
      return NextResponse.json({ error: "Email delivery failed", details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Critical Estimate API Error:", err);
    return NextResponse.json({ error: "Internal Server Error", details: err instanceof Error ? err.message : String(err) }, { status: 500 });
  }
}
