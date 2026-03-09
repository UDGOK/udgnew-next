import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Dallas-Fort Worth Medical Construction | UDGOK",
  description: "Medical and dental office construction in Dallas-Fort Worth, TX. UDGOK delivers healthcare facility construction in DFW with NFPA 99 and AAAHC-ready expertise.",
  keywords: [
    "medical construction Dallas TX",
    "dental office construction DFW",
    "healthcare construction Dallas Fort Worth",
    "medical office builder Plano TX",
    "dental clinic construction Dallas",
    "design-build contractor Dallas TX",
    "medical construction Frisco TX",
    "healthcare builder DFW Texas",
  ],
  openGraph: {
    title: "Dallas-Fort Worth Medical Construction | UDGOK",
    description: "Oklahoma's most trusted medical construction contractor now serving Dallas-Fort Worth with 100+ healthcare projects of experience.",
    url: "https://udgok.com/dallas-medical-construction",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/dallas-medical-construction" },
};

export default function DallasMedicalPage() {
  return (
    <ServicePage
      label="Dallas-Fort Worth"
      title="Dallas-Fort Worth Medical Construction"
      description="UDGOK brings Oklahoma's most trusted medical and dental construction expertise to the Dallas-Fort Worth metroplex."
      imageSrc="/images/ai_commercial_retail_plaza.png"
      imageAlt="Dallas-Fort Worth medical construction by UDGOK"
      tldr="UDGOK is expanding into the Dallas-Fort Worth market, bringing 100+ completed healthcare construction projects of experience to DFW. We build dental offices, medical clinics, eye centers, and ambulatory surgery centers with NFPA 99 certified medical gas installation, AAAHC-compliant surgical suites, and design-build delivery. DFW medical office construction costs $170–$400/sq ft depending on specialty and location."
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
      faqs={[
        { q: "Does UDGOK build in Dallas-Fort Worth?", a: "Yes. UDGOK is a Texas-licensed contractor now actively serving the DFW metro including Dallas, Plano, Frisco, McKinney, Allen, and surrounding cities. We bring 100+ completed healthcare projects of experience from Oklahoma." },
        { q: "How much does medical construction cost in Dallas?", a: "Medical construction in DFW runs $170–$400/sq ft depending on specialty and location within the metroplex. Dental offices in DFW cost $150–$300/sq ft. Dallas rates are typically 10–15% higher than Oklahoma due to higher labor and material costs." },
        { q: "What sets UDGOK apart from DFW medical builders?", a: "Healthcare is our specialty, not a sideline. We have ASSE 6010 certified medical gas installers, OSHA 30 superintendents, and 100+ completed healthcare facilities. Most DFW GCs are commercial builders who occasionally take medical projects. We're a medical builder who occasionally takes commercial projects." },
        { q: "Is UDGOK licensed in Texas?", a: "Yes. UDGOK holds appropriate Texas business registrations and carries full commercial general liability, workers' compensation, and professional liability insurance for Texas projects." },
      ]}
      cta="Start Your DFW Project →"
    />
  );
}
