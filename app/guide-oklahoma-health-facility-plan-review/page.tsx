import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { SITE, ID } from "@/lib/schema";
import PlanReviewContent from "./content";

const SLUG = "guide-oklahoma-health-facility-plan-review";
const URL = `${SITE}/${SLUG}`;
const TITLE = "Oklahoma Health Facility Plan Review | ODH";
const PUBLISHED = "2026-07-29";
const MODIFIED = "2026-07-29";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "ODH has 45 calendar days for technical review — but the clock tolls on every information request. What triggers Oklahoma state plan review, the fee tiers, and the third-submittal reset.",
  keywords: [
    "oklahoma health department plan review",
    "ODH 1432 plan review submittal",
    "ambulatory surgery center licensing oklahoma",
    "OAC 310:667",
    "OAC 310:615",
    "FGI guidelines oklahoma",
    "tulsa commercial building permit process",
    "healthcare construction oklahoma",
  ],
  openGraph: {
    images: [{ url: "https://www.udgok.com/images/og-default.png", width: 1200, height: 630, alt: "UDGOK — Medical & Dental Design-Build Construction in Tulsa, Oklahoma" }],
    title: "Oklahoma Health Facility Plan Review: What ODH Requires",
    description:
      "The 10-day and 45-day statutory clocks, the fee tiers, and the third-submittal reset most project teams never see coming.",
    url: URL,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  alternates: { canonical: URL },
};

/**
 * Article schema carries datePublished AND dateModified because freshness is one
 * of the better-evidenced signals in whether AI answer engines cite a page.
 * Bump dateModified ONLY when the content is substantively revised — and bump
 * `updated` in lib/insights.ts at the same time.
 */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Oklahoma Health Facility Plan Review: What ODH Requires and How Long It Takes",
  description:
    "A sourced guide to Oklahoma State Department of Health facility plan review — which facilities it applies to, the statutory 10-day and 45-day review clocks, fee tiers, submittal requirements, and how it interacts with a City of Tulsa building permit.",
  url: URL,
  mainEntityOfPage: URL,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  image: `${SITE}/images/og-default.png`,
  inLanguage: "en-US",
  author: { "@id": ID.organization },
  publisher: { "@id": ID.organization },
  about: [
    { "@type": "Thing", name: "Healthcare facility construction" },
    { "@type": "Thing", name: "Oklahoma health facility regulation" },
  ],
  citation: [
    "https://oklahoma.gov/health/services/licensing-inspections/medical-facilities-service/health-facilities-plan-review.html",
    "https://oklahoma.gov/content/dam/ok/en/health/health2/documents/updated-oac-310-667-0919.pdf",
    "https://oklahoma.gov/content/dam/ok/en/health/health2/documents/oac-310-615-0919.pdf",
    "https://www.cityoftulsa.org/government/departments/development-services/plans-review/",
    "https://oklahoma.gov/cib.html",
  ],
};

export default function Page() {
  const breadcrumbs = [
    { name: "Home", url: SITE },
    { name: "Insights", url: `${SITE}/insights` },
    { name: "Oklahoma Health Facility Plan Review", url: URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticlePage
        title="Oklahoma Health Facility Plan Review: What ODH Requires and How Long It Takes"
        category="Regulatory & Compliance"
        date="Updated July 29, 2026"
        author="UDGOK Preconstruction"
        readTime="14 min read"
        imageSrc="/images/medical-office-design-build.png"
      >
        <PlanReviewContent />
      </ArticlePage>
    </>
  );
}
