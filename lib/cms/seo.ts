// Generating meta titles, meta descriptions and excerpts.
//
// These back the "Auto-generate" buttons in the CMS. The first version failed
// in most real cases — measured, not guessed:
//   - a 76-character title came back as "...Platform Is Better…", and an
//     ellipsis in a meta title reads as a broken page in a search result
//   - a 26-character title came back at 42 characters, under the 50 the plugin
//     asks for, wasting space Google would have shown
//   - an empty excerpt produced an empty description, so the button appeared
//     to do nothing
//   - a short excerpt produced a short description, nowhere near 100
//
// The rules below come from what Google actually renders: roughly 60
// characters of title and 155 of description before truncation, and it rewrites
// a description it judges unhelpful. So the goal is a COMPLETE, specific
// sentence inside the budget — never a padded one, and never a cut one.

const TITLE_MAX = 60;
/** Below this a cut title loses its subject, so a word-boundary cut is used instead. */
const TITLE_MIN_AFTER_CUT = 45;

const DESC_MIN = 100;
const DESC_MAX = 155;

export const EXCERPT_MIN = 120;
export const EXCERPT_MAX = 200;

const BRAND_SUFFIX = " | Ecomm Wizards";

const tidy = (s: string) => s.replace(/\s+/g, " ").trim();

type LexicalNode = { type?: string; text?: string; children?: LexicalNode[] };

const nodeText = (node: LexicalNode): string =>
  typeof node.text === "string"
    ? node.text
    : (node.children ?? []).map(nodeText).join("");

/**
 * The article's prose, paragraph by paragraph.
 *
 * Headings are skipped deliberately: a description that opens with a heading
 * reads as a fragment, and headings are labels rather than sentences.
 */
export function paragraphs(content: unknown): string[] {
  const root = (content as { root?: LexicalNode } | null)?.root;
  if (!root?.children?.length) return [];
  const out: string[] = [];
  for (const node of root.children) {
    if (node.type !== "paragraph") continue;
    const text = tidy(nodeText(node));
    if (text) out.push(text);
  }
  return out;
}

/**
 * Trims text to a budget, ending on a complete sentence where one falls in
 * range and on a word boundary otherwise.
 *
 * Never appends an ellipsis. A description ending "…" tells a reader the page
 * was cut off rather than that there is more to read, and Google is more
 * likely to replace it with its own.
 */
function trimTo(text: string, min: number, max: number): string {
  const clean = tidy(text);
  if (clean.length <= max) return clean;

  const window = clean.slice(0, max);
  const lastStop = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("! "),
    window.lastIndexOf("? "),
  );
  // A complete sentence is better, but not if it leaves the result too short
  // to say anything.
  if (lastStop >= min) return window.slice(0, lastStop + 1).trim();
  return tidyTail(window.replace(/\s+\S*$/, ""));
}

// Words that cannot end a sentence without leaving it hanging. Cutting at a
// word boundary alone produced things like "...every day, without", which
// reads as a mistake rather than as a summary; dropping the dangling word and
// any trailing comma gives "...every day".
const DANGLING = new RegExp(
  "[\\s,;:—–-]+(" +
    [
      // conjunctions
      "and", "or", "but", "so", "because", "although", "though",
      // prepositions
      "with", "without", "for", "from", "to", "of", "in", "on", "at", "by",
      "as", "into", "onto", "over", "under", "about", "after", "before",
      // relatives and subordinators
      "that", "which", "who", "whom", "whose", "while", "when", "where",
      "if", "than", "then",
      // articles, determiners and possessives — these dangle before a noun
      // that never arrives, e.g. "...for your Shopify store this"
      "the", "a", "an", "this", "these", "those", "every", "each", "some",
      "any", "all", "its", "their", "your", "our", "his", "her", "my",
    ].join("|") +
    ")$",
  "i",
);

function tidyTail(text: string): string {
  let out = text.trim();
  // A clause can end on two of these in a row, e.g. "... and to".
  for (let i = 0; i < 2; i++) out = out.replace(DANGLING, "");
  return out.replace(/[\s,;:—–-]+$/, "").trim();
}

/** Joins source strings until the minimum is reached, then trims to the maximum. */
function build(sources: string[], min: number, max: number): string {
  let text = "";
  for (const part of sources) {
    const next = tidy(part);
    if (!next) continue;
    text = text ? `${text} ${next}` : next;
    if (text.length >= min) break;
  }
  return text ? trimTo(text, min, max) : "";
}

/**
 * The meta title.
 *
 * Keeps the headline intact and adds the brand only when it fits. When the
 * headline is too long it is cut at a natural break — a colon, dash or comma —
 * so the result is a complete phrase rather than a severed one.
 *
 * A SHORT TITLE IS LEFT SHORT. Padding it to reach 50 characters would mean
 * adding words for a search engine rather than a reader, which is the
 * keyword-stuffing the 50-60 guidance exists to discourage. "Shopify Speed
 * Optimization | Ecomm Wizards" is a good title at 42 characters.
 */
export function metaTitle(title: string): string {
  const clean = tidy(title);
  if (!clean) return "";

  if (clean.length + BRAND_SUFFIX.length <= TITLE_MAX) {
    return `${clean}${BRAND_SUFFIX}`;
  }
  if (clean.length <= TITLE_MAX) return clean;

  // Too long: prefer a natural clause break inside the budget.
  const window = clean.slice(0, TITLE_MAX);
  let cut = -1;
  for (const mark of [": ", " — ", " – ", " - ", " | ", ", "]) {
    cut = Math.max(cut, window.lastIndexOf(mark));
  }
  if (cut >= TITLE_MIN_AFTER_CUT) return window.slice(0, cut).trim();

  return window.replace(/\s+\S*$/, "").trim();
}

/**
 * The meta description.
 *
 * Uses the excerpt, then falls back to the article's opening paragraphs — the
 * previous version looked only at the excerpt, so writing the description
 * before the excerpt produced nothing at all. If the excerpt is short, the
 * body extends it rather than leaving a stub.
 */
export function metaDescription(excerpt: string, content: unknown): string {
  return build([tidy(excerpt), ...paragraphs(content)], DESC_MIN, DESC_MAX);
}

/** The article card summary, built from the opening of the article. */
export function excerptFrom(content: unknown): string {
  return build(paragraphs(content), EXCERPT_MIN, EXCERPT_MAX);
}
