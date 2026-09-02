// Copy Standard v2.0 measurement pass. REPORT ONLY, always exits 0.
// Measures what the six guardrails do not: readability, sentence length, voice,
// banned language, city-name budget and per-section "you" presence.
// Run: npx tsx scripts/geo/copy-audit.ts "/services/<hub>/<geo>"

import { GEO_PAGES } from "../../lib/geo/registry";
import type { GeoProgrammePage } from "../../lib/geo/types";

const strip = (s: string) =>
  s
    .replace(/\[NEEDS INPUT[^\]]*\]/g, " ")
    .replace(/\[src:[a-z0-9-]+\]/gi, " ")
    .replace(/\[link:[^\]|]+\|([^\]]+)\]/g, "$1")
    .replace(/\{[a-zA-Z]+\}/g, "X");

const BANNED = [
  "unlock", "elevate", "in today's fast-paced", "in today's digital age",
  "we're passionate about", "seamless", "cutting-edge", "world-class",
  "best-in-class", "dominate", "robust", "holistic", "empower", "streamline",
  "synergy", "game-changer", "take your store to the next level",
  "that's where we come in", "look no further", "the right partner",
  "trusted partner", "your success is our success", "when it comes to",
  "at the end of the day", "it's no secret that", "needless to say",
  "the fact of the matter is", "let's dive in", "without further ado",
  "whether you're a", "in this article", "you might be thinking",
  "you're probably wondering", "ready to get started", "free consultation",
  "discovery session", "strategy session",
];

const UK = [
  "colour", "behaviour", "optimis", "organis", "analyse", "centre", "licence",
  "catalogue", "minimis", "recognis", "favour", "labelled", "travelled",
  "whilst", "amongst",
];

const syllables = (word: string): number => {
  let w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 0;
  if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "");
  return (w.match(/[aeiouy]{1,2}/g) ?? []).length || 1;
};

const sentencesOf = (t: string): string[] =>
  t
    .split(/\n+/)
    .flatMap((p) => p.split(/(?<=[.!?])\s+(?=[A-Z0-9"(])/))
    .map((s) => s.trim())
    .filter((s) => /[a-z]/i.test(s) && s.split(/\s+/).length > 1);

const wordsOf = (t: string): string[] =>
  (t.match(/[A-Za-z0-9$%,.'-]+/g) ?? []).filter((w) => /[a-z0-9]/i.test(w));

interface Readability {
  sentences: number;
  words: number;
  avgSentence: number;
  grade: number;
  ease: number;
}

function readability(text: string): Readability | null {
  const sents = sentencesOf(text);
  const words = wordsOf(text);
  if (!sents.length || !words.length) return null;
  const syl = words.reduce((n, w) => n + syllables(w), 0);
  const wps = words.length / sents.length;
  const spw = syl / words.length;
  return {
    sentences: sents.length,
    words: words.length,
    avgSentence: wps,
    grade: 0.39 * wps + 11.8 * spw - 15.59,
    ease: 206.835 - 1.015 * wps - 84.6 * spw,
  };
}

// Prose blocks only. Headings, labels, table cells and list items are excluded
// from the readability target per Copy Standard section 3.1.
function proseBlocks(p: GeoProgrammePage): [string, string][] {
  const out: [string, string][] = [
    ["qualifier", p.qualifier],
    ["hook", p.hook],
  ];
  if (p.quickAnswer) out.push(["quickAnswer", p.quickAnswer]);
  if (p.trust) out.push(["trust.subheading", p.trust.subheading]);
  if (p.type !== "hub") {
    out.push(
      ["placeLayer", p.placeLayer],
      ["gradientLayer", p.gradientLayer],
      ["whatWeDoAboutIt", p.whatWeDoAboutIt],
    );
    if (p.searchIntent) out.push(["searchIntent", p.searchIntent]);
    if (p.approach) out.push([`approach: ${p.approach.heading.slice(0, 40)}`, p.approach.body]);
    if (p.howWeWork) {
      out.push(["howWeWork.intro", p.howWeWork.intro]);
      p.howWeWork.items.forEach((i, n) =>
        out.push([`howWeWork[${n}] ${i.title}`, i.body]),
      );
    }
  }
  if (p.servicesList) {
    out.push(["servicesList.intro", p.servicesList.intro]);
    p.servicesList.items.forEach((s, n) =>
      out.push([`servicesList[${n}] ${s.title}`, s.body]),
    );
  }
  if (p.results) out.push(["results.intro", p.results.intro]);
  out.push(
    ["asset.method", p.asset.method.howGathered],
    ["asset.derived", p.asset.derived],
  );
  for (const b of p.asset.supportingBlocks ?? []) {
    out.push([`asset.support: ${b.heading}`, b.body]);
  }
  p.objections.forEach((o, n) =>
    out.push([`objection[${n}] ${o.objection.slice(0, 44)}`, o.answer]),
  );
  p.faqs.forEach((f, n) =>
    out.push([`faq[${n}] ${f.question.slice(0, 44)}`, f.answer]),
  );
  const c = p.conversion;
  out.push(
    // ConversionBlock renders whatYouGet ONLY when there is no audit object, so
    // on an audit page it is dead text and must not count toward the 180-word
    // above-the-form cap. Labelled out of the "conv." namespace when unrendered.
    [c.audit ? "unrendered.whatYouGet" : "conv.whatYouGet", c.whatYouGet],
    ["conv.decline", c.whatWeWillTellYouNotToDo],
    // Section 8.1 places this BELOW the form, so it is excluded from the
    // 180-word above-the-form cap by the "conv." prefix filter below.
    ["under-form.response", c.responseExpectation],
  );
  if (c.audit) {
    out.push([
      "conv.audit",
      [
        c.audit.transition,
        c.audit.offer,
        ...c.audit.parts,
        c.audit.turnaround ?? "",
        c.audit.limit,
        c.audit.noObligation,
      ]
        .filter(Boolean)
        .join(" "),
    ]);
  }
  return out.map(([k, v]) => [k, strip(v)] as [string, string]);
}

const target = process.argv[2];
const page = GEO_PAGES.find((p) => p.path === target);
if (!page) {
  console.error("No page matched " + target);
  process.exit(1);
}

const blocks = proseBlocks(page);
const all = blocks.map(([, v]) => v).join("\n\n");
const r = readability(all);
const line = (n = 72) => "-".repeat(n);

console.log("=".repeat(72));
console.log(page.path + "  (status: " + page.status + ")");
console.log("=".repeat(72));

if (r) {
  console.log(
    `\nWHOLE PAGE PROSE   grade ${r.grade.toFixed(1)} (target 7-8)   ease ${r.ease.toFixed(1)} (target 60+)`,
  );
  console.log(
    `                   ${r.words} words, ${r.sentences} sentences, avg ${r.avgSentence.toFixed(1)} (target <20, cap 30)`,
  );
}

const conv = blocks.filter(([k]) => k.startsWith("conv."));
const cr = readability(conv.map(([, v]) => v).join(" "));
if (cr) {
  console.log(
    `\nCONVERSION BLOCK   grade ${cr.grade.toFixed(1)}   ease ${cr.ease.toFixed(1)} (target 70+)   ${cr.words} words above form (cap 180)`,
  );
}

console.log("\n" + line());
console.log("SENTENCES OVER THE 30-WORD HARD CAP (section 3.1)");
console.log(line());
let over = 0;
for (const [name, text] of blocks) {
  for (const s of sentencesOf(text)) {
    const n = wordsOf(s).length;
    if (n > 30) {
      over++;
      console.log(`  ${String(n).padStart(3)}w  ${name}`);
      console.log(`        ${s.slice(0, 140)}${s.length > 140 ? "..." : ""}`);
    }
  }
}
console.log(over ? `  ${over} over cap` : "  none");

console.log("\n" + line());
console.log("BLOCKS WORSE THAN GRADE 8 OR EASE 60 (section 3.1)");
console.log(line());
let bad = 0;
for (const [name, text] of blocks) {
  const b = readability(text);
  if (!b || b.words < 25) continue;
  if (b.grade > 8 || b.ease < 60) {
    bad++;
    console.log(
      `  grade ${b.grade.toFixed(1).padStart(4)}  ease ${b.ease.toFixed(0).padStart(3)}  avg ${b.avgSentence.toFixed(0).padStart(2)}w  ${name}`,
    );
  }
}
console.log(bad ? `  ${bad} block(s) outside target` : "  none");

console.log("\n" + line());
console.log("SECTIONS WITH NO 'you' OR 'your' (checklist #4)");
console.log(line());
let noYou = 0;
for (const [name, text] of blocks) {
  if (wordsOf(text).length < 20) continue;
  if (!/\byou\b|\byour\b|\byours\b|\byou're\b|\byou've\b/i.test(text)) {
    noYou++;
    console.log(`  ${name}`);
  }
}
console.log(noYou ? `  ${noYou} section(s)` : "  none");

console.log("\n" + line());
console.log("BANNED LANGUAGE (section 4) / UK SPELLING (section 9)");
console.log(line());
const lower = all.toLowerCase();
let hits = 0;
for (const w of BANNED) {
  if (lower.includes(w)) {
    hits++;
    console.log(`  BANNED  "${w}"`);
  }
}
for (const w of UK) {
  const m = lower.match(new RegExp("\\b" + w + "[a-z]*", "g"));
  if (m) {
    hits++;
    console.log(`  UK?     ${[...new Set(m)].join(", ")}`);
  }
}
if (/!/.test(all)) {
  hits++;
  console.log("  exclamation mark in body copy");
}
console.log(hits ? `  ${hits} hit(s)` : "  none");

console.log("\n" + line());
console.log("CITY NAME IN PROSE (section 7.5, guidance max 4 in visible body)");
console.log(line());
if (page.type !== "hub") {
  const city = page.geo.name.toLowerCase();
  const patterns = city === "los angeles" ? ["los angeles", "\\bla\\b", "\\bnyc\\b"] : [city];
  const re = new RegExp(patterns.join("|"), "g");
  let total = 0;
  for (const [name, text] of blocks) {
    const n = (text.toLowerCase().match(re) ?? []).length;
    if (n) {
      total += n;
      console.log(`  ${String(n).padStart(2)}  ${name}`);
    }
  }
  console.log(`  prose total = ${total}  (h1 and headings counted separately)`);
}
console.log("");
