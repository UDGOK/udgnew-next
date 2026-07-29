import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  async headers() {
    return [
      {
        // Baseline security/trust headers. Not direct ranking factors, but they
        // are trust signals, they are what security scanners and enterprise
        // procurement check, and they cost nothing.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        // Machine-readable knowledge files: let any origin fetch them.
        source: "/:file(llms.txt|llms-full.txt|ai.txt)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
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
      // ── Old /news route → resources ──
      // NOTE: this previously pointed at /insights, which does not exist and
      // returns 404 — i.e. a permanent redirect into a dead page. Repoint it at
      // /insights only once that route actually ships.
      { source: "/news", destination: "/resources", permanent: true },
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
