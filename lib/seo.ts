/**
 * Shared SEO constants.
 *
 * Why this file exists: Next.js REPLACES the `openGraph` object rather than
 * deep-merging it. A page declaring `openGraph: { title, description }` silently
 * drops the images defined in the root layout — which is how 67 of 94 pages
 * shipped with no og:image at all. The file-based `app/opengraph-image` convention
 * does not override an explicit page-level `openGraph` object either, so the
 * image has to be named on every page that declares one.
 *
 * New pages should spread OG_IMAGE_META into their openGraph block.
 */

export const SITE_URL = "https://www.udgok.com";

export const OG_IMAGE = {
  url: `${SITE_URL}/images/og-default.png`,
  width: 1200,
  height: 630,
  alt: "UDGOK — Medical & Dental Design-Build Construction in Tulsa, Oklahoma",
} as const;

/** Spread into a page's `openGraph` block. */
export const OG_IMAGE_META = { images: [OG_IMAGE] } as const;

/** Build an absolute canonical URL from a route path. */
export function canonical(path = "/"): string {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}/${path.replace(/^\/+/, "")}`;
}
