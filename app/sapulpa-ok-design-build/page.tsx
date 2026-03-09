import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Design-Build Contractor Sapulpa OK | UDGOK",
  description:
    "Medical and commercial construction contractor in Sapulpa, Oklahoma. UDGOK delivers dental office construction, medical clinic build-outs, and commercial design-build along Historic Route 66 and the Sapulpa corridor.",
  keywords: [
    "construction company Sapulpa OK",
    "general contractor Sapulpa Oklahoma",
    "design-build contractor Sapulpa",
    "dental office construction Sapulpa",
    "medical office construction Sapulpa OK",
    "commercial construction Sapulpa Oklahoma",
    "tenant improvement Sapulpa",
    "medical clinic build-out Sapulpa",
    "healthcare construction Sapulpa OK",
    "building contractor Sapulpa Oklahoma",
    "dental clinic construction Sapulpa OK",
    "office renovation Sapulpa",
    "convenience store construction Sapulpa",
    "ground-up construction Sapulpa OK",
  ],
  openGraph: {
    title: "Design-Build Contractor Sapulpa OK | UDGOK",
    description:
      "Medical, dental, and commercial construction in Sapulpa, Oklahoma. Trusted local design-build contractor serving the Route 66 corridor.",
    url: "https://udgok.com/sapulpa-ok-design-build",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/sapulpa-ok-design-build" },
};

export default function SapulpaPage() {
  return (
    <ServicePage
      label="Sapulpa"
      title="Construction in Sapulpa, Oklahoma"
      description="Medical, dental, and commercial construction serving Sapulpa — the gateway to Creek County and a historic Route 66 community."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="Construction contractor Sapulpa Oklahoma by UDGOK"
      intro="Sapulpa sits just west of Tulsa along Historic Route 66, blending small-town character with proximity to Oklahoma's second-largest metro. UDGOK is active in Sapulpa, building dental offices, medical clinics, and commercial spaces for operators who want top-tier construction without big-city overhead. Our team knows the Sapulpa permit process, the local subcontractor network, and the commercial corridors that drive growth in Creek County."
      stats={[
        { n: "Route 66", l: "Corridor Experts" },
        { n: "Creek", l: "County Coverage" },
        { n: "Medical", l: "& Commercial" },
        { n: "Local", l: "Team & Subs" },
      ]}
      features={[
        { icon: "🦷", title: "Dental Office Construction", desc: "Modern dental suites and orthodontic offices built to serve Sapulpa's growing patient base along the Route 66 corridor." },
        { icon: "🏥", title: "Medical Clinics", desc: "Primary care, urgent care, and specialty medical offices positioned to serve Sapulpa and western Tulsa metro communities." },
        { icon: "🏬", title: "Retail & Commercial TI", desc: "Tenant improvements for retail, restaurant, and professional services throughout Sapulpa's commercial districts." },
        { icon: "⛽", title: "Convenience & Food Service", desc: "C-store, QSR, and fuel station construction along high-traffic Sapulpa corridors and highway frontage." },
        { icon: "🏗️", title: "Ground-Up Development", desc: "Full site-to-CO design-build delivery for new commercial and healthcare developments in Sapulpa." },
        { icon: "📋", title: "Sapulpa Permit Coordination", desc: "Established working relationships with Sapulpa city staff for efficient plan review and inspection scheduling." },
      ]}
      cta="Build in Sapulpa →"
    />
  );
}
