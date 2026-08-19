// Prints a page's copy as plain reading text, in render order, so it can be
// proofread away from the TypeScript. Run: npx tsx scripts/geo/preview-copy.ts [path]

import { GEO_PAGES } from "../../lib/geo/registry";
import type { GeoProgrammePage } from "../../lib/geo/types";

const render = (s: string) => s.replace(/\[link:[^\]|]+\|([^\]]+)\]/g, "$1");

const rule = (label: string) => "\n" + "-".repeat(70) + "\n" + label + "\n" + "-".repeat(70);

function preview(p: GeoProgrammePage): void {
  console.log("=".repeat(70));
  console.log("TITLE TAG   : " + p.metaTitle + "  (" + p.metaTitle.length + " chars)");
  console.log("META DESC   : " + p.metaDescription + "  (" + p.metaDescription.length + " chars)");
  console.log("CANONICAL   : https://ecommwizards.com" + p.path);
  console.log("=".repeat(70));

  console.log(rule("HERO"));
  console.log("H1: " + p.h1);
  console.log(render(p.qualifier));

  console.log(rule("HOOK"));
  console.log(render(p.hook));

  if (p.type === "hub") {
    console.log(rule("WHAT WE ACTUALLY DO"));
    console.log(render(p.whatWeDo));
  } else {
    console.log(rule("PLACE LAYER"));
    console.log(render(p.placeLayer));
    console.log(rule("GRADIENT LAYER"));
    console.log(render(p.gradientLayer));
  }

  const a = p.asset;
  console.log(rule("ONLY-HERE ASSET: " + a.title));
  if (a.intro) console.log(render(a.intro) + "\n");
  console.log("METHOD: captured " + a.method.captured + (a.method.sampleSize ? ", sample " + a.method.sampleSize : ""));
  console.log(render(a.method.howGathered) + "\n");
  const widths = a.columns.map((c, i) =>
    Math.min(34, Math.max(c.length, ...a.rows.map((r) => (i === 0 ? r.label.length : (r.cells[i - 1] ?? "").length)))),
  );
  const cut = (s: string, w: number) => (s.length > w ? s.slice(0, w - 1) + "…" : s.padEnd(w));
  console.log(a.columns.map((c, i) => cut(c, widths[i])).join(" | "));
  console.log(widths.map((w) => "-".repeat(w)).join("-+-"));
  for (const r of a.rows) {
    console.log([cut(r.label, widths[0]), ...r.cells.map((c, i) => cut(render(c), widths[i + 1]))].join(" | "));
    if (r.note) console.log("    note: " + render(r.note));
  }
  console.log("\nDERIVED: " + render(a.derived));
  if (a.derivedList) {
    console.log("\n" + render(a.derivedList.title));
    a.derivedList.items.forEach((i) => console.log("  - " + render(i)));
  }
  for (const b of a.supportingBlocks ?? []) console.log("\n" + b.heading + "\n" + render(b.body));
  console.log("\nReview after " + a.reviewAfterDays + " days.");

  if (p.type === "hub") {
    console.log(rule("HOW THE ENGAGEMENT RUNS"));
    console.log(render(p.engagement.heading) + "\n" + render(p.engagement.intro) + "\n");
    p.engagement.steps.forEach((s, i) =>
      console.log(String(i + 1).padStart(2, "0") + ". [" + render(s.week) + "] " + render(s.title) + "\n    " + render(s.what)),
    );
    console.log(rule("WHAT WE DON'T DO"));
    for (const i of p.whatWeDontDo) console.log("- " + render(i));
  } else {
    console.log(rule("WHAT WE DO ABOUT IT"));
    console.log(render(p.whatWeDoAboutIt));
  }

  console.log(rule("PROOF"));
  for (const c of p.proof) console.log("- " + c.vertical + " | " + render(c.whatWasBuilt) + " | " + render(c.outcome) + "  -> /case-studies/" + c.slug);

  console.log(rule("OBJECTIONS"));
  for (const o of p.objections) console.log('"' + render(o.objection) + '"\n  ' + render(o.answer) + "\n");

  console.log(rule("FAQ"));
  p.faqs.forEach((f, i) => console.log(i + 1 + ". " + f.question + (f.unique ? "  [unique]" : "") + "\n   " + render(f.answer) + "\n"));

  console.log(rule("CONVERSION"));
  console.log(render(p.conversion.whatYouGet));
  console.log("What we will tell you not to do: " + render(p.conversion.whatWeWillTellYouNotToDo));
  console.log(render(p.conversion.responseExpectation));

}

const target = process.argv[2];
const pages = target ? GEO_PAGES.filter((p) => p.path === target) : GEO_PAGES;
if (pages.length === 0) {
  console.error("No page matched " + target);
  process.exit(1);
}
for (const p of pages) preview(p);
