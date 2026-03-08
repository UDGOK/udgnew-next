import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Dental Office Construction Tulsa Oklahoma",
  description: "Expert dental office construction in Tulsa, OK. UDGOK builds fully equipped, ADA-compliant dental suites with integrated plumbing, cabinetry, and equipment rough-in.",
  alternates: { canonical: "https://udgok.com/dental-office-construction-tulsa" },
};

export default function DentalOfficePage() {
  return (
    <ServicePage
      label="Dental Construction"
      title="Dental Office Construction"
      description="Purpose-built dental offices with integrated treatment room plumbing, equipment rough-in, and clinical workflow optimization."
      imageSrc="/images/dental-office-construction.png"
      imageAlt="Dental office construction Tulsa by UDGOK"
      intro="Dental office construction requires a specialized approach — from chair outlet rough-in to nitrous oxide systems to infection control HVAC. UDGOK has built over 80 dental offices across Oklahoma and Texas, and we speak your language."
      stats={[
        { n: "80+", l: "Dental Offices Built" },
        { n: "3–5mo", l: "Typical Timeline" },
        { n: "100%", l: "ADA Compliant" },
        { n: "OSHA", l: "Safety Standards" },
      ]}
      features={[
        { icon: "🦷", title: "Treatment Room Rough-In", desc: "Precisely located chair outlets, water, drain, air, and vacuum connections for every operatory." },
        { icon: "💧", title: "Dental Plumbing Systems", desc: "Dedicated dental water supply, vacuum systems, and amalgam separators meeting EPA and local codes." },
        { icon: "😷", title: "Infection Control HVAC", desc: "Sterilization room exhaust, pressure relationships, and air quality engineered to OSHA standards." },
        { icon: "🏗️", title: "Cabinetry Coordination", desc: "We work directly with your dental equipment and millwork vendors to ensure perfect coordination." },
        { icon: "💡", title: "Lighting Design", desc: "Task and ambient lighting optimized for clinical environments including operatory overhead mounts." },
        { icon: "🔌", title: "Equipment Power", desc: "Dedicated circuits for panoramic X-ray, CBCT, sterilizers, and compressors properly spec'd." },
      ]}
    />
  );
}
