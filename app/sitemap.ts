import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://udgok.com";
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
    "retail-construction-tulsa",
    "hospitality-construction-bixby",
    "hospitality-construction-broken-arrow",
    "office-construction-bixby",
    "office-construction-tulsa",
    "build-to-suit-tulsa",
    "industrial-buildings-tulsa",

    "ai-robotics",
    "property-intelligence",
    "market-intelligence",
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
    "oklahoma-city-medical-construction",
    "dallas-medical-construction",
    "tulsa-medical-construction",
    "bixby-dental-construction",
  ].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Articles & Knowledge Hub ──
  const articles = [
    "dental-construction-costs",
    "digital-twin-technology",
    "digital-twin-technology-guide-2026",
    "guide-commercial-brokers",
    "guide-developers",
    "ai-robotic-surgery-2026",
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
    "transparency",
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
