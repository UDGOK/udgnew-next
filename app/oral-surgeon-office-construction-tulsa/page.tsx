import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Oral Surgeon Office Construction Tulsa",
  description: "Surgical-suite precision for oral surgery practices in Tulsa and Oklahoma. UDGOK builds AAAHC-ready oral surgery centers with proper medical gas, HVAC, and recovery room design.",
  alternates: { canonical: "https://udgok.com/oral-surgeon-office-construction-tulsa" },
};

export default function OralSurgeonPage() {
  return (
    <>
      <ServiceJsonLd
        name="Oral Surgery Center Construction"
        description="Specialized oral surgery center construction in Tulsa, Oklahoma including sedation suites, surgical operatories, and recovery areas."
        url="https://udgok.com/oral-surgeon-office-construction-tulsa"
      />
      <ServicePage
      label="Oral Surgery Construction"
      title="Oral Surgery Center Construction"
      description="AAAHC-ready oral surgery suites with medical gas, surgical HVAC, and recovery room design."
      imageSrc="/images/ai-surgery-suite.png"
      imageAlt="Oral surgery center construction by UDGOK"
      intro="Oral surgery centers require the highest level of construction precision. From AAAHC accreditation requirements to surgical-grade HVAC and medical gas systems, UDGOK brings the expertise to deliver a facility that passes every inspection and serves your patients safely."
      stats={[
        { n: "25+", l: "Surgery Centers" },
        { n: "AAAHC", l: "Accreditation Ready" },
        { n: "NFPA 99", l: "Medical Gas Code" },
        { n: "100%", l: "First-Inspection Pass" },
      ]}
      features={[
        { icon: "🏥", title: "Surgical Suite Design", desc: "AAAHC/state board-compliant operating suite layouts with proper traffic patterns and sterile fields." },
        { icon: "💉", title: "Medical Gas Systems", desc: "NFPA 99 compliant oxygen, nitrous oxide, medical air, and vacuum with zone valve boxes and alarm panels." },
        { icon: "💨", title: "Surgical HVAC", desc: "Positive/negative pressure relationships, HEPA filtration, and humidity control for surgical environments." },
        { icon: "🛏️", title: "Recovery Room Design", desc: "PACU-standard recovery bays with nurse station visibility, monitoring connections, and patient privacy." },
        { icon: "📋", title: "Regulatory Navigation", desc: "We manage OSHPD/state licensing reviews, fire marshal reviews, and health department approvals." },
        { icon: "🔐", title: "Drug Storage Compliance", desc: "DEA-compliant controlled substance storage with proper safe rooms and audit trails built in." },
      ]}
    />
    </>
  );
}
