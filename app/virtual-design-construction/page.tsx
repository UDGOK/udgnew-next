import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Virtual Design & Construction (VDC) | BIM Services | UDGOK",
  description: "Virtual Design and Construction (VDC) and BIM services in Tulsa and Oklahoma. UDGOK uses advanced 3D modeling, clash detection, and digital twin technology to improve project outcomes.",
  keywords: [
    "virtual design construction Tulsa",
    "VDC services Oklahoma",
    "BIM modeling Tulsa OK",
    "clash detection construction",
    "4D scheduling construction",
    "digital twin construction Oklahoma",
    "Revit BIM coordination",
    "Navisworks clash detection",
  ],
  openGraph: {
    title: "Virtual Design & Construction (VDC) | BIM | UDGOK",
    description: "BIM coordination, 3D modeling, and VDC services in Tulsa OK. 60% RFI reduction through advanced clash detection.",
    url: "https://udgok.com/virtual-design-construction",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/virtual-design-construction" },
};

export default function VDCPage() {
  return (
    <>
      <ServiceJsonLd
        name="Virtual Design and Construction (VDC/BIM)"
        description="BIM coordination, 3D modeling, and virtual design construction services for clash detection and project visualization."
        url="https://udgok.com/virtual-design-construction"
      />
      <ServicePage
        label="Virtual Design & Construction"
        title="Virtual Design & Construction (VDC)"
        description="Advanced BIM modeling, clash detection, and digital twin technology that reduces RFIs, accelerates schedules, and improves field coordination."
        imageSrc="/images/ai_commercial_retail_plaza.png"
        imageAlt="Virtual Design and Construction VDC by UDGOK"
        tldr="UDGOK's Virtual Design and Construction (VDC) team uses Revit BIM modeling and Navisworks clash detection to build projects digitally before construction begins. Our VDC process reduces RFIs by 60%, virtually eliminates MEP field conflicts, and produces fabrication-ready shop drawings. We deliver as-built BIM models at project completion for ongoing facility management."
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
        faqs={[
          { q: "What is VDC in construction?", a: "Virtual Design and Construction (VDC) is the process of creating detailed 3D digital models (BIM) of a building before construction begins. This allows the project team to detect conflicts, coordinate systems, and visualize construction sequencing virtually — preventing costly field problems." },
          { q: "How does clash detection save money?", a: "Clash detection identifies conflicts between MEP systems, structural elements, and architectural features in the 3D model. Resolving a clash in the model costs $0. Resolving the same clash in the field after construction can cost $5,000–$50,000+ depending on the systems involved. UDGOK's VDC process reduces RFIs by 60%." },
          { q: "What software does UDGOK use for BIM?", a: "We use Autodesk Revit for BIM authoring, Navisworks for clash detection and coordination, and Autodesk Construction Cloud for project collaboration. Field teams access models on tablets for real-time reference during construction." },
          { q: "Do I get the BIM model after construction?", a: "Yes. UDGOK delivers an as-built BIM model at project completion. This digital twin of your building can be used for facility management, space planning, and future renovation projects — saving significant costs on future work." },
        ]}
        cta="Explore VDC Capabilities →"
      />
    </>
  );
}
