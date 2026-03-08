import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Preconstruction Services Tulsa Oklahoma | UDGOK",
  description: "Expert preconstruction services in Tulsa and Oklahoma. UDGOK provides early budgeting, constructability review, scheduling, and value engineering to de-risk your project before breaking ground.",
  alternates: { canonical: "https://udgok.com/preconstruction" },
};

export default function PreconstructionPage() {
  return (
    <ServicePage
      label="Preconstruction"
      title="Preconstruction Services"
      description="Early-stage budgeting, constructability review, and value engineering to protect your budget before a shovel hits the ground."
      imageSrc="/images/woodside-medical-office-building-exterior.jpg"
      imageAlt="Preconstruction services by UDGOK"
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
      cta="Engage Preconstruction →"
    />
  );
}
