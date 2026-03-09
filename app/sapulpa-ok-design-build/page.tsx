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
      tldr="UDGOK is a trusted design-build contractor serving Sapulpa, Oklahoma — the Creek County seat with a population of 21,000+ located 15 miles southwest of Tulsa along Historic Route 66. We provide dental office construction, medical clinic build-outs, and commercial development. Sapulpa offers competitive land and lease costs with proximity to the Tulsa metro labor market, making it a cost-effective location for healthcare and retail construction."
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
      faqs={[
        { q: "How much does construction cost in Sapulpa, Oklahoma?", a: "Construction costs in Sapulpa are generally 5–10% lower than Tulsa proper due to lower site costs and Creek County fee structures. Medical offices run $140–$300/sq ft, dental offices $130–$260/sq ft, and commercial build-outs $75–$140/sq ft." },
        { q: "Is Sapulpa a good location for a dental or medical practice?", a: "Yes. Sapulpa is the Creek County seat with a stable population of 21,000+ and serves as the healthcare hub for surrounding rural communities. Limited competition compared to Tulsa means new practices can capture significant patient volume. The proximity to Tulsa (15 miles) also allows drawing patients from the west Tulsa metro." },
        { q: "Does UDGOK handle Sapulpa building permits?", a: "Yes. We manage the full permitting process with the City of Sapulpa, including plan submission, code review, and inspection scheduling. Sapulpa's permitting process is typically faster than larger metros." },
        { q: "How far is Sapulpa from UDGOK's office?", a: "Sapulpa is approximately 15 miles (20 minutes) southwest of our Tulsa office at 7739 E 38th Street. We use the same trusted subcontractor network for Sapulpa projects." },
      ]}
      cta="Build in Sapulpa →"
    />
  );
}
