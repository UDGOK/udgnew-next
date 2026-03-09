"use client";
import Script from "next/script";

/* ─── Shared org reference ─── */
const ORG = {
  "@type": "Organization",
  name: "Upscale Development Group",
  alternateName: "UDGOK",
  url: "https://udgok.com",
  logo: "https://udgok.com/images/logo.png",
};

const AREA_SERVED = [
  { "@type": "City", name: "Tulsa", containedInPlace: { "@type": "State", name: "Oklahoma" } },
  { "@type": "City", name: "Broken Arrow", containedInPlace: { "@type": "State", name: "Oklahoma" } },
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
    <Script id="schema-breadcrumb" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
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
    <Script id="schema-service" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
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
    <Script id="schema-faq" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
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
    <Script id="schema-howto" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}

/* ─── Article ─── */
export function ArticleJsonLd({
  title, description, url, datePublished, dateModified, image,
}: {
  title: string; description: string; url: string;
  datePublished: string; dateModified?: string; image?: string;
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
    author: ORG,
    publisher: {
      ...ORG,
      logo: { "@type": "ImageObject", url: "https://udgok.com/images/logo.png" },
    },
  };
  return (
    <Script id="schema-article" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}

/* ─── Auto-breadcrumb from pathname ─── */
export function AutoBreadcrumbJsonLd({ pathname }: { pathname: string }) {
  if (!pathname || pathname === "/") return null;

  const base = "https://udgok.com";
  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Home", url: base }];

  let path = "";
  for (const seg of segments) {
    path += `/${seg}`;
    const label = seg
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .replace(/Ok\b/g, "OK")
      .replace(/Tulsa/g, "Tulsa")
      .replace(/Udgok/g, "UDGOK");
    items.push({ name: label, url: `${base}${path}` });
  }

  return <BreadcrumbJsonLd items={items} />;
}
