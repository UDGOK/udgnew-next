import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Design-Build Contractor Haskell OK | UDGOK",
  description:
    "Medical and commercial construction contractor serving Haskell, Oklahoma. UDGOK builds dental offices, medical clinics, and commercial projects in Haskell and the surrounding Muskogee County area.",
  keywords: [
    "construction company Haskell OK",
    "general contractor Haskell Oklahoma",
    "design-build contractor Haskell",
    "dental office construction Haskell OK",
    "medical office construction Haskell Oklahoma",
    "commercial construction Haskell OK",
    "tenant improvement Haskell Oklahoma",
    "medical clinic build-out Haskell",
    "healthcare construction Haskell OK",
    "building contractor Haskell Oklahoma",
    "dental clinic construction Haskell",
    "office renovation Haskell OK",
    "construction near Muskogee OK",
    "ground-up construction Haskell Oklahoma",
  ],
  openGraph: {
    title: "Design-Build Contractor Haskell OK | UDGOK",
    description:
      "Medical, dental, and commercial construction in Haskell, Oklahoma. Tulsa-based design-build contractor serving Haskell and Muskogee County.",
    url: "https://udgok.com/haskell-ok-design-build",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/haskell-ok-design-build" },
};

export default function HaskellPage() {
  return (
    <ServicePage
      label="Haskell"
      title="Construction in Haskell, Oklahoma"
      description="Medical, dental, and commercial construction serving Haskell and the eastern Tulsa metro corridor."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="Construction contractor Haskell Oklahoma by UDGOK"
      tldr="UDGOK provides design-build construction services in Haskell, Oklahoma — a growing community between Tulsa and Muskogee along the US-64/US-51 corridor. Haskell offers affordable land and construction costs with access to the Tulsa metro labor market, making it an emerging location for healthcare and commercial construction. We build dental offices, medical clinics, and commercial spaces with the same quality standards as our Tulsa projects."
      intro="Haskell is a growing community between Tulsa and Muskogee, positioned along key transportation routes that make it an emerging market for healthcare and commercial development. UDGOK extends its proven Tulsa-area construction expertise to Haskell, delivering the same quality dental offices, medical clinics, and commercial projects that have made us the region's most trusted design-build contractor."
      stats={[
        { n: "Eastern", l: "Metro Coverage" },
        { n: "Growing", l: "Community" },
        { n: "Medical", l: "& Commercial" },
        { n: "Local", l: "Team & Subs" },
      ]}
      features={[
        { icon: "🦷", title: "Dental Office Construction", desc: "Purpose-built dental clinics designed for Haskell's growing population and surrounding rural communities." },
        { icon: "🏥", title: "Medical Clinics", desc: "Primary care and specialty medical offices serving Haskell and the eastern Tulsa metro corridor." },
        { icon: "🏬", title: "Commercial Build-Outs", desc: "Retail, professional, and service business tenant improvements in Haskell's developing commercial areas." },
        { icon: "🏗️", title: "Ground-Up Construction", desc: "Full design-build delivery for new commercial and healthcare developments on available Haskell land." },
        { icon: "🔄", title: "Renovations & Remodels", desc: "Occupied-space renovations for existing businesses and practices looking to modernize and expand." },
        { icon: "📋", title: "Haskell Permits & Code", desc: "Experienced navigation of local permitting and code compliance for efficient project approvals." },
      ]}
      faqs={[
        { q: "Does UDGOK build in Haskell, Oklahoma?", a: "Yes. UDGOK serves Haskell and the surrounding eastern Tulsa metro area. Our office is approximately 30 minutes from Haskell, and we use the same licensed subcontractor network for all projects in the region." },
        { q: "How much does construction cost in Haskell, Oklahoma?", a: "Construction costs in Haskell are typically 10–15% lower than Tulsa due to lower land costs and reduced municipal fees. Medical offices run $130–$280/sq ft, dental offices $120–$250/sq ft, and commercial build-outs $70–$130/sq ft." },
        { q: "Is Haskell a good location for a medical or dental practice?", a: "Haskell serves as a healthcare access point for the eastern Tulsa metro and surrounding rural communities. Limited existing healthcare infrastructure means new practices face less competition. The proximity to both Tulsa and Muskogee provides a broad patient draw area." },
        { q: "What types of projects has UDGOK built near Haskell?", a: "UDGOK has completed dental offices, medical clinics, convenience stores, and commercial tenant improvements throughout the Tulsa metro's eastern corridor. Our experience with rural and suburban Oklahoma construction includes navigating varied permit requirements and utility availability." },
      ]}
      cta="Build in Haskell →"
    />
  );
}
