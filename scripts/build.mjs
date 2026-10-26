// Production build wrapper. Exists for ONE reason: to cap the Rust thread pool
// inside @next/swc before Node loads Next.
//
// Two Next 16 deploys to Hostinger failed during "Collecting page data" with
// "OS can't spawn worker thread: Resource temporarily unavailable (os error
// 11)" followed by SIGABRT. That string is not Node's — it is compiled into the
// @next/swc native binary, alongside "RAYON_NUM_THREADS" and
// "available_parallelism". SWC's rayon pool sizes itself from the number of
// cores it can see, and a shared container reports the HOST's core count while
// capping the account at 120 processes/threads. Every build worker then tried
// to open a host-sized pool and the kernel refused with EAGAIN.
//
// RAYON_NUM_THREADS has to be in the environment BEFORE the native binding is
// loaded, because the pool is built once on first use. Setting it from
// next.config.ts would be a race against whatever loads @next/swc first, and
// an `env VAR=x next build` prefix in package.json is not portable to Windows.
// A wrapper that sets the variable and then spawns the real CLI is the only
// place that is reliably early and cross-platform.
//
// next.config.ts holds the other half (experimental.cpus), which caps how many
// worker PROCESSES exist; this caps the threads inside each one.

import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

// Overridable so the cap can be tuned from the host panel without a code
// change. 2 is chosen to stay far below the 120-process ceiling: with
// experimental.cpus=2 that is ~3 node processes holding ~2 Rust threads each.
const RAYON_THREADS = process.env.RAYON_NUM_THREADS ?? "2";

const env = { ...process.env, RAYON_NUM_THREADS: RAYON_THREADS };

// Resolve the CLI's entry script and run it with `node` directly. Spawning the
// `next` bin shim instead would need a shell on Windows (.cmd), and shell: true
// with inherited stdio is worth avoiding.
const nextCli = require.resolve("next/dist/bin/next");

// --webpack opts out of Turbopack, Next 16's new default. Kept because the
// FIRST failed deploy was a TurbopackInternalError in a PostCSS worker on
// @fontsource/poppins; webpack is the engine Next 15 used here for 135 pages.
const args = [nextCli, "build", "--webpack", ...process.argv.slice(2)];

// Printed so a deploy log shows the caps were applied — the earlier failures
// were diagnosed from that log, and a silent fix is not verifiable from it.
console.log(
  `[build] RAYON_NUM_THREADS=${RAYON_THREADS}, experimental.cpus=2, engine=webpack`,
);

const child = spawn(process.execPath, args, { stdio: "inherit", env });

child.on("error", (err) => {
  console.error("[build] failed to start next:", err.message);
  process.exit(1);
});

// Forward the real outcome. A signal death (the SIGABRT above) must not look
// like success to the deploy pipeline, so it becomes a non-zero exit.
child.on("exit", (code, signal) => {
  if (signal) {
    console.error(`[build] next terminated by signal ${signal}`);
    process.exit(1);
  }
  process.exit(code ?? 1);
});
