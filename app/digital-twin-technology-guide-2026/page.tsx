import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Digital Twin Construction Guide 2026 | UDGOK",
  description: "Learn how UDGOK leverages Digital Twin technology and BIM to eliminate clashes, optimize schedules, and reduce costs in medical office construction. Complete 2026 guide.",
  keywords: [
    "digital twin construction",
    "digital twin BIM guide",
    "digital twin medical construction",
    "BIM as-built model",
    "construction digital twin 2026",
    "IoT sensors construction",
    "digital twin facility management",
  ],
  openGraph: {
    title: "Digital Twin Construction Guide 2026 | UDGOK",
    description: "The definitive guide to AI-powered Digital Twins in medical construction. Clash detection, energy modeling, and 4D scheduling.",
    url: "https://udgok.com/digital-twin-technology-guide-2026",
    type: "website",
  },
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
      tldr="A Digital Twin is a living, data-rich 3D replica of a building that syncs with real-world conditions through IoT sensors and BIM models. In 2026, UDGOK uses Digital Twins to detect MEP clashes (saving $5,000–$50,000+ per conflict), simulate energy performance before equipment purchase, and track real-time schedule deviations. After construction, the Digital Twin serves as a facility management tool for the building's entire lifecycle."
      intro="A Digital Twin isn't just a 3D model — it's a living, data-rich replica of your building before the foundation is even poured. In 2026, UDGOK leverages Digital Twins to simulate energy usage, detect MEP clashes, and track real-time schedule deviations against the model. The result? Zero field surprises and aggressive schedule adherence."
      cta="Learn About Our Tech Stack →"
      stats={[
        { n: "60%", l: "Fewer Clashes" },
        { n: "4D", l: "Schedule Simulation" },
        { n: "IoT", l: "Sensor Integration" },
        { n: "Lifecycle", l: "Facility Management" },
      ]}
      features={[
        { icon: "🏗️", title: "Clash Detection", desc: "Identify plumbing intersecting HVAC ductwork in the model, solving it virtually for $0 instead of tearing down drywall on-site." },
        { icon: "📊", title: "4D Scheduling", desc: "Link the 3D model to the project schedule to visually simulate construction sequencing week by week." },
        { icon: "💡", title: "Energy Modeling", desc: "Test lighting loads and HVAC efficiency before buying equipment to maximize long-term operational savings." },
        { icon: "📡", title: "IoT Integration", desc: "Connect real-time sensor data (temperature, humidity, occupancy) to the Digital Twin for live building performance monitoring." },
        { icon: "🔄", title: "Lifecycle Management", desc: "The as-built Digital Twin becomes your facility management tool — tracking equipment warranties, maintenance schedules, and space utilization." },
        { icon: "🧠", title: "AI-Powered Insights", desc: "Machine learning algorithms analyze the Digital Twin to predict maintenance needs and optimize energy consumption over time." },
      ]}
      faqs={[
        { q: "What is a Digital Twin in construction?", a: "A Digital Twin is a virtual replica of a physical building that contains all design, construction, and operational data. During construction, it's used for clash detection and scheduling. After construction, it serves as a living facility management tool synced with IoT sensors." },
        { q: "How does a Digital Twin save money during construction?", a: "By detecting MEP clashes virtually ($0 to fix) instead of in the field ($5,000–$50,000+ per conflict). Digital Twins also reduce RFIs by 60%, prevent rework, and enable energy modeling that optimizes equipment sizing before purchase." },
        { q: "Does UDGOK deliver a Digital Twin with every project?", a: "UDGOK delivers an as-built BIM model on every project that was coordinated in 3D. For clients who want a full IoT-integrated Digital Twin, we offer that as an enhanced VDC service." },
        { q: "What software does a Digital Twin use?", a: "UDGOK uses Autodesk Revit for BIM authoring, Navisworks for coordination, and cloud platforms for real-time data integration. IoT sensor data flows through building automation systems into the Digital Twin dashboard." },
      ]}
    />
  );
}
