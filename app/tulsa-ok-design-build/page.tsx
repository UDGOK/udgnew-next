import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Design-Build Contractor Tulsa OK | UDGOK",
  description: "Tulsa's top design-build contractor. UDGOK delivers integrated design-build for medical, dental, commercial, and retail projects across Tulsa, Oklahoma.",
  keywords: [
    "design-build contractor Tulsa OK",
    "general contractor Tulsa Oklahoma",
    "medical office construction Tulsa",
    "dental office construction Tulsa OK",
    "commercial construction Tulsa",
    "healthcare construction Tulsa Oklahoma",
    "tenant improvement Tulsa OK",
    "construction company Tulsa",
    "medical clinic build-out Tulsa",
    "dental clinic construction Tulsa",
    "office renovation Tulsa OK",
    "convenience store construction Tulsa",
    "shopping center construction Tulsa",
    "ground-up construction Tulsa Oklahoma",
  ],
  openGraph: {
    title: "Design-Build Contractor Tulsa OK | UDGOK",
    description: "Tulsa's integrated design-build contractor for medical, dental, and commercial construction. 100+ projects delivered.",
    url: "https://udgok.com/tulsa-ok-design-build",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/tulsa-ok-design-build" },
};

export default function TulsaDesignBuildPage() {
  return (
    <ServicePage
      label="Tulsa Design-Build"
      title="Design-Build in Tulsa, Oklahoma"
      description="Tulsa's integrated design-build contractor — one team, one contract, and a track record of 100+ delivered projects."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="Design-build contractor Tulsa Oklahoma by UDGOK"
      intro="UDGOK is Tulsa's most experienced design-build contractor. We've delivered over 100 projects across medical, dental, commercial, and retail sectors by keeping design and construction under one roof. Tulsa business owners and developers choose us because we're local — we know the permit offices, the subcontractors, and the neighborhoods where we build."
      stats={[
        { n: "100+", l: "Tulsa Projects" },
        { n: "20%", l: "Faster Than Design-Bid-Build" },
        { n: "Local", l: "Team & Subcontractors" },
        { n: "1", l: "Point of Contact" },
      ]}
      features={[
        { icon: "🏗️", title: "Integrated Design + Build", desc: "Architecture, engineering, and construction coordinated by one team to eliminate gaps and delays." },
        { icon: "💰", title: "Budget Certainty", desc: "Real-time cost control throughout design keeps your project within budget before and after GMP." },
        { icon: "🏥", title: "Healthcare Expertise", desc: "Tulsa's leader in medical and dental design-build with 80+ healthcare facilities delivered." },
        { icon: "🏬", title: "Commercial Projects", desc: "Retail, office, restaurant, and mixed-use design-build across Tulsa and surrounding suburbs." },
        { icon: "⚡", title: "Fast-Track Delivery", desc: "Phased permitting and overlapping design/construction phases cut months off your schedule." },
        { icon: "📋", title: "Local Permit Knowledge", desc: "Deep relationships with City of Tulsa, Tulsa County, and surrounding municipality plan review offices." },
      ]}
      cta="Start in Tulsa →"
    />
  );
}
