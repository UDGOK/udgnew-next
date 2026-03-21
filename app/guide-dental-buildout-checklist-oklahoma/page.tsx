import type { Metadata } from "next";
import Script from "next/script";
import DentalChecklistUI from "./DentalChecklistUI";

export const metadata: Metadata = {
  title: "Dental Office Build-Out Checklist for Oklahoma (2026)",
  description: "Step-by-step dental office build-out checklist from pre-design to move-in. Cost per operatory, equipment rough-in specs, and regulatory requirements for Oklahoma.",
  keywords: [
    "dental office build-out checklist",
    "dental office construction checklist Oklahoma",
    "dental build out cost per operatory",
    "dental construction timeline Tulsa",
    "dental office regulatory requirements Oklahoma",
    "dental operatory cost breakdown",
  ],
  openGraph: {
    title: "Dental Office Build-Out Checklist — Oklahoma 2026 | UDGOK",
    description: "80+ dental offices built. The complete build-out checklist for Oklahoma dental practices.",
    url: "https://udgok.com/guide-dental-buildout-checklist-oklahoma",
    type: "article",
  },
  alternates: { canonical: "https://udgok.com/guide-dental-buildout-checklist-oklahoma" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Dental Office Build-Out Checklist for Oklahoma",
  description: "Complete step-by-step checklist for building a dental office in Oklahoma — from site selection through certificate of occupancy.",
  totalTime: "PT5M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Pre-Design Planning", text: "Secure financing, select a site, define your operatory count, and assemble your design-build team." },
    { "@type": "HowToStep", position: 2, name: "Design & Engineering", text: "Complete architectural plans, MEP engineering, equipment layouts, and IT infrastructure planning." },
    { "@type": "HowToStep", position: 3, name: "Permits & Approvals", text: "Submit for building permits, state plan review, and health department approval." },
    { "@type": "HowToStep", position: 4, name: "Construction", text: "Execute demolition, framing, under-slab plumbing, electrical, HVAC, finishes, and casework." },
    { "@type": "HowToStep", position: 5, name: "Equipment & Commissioning", text: "Install dental equipment, test medical gas systems, complete final inspections, and obtain CO." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does each dental operatory cost to build?", acceptedAnswer: { "@type": "Answer", text: "Each dental operatory costs $10,000–$18,000 in construction infrastructure (plumbing, electrical, data, compressed air). The dental chair and delivery units add another $20,000–$60,000 per operatory depending on brand and technology level. Total per-chair investment: $30,000–$78,000." } },
    { "@type": "Question", name: "How many operatories should a new dental practice have?", acceptedAnswer: { "@type": "Answer", text: "Most new practices open with 4–6 operatories in 1,800–3,000 SF. Start with what your practice plan supports (typically 4 active chairs) and rough-in plumbing/electrical for 2 future chairs. This costs $8,000–$12,000 extra vs. $40,000–$70,000 to build them later." } },
    { "@type": "Question", name: "What permits are needed for dental construction in Oklahoma?", acceptedAnswer: { "@type": "Answer", text: "Oklahoma dental offices require: building permit (city/county), mechanical permit, plumbing permit, electrical permit, fire marshal approval, health department inspection (for nitrous/medical gas), and state dental board notification. Plan for 3–6 weeks of review." } },
    { "@type": "Question", name: "Do dental offices need medical gas installation?", acceptedAnswer: { "@type": "Answer", text: "If your practice offers nitrous oxide sedation, you need NFPA 99-compliant medical gas installation with ASSE 6010-certified installers. This includes N₂O/O₂ manifold, piping, zone valves, alarms, and ASSE 6030 third-party verification. Cost: $15,000–$35,000 depending on stations." } },
    { "@type": "Question", name: "How long does a dental office build-out take?", acceptedAnswer: { "@type": "Answer", text: "A standard 4–6 chair dental office takes 90–120 days of construction plus 4–8 weeks for design and permitting. Total timeline: 5–7 months from signing a design-build contract to certificate of occupancy. Practices with surgical suites take 6–9 months." } },
  ],
};

export default function GuideDentalChecklistPage() {
  return (
    <>
      <Script id="schema-howto" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <DentalChecklistUI />
    </>
  );
}
