import type { Metadata } from "next";
import HomeUI from "./HomeUI";

export const metadata: Metadata = {
  title: "Medical & Dental Design-Build Contractor | Tulsa & Oklahoma City",
  description:
    "Tulsa's premier medical & dental design-build contractor. 100+ healthcare projects delivered 30–40% faster. Serving Oklahoma & North Texas since 2015.",
  alternates: { canonical: "https://www.udgok.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": 0,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

const homepageFaqs = [
  { q: "How much does medical office construction cost in Tulsa?", a: "Medical office construction in Tulsa costs $150–$350 per square foot depending on specialty. A standard 3,000 sq ft primary care office runs $450,000–$750,000. Specialty practices with surgical suites or medical gas systems cost more. UDGOK provides free preconstruction budgets." },
  { q: "How long does it take to build a dental office in Oklahoma?", a: "Most dental office builds take 3–5 months from permit issuance to certificate of occupancy. UDGOK's design-build approach saves 4–6 weeks compared to traditional construction by overlapping design, permitting, and procurement phases." },
  { q: "What is design-build construction?", a: "Design-build is a construction delivery method where one company handles both design and construction. This eliminates the finger-pointing between separate architects and contractors, reduces change orders by 30–40%, and accelerates project delivery. UDGOK uses design-build on 90% of healthcare projects." },
  { q: "Does UDGOK serve cities outside Tulsa?", a: "Yes. UDGOK serves the entire Tulsa metro including Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, and Haskell. We also serve Oklahoma City and the Dallas-Fort Worth area in Texas. Our headquarters are at 7739 E 38th Street, Suite F, Tulsa, OK 74145." },
  { q: "What types of construction does UDGOK specialize in?", a: "UDGOK specializes in healthcare construction — dental offices, medical offices, eye clinics, oral surgery centers, and ambulatory surgery centers. We also build commercial projects including convenience stores, restaurants, retail centers, and tenant improvements." },
  { q: "Is UDGOK licensed and insured?", a: "Yes. UDGOK is a licensed Oklahoma general contractor with full commercial general liability, workers' compensation, and professional liability insurance. We are licensed in Texas for DFW projects. Our EMR (safety rating) is 0.7 — well below the industry average of 1.0." },
];

export default function HomePage() {
  return (
    <>
      {/* FAQPage JSON-LD — targets AI Overviews and featured snippets */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homepageFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        })
      }} />

      {/* AggregateRating & Reviews JSON-LD — enables star ratings in SERPs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.udgok.com/#organization",
          name: "UDGOK — Upscale Development Group of Oklahoma",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "47",
            reviewCount: "47",
          },
          review: [
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Dr. Sarah Miller, DDS" },
              "datePublished": "2025-11-12",
              "reviewBody": "UDGOK made our dental practice build-out completely seamless. Their deep understanding of specialized plumbing and medical gas certification saved us months of delays.",
              "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Dr. Robert Singh, MD" },
              "datePublished": "2026-02-18",
              "reviewBody": "Delivered our 8,000 sq ft medical clinic ahead of schedule. Budgeting was accurate to within 3% of the preconstruction estimate.",
              "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            }
          ]
        })
      }} />

      <HomeUI />
    </>
  );
}
