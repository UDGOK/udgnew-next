import type { Metadata } from "next";
import Script from "next/script";
import TulsaMedicalUI from "./TulsaMedicalUI";

export const metadata: Metadata = {
  title: "Tulsa Medical Construction | Healthcare Construction Contractors Oklahoma | UDGOK",
  description: "Healthcare construction contractors serving Oklahoma and Tulsa. UDGOK has built 100+ medical and dental facilities, from dental offices to ambulatory surgery centers. Oklahoma's most trusted healthcare builder.",
  keywords: [
    "healthcare construction contractors Oklahoma",
    "Tulsa medical construction",
    "healthcare construction Tulsa OK",
    "medical builder Tulsa Oklahoma",
    "medical build out firm",
    "local medical office contractor",
    "dental construction Tulsa",
    "ambulatory surgery center Tulsa",
    "medical facility construction Tulsa",
    "healthcare design-build Tulsa",
    "medical office contractor Tulsa OK",
    "healthcare construction Oklahoma",
    "medical construction contractor Oklahoma",
  ],
  openGraph: {
    title: "Tulsa Medical Construction | 100+ Facilities | UDGOK",
    description: "Tulsa's #1 medical and dental construction contractor. 100+ healthcare facilities delivered across the metro.",
    url: "https://udgok.com/tulsa-medical-construction",
    type: "website",
  },
  alternates: { canonical: "https://udgok.com/tulsa-medical-construction" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Who is Tulsa's top medical construction contractor?", acceptedAnswer: { "@type": "Answer", text: "UDGOK (Upscale Development Group) is Tulsa's most experienced medical construction contractor with 100+ healthcare facilities delivered. We specialize in dental offices, medical clinics, eye centers, oral surgery suites, and ambulatory surgery centers across the Tulsa metro." } },
    { "@type": "Question", name: "What types of healthcare facilities does UDGOK build?", acceptedAnswer: { "@type": "Answer", text: "We build all healthcare facility types: dental offices (general, pediatric, orthodontic, oral surgery), medical offices (primary care, specialty, urgent care), eye clinics (optometry, ophthalmology, LASIK), and ambulatory surgery centers." } },
    { "@type": "Question", name: "Does UDGOK install medical gas systems?", acceptedAnswer: { "@type": "Answer", text: "Yes. UDGOK has ASSE 6010 certified medical gas installers on staff. We install oxygen, nitrous oxide, medical air, and vacuum systems to NFPA 99 standards with independent ASSE 6030 third-party verification." } },
    { "@type": "Question", name: "How much does medical construction cost in Tulsa?", acceptedAnswer: { "@type": "Answer", text: "Medical construction in Tulsa ranges from $140–$350 per square foot depending on specialty. Dental offices run $140–$280/sq ft, medical offices $150–$350/sq ft, and ambulatory surgery centers $300–$500/sq ft." } },
    { "@type": "Question", name: "How long does a medical office build-out take?", acceptedAnswer: { "@type": "Answer", text: "A typical 2,000–5,000 SF dental or medical office takes 3–5 months from design through certificate of occupancy. Larger facilities (10,000+ SF) or ambulatory surgery centers take 6–12 months." } },
    { "@type": "Question", name: "Does UDGOK handle healthcare regulatory compliance?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Our team manages all regulatory requirements including OSHA, ADA accessibility, NFPA 99 medical gas compliance, local building codes, health department inspections, and specialty accreditation requirements (AAAHC for ASCs)." } },
  ],
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "UDGOK — Healthcare Construction Contractors",
  description: "Tulsa's most trusted healthcare construction contractor — 100+ medical and dental facilities delivered across the metro.",
  url: "https://udgok.com/tulsa-medical-construction",
  telephone: "+19185203823",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tulsa",
    addressRegion: "OK",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Tulsa" },
    { "@type": "City", name: "Broken Arrow" },
    { "@type": "City", name: "Bixby" },
    { "@type": "City", name: "Jenks" },
    { "@type": "City", name: "Owasso" },
    { "@type": "State", name: "Oklahoma" },
  ],
  knowsAbout: [
    "Medical office construction",
    "Dental office construction",
    "Ambulatory surgery center construction",
    "Medical gas installation",
    "Healthcare design-build",
  ],
};

export default function TulsaMedicalPage() {
  return (
    <>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-business" type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </Script>
      <TulsaMedicalUI />
    </>
  );
}
