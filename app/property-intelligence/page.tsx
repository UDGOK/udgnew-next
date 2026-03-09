import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Commercial Property Intelligence Tulsa | Site Evaluation | UDGOK",
  description: "AI-driven property intelligence to evaluate medical and dental office sites in Tulsa and Dallas. GIS demographics, utility assessment, and construction feasibility studies before you sign a lease.",
  keywords: [
    "property intelligence Tulsa",
    "site evaluation medical office",
    "commercial property analysis Oklahoma",
    "medical office site selection Tulsa",
    "construction feasibility study Oklahoma",
    "GIS demographics healthcare Tulsa",
  ],
  openGraph: {
    title: "Property Intelligence | Site Evaluation | UDGOK",
    description: "AI-driven site evaluation for medical and dental office locations in Tulsa and Dallas.",
    url: "https://udgok.com/property-intelligence",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/property-intelligence" },
};

export default function PropertyIntelligencePage() {
  return (
    <ServicePage
      label="Data & Insights"
      title="Property Intelligence"
      description="Don't guess on site selection. We use AI and GIS data to evaluate sites for zoning, utilities, demographics, and construction feasibility."
      imageSrc="/images/ai_dallas_medical_hub.png"
      imageAlt="UDGOK Property Intelligence"
      tldr="UDGOK provides AI-driven property intelligence for medical and dental practice site selection in Tulsa and Dallas. We evaluate sites for zoning compliance, utility capacity (is there enough power and water for medical-grade HVAC and equipment?), parking adequacy, ADA accessibility, and patient demographics using GIS mapping. Our feasibility studies prevent clients from signing leases or purchasing land that can't support their clinical operations."
      intro="The wrong piece of land can break a healthcare project. At UDGOK, we evaluate sites for medical viability: Are utilities sized for medical gas? Is there enough parking for clinical capacity? Our team assesses zoning, structural capacity, and demographics to ensure your location supports a thriving practice."
      cta="Request a Site Evaluation →"
      stats={[
        { n: "AI", l: "Powered Analysis" },
        { n: "GIS", l: "Demographic Data" },
        { n: "100%", l: "Feasibility Check" },
        { n: "Free", l: "Initial Consult" },
      ]}
      features={[
        { icon: "🌍", title: "GIS & Demographics", desc: "Identify underserved zip codes with the ideal patient demographics for your specialty." },
        { icon: "🔌", title: "Utility Assessment", desc: "Verify if existing power, water, and sewer infrastructure can handle medical/dental loads." },
        { icon: "📐", title: "Feasibility Studies", desc: "Detailed cost analysis of bringing an existing building up to ADA and healthcare standards." },
        { icon: "🅿️", title: "Parking Analysis", desc: "Calculate if the site provides adequate parking ratios for your practice type and patient volume." },
        { icon: "📋", title: "Zoning Review", desc: "Verify medical/dental use is permitted under current zoning and identify any conditional use requirements." },
        { icon: "🏗️", title: "Structural Evaluation", desc: "Assess floor load capacity, roof condition, and structural suitability for medical imaging equipment." },
      ]}
      faqs={[
        { q: "What is property intelligence for medical offices?", a: "Property intelligence is a data-driven evaluation of a potential building or land site for medical/dental use. UDGOK analyzes demographics, zoning, utility capacity, parking, structural condition, and construction feasibility before you commit to a lease or land purchase." },
        { q: "Does UDGOK offer free site evaluations?", a: "Yes. We offer a complimentary initial site evaluation for qualified healthcare projects. This includes a preliminary assessment of zoning, utility capacity, parking, and construction feasibility. Detailed feasibility studies with cost estimates are provided as part of our preconstruction services." },
        { q: "Why is site selection important for medical offices?", a: "The wrong site can add $50,000–$200,000+ to your construction costs due to utility upgrades, structural modifications, ADA remediation, or zoning variances. UDGOK's property intelligence prevents these surprises before you sign a lease or purchase agreement." },
      ]}
    />
  );
}
