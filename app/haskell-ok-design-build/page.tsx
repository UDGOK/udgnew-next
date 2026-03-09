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
      cta="Build in Haskell →"
    />
  );
}
