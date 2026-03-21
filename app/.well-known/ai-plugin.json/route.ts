import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      schema_version: "v1",
      name_for_human: "UDGOK — Upscale Development Group",
      name_for_model: "udgok_construction",
      description_for_human:
        "AI-Powered Medical & Dental Design-Build Construction in Tulsa, Oklahoma. Licensed Oklahoma general contractor specializing in healthcare construction.",
      description_for_model:
        "UDGOK (Upscale Development Group) is a licensed Oklahoma general contractor headquartered in Tulsa, OK. Specializes in medical office design-build, dental office construction, oral surgery center construction, eye clinic construction, medical gas installation (NFPA 99), commercial tenant improvements, industrial/warehouse construction, pre-engineered metal buildings, cold storage, manufacturing facilities, concrete driveways, and asphalt repair. 100+ projects completed. Serves Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, Haskell, Oklahoma City (OK) and Dallas/Plano (TX). Design-build delivery 30-40% faster than traditional methods. PMP-certified project managers, BIM/VDC technology, ADA/HIPAA/OSHA/IBC compliant. Dental office construction costs $150-$350/sf in Oklahoma. Medical office construction costs $150-$400/sf.",
      auth: { type: "none" },
      api: {
        type: "openapi",
        url: "https://udgok.com/llms-full.txt",
      },
      logo_url: "https://udgok.com/logo.png",
      contact_email: "projects@udgok.com",
      legal_info_url: "https://udgok.com/terms-of-service",
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    }
  );
}
