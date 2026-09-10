// Guardrail 6: publish velocity.
// Counts lines added under lib/geo/pages in the last 7 days that set
// status: "published". More than the cap below in a rolling week fails (the
// publish cadence cap). Not a git repo, or git missing: WARN and exit 0.
//
// Run: npx tsx scripts/geo/velocity.ts

import { spawnSync } from "node:child_process";

// CAP RAISED TO 30 on 2026-09-10, by the owner. It was 5, then briefly 8.
// At 30 a week this check no longer constrains anything in practice: the
// whole Group A geo programme is 39 pages. Treat it as effectively off.
//
// WHY IT EXISTED, kept here because turning a guardrail off is worth
// remembering: a burst of structurally similar pages going live together is
// a pattern Google reads as programmatic, and this corpus is still small.
// The protection that remains is check-shingles, which enforces a 60%
// uniqueness floor per page and is the stronger of the two checks anyway.
//
// WHAT TO WATCH NOW THAT PACING IS MANUAL: Search Console coverage and
// impressions across the older geo pages after each batch. If impressions
// on already-indexed pages fall while new ones go live, pacing is the first
// thing to suspect and this number is the lever.
const MAX_PUBLISHES_PER_WEEK = 30;
const ADDED_PUBLISHED_RE = /^\+\s*status:\s*["']published["']/;

function main(): number {
  const res = spawnSync("git", ["log", "--since=7.days", "--format=%H%n%ad", "--date=iso", "-p", "--", "lib/geo/pages"], {
    cwd: process.cwd(),
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });

  if (res.error || res.status !== 0) {
    const detail = res.error ? res.error.message : (res.stderr || "").trim();
    console.log(`WARN velocity: could not run git log (${detail || `exit ${res.status}`}); skipping the velocity check`);
    console.log("Summary: 0 publish flip(s) counted (git unavailable)");
    return 0;
  }

  const lines = res.stdout.split(/\r?\n/);
  const commits: { hash: string; date: string; flips: number }[] = [];
  let current: { hash: string; date: string; flips: number } | null = null;
  const HASH_RE = /^[0-9a-f]{40}$/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (HASH_RE.test(line)) {
      current = { hash: line, date: lines[i + 1] ?? "", flips: 0 };
      commits.push(current);
      i++;
      continue;
    }
    if (line.startsWith("+++") || line.startsWith("---")) continue;
    if (current && ADDED_PUBLISHED_RE.test(line)) current.flips++;
  }

  const total = commits.reduce((n, c) => n + c.flips, 0);
  console.log(`velocity: ${total} status: "published" line(s) added under lib/geo/pages in the last 7 days (max ${MAX_PUBLISHES_PER_WEEK})`);
  const involved = commits.filter((c) => c.flips > 0);
  if (involved.length) {
    console.log("Commits involved:");
    for (const c of involved) console.log(`  ${c.hash.slice(0, 10)} ${c.date} (+${c.flips})`);
  } else {
    console.log(`Commits touching lib/geo/pages in window: ${commits.length}, none flipped a page to published`);
  }

  console.log("");
  if (total > MAX_PUBLISHES_PER_WEEK) {
    console.log(`FAIL velocity: ${total} publish flip(s) in 7 days exceeds the cap of ${MAX_PUBLISHES_PER_WEEK}`);
    console.log(`Summary: 1 FAIL`);
    return 1;
  }
  console.log(`Summary: ${total} publish flip(s), within cap, 0 FAIL`);
  return 0;
}

process.exit(main());
