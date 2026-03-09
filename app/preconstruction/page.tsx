import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Preconstruction Services Tulsa Oklahoma | UDGOK",
  description: "Expert preconstruction services in Tulsa and Oklahoma. UDGOK provides early budgeting, constructability review, scheduling, and value engineering to de-risk your project before breaking ground.",
  keywords: [
    "preconstruction services Tulsa",
    "construction estimating Oklahoma",
    "value engineering construction",
    "constructability review Tulsa OK",
    "GMP development construction",
    "construction budgeting Oklahoma",
    "preconstruction cost estimating",
    "construction scheduling Tulsa",
  ],
  openGraph: {
    title: "Preconstruction Services Tulsa OK | ±5% Budget Accuracy | UDGOK",
    description: "Early-stage budgeting, value engineering, and constructability reviews for medical and commercial projects.",
    url: "https://udgok.com/preconstruction",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/preconstruction" },
};

export default function PreconstructionPage() {
  return (
    <>
      <ServiceJsonLd
        name="Preconstruction Services"
        description="Preconstruction estimating, value engineering, and constructability reviews for medical, dental, and commercial projects in Oklahoma."
        url="https://udgok.com/preconstruction"
      />
      <ServicePage
        label="Preconstruction"
        title="Preconstruction Services"
        description="Early-stage budgeting, constructability review, and value engineering to protect your budget before a shovel hits the ground."
        imageSrc="/images/ai_safety_superintendent.png"
        imageAlt="Preconstruction services by UDGOK"
        tldr="UDGOK provides preconstruction services including conceptual estimating (±5% accuracy), constructability reviews, value engineering, CPM scheduling, and GMP development. We engage at concept or schematic design — often 3–6 months before construction — to identify cost risks, catch design conflicts, and develop budgets using real Tulsa-area subcontractor pricing, not national database averages."
        intro="The decisions made in preconstruction determine 80% of your project's outcome. UDGOK engages early — often at concept or schematic design — to provide real-world cost intelligence, identify constructability issues before they become change orders, and develop schedules that reflect actual conditions in the Tulsa subcontractor market."
        stats={[
          { n: "±5%", l: "Budget Accuracy" },
          { n: "Week 1", l: "First Budget Issued" },
          { n: "Zero", l: "Surprises at GMP" },
          { n: "100%", l: "Open Book" },
        ]}
        features={[
          { icon: "💰", title: "Early Cost Estimating", desc: "Conceptual and schematic-level budgets with real subcontractor market data — not RS Means national averages." },
          { icon: "🔍", title: "Constructability Review", desc: "We red-line your design documents to catch conflicts, code issues, and unbuildable details before permit." },
          { icon: "📊", title: "Value Engineering", desc: "Systematic review of materials, systems, and methods to reduce cost without reducing quality or function." },
          { icon: "📅", title: "Master Scheduling", desc: "CPM schedules built with local lead times, permit durations, and realistic production rates." },
          { icon: "🤝", title: "Subcontractor Procurement", desc: "Early bid packages and subcontractor outreach to secure the best trades before the market tightens." },
          { icon: "📋", title: "GMP Development", desc: "Transparent open-book process from conceptual budget to fully reconciled Guaranteed Maximum Price." },
        ]}
        faqs={[
          { q: "What is preconstruction in construction?", a: "Preconstruction is the planning phase before physical construction begins. It includes cost estimating, constructability review, value engineering, scheduling, and subcontractor procurement. Good preconstruction prevents budget overruns and schedule delays by identifying problems in design, not in the field." },
          { q: "How accurate are UDGOK's preconstruction budgets?", a: "Our conceptual budgets achieve ±10% accuracy at schematic design and ±5% at design development. We use real subcontractor pricing from the Tulsa market, not national database averages, so our budgets reflect what the project will actually cost locally." },
          { q: "When should I engage preconstruction services?", a: "As early as possible — ideally at concept or schematic design. Engaging UDGOK early gives us the most opportunity to influence cost and catch design issues. We frequently start before an architect is even selected, helping owners understand feasibility before committing to a lease or land purchase." },
          { q: "What is a GMP and how is it developed?", a: "A Guaranteed Maximum Price (GMP) is a contractual price ceiling. UDGOK develops GMPs through an open-book process: we share every subcontractor bid, material cost, and overhead line item. If the project comes in under the GMP, savings are shared with the owner per the contract terms." },
          { q: "Does preconstruction cost anything?", a: "UDGOK often provides initial preconstruction estimates at no charge for qualified projects. For extended preconstruction engagements (constructability reviews, value engineering sessions, detailed scheduling), we charge a preconstruction fee that is credited to the construction contract if we are selected as the general contractor." },
        ]}
        cta="Engage Preconstruction →"
      />
    </>
  );
}
