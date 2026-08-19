// Runs every geo guardrail script in order and prints a summary table.
// Exit 1 if any script failed. Used by .github/workflows/checks.yml and
// `npm run geo:check`.
//
// Run: npx tsx scripts/geo/run-all.ts

import { spawnSync } from "node:child_process";
import path from "node:path";

const SCRIPTS = ["validate-content", "check-forbidden", "check-schema", "check-links", "check-shingles", "velocity"] as const;

type Result = { name: string; code: number; ms: number };

function runOne(name: string): Result {
  const script = path.join("scripts", "geo", `${name}.ts`);
  const started = Date.now();
  console.log(`\n=== ${name} (${script}) ===`);
  const res = spawnSync("npx", ["tsx", script], {
    cwd: process.cwd(),
    stdio: "inherit",
    shell: process.platform === "win32",
    env: process.env,
  });
  const code = res.error ? 1 : (res.status ?? 1);
  if (res.error) console.log(`FAIL ${name}: could not start (${res.error.message})`);
  return { name, code, ms: Date.now() - started };
}

function main(): number {
  const results: Result[] = [];
  for (const name of SCRIPTS) results.push(runOne(name));

  const width = Math.max(...SCRIPTS.map((s) => s.length));
  console.log("\n=== geo guardrails summary ===");
  console.log(`${"script".padEnd(width)}  result  time`);
  for (const r of results) {
    console.log(`${r.name.padEnd(width)}  ${r.code === 0 ? "PASS  " : "FAIL  "}  ${(r.ms / 1000).toFixed(1)}s`);
  }
  const failed = results.filter((r) => r.code !== 0);
  console.log(`\n${results.length - failed.length}/${results.length} passed${failed.length ? `; failed: ${failed.map((f) => f.name).join(", ")}` : ""}`);
  console.log("Publish checklist: flip status in lib/geo/pages/<slug>.ts, add the hub to SERVICE_CATEGORIES in lib/services.ts, purge the Hostinger CDN after deploy.");
  return failed.length ? 1 : 0;
}

process.exit(main());
