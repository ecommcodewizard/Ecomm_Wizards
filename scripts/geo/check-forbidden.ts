// Guardrail 2: banned copy and presence claims.
// Scans every human-authored prose string (plus metaTitle / metaDescription /
// shortTitle, which are structural but rendered) after stripping
// [NEEDS INPUT: ...] markers, since markers are instructions, not copy.
//
// Hard rules (FAIL): BANNED_PHRASES, BANNED_CHARACTERS, UK_SPELLINGS, PRESENCE_HARD.
// Soft rules: presenceSoftPatterns(cityNames). A soft match FAILS unless the
// exact matched phrase is listed in page.reviewedPhrases (case-insensitive), in
// which case it is reported as REVIEWED.
//
// Run: npx tsx scripts/geo/check-forbidden.ts

import { GEO_PAGES } from "@/lib/geo/registry";
import { proseStrings } from "@/lib/geo/types";
import { BANNED_CHARACTERS, BANNED_PHRASES, PRESENCE_HARD, UK_SPELLINGS, presenceSoftPatterns } from "@/lib/geo/forbidden";

const BATCH_CITIES = [
  "Los Angeles",
  "San Diego",
  "Orange County",
  "San Francisco",
  "New York",
  "Miami",
  "Florida",
  "California",
  "Chicago",
  "Boston",
  "Austin",
  "Dallas",
  "Atlanta",
  "Denver",
  "Philadelphia",
  "Raleigh",
  "Minneapolis",
  "Milwaukee",
  "Wisconsin",
  "Maine",
  "Arizona",
  "Maryland",
  "New Jersey",
];

const MARKER_RE = /\[NEEDS INPUT[^\]]*\]/g;

function stripMarkers(s: string): string {
  return s.replace(MARKER_RE, " ");
}

function snippet(text: string, index: number, length: number): string {
  const start = Math.max(0, index - 30);
  const end = Math.min(text.length, index + length + 30);
  return (start > 0 ? "..." : "") + text.slice(start, end).replace(/\s+/g, " ") + (end < text.length ? "..." : "");
}

/** Find every match of a (possibly non-global) regex in text. */
function findAll(pattern: RegExp, text: string): { match: string; index: number }[] {
  const flags = pattern.flags.includes("g") ? pattern.flags : pattern.flags + "g";
  const re = new RegExp(pattern.source, flags);
  const out: { match: string; index: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    out.push({ match: m[0], index: m.index });
    if (m[0].length === 0) re.lastIndex++;
  }
  return out;
}

function main(): number {
  let fails = 0;
  let reviewed = 0;
  let scanned = 0;

  console.log(`check-forbidden: ${GEO_PAGES.length} page(s)`);
  console.log("");

  for (const page of GEO_PAGES) {
    const strings = [
      ...proseStrings(page).map((s, i) => ({ where: `prose[${i}]`, text: s })),
      { where: "metaTitle", text: page.metaTitle },
      { where: "metaDescription", text: page.metaDescription },
      { where: "shortTitle", text: page.shortTitle },
    ];
    const cityNames = page.type === "geo" ? [page.geo.name, ...BATCH_CITIES] : [...BATCH_CITIES];
    const soft = presenceSoftPatterns(cityNames);
    const reviewedSet = new Set((page.reviewedPhrases ?? []).map((p) => p.toLowerCase().trim()));

    let pageFails = 0;
    let pageReviewed = 0;

    for (const { where, text: raw } of strings) {
      const text = stripMarkers(raw);
      if (!text.trim()) continue;
      scanned++;

      const hard: { rules: { pattern: RegExp; label: string }[]; kind: string }[] = [
        { rules: BANNED_PHRASES, kind: "banned phrase" },
        { rules: BANNED_CHARACTERS, kind: "banned character" },
        { rules: UK_SPELLINGS.map((u) => ({ pattern: u.pattern, label: `${u.label} (use "${u.us}")` })), kind: "UK spelling" },
        { rules: PRESENCE_HARD, kind: "presence claim" },
      ];
      for (const group of hard) {
        for (const rule of group.rules) {
          for (const hit of findAll(rule.pattern, text)) {
            console.log(`FAIL ${page.path} ${where}: ${group.kind} "${rule.label}" -> "${snippet(text, hit.index, hit.match.length)}"`);
            pageFails++;
          }
        }
      }

      for (const rule of soft) {
        for (const hit of findAll(rule.pattern, text)) {
          if (reviewedSet.has(hit.match.toLowerCase().trim())) {
            console.log(`REVIEWED ${page.path} ${where}: soft presence "${hit.match}" (in reviewedPhrases)`);
            pageReviewed++;
          } else {
            console.log(
              `FAIL ${page.path} ${where}: soft presence "${rule.label}" matched "${hit.match}" -> "${snippet(text, hit.index, hit.match.length)}" (add the exact phrase to reviewedPhrases after human review, or rewrite)`,
            );
            pageFails++;
          }
        }
      }
    }

    fails += pageFails;
    reviewed += pageReviewed;
    console.log(`PAGE ${page.path} | ${pageFails ? "FAIL" : "OK"} | fails=${pageFails} reviewed=${pageReviewed}`);
  }

  console.log("");
  console.log(`Summary: ${scanned} string(s) scanned across ${GEO_PAGES.length} page(s), ${fails} FAIL, ${reviewed} REVIEWED`);
  return fails > 0 ? 1 : 0;
}

process.exit(main());
