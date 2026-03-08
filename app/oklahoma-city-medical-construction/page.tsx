import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Oklahoma City Medical Office Construction",
  description: "UDGOK provides expert medical office and dental clinic construction across Oklahoma City. Design-build services for healthcare providers.",
  alternates: { canonical: "https://udgok.com/oklahoma-city-medical-construction" },
};

export default function OKCPage() {
  return (
    <ServicePage
      label="Service Area: Oklahoma City"
      title="Medical & Dental Construction in OKC"
      description="Bringing Tulsa's premier healthcare construction expertise to the Oklahoma City metro area."
      imageSrc="/images/ai_dallas_medical_hub.png"
      imageAlt="OKC medical construction by UDGOK"
      intro="For years, Oklahoma City providers have asked us to bring our specialized healthcare construction approach to the metro. We've established a dedicated OKC team to deliver the same precision, transparency, and speed that made us Tulsa's top choice for medical and dental builds."
      cta="Contact Our OKC Team →"
      stats={[
        { n: "OKC", l: "Dedicated Team" },
        { n: "100%", l: "Healthcare Focused" },
        { n: "5+", l: "Active OKC Builds" },
        { n: "24/7", l: "Project Access" },
      ]}
      features={[
        { icon: "🏥", title: "Medical Offices", desc: "Turnkey design-build services for primary care, specialty clinics, and urgent care centers in OKC." },
        { icon: "🦷", title: "Dental Clinics", desc: "Precision plumbing and operatory layouts for general dentistry, ortho, and endodontic practices." },
        { icon: "💉", title: "Surgery Centers", desc: "AAAHC-ready oral surgery and ambulatory surgery centers with full medical gas integration." },
      ]}
    />
  );
}
