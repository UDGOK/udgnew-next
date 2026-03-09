import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Construction Safety Program | OSHA Compliant | UDGOK",
  description: "UDGOK's comprehensive jobsite safety program. Industry-leading 0.7 EMR, OSHA 30 certified supervision, daily toolbox talks, and zero-incident culture across all Oklahoma and Texas projects.",
  keywords: [
    "construction safety program Oklahoma",
    "OSHA compliant contractor Tulsa",
    "construction safety Tulsa OK",
    "EMR rating contractor",
    "jobsite safety program",
    "construction safety plan",
  ],
  openGraph: {
    title: "Construction Safety Program | 0.7 EMR | UDGOK",
    description: "Industry-leading safety with 0.7 EMR, OSHA 30 supervision, and zero lost-time incident goal.",
    url: "https://udgok.com/safety-program",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/safety-program" },
};

export default function SafetyProgramPage() {
  return (
    <>
      <ServiceJsonLd
        name="Construction Safety Program"
        description="OSHA-compliant safety management program for all UDGOK construction projects with zero-incident goal."
        url="https://udgok.com/safety-program"
      />
      <ServicePage
        label="Safety"
        title="Safety Program"
        description="A zero-incident culture built into every project — from preconstruction safety planning through final occupancy."
        imageSrc="/images/ai_safety_superintendent.png"
        imageAlt="UDGOK jobsite safety program"
        tldr="UDGOK maintains a 0.7 EMR (Experience Modification Rate) — well below the industry average of 1.0. Every superintendent is OSHA 30 certified. Every shift begins with a documented toolbox talk. We write site-specific safety plans during preconstruction and enforce 100% fall protection above 6 feet. Our goal on every project is zero lost-time incidents."
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
        faqs={[
          { q: "What is UDGOK's EMR rating?", a: "UDGOK maintains a 0.7 EMR (Experience Modification Rate), well below the industry average of 1.0. A lower EMR indicates fewer workplace injuries and lower insurance costs for owners and developers." },
          { q: "Are UDGOK superintendents OSHA certified?", a: "Yes. Every UDGOK superintendent holds an OSHA 30-hour construction safety certification. All field workers are required to have OSHA 10-hour minimum. We exceed industry safety training standards." },
          { q: "Does UDGOK have a written safety program?", a: "Yes. We maintain a comprehensive corporate safety program and develop site-specific safety plans for every project during preconstruction. These plans address fall protection, confined space, hot work, electrical safety, and emergency response procedures." },
          { q: "What is a toolbox talk?", a: "A toolbox talk is a brief, mandatory pre-shift safety meeting covering hazards specific to the day's work. UDGOK requires documented toolbox talks at the start of every shift on every project — 100% compliance, no exceptions." },
        ]}
        cta="Contact Our Safety Team →"
      />
    </>
  );
}
