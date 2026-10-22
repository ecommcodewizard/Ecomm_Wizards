// Article bodies, kept apart from POSTS so the listing page doesn't ship them.
// Inline text supports **bold** and [label](/href).
import klaviyoFlows from "./articles/klaviyo-flows-that-pay-for-themselves";

export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "image"; src: string; alt: string; caption?: string; width: number; height: number };

export type Section = { id: string; title: string; blocks: Block[] };

export type Article = {
  summary: string; // the standfirst under the title
  answer: string; // 40-60 word direct answer to the article's core question (AEO)
  takeaways: string[];
  sections: Section[];
  faqs: { q: string; a: string }[];
  sources: { title: string; publisher: string; url: string }[]; // outside sources the article relies on (GEO)
  updated?: string; // ISO date, when edited after publishing
};

export const ARTICLES: Record<string, Article> = {
  "klaviyo-flows-that-pay-for-themselves": klaviyoFlows,
};

const WORDS_PER_MINUTE = 230;

export function readMinutes(a: Article) {
  const text = [
    a.summary,
    a.answer,
    ...a.takeaways,
    ...a.sections.flatMap((s) => [
      s.title,
      ...s.blocks.flatMap((b) => ("items" in b ? b.items : "text" in b ? [b.text] : [b.caption ?? ""])),
    ]),
    ...a.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / WORDS_PER_MINUTE));
}
