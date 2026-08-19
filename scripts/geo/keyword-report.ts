// On-page keyword audit for a geo programme page. Reports actual counts and
// density rather than impressions, so over- and under-optimization are both
// visible. Run: npx tsx scripts/geo/keyword-report.ts [path]
//
// This is a REPORT, not a gate: it always exits 0. Keyword targets are a
// judgement call, and a script should not fail a build over a tenth of a
// percent. Read the numbers and decide.

import { GEO_PAGES } from "../../lib/geo/registry";
import { proseStrings, wordCount, type GeoProgrammePage } from "../../lib/geo/types";

const stripMarkup = (s: string) =>
  s
    .replace(/\[NEEDS INPUT[^\]]*\]/g, " ")
    .replace(/\[src:[a-z0-9-]+\]/gi, " ")
    .replace(/\[link:[^\]|]+\|([^\]]+)\]/g, "$1");

const occurrences = (haystack: string, needle: string): number => {
  const escaped = needle.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (haystack.toLowerCase().match(new RegExp(escaped, "g")) ?? []).length;
};

function blocksOf(p: GeoProgrammePage): [string, string][] {
  const out: [string, string][] = [
    ["h1", p.h1],
    ["qualifier", p.qualifier],
    ["hook", p.hook],
  ];
  if (p.type === "hub") {
    out.push(["whatWeDo", p.whatWeDo]);
    out.push([
      "engagement",
      [p.engagement.heading, p.engagement.intro, ...p.engagement.steps.map((s) => `${s.title} ${s.what}`)].join(" "),
    ]);
    out.push(["scopeBoundary", p.whatWeDontDo.join(" ")]);
  } else {
    out.push(["placeLayer", p.placeLayer]);
    out.push(["gradientLayer", p.gradientLayer]);
    out.push(["whatWeDoAboutIt", p.whatWeDoAboutIt]);
  }
  const a = p.asset;
  out.push([
    "onlyHereAsset",
    [a.title, a.intro ?? "", a.derived, ...(a.derivedList?.items ?? []), ...(a.supportingBlocks ?? []).map((b) => b.heading + " " + b.body)].join(" "),
  ]);
  out.push(["proof", p.proof.map((c) => [c.vertical, c.whatWasBuilt, c.outcome].join(" ")).join(" ")]);
  out.push(["objections", p.objections.map((o) => o.objection + " " + o.answer).join(" ")]);
  out.push(["faqs", p.faqs.map((f) => f.question + " " + f.answer).join(" ")]);
  out.push(["conversion", Object.values(p.conversion).join(" ")]);
  return out;
}

function report(p: GeoProgrammePage): void {
  const prose = proseStrings(p).map(stripMarkup);
  const body = prose.join(" ");
  const words = wordCount(prose);
  const primary = p.targetKeyword;

  console.log("=".repeat(72));
  console.log(p.path + "  (status: " + p.status + ")");
  console.log("=".repeat(72));
  console.log("Body word count: " + words + "  target " + p.wordCountTarget[0] + " to " + p.wordCountTarget[1]);
  console.log("");

  const inBody = occurrences(body, primary);
  const density = ((inBody / Math.max(words, 1)) * 100).toFixed(2);
  console.log('PRIMARY: "' + primary + '"');
  console.log("  body occurrences : " + inBody + "   density " + density + "%   (target 0.6 to 0.9)");
  console.log("  metaTitle        : " + (occurrences(p.metaTitle, primary) > 0 ? "yes" : "NO"));
  console.log("  metaDescription  : " + (occurrences(p.metaDescription, primary) > 0 ? "yes" : "NO"));
  console.log("  h1 exact match   : " + (occurrences(p.h1, primary) > 0 ? "yes" : "NO"));
  const first100 = body.split(/\s+/).slice(0, 100).join(" ");
  console.log("  first 100 words  : " + (occurrences(first100, primary) > 0 ? "yes" : "NO"));
  console.log("  FAQ questions    : " + p.faqs.filter((f) => occurrences(f.question, primary) > 0).length + " of " + p.faqs.length);
  console.log("  conversion block : " + (occurrences(Object.values(p.conversion).join(" "), primary) > 0 ? "yes" : "NO"));
  console.log("");

  console.log("PLACEMENT BY BLOCK");
  for (const [name, text] of blocksOf(p)) {
    const c = occurrences(stripMarkup(text), primary);
    if (c > 0) console.log("  " + name.padEnd(18) + c);
  }
  console.log("");

  console.log("SECONDARY KEYWORDS");
  for (const kw of p.secondaryKeywords) {
    const c = occurrences(body, kw);
    console.log("  " + (c > 0 ? "ok     " : "MISSING") + '  "' + kw + '"  x' + c);
  }
  console.log("");

  if (p.faqKeywords.length > 0) {
    console.log("TERTIARY / FAQ KEYPHRASES");
    console.log("  (exact = phrase appears verbatim; covered = every content word appears in one question or answer)");
    const faqUnits = p.faqs.map((f) => stripMarkup(f.question + " " + f.answer).toLowerCase());
    const stop = new Set(["a", "an", "the", "for", "to", "in", "of", "my", "and", "or", "is", "what", "how", "when", "do", "does"]);
    for (const kw of p.faqKeywords) {
      const exactAnywhere = occurrences(body, kw) > 0;
      const terms = kw.toLowerCase().split(/\s+/).filter((w) => !stop.has(w));
      const bestUnit = faqUnits
        .map((u) => terms.filter((t) => u.includes(t)).length / Math.max(terms.length, 1))
        .reduce((a, b) => Math.max(a, b), 0);
      const status = exactAnywhere ? "EXACT  " : bestUnit >= 0.8 ? "covered" : bestUnit >= 0.5 ? "partial" : "MISSING";
      console.log("  " + status + "  (" + Math.round(bestUnit * 100) + "% of terms in one FAQ)  \"" + kw + "\"");
    }
    console.log("");
  }

  console.log("META LENGTHS");
  const tl = p.metaTitle.length;
  const dl = p.metaDescription.length;
  console.log("  title       " + tl + " chars " + (tl <= 60 ? "ok" : "TOO LONG, aim under 60"));
  console.log("  description " + dl + " chars " + (dl >= 150 && dl <= 160 ? "ok" : "aim 150 to 160"));
  console.log("");

  console.log("AI CITABILITY: first sentence of every FAQ answer must answer the question on its own");
  p.faqs.forEach((f, i) => {
    const first = stripMarkup(f.answer).split(/(?<=[.!?])\s/)[0] ?? "";
    const n = first.split(/\s+/).filter(Boolean).length;
    console.log("  " + String(i + 1).padStart(2) + ". [" + String(n).padStart(2) + "w] " + first.slice(0, 84));
  });
  console.log("");
}

const target = process.argv[2];
const pages = target ? GEO_PAGES.filter((p) => p.path === target) : GEO_PAGES;
if (pages.length === 0) {
  console.error("No page matched " + target);
  process.exit(1);
}
for (const p of pages) report(p);
