import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

const BASE = "https://www.udgok.com";
const APP_DIR = path.join(process.cwd(), "app");

/**
 * Routes that exist but must NOT be submitted to search engines.
 * Everything else with a page file is discovered automatically, so the sitemap
 * can never again drift out of sync with what actually ships.
 *
 * (Before this change the sitemap was a hand-maintained array and HAD drifted:
 * 9 submitted URLs returned 404, and 3 live pages were never submitted at all.)
 */
const EXCLUDED = new Set([
  "api",
  "portal", // auth-gated; also Disallow'd in robots.ts
]);

type Hints = {
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

/** Per-route sitemap hints. Anything not listed falls through to inferHints(). */
const PRIORITY: Record<string, Hints> = {
  "": { priority: 1.0, changeFrequency: "weekly" },
  about: { priority: 0.9, changeFrequency: "monthly" },
  contact: { priority: 0.9, changeFrequency: "monthly" },
  projects: { priority: 0.9, changeFrequency: "weekly" },
  services: { priority: 0.9, changeFrequency: "monthly" },
  resources: { priority: 0.8, changeFrequency: "weekly" },
  insights: { priority: 0.8, changeFrequency: "weekly" },
  transparency: { priority: 0.4, changeFrequency: "yearly" },
  community: { priority: 0.4, changeFrequency: "yearly" },
  partners: { priority: 0.4, changeFrequency: "yearly" },
  subcontractors: { priority: 0.4, changeFrequency: "yearly" },
  "privacy-policy": { priority: 0.3, changeFrequency: "yearly" },
  "terms-of-service": { priority: 0.3, changeFrequency: "yearly" },
  "sitemap-page": { priority: 0.3, changeFrequency: "yearly" },
};

/** Lower-priority buckets matched by slug shape. */
function inferHints(slug: string): Hints {
  if (PRIORITY[slug]) return PRIORITY[slug];
  if (slug === "tools" || slug.startsWith("calculator-")) {
    return { priority: 0.5, changeFrequency: "monthly" };
  }
  if (slug.startsWith("guide-") || slug.startsWith("article-") || slug.startsWith("blog-")) {
    return { priority: 0.6, changeFrequency: "monthly" };
  }
  return { priority: 0.7, changeFrequency: "monthly" };
}

/**
 * Real per-URL lastmod, rather than one shared `new Date()`.
 *
 * Google discounts lastmod entirely when every URL in a sitemap carries an
 * identical timestamp — which is exactly what the previous implementation did
 * (all 103 URLs stamped with the build time).
 *
 * Git commit dates are the source of truth. A CI checkout rewrites every file's
 * mtime to the clone time, so mtime alone would collapse right back to a single
 * value on Vercel. We build the git map once, then fall back to mtime (and
 * finally to now) if git is unavailable or the clone is too shallow.
 */
const gitDates: Map<string, number> = (() => {
  const map = new Map<string, number>();
  try {
    // One pass over history: `%cI` commit date lines followed by changed paths.
    const out = execSync("git log --name-only --format=%cI --diff-filter=AM -- app", {
      cwd: process.cwd(),
      encoding: "utf-8",
      maxBuffer: 64 * 1024 * 1024,
      stdio: ["ignore", "pipe", "ignore"],
    });
    let current = 0;
    for (const line of out.split("\n")) {
      const t = line.trim();
      if (!t) continue;
      if (/^\d{4}-\d{2}-\d{2}T/.test(t)) {
        current = Date.parse(t);
      } else if (current && !map.has(t)) {
        // git log is newest-first, so the first sighting is the latest change.
        map.set(t, current);
      }
    }
  } catch {
    // No git in the build environment — mtime fallback below still applies.
  }
  return map;
})();

function lastModifiedFor(routeDir: string): Date {
  try {
    const files = ["page.tsx", "page.ts"]
      .map((f) => path.join(routeDir, f))
      .filter((f) => fs.existsSync(f));
    if (!files.length) return new Date();

    const stamps = files.map((f) => {
      const rel = path.relative(process.cwd(), f).split(path.sep).join("/");
      return gitDates.get(rel) ?? fs.statSync(f).mtimeMs;
    });
    return new Date(Math.max(...stamps));
  } catch {
    return new Date();
  }
}

/** Recursively collect every static route that has a page file. */
function collectRoutes(dir: string, prefix = ""): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    // Skip private folders, route groups, parallel/intercepted routes and
    // dynamic segments — none are directly indexable static URLs.
    if (
      name.startsWith("_") ||
      name.startsWith("(") ||
      name.startsWith("@") ||
      name.startsWith("[")
    ) {
      continue;
    }
    if (!prefix && EXCLUDED.has(name)) continue;

    const full = path.join(dir, name);
    const slug = prefix ? `${prefix}/${name}` : name;
    if (
      fs.existsSync(path.join(full, "page.tsx")) ||
      fs.existsSync(path.join(full, "page.ts"))
    ) {
      out.push(slug);
    }
    out.push(...collectRoutes(full, slug));
  }
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = collectRoutes(APP_DIR).sort();

  const root: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: lastModifiedFor(APP_DIR),
      changeFrequency: PRIORITY[""].changeFrequency,
      priority: PRIORITY[""].priority,
    },
  ];

  const pages: MetadataRoute.Sitemap = slugs.map((slug) => {
    const { priority, changeFrequency } = inferHints(slug);
    return {
      url: `${BASE}/${slug}`,
      lastModified: lastModifiedFor(path.join(APP_DIR, slug)),
      changeFrequency,
      priority,
    };
  });

  return [...root, ...pages];
}
