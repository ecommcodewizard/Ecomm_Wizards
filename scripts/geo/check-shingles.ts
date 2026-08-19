// Guardrail 5: near-duplicate content across the geo set.
// Body text = proseStrings(page).join(" ") with [NEEDS INPUT] markers stripped.
// 8-word shingles (lowercased, punctuation stripped). For every page: the share
// of its shingles that appear in NO other registry page must be >= 60%.
// COMPARE adds stricter pairwise checks against an existing static route's
// rendered HTML (tags/scripts/styles stripped) when that HTML exists.
//
// Run: npx tsx scripts/geo/check-shingles.ts

import fs from "node:fs";
import path from "node:path";
import { GEO_PAGES } from "@/lib/geo/registry";
import { proseStrings } from "@/lib/geo/types";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, ".next", "server", "app");
const SHINGLE = 8;
const MIN_UNIQUE_PCT = 60;

/** [registry page path, existing route path, minimum unique %] */
const COMPARE: [string, string, number][] = [["/services/ecommerce-seo-agency", "/services/shopify-seo-agency", 75]];

const MARKER_RE = /\[NEEDS INPUT[^\]]*\]/g;

function tokens(text: string): string[] {
  return text
    .replace(MARKER_RE, " ")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function shingles(text: string): Set<string> {
  const t = tokens(text);
  const out = new Set<string>();
  for (let i = 0; i + SHINGLE <= t.length; i++) out.add(t.slice(i, i + SHINGLE).join(" "));
  return out;
}

function htmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function htmlPathFor(routePath: string): string {
  return path.join(APP_DIR, ...routePath.split("/").filter(Boolean)) + ".html";
}

function uniquePct(mine: Set<string>, others: Set<string>[]): { pct: number; unique: number; total: number } {
  if (mine.size === 0) return { pct: 100, unique: 0, total: 0 };
  let unique = 0;
  for (const s of mine) if (!others.some((o) => o.has(s))) unique++;
  return { pct: (unique / mine.size) * 100, unique, total: mine.size };
}

function main(): number {
  let fails = 0;
  console.log(`check-shingles: ${GEO_PAGES.length} page(s), ${SHINGLE}-word shingles, minimum ${MIN_UNIQUE_PCT}% unique across the set`);
  console.log("");

  const sets = GEO_PAGES.map((p) => ({ page: p, set: shingles(proseStrings(p).join(" ")) }));

  if (sets.length < 2) {
    console.log("NOTE only one page in the registry: the cross-set check passes trivially (nothing to compare against).");
  }

  for (const { page, set } of sets) {
    const others = sets.filter((s) => s.page.path !== page.path).map((s) => s.set);
    const r = uniquePct(set, others);
    const ok = r.pct >= MIN_UNIQUE_PCT;
    if (!ok) fails++;
    console.log(`${ok ? "PAGE" : "FAIL"} ${page.path} | ${r.pct.toFixed(1)}% unique (${r.unique}/${r.total} shingles)${set.size === 0 ? " | no body text yet (all markers)" : ""}`);
  }

  console.log("");
  for (const [pagePath, routePath, minPct] of COMPARE) {
    const entry = sets.find((s) => s.page.path === pagePath);
    if (!entry) {
      console.log(`SKIP compare ${pagePath} vs ${routePath}: page not in registry`);
      continue;
    }
    const file = htmlPathFor(routePath);
    if (!fs.existsSync(file)) {
      console.log(`SKIP compare ${pagePath} vs ${routePath}: no rendered HTML at ${path.relative(ROOT, file)}`);
      continue;
    }
    const other = shingles(htmlToText(fs.readFileSync(file, "utf8")));
    const r = uniquePct(entry.set, [other]);
    const ok = r.pct >= minPct;
    if (!ok) fails++;
    console.log(`${ok ? "COMPARE" : "FAIL"} ${pagePath} vs ${routePath} | ${r.pct.toFixed(1)}% unique (min ${minPct}%)`);
  }

  console.log("");
  console.log(`Summary: ${sets.length} page(s), ${fails} FAIL`);
  return fails > 0 ? 1 : 0;
}

process.exit(main());
