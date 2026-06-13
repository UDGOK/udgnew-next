import type { Metadata } from "next";
import TulsaMedicalUI from "./TulsaMedicalUI";
import { MedicalBusinessJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tulsa Medical Construction | Healthcare Construction Contractors Oklahoma | UDGOK",
  description: "Healthcare construction contractors serving Oklahoma and Tulsa. UDGOK has built 100+ medical and dental facilities, from dental offices to ambulatory surgery centers. Oklahoma's most trusted healthcare builder.",
  openGraph: {
    title: "Tulsa Medical Construction | 100+ Facilities | UDGOK",
    description: "Tulsa's #1 medical and dental construction contractor. 100+ healthcare facilities delivered across the metro.",
    url: "https://www.udgok.com/tulsa-medical-construction",
    type: "website",
  },
  alternates: { canonical: "https://www.udgok.com/tulsa-medical-construction" },
};

const faqs = [
  { q: "Who is Tulsa's top medical construction contractor?", a: "UDGOK (Upscale Development Group) is Tulsa's most experienced medical construction contractor with 100+ healthcare facilities delivered. We specialize in dental offices, medical clinics, eye centers, oral surgery suites, and ambulatory surgery centers across the Tulsa metro." },
  { q: "What types of healthcare facilities does UDGOK build?", a: "We build all healthcare facility types: dental offices (general, pediatric, orthodontic, oral surgery), medical offices (primary care, specialty, urgent care), eye clinics (optometry, ophthalmology, LASIK), and ambulatory surgery centers." },
  { q: "Does UDGOK install medical gas systems?", a: "Yes. UDGOK has ASSE 6010 certified medical gas installers on staff. We install oxygen, nitrous oxide, medical air, and vacuum systems to NFPA 99 standards with independent ASSE 6030 third-party verification." },
  { q: "How much does medical construction cost in Tulsa?", a: "Medical construction in Tulsa ranges from $140–$350 per square foot depending on specialty. Dental offices run $140–$280/sq ft, medical offices $150–$350/sq ft, and ambulatory surgery centers $300–$500/sq ft." },
  { q: "How long does a medical office build-out take?", a: "A typical 2,000–5,000 SF dental or medical office takes 3–5 months from design through certificate of occupancy. Larger facilities (10,000+ SF) or ambulatory surgery centers take 6–12 months." },
  { q: "Does UDGOK handle healthcare regulatory compliance?", a: "Absolutely. Our team manages all regulatory requirements including OSHA, ADA accessibility, NFPA 99 medical gas compliance, local building codes, health department inspections, and specialty accreditation requirements (AAAHC for ASCs)." },
];

export default function TulsaMedicalPage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Tulsa Medical Construction", url: "https://www.udgok.com/tulsa-medical-construction" }
  ];
  return (
    <>
      
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} /><FAQJsonLd questions={faqs} />
      <MedicalBusinessJsonLd
        name="UDGOK — Healthcare Construction Contractors"
        description="Tulsa's most trusted healthcare construction contractor — 100+ medical and dental facilities delivered across the metro."
        url="https://www.udgok.com/tulsa-medical-construction"
        specialization="Medical office construction, Dental office construction, Ambulatory surgery center construction, Medical gas installation, Healthcare design-build"
      />
      <TulsaMedicalUI />
    </>
  );
}
