import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Digital Twin Construction Guide 2026 Tulsa Dallas",
  description: "Learn how UDGOK leverages Digital Twin technology and BIM to eliminate clashes, optimize schedules, and reduce costs in medical office construction.",
  alternates: { canonical: "https://udgok.com/digital-twin-technology-guide-2026" },
};

export default function DigitalTwinPage() {
  return (
    <ServicePage
      label="Innovation & VDC"
      title="Digital Twin Technology in 2026"
      description="The definitive guide to how AI-powered Digital Twins are reshaping medical construction in Oklahoma."
      imageSrc="/images/medical-office-design-build.png"
      imageAlt="Digital twin construction by UDGOK"
      intro="A Digital Twin isn't just a 3D model — it's a living, data-rich replica of your building before the foundation is even poured. In 2026, UDGOK leverages Digital Twins to simulate energy usage, detect MEP clashes, and track real-time schedule deviations against the model. The result? Zero field surprises and aggressive schedule adherence."
      cta="Learn About Our Tech Stack →"
      features={[
        { icon: "🏗️", title: "Clash Detection", desc: "Identify plumbing intersecting HVAC ductwork in the model, solving it virtually for $0 instead of tearing down drywall on-site." },
        { icon: "📊", title: "4D Scheduling", desc: "Link the 3D model to the project schedule to visually simulate construction sequencing week by week." },
        { icon: "💡", title: "Energy Modeling", desc: "Test lighting loads and HVAC efficiency before buying equipment to maximize long-term operational savings." },
      ]}
    />
  );
}
