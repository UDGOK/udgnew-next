import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.udgok.com";
  const now = new Date().toISOString();

  // ── Core Pages ──
  const core: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  // ── Service Pages ──
  const services = [
    "design-build",
    "medical-office-design-build-tulsa",
    "dental-office-construction-tulsa",
    "oral-surgeon-office-construction-tulsa",
    "eye-clinic-construction-tulsa",
    "medical-gas-installation",
    "tenant-improvements",
    "preconstruction",
    "virtual-design-construction",
    "safety-program",
    "convenience-store-construction-tulsa",
    "shopping-center-construction-tulsa",
    "commercial-contractor-tulsa",
    "construction-companies-tulsa",
    "retail-construction-tulsa",
    "hospitality-construction-bixby",
    "hospitality-construction-broken-arrow",
    "office-construction-bixby",
    "office-construction-tulsa",
    "build-to-suit-tulsa",
    "industrial-buildings-tulsa",
    "construction-company-south-tulsa",
    "construction-company-midtown-tulsa",
    "construction-company-downtown-tulsa",
    "construction-company-east-tulsa",
    "construction-company-north-tulsa",
    "tulsa-construction-costs",
    "warehouse-construction-tulsa",
    "pre-engineered-metal-buildings-tulsa",
    "cold-storage-construction-tulsa",
    "manufacturing-facility-construction-tulsa",
    "flex-space-construction-tulsa",
    "self-storage-construction-tulsa",
    "agricultural-building-construction-oklahoma",
    "industrial-renovation-tulsa",
    "concrete-driveway-tulsa",
    "asphalt-repair-tulsa",
    "ai-robotics",
    "property-intelligence",
    "market-intelligence",
    "ambulatory-surgery-center-construction",
    "restaurant-construction-tulsa",
    "sustainable-construction-tulsa",
    "adaptive-reuse-construction-tulsa",
    "dental-office-remodel-tulsa",
    "orthodontic-office-construction-tulsa",
  ].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Location Pages ──
  const locations = [
    "tulsa-ok-design-build",
    "broken-arrow-ok-design-build",
    "bixby-ok-design-build",
    "jenks-ok-design-build",
    "owasso-ok-design-build",
    "sapulpa-ok-design-build",
    "haskell-ok-design-build",
    "sand-springs-ok-design-build",
    "claremore-ok-design-build",
    "glenpool-ok-design-build",
    "oklahoma-city-medical-construction",
    "edmond-ok-medical-construction",
    "dallas-medical-construction",
    "tulsa-medical-construction",
    "bixby-dental-construction",
  ].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Articles, Blogs & Knowledge Hub ──
  const articles = [
    "dental-construction-costs",
    "dental-construction-insights",
    "digital-twin-technology",
    "digital-twin-technology-guide-2026",
    "guide-commercial-brokers",
    "guide-developers",
    "ai-robotic-surgery-2026",
    "construction-technology-trends-2026",
    "guide-dental-office-construction-tulsa",
    "guide-dental-practice-financing-tulsa",
    "insights",
    "article-ada-compliance-healthcare",
    "article-dental-office-construction-timeline",
    "article-medical-gas-installation-guide",
    "article-medical-office-design-checklist",
    "blog-dental-construction-costs-oklahoma",
    "blog-medical-office-design-checklist",
    "guide-medical-office-cost-tulsa",
    "guide-dental-buildout-checklist-oklahoma",
    "guide-pemb-vs-steel-oklahoma",
  ].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));


  // ── Tools & Calculators ──
  const tools = [
    "tools",
    "calculator-concrete",
    "calculator-drywall",
    "calculator-paint",
    "calculator-brick",
    "calculator-roofing",
    "calculator-flooring",
  ].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // ── Community & Company ──
  const company = [
    "community",
    "partners",
    "subcontractors",
    "subcontractor-dashboard",
    "transparency",
    "portal",
    "privacy-policy",
    "terms-of-service",
    "sitemap-page",
  ].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...core, ...services, ...locations, ...articles, ...tools, ...company];
}

