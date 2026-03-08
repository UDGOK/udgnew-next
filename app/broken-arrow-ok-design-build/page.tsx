import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Design-Build Contractor Broken Arrow OK | UDGOK",
  description: "Design-build and medical construction contractor serving Broken Arrow, Oklahoma. UDGOK builds dental offices, medical clinics, and commercial projects throughout Broken Arrow and the Rose District.",
  alternates: { canonical: "https://udgok.com/broken-arrow-ok-design-build" },
};

export default function BrokenArrowPage() {
  return (
    <ServicePage
      label="Broken Arrow"
      title="Construction in Broken Arrow, Oklahoma"
      description="Medical, dental, and commercial construction throughout Broken Arrow — from the Rose District to the BA Expressway corridor."
      imageSrc="/images/tulsa_oklahoma_skyline_centennial_park_daytime.jpg"
      imageAlt="Construction contractor Broken Arrow Oklahoma by UDGOK"
      intro="Broken Arrow is one of Oklahoma's fastest-growing cities and one of UDGOK's most active construction markets. From dental suites along the BA Expressway to medical office buildings near St. Francis BA, we've built dozens of healthcare and commercial projects that serve Broken Arrow's growing population. Local knowledge, local subs, local results."
      stats={[
        { n: "30+", l: "BA Projects Built" },
        { n: "BA", l: "Expressway Expertise" },
        { n: "Fast", l: "City Permit Team" },
        { n: "Local", l: "Subcontractor Network" },
      ]}
      features={[
        { icon: "🦷", title: "Dental Office Construction", desc: "Dental suites and multi-operatory offices built to spec along the Broken Arrow Expressway corridor." },
        { icon: "🏥", title: "Medical Office Build-Outs", desc: "Primary care, specialty, and urgent care facilities serving BA's growing residential neighborhoods." },
        { icon: "🏬", title: "Retail & Commercial TI", desc: "Tenant improvements for retail, restaurant, and service businesses throughout Broken Arrow." },
        { icon: "🏗️", title: "Ground-Up Construction", desc: "Site-to-CO project delivery on available commercial land throughout the BA market." },
        { icon: "📋", title: "City of Broken Arrow Permits", desc: "Established relationships with BA Development Services for efficient plan review and inspections." },
        { icon: "🔄", title: "Renovations", desc: "Occupied-facility renovations and phased expansions with minimal disruption to your operations." },
      ]}
      cta="Build in Broken Arrow →"
    />
  );
}
