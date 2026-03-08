import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Design-Build Contractor Jenks OK | UDGOK",
  description: "Medical and commercial construction in Jenks, Oklahoma. UDGOK serves Jenks's growing healthcare and commercial market with design-build, tenant improvements, and ground-up construction.",
  alternates: { canonical: "https://udgok.com/jenks-ok-design-build" },
};

export default function JenksPage() {
  return (
    <ServicePage
      label="Jenks"
      title="Construction in Jenks, Oklahoma"
      description="Medical, dental, and commercial construction serving Jenks and the South Tulsa corridor."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="Construction contractor Jenks Oklahoma by UDGOK"
      intro="Jenks sits at the heart of Tulsa's South Corridor — one of the metro's most active commercial development zones. UDGOK builds in Jenks regularly, delivering dental offices, medical clinics, and retail build-outs for operators who want quality construction without traveling to downtown Tulsa for a contractor."
      stats={[
        { n: "South", l: "Tulsa Corridor Experts" },
        { n: "Fast", l: "Permit Turnaround" },
        { n: "Medical", l: "& Commercial" },
        { n: "Local", l: "Subs Network" },
      ]}
      features={[
        { icon: "🦷", title: "Dental Offices", desc: "Dental suites and orthodontic offices serving the Jenks and South Tulsa patient base." },
        { icon: "🏥", title: "Medical Build-Outs", desc: "Primary care and specialty medical offices in Jenks's commercial corridors near Riverside." },
        { icon: "🏬", title: "Retail & Restaurant TI", desc: "Commercial tenant improvements for Jenks's growing dining and retail scene." },
        { icon: "🏗️", title: "New Construction", desc: "Ground-up design-build for commercial properties in Jenks with full site-to-CO delivery." },
        { icon: "🔄", title: "Occupied Renovations", desc: "Phased renovations that keep your practice or business operational throughout construction." },
        { icon: "📋", title: "Jenks Permit Coordination", desc: "Direct relationships with Jenks city staff for smooth plan review and inspection scheduling." },
      ]}
      cta="Build in Jenks →"
    />
  );
}
