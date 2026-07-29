import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import MedicalCostGuideUI from "./MedicalCostGuideUI";

export const metadata: Metadata = {
  title: "Cost to Build a Medical Office in Tulsa (2026 Guide)",
  description: "How much does a 3,000 SF medical office cost in Tulsa? $150–$350/sf. Full 2026 cost breakdown, timeline, and budget guide from UDGOK's 100+ healthcare projects.",
  openGraph: {
    title: "Cost to Build a Medical Office in Tulsa — 2026 Guide",
    description: "Full cost breakdown from Oklahoma's most experienced medical construction contractor — 100+ facilities delivered.",
    url: "https://www.udgok.com/guide-medical-office-cost-tulsa",
    type: "article",
  },
  alternates: { canonical: "https://www.udgok.com/guide-medical-office-cost-tulsa" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cost to Build a Medical Office in Tulsa (2026 Guide)",
  description: "Complete 2026 cost breakdown for building a medical office in Tulsa, Oklahoma — per-square-foot pricing, timelines, and budget strategies from 100+ delivered projects.",
  author: {
    "@type": "Person",
    name: "Zack H.",
    jobTitle: "Lead Estimator / Project Manager",
    url: "https://www.udgok.com/about",
    sameAs: ["https://www.linkedin.com/company/upscale-development-group"]
  },
  publisher: { "@type": "Organization", name: "UDGOK", url: "https://www.udgok.com" },
  datePublished: "2026-03-01",
  dateModified: "2026-06-13",
  mainEntityOfPage: "https://www.udgok.com/guide-medical-office-cost-tulsa",
  image: "https://www.udgok.com/images/ai-medical-exterior.png",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does it cost to build a 3,000 SF medical office in Tulsa?", acceptedAnswer: { "@type": "Answer", text: "A 3,000 SF medical office in Tulsa costs $450,000–$1,050,000 in construction ($150–$350/sq ft), depending on specialty. Primary care runs $150–$220/sf, multi-specialty $220–$300/sf, and ambulatory surgery centers $300–$500/sf. Budget an additional $100,000–$400,000 for medical equipment." } },
    { "@type": "Question", name: "How long does it take to build a medical office in Tulsa?", acceptedAnswer: { "@type": "Answer", text: "A typical 3,000 SF medical office takes 4–6 months from permit to occupancy. Pre-construction (design, permits) adds 6–10 weeks. Ambulatory surgery centers can take 8–14 months due to AAAHC/state licensing requirements." } },
    { "@type": "Question", name: "What are the biggest cost drivers in medical office construction?", acceptedAnswer: { "@type": "Answer", text: "The three biggest cost drivers are: (1) HVAC — healthcare HVAC with ASHRAE 170 compliance costs 25–35% more than standard commercial; (2) Medical gas systems — $25,000–$80,000 depending on number of stations; (3) Under-slab plumbing — $15,000–$30,000 for medical waste and specialty drainage." } },
    { "@type": "Question", name: "Is design-build cheaper than traditional bid for medical offices?", acceptedAnswer: { "@type": "Answer", text: "Yes. Design-build delivery saves 10–15% versus traditional design-bid-build for medical offices through fewer change orders (our average is under 3%), faster schedules (20–30% faster), and single-source accountability. UDGOK has delivered 100+ healthcare facilities via design-build." } },
    { "@type": "Question", name: "What compliance requirements affect medical office construction costs?", acceptedAnswer: { "@type": "Answer", text: "Key compliance costs include: ADA accessibility ($8,000–$20,000), HIPAA-compliant sound isolation ($5,000–$15,000), ASHRAE 170 healthcare ventilation ($30,000–$60,000 premium over standard), NFPA 99 medical gas ($25,000–$80,000), and Oklahoma state health department inspections ($2,000–$5,000)." } },
  ],
};

export default function GuideMedicalOfficeCostPage() {
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Medical Office Cost Guide", url: "https://www.udgok.com/guide-medical-office-cost-tulsa" }
  ];

  return (
    <>
      
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <MedicalCostGuideUI />
    </>
  );
}
