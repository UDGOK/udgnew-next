import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Builder & Contractor Jenks OK | Design-Build | UDGOK",
  description: "Jenks builder and construction contractor. UDGOK serves Jenks, Oklahoma with medical, dental, and commercial design-build, tenant improvements, and ground-up construction.",
  keywords: [
    "Jenks builder",
    "builder Jenks OK",
    "construction company Jenks OK",
    "general contractor Jenks Oklahoma",
    "design-build contractor Jenks",
    "dental office construction Jenks OK",
    "medical office construction Jenks",
    "commercial construction Jenks Oklahoma",
    "tenant improvement Jenks OK",
    "medical clinic build-out Jenks",
    "healthcare construction Jenks OK",
    "dental clinic Jenks Oklahoma",
    "South Tulsa corridor construction",
    "Riverside corridor contractor Jenks",
  ],
  openGraph: {
    title: "Design-Build Contractor Jenks OK | UDGOK",
    description: "Medical, dental, and commercial construction serving Jenks and the South Tulsa corridor.",
    url: "https://udgok.com/jenks-ok-design-build",
    type: "website",
  },
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
      tldr="UDGOK provides design-build construction services in Jenks, Oklahoma — a growing city of 24,000+ at the heart of the South Tulsa corridor. We build dental offices, medical clinics, and commercial spaces along Jenks's Riverside Drive, Main Street, and major commercial developments. Jenks's high household incomes and family demographics make it a prime market for dental and medical practice construction."
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
      faqs={[
        { q: "How much does commercial construction cost in Jenks, Oklahoma?", a: "Commercial construction in Jenks costs are in line with the Tulsa metro: medical offices $150–$350/sq ft, dental offices $140–$280/sq ft, and retail build-outs $80–$150/sq ft. Jenks's South Tulsa location offers access to affluent demographics with competitive lease rates." },
        { q: "What makes Jenks a good location for a dental or medical practice?", a: "Jenks has a median household income above the Oklahoma average, a growing population of young families, proximity to South Tulsa and Riverside, and excellent schools (Jenks Public Schools is one of the top-rated districts in the state). These demographics support strong patient demand for dental and medical services." },
        { q: "How long does it take to get a building permit in Jenks?", a: "Jenks building permits typically process in 2–3 weeks for commercial projects. The city has a responsive development services department that works efficiently with experienced contractors like UDGOK." },
        { q: "Does UDGOK build restaurants and retail in Jenks?", a: "Yes. We handle tenant improvements and ground-up construction for restaurants, retail shops, and professional offices in Jenks's commercial corridors including Aquarium Drive, Main Street, and Riverside Parkway." },
      ]}
      cta="Build in Jenks →"
    />
  );
}
