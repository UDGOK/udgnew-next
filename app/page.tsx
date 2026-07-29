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

      {/*
        NOTE: Self-serving AggregateRating/Review JSON-LD was removed here.

        Google has disallowed review markup that a business supplies about ITSELF
        on LocalBusiness/Organization types since September 2019 ("self-serving
        reviews"). It is ignored at best, and inventing reviewer identities is a
        structured-data spam violation that risks a site-wide manual action.

        Star ratings for a local business come from the Google Business Profile,
        not from first-party JSON-LD. Collect genuine reviews on GBP instead.

        Do not re-add aggregateRating/review to this file.
        See: https://developers.google.com/search/docs/appearance/structured-data/review-snippet
      */}

      <HomeUI />
    </>
  );
}
