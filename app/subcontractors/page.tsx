import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Subcontractor Portal | UDGOK",
  description: "UDGOK subcontractor prequalification and bid opportunities. Join our network of trusted trade partners for medical, dental, and commercial construction projects.",
  alternates: { canonical: "https://udgok.com/subcontractors" },
};

export default function SubcontractorsPage() {
  return (
    <ServicePage
      label="Trade Partners"
      title="Subcontractor Portal"
      description="UDGOK builds with the elite trades in Oklahoma. We run structured projects with proper pre-construction, so your crews show up to a job that’s ready for them."
      imageSrc="/images/ai_subcontractor_network.png"
      imageAlt="UDGOK Construction Site"
      intro="If you run a quality subcontracting business and want consistent commercial work, we want to hear from you. We pay on time, we plan ahead, and we treat our subs like partners. With 200+ completed projects across the region, we offer steady, high-margin commercial work for specialty trades."
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
      cta="Submit Prequalification →"
    />
  );
}
