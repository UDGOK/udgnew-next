/**
 * Registry for the /insights knowledge hub.
 *
 * Single list, consumed by /insights. Add an entry here when you publish a
 * guide or article and it appears on the hub automatically.
 *
 * `updated` matters: content freshness is one of the better-evidenced factors
 * in whether AI answer engines cite a page — roughly three quarters of pages
 * that get cited were updated within the last year, and durable visibility
 * tracks with a ~6-month refresh cadence rather than a stream of new posts.
 * When you substantively revise a page, bump `updated` AND change the
 * `dateModified` in that page's Article JSON-LD. Do not bump it without
 * actually revising the content.
 */

export type InsightCategory =
  | "Regulatory & Compliance"
  | "Cost & Budget"
  | "Process & Planning"
  | "Technology";

export interface Insight {
  slug: string;
  title: string;
  /** One-sentence answer-first summary. This is what gets extracted. */
  summary: string;
  category: InsightCategory;
  /** ISO date. */
  published: string;
  /** ISO date — the last substantive revision. */
  updated: string;
  readTime: string;
  /** Set true for cornerstone content that should sort first. */
  featured?: boolean;
}

export const INSIGHTS: Insight[] = [
  {
    slug: "guide-oklahoma-health-facility-plan-review",
    title: "Oklahoma Health Facility Plan Review: What ODH Requires and How Long It Takes",
    summary:
      "Oklahoma gives the State Department of Health 45 calendar days to complete technical review — but the clock tolls the moment they request more information. What triggers state review, what it costs, and the third-submittal fee reset most teams never see coming.",
    category: "Regulatory & Compliance",
    published: "2026-07-29",
    updated: "2026-07-29",
    readTime: "14 min",
    featured: true,
  },
  {
    slug: "guide-medical-office-cost-tulsa",
    title: "Cost to Build a Medical Office in Tulsa (2026 Guide)",
    summary:
      "A 3,000 SF medical office in Tulsa runs $450,000–$1,050,000 in construction at $150–$350 per square foot, before equipment. Full breakdown by specialty, plus the three line items that drive most of the variance.",
    category: "Cost & Budget",
    published: "2026-03-01",
    updated: "2026-06-13",
    readTime: "12 min",
    featured: true,
  },
  {
    slug: "dental-construction-costs",
    title: "Dental Office Construction Costs in Oklahoma",
    summary:
      "What a dental build-out actually costs in Oklahoma, operatory by operatory, and where the budget goes.",
    category: "Cost & Budget",
    published: "2026-02-10",
    updated: "2026-06-13",
    readTime: "10 min",
  },
  {
    slug: "guide-dental-office-construction-tulsa",
    title: "Dental Office Construction in Tulsa: 2026 Guide",
    summary:
      "End-to-end guide to building a dental practice in Tulsa — site selection, lease negotiation, permitting, and the build itself.",
    category: "Process & Planning",
    published: "2026-01-20",
    updated: "2026-06-13",
    readTime: "15 min",
  },
  {
    slug: "guide-dental-buildout-checklist-oklahoma",
    title: "Dental Office Build-Out Checklist for Oklahoma",
    summary:
      "The sequence of decisions and approvals for an Oklahoma dental build-out, in the order they actually come up.",
    category: "Process & Planning",
    published: "2026-02-01",
    updated: "2026-06-13",
    readTime: "9 min",
  },
  {
    slug: "guide-dental-practice-financing-tulsa",
    title: "Dental Practice Financing Tulsa: Remodel vs Rebuild",
    summary:
      "How the remodel-or-rebuild decision changes your financing options and your 2026 tax position.",
    category: "Cost & Budget",
    published: "2026-03-15",
    updated: "2026-06-13",
    readTime: "11 min",
  },
  {
    slug: "guide-pemb-vs-steel-oklahoma",
    title: "PEMB vs Steel for Oklahoma Warehouses (2026)",
    summary:
      "Pre-engineered metal buildings versus conventional steel for Oklahoma warehouse projects — cost, schedule, and where each one stops making sense.",
    category: "Cost & Budget",
    published: "2026-04-02",
    updated: "2026-06-13",
    readTime: "10 min",
  },
  {
    slug: "guide-commercial-brokers",
    title: "A Commercial Broker's Guide to Design-Build",
    summary:
      "What brokers need to know to position a design-build contractor to a tenant or owner client.",
    category: "Process & Planning",
    published: "2026-04-20",
    updated: "2026-06-13",
    readTime: "8 min",
  },
  {
    slug: "guide-developers",
    title: "A Developer's Guide to Design-Build Delivery",
    summary:
      "How design-build changes risk allocation, schedule, and pricing certainty on a commercial development.",
    category: "Process & Planning",
    published: "2026-04-20",
    updated: "2026-06-13",
    readTime: "8 min",
  },
  {
    slug: "digital-twin-technology-guide-2026",
    title: "Digital Twin Technology in Construction: 2026 Guide",
    summary:
      "What a construction digital twin actually is, what it costs to produce, and when it pays for itself.",
    category: "Technology",
    published: "2026-05-01",
    updated: "2026-06-13",
    readTime: "11 min",
  },
  {
    slug: "construction-technology-trends-2026",
    title: "10 Construction Technologies for 2026",
    summary:
      "From bricklaying robots to AI-powered scheduling — the technologies changing how buildings get built this year.",
    category: "Technology",
    published: "2026-05-10",
    updated: "2026-06-13",
    readTime: "12 min",
  },
  {
    slug: "ai-robotic-surgery-2026",
    title: "AI & Robotic Surgery 2026: What It Means for ASCs",
    summary:
      "Autonomous surgical systems are changing what an operating suite has to accommodate. What that means if you are building one.",
    category: "Technology",
    published: "2026-05-20",
    updated: "2026-06-13",
    readTime: "10 min",
  },
];

export const CATEGORIES: InsightCategory[] = [
  "Regulatory & Compliance",
  "Cost & Budget",
  "Process & Planning",
  "Technology",
];

/** Featured first, then newest-updated first. */
export const sortedInsights = [...INSIGHTS].sort((a, b) => {
  if (!!b.featured !== !!a.featured) return Number(!!b.featured) - Number(!!a.featured);
  return b.updated.localeCompare(a.updated);
});
