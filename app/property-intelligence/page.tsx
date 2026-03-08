import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Commercial Property Intelligence Tulsa",
  description: "Leverage AI-driven property intelligence to evaluate medical and dental office sites in Tulsa and Dallas before you buy.",
  alternates: { canonical: "https://udgok.com/property-intelligence" },
};

export default function PropertyIntelligencePage() {
  return (
    <ServicePage
      label="Data & Insights"
      title="Property Intelligence"
      description="Don't guess on site selection. We use AI and GIS data to evaluate sites for zoning, utilities, demographics, and construction feasibility before you sign a lease or purchase land."
      imageSrc="/images/speedway-modern-convenience-store-exterior-daytime.jpg"
      imageAlt="UDGOK Property Intelligence"
      intro="The wrong piece of land can break a healthcare project. At UDGOK, we evaluate sites for medical viability: Are utilities sized for medical gas? Is there enough parking for clinical capacity? Our team assesses zoning, structural capacity, and demographics to ensure your location supports a thriving practice."
      cta="Request a Site Evaluation →"
      features={[
        { icon: "🌍", title: "GIS & Demographics", desc: "Identify underserved zip codes with the ideal patient demographics for your specialty." },
        { icon: "🔌", title: "Utility Assessment", desc: "Verify if existing power, water, and sewer infrastructure can handle medical/dental loads." },
        { icon: "📐", title: "Feasibility Studies", desc: "Detailed cost analysis of bringing an existing building up to ADA and healthcare standards." },
      ]}
    />
  );
}
