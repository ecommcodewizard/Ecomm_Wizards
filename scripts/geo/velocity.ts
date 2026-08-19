// Guardrail 6: publish velocity.
// Counts lines added under lib/geo/pages in the last 7 days that set
// status: "published". More than 5 in a rolling week fails (the programme's
// publish cadence cap). Not a git repo, or git missing: WARN and exit 0.
//
// Run: npx tsx scripts/geo/velocity.ts

import { spawnSync } from "node:child_process";

const MAX_PUBLISHES_PER_WEEK = 5;
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
