import type { MetadataRoute } from "next";

/**
 * robots.txt
 *
 * Tokens below are the ones each vendor actually publishes. Two rules of thumb:
 *
 *  1. A token nobody uses is dead weight, not insurance. `MistralBot`,
 *     `GrokBot`, `DeepSeekBot`, `BraveBot` and `Timpibot` were previously listed
 *     but are not documented user-agents — the real Mistral token is
 *     `MistralAI-User`, and xAI publishes no declared UA at all (it crawls with
 *     spoofed browser strings). They have been corrected or dropped.
 *
 *  2. `Google-Extended` does NOT control AI Overviews or AI Mode. Those are
 *     served from the ordinary Googlebot index. Google-Extended governs only
 *     Gemini Apps and Vertex grounding. Blocking it would not remove UDGOK from
 *     AI Overviews; blocking Googlebot would remove UDGOK from everything.
 *
 * Also note: most AI crawlers do NOT execute JavaScript (GPTBot, OAI-SearchBot,
 * ClaudeBot, PerplexityBot, Meta-ExternalAgent, CCBot, Bytespider). Anything
 * that should be citable must be in the initial server-rendered HTML. Googlebot,
 * Bingbot and Applebot are the exceptions that do render.
 *
 * Vendor references:
 *   OpenAI      https://developers.openai.com/api/docs/bots
 *   Anthropic   https://support.claude.com/en/articles/8896518
 *   Perplexity  https://docs.perplexity.ai/guides/bots
 *   Google      https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
 *   Apple       https://support.apple.com/en-us/119829
 */

const PRIVATE = ["/api/", "/portal/"];

/** Allow everything except the private paths. */
const open = (userAgent: string) => ({
  userAgent,
  allow: "/",
  disallow: PRIVATE,
});

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },

      // ── Traditional search ──
      open("Googlebot"), // also feeds AI Overviews and AI Mode
      open("Googlebot-Image"),
      open("Bingbot"), // feeds Copilot; renders JavaScript
      open("DuckDuckBot"),

      // ── OpenAI ──
      open("OAI-SearchBot"), // ChatGPT Search index — the one that drives citations
      open("GPTBot"), // model training
      open("ChatGPT-User"), // user-initiated fetch
      open("OAI-AdsBot"), // ad landing-page review

      // ── Anthropic ──
      open("ClaudeBot"), // training
      open("Claude-SearchBot"), // search index
      open("Claude-User"), // user-initiated fetch

      // ── Google AI ──
      open("Google-Extended"), // Gemini Apps / Vertex grounding only
      open("GoogleOther"),
      open("Google-CloudVertexBot"),

      // ── Apple ──
      // Applebot is the crawler (Siri, Spotlight, Safari) and it RENDERS JS.
      // Applebot-Extended is a control token only — it governs whether
      // Applebot's data trains Apple Intelligence; it does not crawl.
      open("Applebot"),
      open("Applebot-Extended"),

      // ── Other answer engines ──
      open("PerplexityBot"),
      open("Perplexity-User"),
      open("DuckAssistBot"),
      open("MistralAI-User"),
      open("Meta-ExternalAgent"),
      open("Amazonbot"),
      open("YouBot"),
      open("cohere-ai"),
      open("Bytespider"),

      // ── Knowledge graph / index builders ──
      open("CCBot"), // Common Crawl — feeds many downstream training sets
      open("Diffbot"),
      open("ImagesiftBot"),
    ],
    sitemap: "https://www.udgok.com/sitemap.xml",
    host: "https://www.udgok.com",
  };
}
