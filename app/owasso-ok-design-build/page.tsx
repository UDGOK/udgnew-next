import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Design-Build Contractor Owasso OK | UDGOK",
  description: "Medical and commercial construction in Owasso, Oklahoma. UDGOK builds dental offices, medical clinics, and commercial projects in one of northeast Tulsa's fastest-growing communities.",
  keywords: [
    "construction company Owasso OK",
    "general contractor Owasso Oklahoma",
    "design-build contractor Owasso",
    "dental office construction Owasso OK",
    "medical office construction Owasso",
    "commercial construction Owasso Oklahoma",
    "tenant improvement Owasso OK",
    "medical clinic build-out Owasso",
    "healthcare construction Owasso OK",
    "dental clinic Owasso Oklahoma",
    "US-169 corridor construction Owasso",
    "96th Street commercial construction Owasso",
  ],
  openGraph: {
    title: "Design-Build Contractor Owasso OK | UDGOK",
    description: "Medical, dental, and commercial construction serving Owasso's rapidly growing north Tulsa metro corridor.",
    url: "https://udgok.com/owasso-ok-design-build",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/owasso-ok-design-build" },
};

export default function OwassoPage() {
  return (
    <ServicePage
      label="Owasso"
      title="Construction in Owasso, Oklahoma"
      description="Medical, dental, and commercial construction serving Owasso's rapidly growing north Tulsa metro corridor."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="Construction contractor Owasso Oklahoma by UDGOK"
      tldr="UDGOK provides design-build construction in Owasso, Oklahoma — a city of 40,000+ along the US-169 corridor north of Tulsa. Owasso's rapid growth has created strong demand for dental offices, medical clinics, and commercial development along US-169, 96th Street, and 86th Street North. We deliver the same Tulsa-quality healthcare and commercial construction with local permit knowledge."
      intro="Owasso's growth along US-169 and 96th Street has made it one of Oklahoma's most dynamic construction markets. UDGOK brings its full healthcare and commercial construction expertise to Owasso projects — from dental offices serving family neighborhoods to medical clinics anchoring new mixed-use developments along the 169 corridor."
      stats={[
        { n: "169", l: "Corridor Expertise" },
        { n: "Growing", l: "Market Leader" },
        { n: "Medical", l: "& Commercial" },
        { n: "Local", l: "Subcontractors" },
      ]}
      features={[
        { icon: "🦷", title: "Dental Offices", desc: "Full-service dental construction for Owasso's growing family population along major commercial routes." },
        { icon: "🏥", title: "Medical Clinics", desc: "Urgent care, primary care, and specialty clinics positioned along the US-169 corridor." },
        { icon: "⛽", title: "C-Store & Retail", desc: "Convenience store and retail construction at high-traffic Owasso commercial intersections." },
        { icon: "🏗️", title: "Ground-Up Development", desc: "Full design-build delivery for commercial development projects in Owasso's active growth corridors." },
        { icon: "🏬", title: "Tenant Improvements", desc: "Build-outs in Owasso's established shopping centers and mixed-use developments." },
        { icon: "📋", title: "Owasso Permitting", desc: "Established track record with Owasso Community Development for efficient project approvals." },
      ]}
      faqs={[
        { q: "How much does commercial construction cost in Owasso, Oklahoma?", a: "Commercial construction in Owasso is competitively priced with Tulsa metro rates: medical offices $150–$350/sq ft, dental offices $140–$280/sq ft, and retail build-outs $80–$150/sq ft. Owasso's available commercial land along US-169 makes ground-up development particularly attractive." },
        { q: "Why is Owasso a good location for a medical or dental practice?", a: "Owasso has a population of 40,000+ with household incomes above the Oklahoma average, excellent schools (Owasso Public Schools), and growing residential developments that create sustained demand for healthcare services. The US-169 corridor provides high visibility and easy access." },
        { q: "How long does permitting take in Owasso?", a: "Owasso Community Development typically processes commercial building permits in 2–3 weeks. UDGOK has an established track record with Owasso's plan review office for efficient approvals." },
        { q: "Does UDGOK build convenience stores in Owasso?", a: "Yes. We build convenience stores, fuel stations, and QSR restaurants at high-traffic Owasso intersections. We handle everything from site work and fuel system coordination to interior build-out and equipment installation." },
      ]}
      cta="Build in Owasso →"
    />
  );
}
