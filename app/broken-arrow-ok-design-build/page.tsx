import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Design-Build Contractor Broken Arrow OK | UDGOK",
  description: "Design-build and medical construction contractor serving Broken Arrow, Oklahoma. UDGOK builds dental offices, medical clinics, and commercial projects throughout Broken Arrow and the Rose District.",
  keywords: [
    "construction company Broken Arrow OK",
    "general contractor Broken Arrow Oklahoma",
    "design-build contractor Broken Arrow",
    "dental office construction Broken Arrow OK",
    "medical office construction Broken Arrow",
    "commercial construction Broken Arrow Oklahoma",
    "tenant improvement Broken Arrow OK",
    "medical clinic build-out Broken Arrow",
    "healthcare construction Broken Arrow OK",
    "dental clinic Broken Arrow Oklahoma",
    "Rose District construction Broken Arrow",
    "BA Expressway commercial construction",
  ],
  openGraph: {
    title: "Design-Build Contractor Broken Arrow OK | UDGOK",
    description: "Medical, dental, and commercial construction throughout Broken Arrow — from the Rose District to the BA Expressway corridor.",
    url: "https://udgok.com/broken-arrow-ok-design-build",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/broken-arrow-ok-design-build" },
};

export default function BrokenArrowPage() {
  return (
    <ServicePage
      label="Broken Arrow"
      title="Construction in Broken Arrow, Oklahoma"
      description="Medical, dental, and commercial construction throughout Broken Arrow — from the Rose District to the BA Expressway corridor."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="Construction contractor Broken Arrow Oklahoma by UDGOK"
      tldr="UDGOK is Broken Arrow, Oklahoma's trusted design-build contractor with 30+ projects completed across the city. Broken Arrow is Oklahoma's 4th largest city with a population of 115,000+ and active commercial development along the BA Expressway, Kenosha Street, and the Rose District. We build dental offices, medical clinics, retail spaces, and commercial buildings with the same Tulsa-quality construction and local permit expertise."
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
      faqs={[
        { q: "How much does construction cost in Broken Arrow, Oklahoma?", a: "Construction costs in Broken Arrow are comparable to Tulsa metro rates. Medical offices run $150–$350/sq ft, dental offices $140–$280/sq ft, and commercial build-outs $80–$180/sq ft. Broken Arrow's competitive land costs often make ground-up development more affordable than in Tulsa proper." },
        { q: "How long does permitting take in Broken Arrow?", a: "Broken Arrow Development Services typically processes commercial building permits in 2–3 weeks. The city has streamlined its review process in recent years to keep pace with growth. UDGOK has established relationships with BA plan review staff." },
        { q: "What areas of Broken Arrow does UDGOK build in?", a: "We build throughout Broken Arrow including the BA Expressway corridor, Rose District, Kenosha Street, Elm Place, and new developments along 71st Street and Aspen Avenue. Our Tulsa office is a 15-minute drive from most Broken Arrow project sites." },
        { q: "Does UDGOK have experience with Broken Arrow commercial construction?", a: "Yes. UDGOK has completed 30+ projects in Broken Arrow including dental offices, medical clinics, retail build-outs, and convenience stores. We use the same local subcontractors who know the BA market and code requirements." },
      ]}
      cta="Build in Broken Arrow →"
    />
  );
}
