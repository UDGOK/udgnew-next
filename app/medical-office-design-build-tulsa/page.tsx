import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Medical Office Construction Tulsa",
  description: "UDGOK designs and builds fully compliant medical offices in Tulsa and across Oklahoma — from primary care to specialty practices, delivered on time.",
  alternates: { canonical: "https://udgok.com/medical-office-design-build-tulsa" },
};

export default function MedicalOfficePage() {
  return (
    <ServicePage
      label="Healthcare Construction"
      title="Medical Office Construction"
      description="Purpose-built medical spaces with the compliance, systems, and clinical flow your practice demands."
      imageSrc="/images/medical-office-design-build.png"
      imageAlt="Medical office construction by UDGOK"
      intro="Medical office construction is our core expertise. We understand the unique regulatory requirements, infection control standards, and operational flow demands that set healthcare construction apart from ordinary commercial work. Every project is engineered for compliance from day one."
      stats={[
        { n: "100+", l: "Medical Offices Built" },
        { n: "100%", l: "Code Compliant" },
        { n: "4–6mo", l: "Typical Timeline" },
        { n: "HIPAA", l: "Layout Standards" },
      ]}
      features={[
        { icon: "🏥", title: "ADA & HIPAA Compliance", desc: "Every layout is designed to meet ADA accessibility and HIPAA privacy requirements from the first draft." },
        { icon: "⚡", title: "MEP Integration", desc: "Coordinated mechanical, electrical, and plumbing systems designed for medical equipment loads." },
        { icon: "💨", title: "HVAC & Air Quality", desc: "Infection control HVAC with proper pressure differentials, filtration, and exhaust systems for clinical environments." },
        { icon: "🔧", title: "Medical Gas Ready", desc: "Pre-plumbed rough-in for oxygen, nitrous oxide, vacuum, and compressed air — ready for future installation." },
        { icon: "🖥️", title: "IT Infrastructure", desc: "Structured cabling, EHR-ready network infrastructure, and telehealth capability built into the design." },
        { icon: "📐", title: "Optimized Layout", desc: "Evidence-based clinical flow design that maximizes patient throughput and staff efficiency." },
      ]}
    />
  );
}
