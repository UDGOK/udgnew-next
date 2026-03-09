import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Eye Clinic Construction Tulsa Oklahoma",
  description: "Specialized eye clinic and ophthalmology office construction in Tulsa, OK. UDGOK builds optometry and surgical eye centers with dark rooms, laser suites, and precise lighting control.",
  alternates: { canonical: "https://udgok.com/eye-clinic-construction-tulsa" },
};

export default function EyeClinicPage() {
  return (
    <>
      <ServiceJsonLd
        name="Eye Clinic Construction"
        description="Ophthalmology and optometry clinic construction in Tulsa with specialized exam lanes, procedure rooms, and optical dispensaries."
        url="https://udgok.com/eye-clinic-construction-tulsa"
      />
      <ServicePage
      label="Eye Clinic Construction"
      title="Eye Clinic & Ophthalmology Construction"
      description="Precision-built optometry offices and surgical eye centers with dark rooms, laser suites, and specialized lighting design."
      imageSrc="/images/modern-medical-office-building-exterior-sunny-day.jpg"
      imageAlt="Eye clinic construction Tulsa by UDGOK"
      intro="Eye clinics demand a level of precision most contractors can't deliver. From blackout dark rooms and laser procedure suites to custom lane lengths and sub-floor plumbing for phoropter units — UDGOK has built over 30 optometry and ophthalmology facilities and understands every detail."
      stats={[
        { n: "30+", l: "Eye Clinics Built" },
        { n: "100%", l: "ADA Compliant" },
        { n: "OSHA", l: "Safety Standards" },
        { n: "0", l: "Failed Inspections" },
      ]}
      features={[
        { icon: "👁️", title: "Exam Lane Layout", desc: "Precise 20-foot exam lane spacing, sub-floor rough-in for phoropter pedestals, and recessed equipment blocking." },
        { icon: "🌑", title: "Dark Room Construction", desc: "Full blackout dark rooms with light-lock vestibules, specialized ventilation, and red-light-safe electrical." },
        { icon: "🔆", title: "Surgical Laser Suites", desc: "EMI-shielded laser procedure rooms with dedicated power, interlocks, and ANSI Z136-compliant warning systems." },
        { icon: "💡", title: "Lighting Control Systems", desc: "Zone-controlled dimmable lighting for exam rooms, optical dispensaries, and waiting areas." },
        { icon: "🏬", title: "Optical Dispensary", desc: "Millwork and display casework coordinated with your optical vendor for a retail-quality dispensary experience." },
        { icon: "♿", title: "ADA & Accessibility", desc: "Full ADA-compliant design including accessible exam lanes, restrooms, and patient flow corridors." },
      ]}
    />
    </>
  );
}
