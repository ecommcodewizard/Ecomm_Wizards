// Reads blog content out of Payload and hands it back in the shapes the
// existing /insights pages already render.
//
// WHY A TRANSLATION LAYER INSTEAD OF REWRITING THE PAGES. The article template
// is ~500 lines of careful markup — table of contents, structured data, share
// links, related posts. Rewriting it against Payload's own record shape would
// have risked all of that to no benefit. Mapping Payload's records into the
// existing `Post` and `Article` types instead means the renderer is untouched
// and keeps working exactly as it did.
//
// Everything here runs on the server only. It talks to Payload in-process
// rather than over HTTP, so there is no round trip and no API route to secure.

import { getPayload } from "payload";
import config from "@payload-config";

import type { Article, Block, Section } from "./articles";
import { readMinutes } from "./articles";
import { TOPICS, type Post, type TopicSlug } from "./posts";

const KNOWN_TOPICS = new Set<string>(TOPICS.map((t) => t.slug));
// Used when a category exists in the CMS that is not one of the fixed topics.
// Falling back beats throwing: a mislabelled article should still render.
const FALLBACK_TOPIC: TopicSlug = "development";

const asTopic = (slug: unknown): TopicSlug =>
  typeof slug === "string" && KNOWN_TOPICS.has(slug)
    ? (slug as TopicSlug)
    : FALLBACK_TOPIC;

type Rel<T> = T | number | null | undefined;

const rel = <T,>(value: Rel<T>): T | null =>
  value && typeof value === "object" ? (value as T) : null;

type MediaDoc = { url?: string | null; alt?: string | null; width?: number | null; height?: number | null };

const mediaUrl = (value: Rel<MediaDoc>): string | undefined =>
  rel<MediaDoc>(value)?.url ?? undefined;

// Payload stores each block type in its own shape; the renderer expects the
// flat Block union from articles.ts. The block slugs here must stay in step
// with collections/Posts.ts.
function toBlock(raw: Record<string, unknown>): Block | null {
  switch (raw.blockType) {
    case "paragraph":
      return { type: "p", text: String(raw.text ?? "") };
    case "heading":
      return { type: "h3", text: String(raw.text ?? "") };
    case "list": {
      const items = Array.isArray(raw.items)
        ? (raw.items as { text?: string }[]).map((i) => String(i?.text ?? "")).filter(Boolean)
        : [];
      if (!items.length) return null;
      return { type: raw.style === "ol" ? "ol" : "ul", items };
    }
    case "tip":
      return { type: "tip", text: String(raw.text ?? "") };
    case "quote":
      return {
        type: "quote",
        text: String(raw.text ?? ""),
        ...(raw.cite ? { cite: String(raw.cite) } : {}),
      };
    case "image": {
      const image = rel<MediaDoc>(raw.image as Rel<MediaDoc>);
      if (!image?.url) return null;
      return {
        type: "image",
        src: image.url,
        alt: image.alt ?? "",
        ...(raw.caption ? { caption: String(raw.caption) } : {}),
        // The renderer needs intrinsic dimensions to avoid layout shift.
        // Payload records them on upload; these are a last resort.
        width: image.width ?? 1600,
        height: image.height ?? 900,
      };
    }
    default:
      return null;
  }
}

type PostDoc = Record<string, unknown>;

function toArticle(doc: PostDoc): Article {
  const sections: Section[] = Array.isArray(doc.sections)
    ? (doc.sections as Record<string, unknown>[]).map((s, i) => ({
        id: String(s.anchor || `section-${i + 1}`),
        title: String(s.title ?? ""),
        blocks: Array.isArray(s.blocks)
          ? (s.blocks as Record<string, unknown>[]).map(toBlock).filter((b): b is Block => b !== null)
          : [],
      }))
    : [];

  return {
    summary: String(doc.excerpt ?? ""),
    answer: String(doc.answer ?? ""),
    takeaways: Array.isArray(doc.takeaways)
      ? (doc.takeaways as { text?: string }[]).map((t) => String(t?.text ?? "")).filter(Boolean)
      : [],
    sections,
    faqs: Array.isArray(doc.faqs)
      ? (doc.faqs as { question?: string; answer?: string }[]).map((f) => ({
          q: String(f?.question ?? ""),
          a: String(f?.answer ?? ""),
        }))
      : [],
    sources: Array.isArray(doc.sources)
      ? (doc.sources as { title?: string; publisher?: string; url?: string }[]).map((s) => ({
          title: String(s?.title ?? ""),
          publisher: String(s?.publisher ?? ""),
          url: String(s?.url ?? ""),
        }))
      : [],
    ...(doc.contentUpdatedAt ? { updated: String(doc.contentUpdatedAt).slice(0, 10) } : {}),
  };
}

type AuthorDoc = { name?: string | null };

function toPost(doc: PostDoc, article: Article): Post {
  const category = rel<{ slug?: string }>(doc.category as Rel<{ slug?: string }>);
  const author = rel<AuthorDoc>(doc.author as Rel<AuthorDoc>);
  const published = doc.publishedAt ? String(doc.publishedAt) : "";

  return {
    slug: String(doc.slug ?? ""),
    title: String(doc.title ?? ""),
    excerpt: String(doc.excerpt ?? ""),
    topic: asTopic(category?.slug),
    date: published.slice(0, 10),
    readMins: readMinutes(article),
    author: author?.name ?? "Ecomm Wizards",
    ...(mediaUrl(doc.heroImage as Rel<MediaDoc>) ? { image: mediaUrl(doc.heroImage as Rel<MediaDoc>) } : {}),
  };
}

// `depth: 2` resolves relationships (category, author, hero image) and the
// images nested inside section blocks, which are one level deeper.
const DEPTH = 2;

// A BLOG THAT CANNOT REACH ITS DATABASE MUST NOT TAKE THE SITE DOWN.
//
// Next prerenders /insights at build time, so a build with no DATABASE_URI —
// CI, for one — would otherwise fail outright, and a failed build on this host
// means an unavailable site, not just an unavailable blog. Swallowing the error
// costs an empty listing that fixes itself on the next revalidation; not
// swallowing it costs the whole deploy. The warning makes the cause obvious in
// a build log rather than leaving a silently empty blog.
async function withFallback<T>(label: string, fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    console.warn(
      `[blog] ${label} failed; serving fallback. Check DATABASE_URI. ${(error as Error)?.message ?? error}`,
    );
    return fallback;
  }
}

/** Published posts, newest first, for the /insights listing. */
export async function listPosts(): Promise<Post[]> {
  return withFallback("listPosts", () => listPostsUncached(), []);
}

async function listPostsUncached(): Promise<Post[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    // Belt and braces: the collection's own read access already hides drafts
    // from unauthenticated requests, and this says so explicitly at the call
    // site so a future change to either one cannot quietly publish a draft.
    where: { _status: { equals: "published" } },
    depth: DEPTH,
    limit: 500,
    sort: "-publishedAt",
    overrideAccess: false,
  });

  return (docs as PostDoc[]).map((doc) => toPost(doc, toArticle(doc)));
}

/** One published post plus its body, or null if there is no such post. */
export async function getPost(
  slug: string,
): Promise<{ post: Post; article: Article } | null> {
  return withFallback(`getPost(${slug})`, () => getPostUncached(slug), null);
}

async function getPostUncached(
  slug: string,
): Promise<{ post: Post; article: Article } | null> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    where: { and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }] },
    depth: DEPTH,
    limit: 1,
    overrideAccess: false,
  });

  const doc = (docs as PostDoc[])[0];
  if (!doc) return null;

  const article = toArticle(doc);
  return { post: toPost(doc, article), article };
}
