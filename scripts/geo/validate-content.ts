// Guardrail 1: content validation for every geo programme page.
// Runs registry.validatePage on each page, fails on any error-level issue and
// on duplicate paths. Draft/review pages produce WARN lines only.
//
// Run: npx tsx scripts/geo/validate-content.ts

import { GEO_PAGES, validatePage } from "@/lib/geo/registry";
import { hasNeedsInput, proseStrings, wordCount } from "@/lib/geo/types";

function main(): number {
  const today = new Date();
  let fails = 0;
  let warns = 0;

  console.log(`validate-content: ${GEO_PAGES.length} page(s) in registry`);
  console.log("");

  // Duplicate paths
  const seen = new Map<string, number>();
  for (const p of GEO_PAGES) seen.set(p.path, (seen.get(p.path) ?? 0) + 1);
  for (const [path, n] of seen) {
    if (n > 1) {
      console.log(`FAIL ${path}: path appears ${n} times in GEO_PAGES`);
      fails++;
    }
  }

  for (const page of GEO_PAGES) {
    const issues = validatePage(page, today);
    const errors = issues.filter((i) => i.level === "error");
    const warnings = issues.filter((i) => i.level === "warn");
    for (const e of errors) console.log(`FAIL ${page.path}: ${e.message}`);
    for (const w of warnings) console.log(`WARN ${page.path}: ${w.message}`);
    fails += errors.length;
    warns += warnings.length;

    const prose = proseStrings(page);
    const words = wordCount(prose);
    const markers = prose.filter(hasNeedsInput).length;
    const state = errors.length ? "ERROR" : warnings.length ? "WARN" : "OK";
    console.log(`PAGE ${page.path} | status=${page.status} | ${state} | words=${words} | markers=${markers}`);
  }

  console.log("");
  console.log(`Summary: ${GEO_PAGES.length} page(s), ${fails} FAIL, ${warns} WARN`);
  return fails > 0 ? 1 : 0;
}

process.exit(main());
