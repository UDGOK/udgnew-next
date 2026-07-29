import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { CATEGORIES, sortedInsights } from "@/lib/insights";
import { SITE, ID } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Construction Insights | Oklahoma Healthcare",
  description:
    "Guides on Oklahoma healthcare construction — ODH plan review, medical and dental build-out costs, permitting, and design-build delivery. Written by the team that builds them.",
  openGraph: {
    images: [{ url: "https://www.udgok.com/images/og-default.png", width: 1200, height: 630, alt: "UDGOK — Medical & Dental Design-Build Construction in Tulsa, Oklahoma" }],
    title: "Construction Insights | UDGOK",
    description:
      "Guides on Oklahoma healthcare construction — plan review, costs, permitting, and design-build delivery.",
    url: `${SITE}/insights`,
    type: "website",
  },
  alternates: { canonical: `${SITE}/insights` },
};

/**
 * ItemList of everything on the hub. This is the structure that lets a crawler
 * (and an answer engine) enumerate the library from one fetch instead of
 * discovering it link by link.
 */
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "UDGOK Construction Insights",
  description:
    "Guides and articles on healthcare and commercial construction in Oklahoma and North Texas.",
  numberOfItems: sortedInsights.length,
  itemListElement: sortedInsights.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE}/${a.slug}`,
    name: a.title,
  })),
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE}/insights`,
  name: "Construction Insights",
  url: `${SITE}/insights`,
  publisher: { "@id": ID.organization },
  inLanguage: "en-US",
};

function fmt(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function InsightsPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE },
    { name: "Insights", url: `${SITE}/insights` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <PageHero
        label="Knowledge Hub"
        title="Insights"
        description="Guides on what it actually takes to build healthcare and commercial facilities in Oklahoma — regulatory process, real cost ranges, and delivery method. Written by the people doing the work."
        imageSrc="/images/medical-office-design-build.png"
        imageAlt="UDGOK construction insights"
      />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 2rem" }}>
        {CATEGORIES.map((cat) => {
          const items = sortedInsights.filter((a) => a.category === cat);
          if (!items.length) return null;
          return (
            <section key={cat} style={{ marginBottom: "5rem" }}>
              <h2
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#FF4800",
                  borderBottom: "2px solid #FF4800",
                  paddingBottom: "0.75rem",
                  marginBottom: "2.5rem",
                }}
              >
                {cat}
              </h2>

              <div style={{ display: "grid", gap: "2.5rem" }}>
                {items.map((a) => (
                  <article
                    key={a.slug}
                    style={{
                      borderBottom: "1px solid rgba(11,6,27,0.12)",
                      paddingBottom: "2.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#6B7280",
                        marginBottom: "0.75rem",
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span>Updated {fmt(a.updated)}</span>
                      <span aria-hidden>·</span>
                      <span>{a.readTime} read</span>
                      {a.featured && (
                        <>
                          <span aria-hidden>·</span>
                          <span style={{ color: "#FF4800", fontWeight: 700 }}>Cornerstone</span>
                        </>
                      )}
                    </div>

                    <h3 style={{ fontSize: "1.75rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
                      <Link href={`/${a.slug}`} style={{ color: "#0B061B", textDecoration: "none" }}>
                        {a.title}
                      </Link>
                    </h3>

                    <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#4B5563", marginBottom: "1.25rem", maxWidth: "72ch" }}>
                      {a.summary}
                    </p>

                    <Link
                      href={`/${a.slug}`}
                      style={{ color: "#FF4800", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}
                    >
                      Read the guide →
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <aside
          style={{
            background: "#F4F1EA",
            borderLeft: "3px solid #FF4800",
            padding: "2.5rem",
            marginTop: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "1rem", color: "#0B061B" }}>
            Looking for cost numbers instead?
          </h2>
          <p style={{ lineHeight: 1.75, color: "#4B5563", marginBottom: "1.25rem", maxWidth: "70ch" }}>
            The <Link href="/tools" style={{ color: "#CF5F29", fontWeight: 600 }}>calculators</Link> give
            quick material estimates, and{" "}
            <Link href="/tulsa-construction-costs" style={{ color: "#CF5F29", fontWeight: 600 }}>
              Tulsa construction costs
            </Link>{" "}
            has current per-square-foot ranges by building type.
          </p>
          <Link href="/contact" style={{ color: "#FF4800", fontWeight: 700, textDecoration: "none" }}>
            Or talk to us about a specific project →
          </Link>
        </aside>
      </main>
    </>
  );
}
