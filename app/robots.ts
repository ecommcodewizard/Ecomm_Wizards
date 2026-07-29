import type { MetadataRoute } from "next";

const SITE_URL = "https://ecommwizards.com";

// Named AI crawlers, all explicitly allowed. This is intent-signaling: the "*"
// rule below already allows everyone, so this changes no behavior today — but a
// crawler obeys its MOST-SPECIFIC matching group and ignores "*", so each named
// group must itself allow "/" (otherwise we'd accidentally restrict a bot that
// "*" currently allows). Googlebot/Bingbot are intentionally not named: normal
// Search + AI Overviews ride the standard crawl, already covered by "*".
const AI_CRAWLERS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",        // OpenAI
  "ClaudeBot", "Claude-Web", "anthropic-ai",         // Anthropic
  "PerplexityBot", "Perplexity-User",                // Perplexity
  "Google-Extended",                                  // Google (Gemini/Vertex grounding + AI training)
  "Applebot-Extended",                                // Apple AI
  "Amazonbot", "CCBot", "Bytespider",                 // Amazon, Common Crawl, ByteDance
  "meta-externalagent", "FacebookBot",                // Meta
  "cohere-ai", "MistralAI-User",                      // Cohere, Mistral
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // /admin is the private lead dashboard + login — block all crawlers from it
      // (the pages also carry a noindex,nofollow meta tag as a second layer).
      { userAgent: AI_CRAWLERS, allow: "/", disallow: "/admin" },
      { userAgent: "*", allow: "/", disallow: "/admin" },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/video-sitemap.xml`],
    host: SITE_URL,
  };
}
