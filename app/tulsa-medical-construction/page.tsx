import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Tulsa Medical Construction | Healthcare Builder | UDGOK",
  description: "Tulsa's leading medical and dental construction contractor. UDGOK has built 100+ healthcare facilities across Tulsa and the surrounding metro, from dental offices to ambulatory surgery centers.",
  keywords: [
    "Tulsa medical construction",
    "healthcare construction Tulsa OK",
    "medical builder Tulsa Oklahoma",
    "dental construction Tulsa",
    "ambulatory surgery center Tulsa",
    "medical facility construction Tulsa",
    "healthcare design-build Tulsa",
    "medical office contractor Tulsa OK",
  ],
  openGraph: {
    title: "Tulsa Medical Construction | 100+ Facilities | UDGOK",
    description: "Tulsa's #1 medical and dental construction contractor. 100+ healthcare facilities delivered across the metro.",
    url: "https://udgok.com/tulsa-medical-construction",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/tulsa-medical-construction" },
};

export default function TulsaMedicalPage() {
  return (
    <ServicePage
      label="Tulsa Medical Construction"
      title="Tulsa Medical Construction"
      description="Tulsa's most trusted healthcare construction contractor — 100+ medical and dental facilities built across the metro."
      imageSrc="/images/ai_tulsa_skyline_architecture.png"
      imageAlt="Tulsa medical construction by UDGOK"
      tldr="UDGOK is Tulsa's most experienced healthcare construction contractor with 100+ medical and dental facilities delivered across the metro area. We build dental offices, medical office buildings, eye clinics, oral surgery centers, urgent care facilities, and ambulatory surgery centers. Our team includes ASSE 6010 certified medical gas installers, OSHA 30 superintendents, and PMP-certified project managers."
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
      faqs={[
        { q: "Who is Tulsa's top medical construction contractor?", a: "UDGOK (Upscale Development Group) is Tulsa's most experienced medical construction contractor with 100+ healthcare facilities delivered. We specialize in dental offices, medical clinics, eye centers, oral surgery suites, and ambulatory surgery centers across the Tulsa metro." },
        { q: "What types of healthcare facilities does UDGOK build?", a: "We build all healthcare facility types: dental offices (general, pediatric, orthodontic, oral surgery), medical offices (primary care, specialty, urgent care), eye clinics (optometry, ophthalmology, LASIK), and ambulatory surgery centers. Each specialty has unique regulatory, MEP, and layout requirements we've built before." },
        { q: "Does UDGOK install medical gas systems?", a: "Yes. UDGOK has ASSE 6010 certified medical gas installers on staff. We install oxygen, nitrous oxide, medical air, and vacuum systems to NFPA 99 standards with independent ASSE 6030 third-party verification." },
        { q: "How much does medical construction cost in Tulsa?", a: "Medical construction in Tulsa ranges from $140–$350 per square foot depending on specialty. Dental offices run $140–$280/sq ft, medical offices $150–$350/sq ft, and ambulatory surgery centers $300–$500/sq ft." },
      ]}
      cta="Build in Tulsa →"
    />
  );
}
