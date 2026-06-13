import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import ContactUI from "./ContactUI";

export const metadata: Metadata = {
  title: "Contact Us | Medical Construction Tulsa OK",
  description: "Contact UDGOK for medical office, dental clinic, and commercial construction in Tulsa, Oklahoma City, and Dallas. Call (918) 520-3823 or submit a project inquiry online.",
  openGraph: {
    title: "Contact Us | Medical Construction Tulsa OK | UDGOK",
    description: "Call (918) 520-3823 or submit a project inquiry. UDGOK serves Oklahoma and North Texas.",
    url: "https://www.udgok.com/contact",
    type: "website",
  },
  alternates: { canonical: "https://www.udgok.com/contact" },
};

const contactFaqs = [
  { q: "How long does a typical medical office build take?", a: "Most medical office construction projects range from 3–6 months depending on scope, permitting timelines, and finish selections. UDGOK's design-build approach saves 4–6 weeks vs. traditional delivery." },
  { q: "Do you work on tenant improvement projects?", a: "Yes. We specialize in tenant improvements for both healthcare and commercial spaces, working within existing building constraints. Typical TI projects range from $50–$180 per square foot." },
  { q: "Are you licensed in Texas?", a: "Yes. UDGOK is licensed in both Oklahoma and Texas, allowing us to serve the Dallas-Fort Worth metro area. We hold full general contractor licenses in both states." },
  { q: "What sizes of projects do you handle?", a: "We handle projects from $100K tenant improvements to $10M+ ground-up healthcare campuses. Our sweet spot is $300K–$5M medical and dental builds." },
  { q: "Is UDGOK bonded and insured?", a: "Yes. UDGOK carries full commercial general liability ($2M aggregate), workers' compensation, professional liability, and commercial auto insurance. We can furnish payment and performance bonds on individual projects." },
  { q: "What certifications does UDGOK hold?", a: "Our team holds ASSE 6010 (Medical Gas Installer), ASSE 6020 (Medical Gas Inspector), OSHA 30-Hour, and EPA 608 certifications. We are members of the Associated General Contractors (AGC) and the Design-Build Institute of America (DBIA)." },
  { q: "What is your safety record?", a: "UDGOK maintains an EMR (Experience Modification Rate) of 0.7, well below the industry average of 1.0. All field personnel hold OSHA 10 or OSHA 30 certifications, and we conduct weekly toolbox safety meetings on every project." },
  { q: "What are your payment terms?", a: "We bill monthly based on percentage of work completed. Payment terms are Net 30 from approved invoice date. Retainage is typically 5–10% as agreed in the contract, released upon substantial completion." },
  { q: "Do you provide free estimates?", a: "Yes. We provide complimentary preconstruction budgets and project consultations. Our estimates include a detailed scope breakdown, timeline, and cost range. There is no obligation, and most budgets are delivered within 5–7 business days." },
  { q: "What is your typical construction process?", a: "Our design-build process follows four phases: (1) Discovery — site evaluation, program review, and budgeting; (2) Design — architectural plans, MEP engineering, and permit submittal; (3) Construction — self-performed and subcontracted work with weekly updates; (4) Commissioning — systems testing, punch list, and certificate of occupancy." },
];

export default function ContactPage() {
  
  const PAGE_BREADCRUMBS = [
    { name: "Home", url: "https://www.udgok.com" },
    { name: "Contact Us", url: "https://www.udgok.com/contact" }
  ];
  return (
    <>
      
      <BreadcrumbJsonLd items={PAGE_BREADCRUMBS} />{/* FAQPage JSON-LD for contact page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: contactFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        })
      }} />
      <ContactUI />
    </>
  );
}
