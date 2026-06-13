/* ─── Shared org reference ─── */
const ORG = {
  "@type": "Organization",
  name: "Upscale Development Group",
  alternateName: "UDGOK",
  url: "https://www.udgok.com",
  logo: "https://www.udgok.com/images/logo.png",
};

const AREA_SERVED = [
  { "@type": "City", name: "Tulsa", containedInPlace: { "@type": "State", name: "Oklahoma" } },
  { "@type": "City", name: "Broken Arrow", containedInPlace: { "@type": "State", name: "Oklahoma" } },
  { "@type": "City", name: "Bixby", containedInPlace: { "@type": "State", name: "Oklahoma" } },
  { "@type": "City", name: "Jenks", containedInPlace: { "@type": "State", name: "Oklahoma" } },
  { "@type": "City", name: "Owasso", containedInPlace: { "@type": "State", name: "Oklahoma" } },
  { "@type": "City", name: "Sapulpa", containedInPlace: { "@type": "State", name: "Oklahoma" } },
  { "@type": "City", name: "Haskell", containedInPlace: { "@type": "State", name: "Oklahoma" } },
  { "@type": "City", name: "Sand Springs", containedInPlace: { "@type": "State", name: "Oklahoma" } },
  { "@type": "City", name: "Oklahoma City", containedInPlace: { "@type": "State", name: "Oklahoma" } },
  { "@type": "City", name: "Dallas", containedInPlace: { "@type": "State", name: "Texas" } },
];

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
    provider: ORG,
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
    publisher: {
      ...ORG,
      logo: { "@type": "ImageObject", url: "https://www.udgok.com/images/logo.png" },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── LocalBusiness (for Tulsa service pages) ─── */
export function LocalBusinessJsonLd({
  name = "Upscale Development Group",
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
    name,
    alternateName: "UDGOK",
    description,
    url,
    telephone: "+19185203823",
    email: "projects@udgok.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7739 E 38th Street, Ste F",
      addressLocality: "Tulsa",
      addressRegion: "OK",
      postalCode: "74145",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.1054,
      longitude: -95.8838,
    },
    areaServed: [
      { "@type": "City", name: "Tulsa", containedInPlace: { "@type": "State", name: "Oklahoma" } },
      { "@type": "City", name: "Broken Arrow", containedInPlace: { "@type": "State", name: "Oklahoma" } },
      { "@type": "City", name: "Bixby", containedInPlace: { "@type": "State", name: "Oklahoma" } },
      { "@type": "City", name: "Jenks", containedInPlace: { "@type": "State", name: "Oklahoma" } },
      { "@type": "City", name: "Owasso", containedInPlace: { "@type": "State", name: "Oklahoma" } },
      { "@type": "City", name: "Sand Springs", containedInPlace: { "@type": "State", name: "Oklahoma" } },
      { "@type": "City", name: "Sapulpa", containedInPlace: { "@type": "State", name: "Oklahoma" } },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    ...(specialization && {
      knowsAbout: specialization.split(",").map((s) => s.trim()),
    }),
    sameAs: [
      "https://www.facebook.com/udgok",
      "https://www.linkedin.com/company/udgok",
    ],
    logo: "https://www.udgok.com/images/logo.png",
    image: "https://www.udgok.com/images/logo.png",
    priceRange: "$$$$",
    foundingDate: "2015",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── MedicalBusiness (for Healthcare pages) ─── */
export function MedicalBusinessJsonLd({
  name = "Upscale Development Group",
  description,
  url,
  specialization,
  medicalType = "MedicalBusiness",
}: {
  name?: string;
  description: string;
  url: string;
  specialization?: string;
  medicalType?: "MedicalBusiness" | "Dentist" | "Hospital";
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": [medicalType, "GeneralContractor"],
    name,
    alternateName: "UDGOK",
    description,
    url,
    telephone: "+19185203823",
    email: "projects@udgok.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7739 E 38th Street, Ste F",
      addressLocality: "Tulsa",
      addressRegion: "OK",
      postalCode: "74145",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.1054,
      longitude: -95.8838,
    },
    areaServed: AREA_SERVED,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    ...(specialization && {
      knowsAbout: specialization.split(",").map((s) => s.trim()),
    }),
    sameAs: [
      "https://www.facebook.com/udgok",
      "https://www.linkedin.com/company/udgok",
    ],
    logo: "https://www.udgok.com/images/logo.png",
    image: "https://www.udgok.com/images/logo.png",
    priceRange: "$$$$",
    foundingDate: "2015",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
