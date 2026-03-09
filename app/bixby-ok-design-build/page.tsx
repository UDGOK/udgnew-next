import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Design-Build Contractor Bixby OK | UDGOK",
  description: "Medical and commercial construction contractor in Bixby, Oklahoma. UDGOK builds dental offices, medical clinics, and commercial projects in one of Tulsa's fastest-growing suburbs.",
  keywords: [
    "construction company Bixby OK",
    "general contractor Bixby Oklahoma",
    "design-build contractor Bixby",
    "dental office construction Bixby OK",
    "medical office construction Bixby",
    "commercial construction Bixby Oklahoma",
    "tenant improvement Bixby OK",
    "medical clinic build-out Bixby",
    "healthcare construction Bixby OK",
    "dental clinic Bixby Oklahoma",
    "building contractor Bixby",
    "convenience store construction Bixby OK",
  ],
  openGraph: {
    title: "Design-Build Contractor Bixby OK | UDGOK",
    description: "Medical, dental, and commercial construction in Bixby, Oklahoma — Tulsa's fastest-growing suburb.",
    url: "https://udgok.com/bixby-ok-design-build",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/bixby-ok-design-build" },
};

export default function BixbyPage() {
  return (
    <ServicePage
      label="Bixby"
      title="Construction in Bixby, Oklahoma"
      description="Medical, dental, and commercial construction in Bixby — Tulsa's fastest-growing suburb and one of our most active markets."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="Construction contractor Bixby Oklahoma by UDGOK"
      intro="Bixby's explosive growth along the South Memorial and Lynn Lane corridors has created tremendous demand for medical and commercial construction. UDGOK is active throughout Bixby, building dental offices, urgent care facilities, and retail centers that serve the community's growing population of young families and professionals."
      stats={[
        { n: "15+", l: "Bixby Projects" },
        { n: "Top 10", l: "Fastest Growing OK City" },
        { n: "Medical", l: "& Commercial" },
        { n: "Local", l: "Team" },
      ]}
      features={[
        { icon: "🦷", title: "Dental Offices", desc: "Modern dental suites designed for Bixby's growing family demographic along major commercial corridors." },
        { icon: "🏥", title: "Medical Clinics", desc: "Primary care and specialty clinics positioned to serve Bixby's rapidly expanding residential base." },
        { icon: "🏬", title: "Retail Build-Outs", desc: "Tenant improvements and ground-up retail for Bixby's active commercial development pipeline." },
        { icon: "⛽", title: "Convenience & Food Service", desc: "C-store and QSR construction along South Memorial and other high-traffic Bixby corridors." },
        { icon: "🏗️", title: "Ground-Up Projects", desc: "Site acquisition support, design-build delivery, and construction management for new Bixby developments." },
        { icon: "📋", title: "Bixby Permit Support", desc: "Established relationships with Bixby city staff for efficient permitting and inspections." },
      ]}
      cta="Build in Bixby →"
    />
  );
}
