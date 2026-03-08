import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Safety Program | UDGOK Construction",
  description: "UDGOK's comprehensive jobsite safety program. Industry-leading EMR, OSHA 30 certified supervision, daily toolbox talks, and zero-incident culture across all Oklahoma and Texas projects.",
  alternates: { canonical: "https://udgok.com/safety-program" },
};

export default function SafetyProgramPage() {
  return (
    <ServicePage
      label="Safety"
      title="Safety Program"
      description="A zero-incident culture built into every project — from preconstruction safety planning through final occupancy."
      imageSrc="/images/ai_safety_superintendent.png"
      imageAlt="UDGOK jobsite safety program"
      intro="Safety is not a checkbox at UDGOK — it is a core operating principle. Our safety program is led by a dedicated Safety Director and embedded into every phase of project delivery. We maintain one of the lowest EMR ratings in Oklahoma, and every UDGOK superintendent is OSHA 30 certified. We believe safe projects are better projects."
      stats={[
        { n: "0.7", l: "EMR Rating" },
        { n: "OSHA 30", l: "All Superintendents" },
        { n: "100%", l: "Daily Toolbox Talks" },
        { n: "Zero", l: "Lost-Time Goal" },
      ]}
      features={[
        { icon: "🦺", title: "Site-Specific Safety Plans", desc: "Every project receives a written site-specific safety plan developed during preconstruction and reviewed with all trades before mobilization." },
        { icon: "📋", title: "Daily Toolbox Talks", desc: "Mandatory pre-shift safety meetings covering hazards specific to the day's work scope — documented and filed for every shift." },
        { icon: "🏗️", title: "Fall Protection", desc: "100% fall protection above 6 feet, including engineered anchor systems, personal fall arrest, and guardrail systems." },
        { icon: "🔥", title: "Hot Work Permits", desc: "Formal hot work permitting system with fire watches and documentation for all welding, cutting, and open-flame operations." },
        { icon: "🚑", title: "Emergency Response", desc: "Site-specific emergency action plans with posted routes, nearest hospital maps, and first-aid trained personnel on every crew." },
        { icon: "📊", title: "Safety Metrics", desc: "Monthly safety audits, near-miss reporting culture, and transparent EMR tracking shared with owners and subcontractors." },
      ]}
      cta="Contact Our Safety Team →"
    />
  );
}
