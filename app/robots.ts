import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/portal/dashboard/"],
      },
      // ── Traditional Search ──
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // ── OpenAI ──
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/portal/dashboard/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/", "/portal/dashboard/"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/", "/portal/dashboard/"],
      },
      // ── Google AI ──
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // ── Anthropic (Claude) ──
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // ── Perplexity ──
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // ── xAI (Grok) ──
      {
        userAgent: "GrokBot",
        allow: "/",
      },
      // ── DeepSeek ──
      {
        userAgent: "DeepSeekBot",
        allow: "/",
      },
      // ── Mistral AI ──
      {
        userAgent: "MistralBot",
        allow: "/",
      },
      // ── ByteDance / TikTok ──
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/api/", "/portal/dashboard/"],
      },
      // ── Meta ──
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
        disallow: ["/api/", "/portal/dashboard/"],
      },
      // ── Amazon ──
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      // ── Apple ──
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      // ── You.com ──
      {
        userAgent: "YouBot",
        allow: "/",
      },
      // ── Cohere ──
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      // ── Diffbot (Knowledge Graph) ──
      {
        userAgent: "Diffbot",
        allow: "/",
      },
      // ── Brave Search ──
      {
        userAgent: "BraveBot",
        allow: "/",
      },
      // ── Timpi Search ──
      {
        userAgent: "Timpibot",
        allow: "/",
      },
      // ── ImageSift ──
      {
        userAgent: "ImagesiftBot",
        allow: "/",
      },
    ],
    sitemap: "https://www.udgok.com/sitemap.xml",
  };
}
