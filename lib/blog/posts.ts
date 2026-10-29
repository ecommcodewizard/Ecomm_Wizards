// Blog topics map 1:1 to the services we sell, so every post points a reader
// at something they can buy.
export const TOPICS = [
  { slug: "development", label: "Shopify Development", specialist: "Shopify Development Specialist", service: { label: "Shopify Development", href: "/services/shopify-development-agency" } },
  { slug: "design", label: "Design & UX", specialist: "Design & UX Specialist", service: { label: "Shopify UX & UI Design", href: "/services/shopify-ux-and-ui-design" } },
  { slug: "seo", label: "SEO", specialist: "SEO Specialist", service: { label: "Shopify SEO", href: "/services/shopify-seo-agency" } },
  { slug: "aeo-geo", label: "AEO & GEO", specialist: "AEO & GEO Specialist", service: { label: "Ecommerce SEO, AEO & GEO", href: "/services/ecommerce-seo-agency" } },
  { slug: "email", label: "Email & SMS", specialist: "Email Marketing Specialist", service: { label: "Klaviyo Audit", href: "/services/klaviyo-audit" } },
  { slug: "agentic-commerce", label: "Agentic Commerce", specialist: "Agentic Commerce Specialist", service: { label: "Agentic Commerce", href: "/services/shopify-agentic-commerce" } },
  { slug: "cro", label: "CRO", specialist: "CRO Specialist", service: { label: "Shopify CRO", href: "/services/shopify-cro-agency" } },
  { slug: "migration", label: "Migration", specialist: "Migration Specialist", service: { label: "Shopify Migration", href: "/services/migration" } },
] as const;

export type TopicSlug = (typeof TOPICS)[number]["slug"];

export const topicOf = (slug: TopicSlug) => TOPICS.find((t) => t.slug === slug)!;

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  topic: TopicSlug;
  date: string; // ISO yyyy-mm-dd
  readMins: number;
  author: string;
  image?: string; // cover photo; the card shows a plain dark panel without one
  /**
   * Where the subject of the cover photo sits, as percentages, taken from the
   * focal point set in the CMS. Undefined means dead centre.
   */
  focal?: { x: number; y: number };
};

/**
 * Keeps the subject in frame when a cover photo is cropped.
 *
 * ONE PHOTO HAS TO FILL THREE DIFFERENT SHAPES: a 3:2 listing card, a 16:7
 * band at the top of an article, and a 16:11 card under it. Every one of them
 * uses object-fit: cover, which fills the box and discards the overhang, so
 * something is always being thrown away. Without this the browser keeps the
 * middle, which is how a subject standing off to one side gets cut in half.
 *
 * Returns undefined for a centred focal point so the attribute is left off
 * entirely — 50% 50% is the browser's own default, so writing it would be
 * noise in the markup.
 */
export const focalStyle = (post: Post): { objectPosition: string } | undefined =>
  post.focal ? { objectPosition: `${post.focal.x}% ${post.focal.y}%` } : undefined;

export const topicLabel = (slug: TopicSlug) =>
  TOPICS.find((t) => t.slug === slug)!.label;


// The 16 placeholder posts that used to live here are GONE (approved 2026-10-27).
// They were never real: each one was a listing card with no article behind it,
// so 15 of the 16 links on /insights led straight to a 404 on the live site.
// The file header said so — "Replace them with real articles before this page is
// merged, because merging publishes it" — and they were merged anyway.
//
// Articles now come from Payload instead; see lib/blog/cms.ts. What remains here
// is the topic list, which still defines the categories and the service each one
// links to, and the Post type, which is the shape the CMS layer maps records into.
