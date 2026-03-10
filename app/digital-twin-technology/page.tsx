import type { Metadata } from "next";
import DigitalTwinUI from "./DigitalTwinUI";
import { ArticleJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Digital Twin Technology in Construction: 2026 Guide | UDGOK",
  description:
    "A complete guide to how Digital Twin Technology, BIM, IoT, and AI are transforming construction, healthcare, energy, and smart cities in Texas, Oklahoma, and California.",
  alternates: { canonical: "https://udgok.com/digital-twin-technology" },
  openGraph: {
    title: "The 2026 Guide to Digital Twin Technology | UDGOK",
    description: "How AI, IoT, and 3D virtual replicas are transforming commercial construction, energy, and smart cities.",
    type: "article",
  },
};

export default function DigitalTwinPage() {
  return (
    <>
      <ArticleJsonLd
        title="The 2026 Guide to Digital Twin Technology"
        description="How AI, IoT, and 3D virtual replicas are transforming commercial construction, energy, and smart cities across Texas, Oklahoma, and California."
        url="https://udgok.com/digital-twin-technology"
        datePublished="2026-03-01"
        dateModified="2026-03-08"
        image="https://udgok.com/images/digital-twin-guide-2026.png"
      />
      <FAQJsonLd
        questions={[
          { q: "What is a Digital Twin in construction?", a: "A Digital Twin is a data-rich 3D virtual replica of a physical building that stays synchronized with real-world conditions via IoT sensors and BIM models. In construction, it allows teams to detect MEP clashes before building, simulate energy performance, track real-time schedule deviations, and serve as a facility management tool for the building's entire lifecycle." },
          { q: "How much money can Digital Twins save on a construction project?", a: "Digital Twins reduce construction costs by up to 30%. Resolving an MEP clash in a digital model costs $0, versus $5,000–$50,000+ to fix the same conflict in the field after construction." },
          { q: "How does UDGOK use Digital Twin technology?", a: "UDGOK integrates Digital Twins into every project through Revit BIM modeling, Navisworks clash detection, and IoT-connected field monitoring. We build the entire project virtually before breaking ground and deliver an as-built Digital Twin model at project completion." },
          { q: "What industries benefit most from Digital Twins in 2026?", a: "Healthcare construction is the fastest-growing Digital Twin segment at 52.7% CAGR. Other major sectors include energy, smart cities, and manufacturing. The global Digital Twin market is projected to reach $48.2 billion by 2026." },
        ]}
      />
      <DigitalTwinUI />
    </>
  );
}

