// Reads blog content out of Payload for the /insights pages.
//
// Everything here runs on the server only, and talks to Payload in-process
// rather than over HTTP, so there is no round trip and no API route to secure.

import { convertLexicalToPlaintext } from "@payloadcms/richtext-lexical/plaintext";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import config from "@payload-config";
import { getPayload } from "payload";

import { TOPICS, type Post, type TopicSlug } from "./posts";

const KNOWN_TOPICS = new Set<string>(TOPICS.map((t) => t.slug));
// Used when a category exists in the CMS that is not one of the fixed topics.
// Falling back beats throwing: a mislabelled article should still render.
const FALLBACK_TOPIC: TopicSlug = "development";

const WORDS_PER_MINUTE = 230;

export type TocEntry = { id: string; title: string };

/**
 * The byline, as the CMS holds it.
 *
 * A real named person with a stated role and relevant experience is worth more
 * than a company name here: it is how a reader, and a search engine, judge who
 * is behind the advice. Null when no author has been chosen, in which case the
 * page falls back to the company.
 */
export type AuthorInfo = {
  name: string;
  role?: string;
  bio?: string;
  avatarUrl?: string;
};

/**
 * What the writer typed on the SEO tab.
 *
 * Empty fields are omitted so the page can fall back to the headline and
 * excerpt. These were being written to the database and read by nothing: the
 * article page built its own title and description and ignored the tab
 * entirely, so a carefully written 55-character meta title was replaced on the
 * live page by an 87-character one nobody chose.
 */
export type Seo = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

export type Faq = {
  question: string;
  /** For display. */
  answer: SerializedEditorState;
  /**
   * The same answer as plain text, for FAQPage structured data. Google wants
   * text there, not markup, and computing it once here keeps the rendered
   * answer and the one Google reads from drifting apart.
   */
  answerText: string;
};

export type Article = {
  /** The standfirst under the title. */
  summary: string;
  /** Optional 40-60 word direct answer, written to be quoted by AI search. */
  answer: string;
  takeaways: string[];
  /** The article body, as the editor stored it. */
  content: SerializedEditorState | null;
  faqs: Faq[];
  /**
   * The writer's own FAQ heading. When set it replaces the one derived from
   * the title entirely; empty means fall back to the derived heading.
   */
  faqHeading?: string;
  toc: TocEntry[];
  showTableOfContents: boolean;
  /** Null when no author has been chosen on the post. */
  author: AuthorInfo | null;
  /** The SEO tab's values, each present only when filled in. */
  seo: Seo;
  /** ISO date, when edited after publishing. */
  updated?: string;
};

const asTopic = (slug: unknown): TopicSlug =>
  typeof slug === "string" && KNOWN_TOPICS.has(slug)
    ? (slug as TopicSlug)
    : FALLBACK_TOPIC;

type Rel<T> = T | number | null | undefined;

const rel = <T,>(value: Rel<T>): T | null =>
  value && typeof value === "object" ? (value as T) : null;

type MediaDoc = { url?: string | null; alt?: string | null };

// Headings are given ids so the contents list can link to them. The same rule
// runs here and in the renderer, so the link and its target always agree —
// deriving them separately is how anchors quietly stop working.
export const headingId = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "section";

type LexicalNode = {
  type?: string;
  tag?: string;
  text?: string;
  children?: LexicalNode[];
};

/** The plain text of a node and everything inside it. */
const nodeText = (node: LexicalNode): string => {
  if (typeof node.text === "string") return node.text;
  return (node.children ?? []).map(nodeText).join("");
};

/**
 * The contents list, built from the body's H2s.
 *
 * Only H2s: an article's sections are its H2s, and including H3s produces a
 * contents list that is longer than some of the sections it points at.
 */
export function tableOfContents(
  content: SerializedEditorState | null,
): TocEntry[] {
  if (!content) return [];
  const root = (content as unknown as { root?: LexicalNode }).root;
  const out: TocEntry[] = [];
  const seen = new Set<string>();

  for (const node of root?.children ?? []) {
    if (node.type !== "heading" || node.tag !== "h2") continue;
    const title = nodeText(node).trim();
    if (!title) continue;
    // Two sections can legitimately share a heading; their anchors cannot.
    let id = headingId(title);
    let n = 2;
    while (seen.has(id)) id = `${headingId(title)}-${n++}`;
    seen.add(id);
    out.push({ id, title });
  }
  return out;
}

const toPlainText = (data: SerializedEditorState): string => {
  try {
    return convertLexicalToPlaintext({ data }).replace(/\s+/g, " ").trim();
  } catch {
    return "";
  }
};

function readMinutes(article: Article): number {
  const parts = [article.summary, article.answer, ...article.takeaways];
  if (article.content) {
    try {
      parts.push(convertLexicalToPlaintext({ data: article.content }));
    } catch {
      // A body that cannot be flattened should not stop the page rendering;
      // the read time is simply based on what is left.
    }
  }
  for (const f of article.faqs) parts.push(f.question);
  const words = parts.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

type PostDoc = Record<string, unknown>;

function toArticle(doc: PostDoc): Article {
  const content = (doc.content as SerializedEditorState | null) ?? null;
  return {
    summary: String(doc.excerpt ?? ""),
    answer: String(doc.answer ?? ""),
    takeaways: Array.isArray(doc.takeaways)
      ? (doc.takeaways as { text?: string }[])
          .map((t) => String(t?.text ?? ""))
          .filter(Boolean)
      : [],
    content,
    faqs: Array.isArray(doc.faqs)
      ? (doc.faqs as { question?: string; answer?: SerializedEditorState }[])
          .filter((f) => f?.question && f?.answer)
          .map((f) => ({
            question: String(f.question),
            answer: f.answer!,
            answerText: toPlainText(f.answer!),
          }))
      : [],
    ...(tidyish(doc.faqHeading) ? { faqHeading: tidyish(doc.faqHeading) } : {}),
    toc: tableOfContents(content),
    showTableOfContents: doc.showTableOfContents !== false,
    author: toAuthor(doc.author as Rel<AuthorDoc>),
    seo: toSeo(doc.meta),
    ...(doc.contentUpdatedAt
      ? { updated: String(doc.contentUpdatedAt).slice(0, 10) }
      : {}),
  };
}

type MetaDoc = {
  title?: string | null;
  description?: string | null;
  image?: Rel<MediaDoc>;
};

function toSeo(value: unknown): Seo {
  const meta = (value ?? {}) as MetaDoc;
  const title = tidyish(meta.title);
  const description = tidyish(meta.description);
  const imageUrl = rel<MediaDoc>(meta.image)?.url ?? undefined;
  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(imageUrl ? { imageUrl } : {}),
  };
}

const tidyish = (v: unknown): string | undefined => {
  const s = typeof v === "string" ? v.replace(/\s+/g, " ").trim() : "";
  return s || undefined;
};

type AuthorDoc = {
  name?: string | null;
  role?: string | null;
  bio?: string | null;
  avatar?: Rel<MediaDoc>;
};

function toAuthor(value: Rel<AuthorDoc>): AuthorInfo | null {
  const doc = rel<AuthorDoc>(value);
  if (!doc?.name) return null;
  const avatarUrl = rel<MediaDoc>(doc.avatar)?.url ?? undefined;
  return {
    name: doc.name,
    ...(doc.role ? { role: doc.role } : {}),
    ...(doc.bio ? { bio: doc.bio } : {}),
    ...(avatarUrl ? { avatarUrl } : {}),
  };
}

function toPost(doc: PostDoc, article: Article): Post {
  const category = rel<{ slug?: string }>(doc.category as Rel<{ slug?: string }>);
  const hero = rel<MediaDoc>(doc.heroImage as Rel<MediaDoc>);
  const published = doc.publishedAt ? String(doc.publishedAt) : "";

  return {
    slug: String(doc.slug ?? ""),
    title: String(doc.title ?? ""),
    excerpt: String(doc.excerpt ?? ""),
    topic: asTopic(category?.slug),
    date: published.slice(0, 10),
    readMins: readMinutes(article),
    // Listing cards only need a name; the full byline lives on the article.
    author: article.author?.name ?? "Ecomm Wizards",
    ...(hero?.url ? { image: hero.url } : {}),
  };
}

// `depth: 2` resolves relationships (category, author, hero image) and the
// images referenced from inside the body, which are one level deeper.
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
  return withFallback("listPosts", listPostsUncached, []);
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
    where: {
      and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }],
    },
    depth: DEPTH,
    limit: 1,
    overrideAccess: false,
  });

  const doc = (docs as PostDoc[])[0];
  if (!doc) return null;

  const article = toArticle(doc);
  return { post: toPost(doc, article), article };
}
