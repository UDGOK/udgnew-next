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
