import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Dallas-Fort Worth Medical Construction | UDGOK",
  description: "Medical and dental office construction in Dallas-Fort Worth, TX. UDGOK delivers healthcare facility construction in DFW with the same NFPA 99 and AAAHC-ready expertise trusted across Oklahoma.",
  alternates: { canonical: "https://udgok.com/dallas-medical-construction" },
};

export default function DallasMedicalPage() {
  return (
    <ServicePage
      label="Dallas-Fort Worth"
      title="Dallas-Fort Worth Medical Construction"
      description="UDGOK brings Oklahoma's most trusted medical and dental construction expertise to the Dallas-Fort Worth metroplex."
      imageSrc="/images/upscale-building-modern.png"
      imageAlt="Dallas-Fort Worth medical construction by UDGOK"
      intro="UDGOK is expanding its award-winning healthcare construction practice into the Dallas-Fort Worth market. DFW's rapidly growing medical corridor demands a builder with deep clinical expertise — not just a commercial GC who occasionally builds doctor offices. We bring NFPA 99 medical gas knowledge, AAAHC surgical suite experience, and over 100 completed healthcare facilities to every DFW project."
      stats={[
        { n: "DFW", l: "Now Serving" },
        { n: "100+", l: "Healthcare Projects" },
        { n: "NFPA 99", l: "Certified Team" },
        { n: "TX", l: "Licensed Contractor" },
      ]}
      features={[
        { icon: "🏥", title: "Medical Office Construction", desc: "Ground-up and tenant improvement medical offices for primary care, specialty, and multi-specialty practices." },
        { icon: "🦷", title: "Dental Office Construction", desc: "Full-service dental construction with operatory rough-in, medical gas, and equipment coordination." },
        { icon: "👁️", title: "Eye Clinic Construction", desc: "Ophthalmology and optometry offices with dark rooms, laser suites, and precise lane layout." },
        { icon: "🏗️", title: "Surgical Center Build-Out", desc: "AAAHC-ready ambulatory surgery centers with surgical HVAC, medical gas, and recovery room design." },
        { icon: "⛽", title: "Commercial Construction", desc: "Convenience stores, retail build-outs, and commercial tenant improvements throughout DFW." },
        { icon: "📋", title: "TX Permitting Expertise", desc: "Deep knowledge of Texas DSHS, TDH, and local municipality permitting for healthcare facilities." },
      ]}
      cta="Start Your DFW Project →"
    />
  );
}
