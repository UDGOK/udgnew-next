import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Tulsa Medical Construction | UDGOK",
  description: "Tulsa's leading medical and dental construction contractor. UDGOK has built 100+ healthcare facilities across Tulsa and the surrounding metro, from dental offices to ambulatory surgery centers.",
  alternates: { canonical: "https://udgok.com/tulsa-medical-construction" },
};

export default function TulsaMedicalPage() {
  return (
    <ServicePage
      label="Tulsa Medical Construction"
      title="Tulsa Medical Construction"
      description="Tulsa's most trusted healthcare construction contractor — 100+ medical and dental facilities built across the metro."
      imageSrc="/images/tulsa_oklahoma_skyline_centennial_park_daytime.jpg"
      imageAlt="Tulsa medical construction by UDGOK"
      intro="UDGOK is Tulsa's go-to contractor for healthcare facility construction. From single-operatory dental suites in Broken Arrow to multi-physician medical campuses on the BA Expressway, we've built more healthcare square footage in the Tulsa metro than any other local contractor. Our team knows the inspectors, the subcontractors, and the clinical requirements that make healthcare construction different."
      stats={[
        { n: "100+", l: "Tulsa Healthcare Projects" },
        { n: "#1", l: "Tulsa Medical Builder" },
        { n: "All", l: "Specialties Served" },
        { n: "Local", l: "Team & Subs" },
      ]}
      features={[
        { icon: "🏥", title: "Medical Office Buildings", desc: "Multi-tenant and single-tenant medical office buildings across the Tulsa metro and surrounding communities." },
        { icon: "🦷", title: "Dental Offices", desc: "General dentistry, orthodontics, oral surgery, and pediatric dental offices of all sizes." },
        { icon: "👁️", title: "Eye Clinics", desc: "Optometry and ophthalmology offices with specialized dark rooms and laser suite construction." },
        { icon: "🫁", title: "Medical Gas Systems", desc: "NFPA 99 compliant medical gas installation, testing, and certification for any facility type." },
        { icon: "🏗️", title: "Ambulatory Surgery Centers", desc: "AAAHC-ready ASC construction with surgical HVAC, medical gas, and all regulatory compliance." },
        { icon: "🔄", title: "Renovations & Expansions", desc: "Occupied-space renovations, phased expansions, and equipment upgrades with minimal disruption." },
      ]}
      cta="Build in Tulsa →"
    />
  );
}
