import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Subcontractor Portal | Bid Opportunities | UDGOK",
  description: "UDGOK subcontractor prequalification and bid opportunities. Join our network of trusted trade partners for medical, dental, and commercial construction projects in Oklahoma and Texas.",
  keywords: [
    "subcontractor opportunities Tulsa",
    "construction bid opportunities Oklahoma",
    "subcontractor prequalification Tulsa",
    "trade partner construction Oklahoma",
    "construction subcontractor Tulsa OK",
  ],
  openGraph: {
    title: "Subcontractor Portal | UDGOK Construction",
    description: "Join UDGOK's trade partner network. Net 30 pay, 200+ projects, and a fair bid process.",
    url: "https://udgok.com/subcontractors",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/subcontractors" },
};

export default function SubcontractorsPage() {
  return (
    <ServicePage
      label="Trade Partners"
      title="Subcontractor Portal"
      description="UDGOK builds with the elite trades in Oklahoma. We run structured projects with proper preconstruction, so your crews show up to a job that's ready."
      imageSrc="/images/ai_subcontractor_network.png"
      imageAlt="UDGOK Construction Site"
      tldr="UDGOK is actively seeking qualified subcontractors across all trades for medical, dental, and commercial construction in Oklahoma and Texas. We pay Net 30, have 200+ completed projects, maintain a growing pipeline, and run a fair, transparent bid process. Prequalification requirements include a valid state contractor's license, EMR of 1.0 or below, OSHA 10/30 certifications, and the ability to bond projects over $500K."
      intro="If you run a quality subcontracting business and want consistent commercial work, we want to hear from you. We pay on time, we plan ahead, and we treat our subs like partners. With 200+ completed projects, we offer steady, high-margin commercial work for specialty trades."
      stats={[
        { n: "Net 30", l: "Pay Terms" },
        { n: "200+", l: "Projects Delivered" },
        { n: "Growing", l: "Pipeline" },
        { n: "Fair", l: "Bid Process" },
      ]}
      features={[
        { icon: "🛡️", title: "Insurance", desc: "General liability ($1M/$2M), workers' comp, and auto liability. Additional insured status required on all projects." },
        { icon: "📜", title: "Licensing", desc: "Valid state contractor's license in Oklahoma or Texas, plus any necessary specialized trade credentials." },
        { icon: "👷", title: "Safety Record", desc: "EMR of 1.0 or below preferred. OSHA 10 minimum for all workers. OSHA 30 required for foremen." },
        { icon: "💰", title: "Financial Stability", desc: "Ability to furnish payment and performance bonds on individual projects exceeding $500K." },
        { icon: "📋", title: "References", desc: "Three verifiable project references from the past 36 months in your specific trade category." },
        { icon: "🎖️", title: "Certifications", desc: "Trade-specific certifications required (e.g., ASSE 6010 for medical gas, EPA 608 for HVAC)." },
      ]}
      faqs={[
        { q: "How do I prequalify as a UDGOK subcontractor?", a: "Submit your prequalification package including proof of insurance, state contractor's license, EMR documentation, OSHA certifications, bonding capacity letter, and three recent project references. We review submissions within 5 business days." },
        { q: "What trades does UDGOK need subcontractors for?", a: "We need all commercial construction trades: mechanical (HVAC), electrical, plumbing, fire protection, drywall/framing, flooring, painting, concrete, structural steel, roofing, site work, medical gas, and specialty finishes. Healthcare experience is preferred but not required for all trades." },
        { q: "What are UDGOK's payment terms for subcontractors?", a: "We pay Net 30 from approved invoice date. Progress billing is monthly, and retainage terms are per project contract. UDGOK has a strong payment history — we believe paying subs on time is fundamental to quality construction." },
        { q: "Does UDGOK have consistent work for subcontractors?", a: "Yes. With 20+ projects per year and a growing pipeline across Oklahoma and Texas, we offer consistent work volume for quality trade partners. Many of our subcontractors have worked with us on 10+ projects." },
      ]}
      cta="Submit Prequalification →"
    />
  );
}
