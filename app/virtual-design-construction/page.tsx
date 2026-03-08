import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Virtual Design & Construction (VDC) | UDGOK",
  description: "Virtual Design and Construction (VDC) and BIM services in Tulsa and Oklahoma. UDGOK uses advanced 3D modeling, clash detection, and digital twin technology to improve project outcomes.",
  alternates: { canonical: "https://udgok.com/virtual-design-construction" },
};

export default function VDCPage() {
  return (
    <ServicePage
      label="Virtual Design & Construction"
      title="Virtual Design & Construction (VDC)"
      description="Advanced BIM modeling, clash detection, and digital twin technology that reduces RFIs, accelerates schedules, and improves field coordination."
      imageSrc="/images/ai_commercial_retail_plaza.png"
      imageAlt="Virtual Design and Construction VDC by UDGOK"
      intro="UDGOK's VDC team uses Building Information Modeling to build your project virtually before we build it physically. We detect and resolve MEP clashes, coordinate structure with finishes, and produce shop drawings that eliminate field surprises. The result is fewer RFIs, fewer change orders, and a faster path to certificate of occupancy."
      stats={[
        { n: "60%", l: "RFI Reduction" },
        { n: "3D", l: "Clash Detection" },
        { n: "BIM", l: "Level 2 Capable" },
        { n: "100%", l: "As-Built Accuracy" },
      ]}
      features={[
        { icon: "🧊", title: "3D BIM Modeling", desc: "Full architectural, structural, and MEP models built in Revit for coordination and visualization." },
        { icon: "⚡", title: "MEP Clash Detection", desc: "Navisworks clash detection eliminates conflicts between mechanical, electrical, plumbing, and structure before rough-in." },
        { icon: "🏗️", title: "4D Scheduling", desc: "Construction sequence animations linked to the master schedule for owner communication and trade coordination." },
        { icon: "📐", title: "Shop Drawing Production", desc: "Fabrication-ready shop drawings for structural steel, mechanical systems, and custom millwork." },
        { icon: "🔄", title: "Digital Twin", desc: "As-built BIM models delivered at project completion for facility management and future renovation planning." },
        { icon: "📱", title: "Field Technology", desc: "Tablet-based BIM access in the field, drone progress photography, and 360° photo documentation at key milestones." },
      ]}
      cta="Explore VDC Capabilities →"
    />
  );
}
