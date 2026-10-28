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

// The two private areas, blocked for every crawler.
//
//   /admin    the lead dashboard and its login
//   /cms      the Payload CMS and its login
//
// robots.txt matching is a PREFIX match, so "/cms" also covers "/cms-api",
// Payload's REST and GraphQL endpoints. Both are listed anyway, because a rule
// that depends on a reader knowing that is a rule someone deletes later.
//
// Each page also sends noindex,nofollow (Payload's admin.meta.robots), which is
// the layer that actually removes a page if one is ever indexed: a URL blocked
// in robots.txt cannot be crawled, so Google never reads the noindex on it.
// Disallow keeps crawlers away; noindex is what gets a page dropped.
const PRIVATE_PATHS = ["/admin", "/cms", "/cms-api"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_CRAWLERS, allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/video-sitemap.xml`],
    host: SITE_URL,
  };
}
