import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
    ],
  },
  async redirects() {
    return [
      // ── Special-case .html redirects ──
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/index_final.html", destination: "/", permanent: true },
      { source: "/sitemap.html", destination: "/sitemap-page", permanent: true },
      // ── Orphaned routes → redirect to parent pages ──
      { source: "/faq-dental-office-construction", destination: "/dental-office-construction-tulsa", permanent: true },
      { source: "/faq-medical-office-construction", destination: "/medical-office-design-build-tulsa", permanent: true },
      { source: "/medical-gas-installation-dental", destination: "/medical-gas-installation", permanent: true },
      // ── Old Wix blog posts → resources page ──
      { source: "/post/:slug", destination: "/resources", permanent: true },
      // ── Old Wix project pages → projects page ──
      { source: "/project/:slug", destination: "/projects", permanent: true },
      // ── Old /news route → insights ──
      { source: "/news", destination: "/insights", permanent: true },
      // ── Catch-all: strip .html extension and 301 redirect ──
      {
        source: "/:slug([\\w-]+)\\.html",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
