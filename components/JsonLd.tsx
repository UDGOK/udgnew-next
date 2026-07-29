import { ID, NAP, areaServedNodes } from "@/lib/schema";

/**
 * Per-page JSON-LD helpers.
 *
 * The Organization / LocalBusiness identity is emitted ONCE from app/layout.tsx
 * via lib/schema.ts. Nodes here must REFERENCE that entity by @id rather than
 * restating its facts — restating them is how `name`, `logo`, address and
 * opening hours drifted apart across three files in the first place.
 */

/* ─── Shared org reference — an @id pointer, not a copy ─── */
const ORG_REF = { "@id": ID.organization };

const AREA_SERVED = areaServedNodes;

/* ─── BreadcrumbList ─── */
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Service Page ─── */
export function ServiceJsonLd({
  name, description, url, image,
}: {
  name: string; description: string; url: string; image?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    ...(image && { image }),
    provider: ORG_REF,
    areaServed: AREA_SERVED,
    serviceType: "Design-Build Construction",
    category: "Construction",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── FAQPage ─── */
export function FAQJsonLd({ questions }: { questions: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── HowTo (for calculators / guides) ─── */
export function HowToJsonLd({
  name, description, steps, totalTime,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string; // ISO 8601 duration e.g. "PT5M"
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime && { totalTime }),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Article ─── */
export function ArticleJsonLd({
  title, description, url, datePublished, dateModified, image, authorName, authorTitle,
}: {
  title: string; description: string; url: string;
  datePublished: string; dateModified?: string; image?: string;
  authorName?: string; authorTitle?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    ...(image && { image }),
    author: {
      "@type": "Person",
      name: authorName || "Zack H.",
      jobTitle: authorTitle || "Lead Estimator / Project Manager",
      url: "https://www.udgok.com/about",
    },
    publisher: ORG_REF,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── LocalBusiness (service / location pages) ─── */
/**
 * Emits the canonical LocalBusiness node BY REFERENCE, adding only the
 * page-specific bits. It deliberately does NOT restate address, phone, geo,
 * hours, priceRange or sameAs — those live in lib/schema.ts and are emitted once
 * from the root layout.
 *
 * Before this change each of these props was duplicated here and DISAGREED with
 * the layout: geo 36.1054/-95.8838 vs 36.0998/-95.8830, priceRange "$$$$" vs
 * "$$$", telephone "+19185203823" vs "+1-918-520-3823", closing time 18:00 vs
 * 17:00, plus a sameAs pointing at a LinkedIn URL that 404s. Contradictory
 * markup gets discounted or ignored outright, so consistency is the whole point.
 */
export function LocalBusinessJsonLd({
  description,
  url,
  specialization,
}: {
  name?: string;
  description: string;
  url: string;
  specialization?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "@id": ID.localBusiness,
    name: NAP.name,
    description,
    url,
    ...(specialization && {
      knowsAbout: specialization.split(",").map((v) => v.trim()),
    }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Healthcare-facility construction service ─── */
/**
 * Replaces the old MedicalBusinessJsonLd.
 *
 * That helper typed UDGOK as `MedicalBusiness` / `Dentist` / `Hospital`. UDGOK
 * is none of those — it is a general contractor that BUILDS them. Asserting
 * "@type": "Dentist" tells every consumer that this business practices
 * dentistry, which is both false and actively harmful to entity resolution:
 * it invites Google to classify the company in the wrong vertical entirely.
 *
 * The correct modelling is a Service whose `provider` is the contractor and
 * whose `audience` is the healthcare practice.
 */
export function HealthcareConstructionJsonLd({
  name = "Healthcare Facility Construction",
  description,
  url,
  specialization,
  audienceType = "Healthcare practice",
}: {
  name?: string;
  description: string;
  url: string;
  specialization?: string;
  /** kept for call-site compatibility; no longer used as an @type */
  medicalType?: "MedicalBusiness" | "Dentist" | "Hospital";
  audienceType?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: "Healthcare facility design-build construction",
    category: "Construction",
    provider: ORG_REF,
    areaServed: AREA_SERVED,
    audience: { "@type": "BusinessAudience", audienceType },
    ...(specialization && {
      keywords: specialization.split(",").map((v) => v.trim()).join(", "),
    }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * @deprecated Use HealthcareConstructionJsonLd. Kept as an alias so existing
 * call sites keep working; it no longer emits a MedicalBusiness type.
 */
export const MedicalBusinessJsonLd = HealthcareConstructionJsonLd;
