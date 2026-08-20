// Guardrail 4: link integrity for geo programme pages.
//  (a) every proof[].slug resolves to a real case study in one of the four arrays
//  (b) no bare /case-studies index link inside content ([link:/case-studies|...] or "/case-studies")
//  (c) geo pages: page.hub is a registry hub or an existing static route under app/services/<slug>/page.tsx
//  (d) forbidden cross-link pairs (a page must not link to its twin under the other hub)
//  (e) rendered HTML (when .next/server/app<path>.html exists): hub link present on
//      geo pages, no data-proof-card linking to bare /case-studies, no ?c= internal hrefs
//
// Run: npx tsx scripts/geo/check-links.ts

import fs from "node:fs";
import path from "node:path";
import { GEO_PAGES } from "@/lib/geo/registry";
import { allStrings } from "@/lib/geo/types";
import { CASE_STUDIES } from "@/lib/case-studies";
import { APP_CASE_STUDIES } from "@/lib/shopify-app-studies";
import { KLAVIYO_CASE_STUDIES } from "@/lib/klaviyo-studies";
import { CREATIVE_CASE_STUDIES } from "@/lib/creative-studies";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, ".next", "server", "app");

const PAIRS: [string, string][] = [
  ["/services/shopify-development-agency/los-angeles", "/services/ecommerce-agency/los-angeles"],
  ["/services/ecommerce-agency/san-diego", "/services/shopify-development-agency/san-diego"],
];

const KNOWN_SLUGS = new Set<string>([
  ...CASE_STUDIES.map((s) => s.slug),
  ...APP_CASE_STUDIES.map((s) => s.slug),
  ...KLAVIYO_CASE_STUDIES.map((s) => s.slug),
  ...CREATIVE_CASE_STUDIES.map((s) => s.slug),
]);

/** Studies that carry a real, signed-off client quote with a named person.
 *  Only these can appear in the results slider, which has no layout for a
 *  study without one and would drop it without saying so. */
const QUOTED_SLUGS = new Set<string>(
  [...CASE_STUDIES, ...APP_CASE_STUDIES, ...KLAVIYO_CASE_STUDIES, ...CREATIVE_CASE_STUDIES]
    .filter((s) => s.quote && s.quotePerson)
    .map((s) => s.slug),
);

const HUB_PATHS = new Set(GEO_PAGES.filter((p) => p.type === "hub").map((p) => p.path));

function htmlPathFor(routePath: string): string {
  return path.join(APP_DIR, ...routePath.split("/").filter(Boolean)) + ".html";
}

function staticServiceRouteExists(hubPath: string): boolean {
  const parts = hubPath.split("/").filter(Boolean); // ["services", "<slug>", ...]
  if (parts[0] !== "services" || parts.length < 2) return false;
  return fs.existsSync(path.join(ROOT, "app", ...parts, "page.tsx"));
}

function main(): number {
  let fails = 0;
  let htmlChecked = 0;

  console.log(`check-links: ${GEO_PAGES.length} page(s), ${KNOWN_SLUGS.size} known case-study slug(s)`);
  console.log("");

  for (const page of GEO_PAGES) {
    const issues: string[] = [];
    const strings = allStrings(page);

    // (a) proof slugs, and the results slider's slugs, which are a second set
    // of case-study references and just as easy to typo. A slider slug must
    // also carry a signed-off quote, because the slide has nowhere to put a
    // study without one and would silently drop it.
    for (const p of page.proof) {
      if (!KNOWN_SLUGS.has(p.slug)) issues.push(`proof slug "${p.slug}" does not exist in any case-study array`);
    }
    for (const slug of page.results?.slugs ?? []) {
      if (!KNOWN_SLUGS.has(slug)) {
        issues.push(`results slug "${slug}" does not exist in any case-study array`);
      } else if (!QUOTED_SLUGS.has(slug)) {
        issues.push(`results slug "${slug}" has no quote + quotePerson, so the slider would drop it`);
      }
    }
    for (const slug of Object.keys(page.results?.headlines ?? {})) {
      if (!(page.results?.slugs ?? []).includes(slug)) {
        issues.push(`results headline for "${slug}" does not match any slug in results.slugs`);
      }
    }

    // (b) bare index links in content
    for (const s of strings) {
      if (/\[link:\/case-studies(?:\/)?\|/.test(s)) issues.push(`bare index link marker in content: "${s.slice(0, 80)}"`);
      if (s.trim() === "/case-studies" || s.trim() === "/case-studies/") issues.push(`bare "/case-studies" string in content`);
    }

    // (c) hub exists
    if (page.type === "geo") {
      const ok = HUB_PATHS.has(page.hub) || staticServiceRouteExists(page.hub);
      if (!ok) issues.push(`hub "${page.hub}" is neither a registry hub nor an existing app/services route`);
    }

    // (d) forbidden cross-link pairs
    for (const [a, b] of PAIRS) {
      const other = page.path === a ? b : page.path === b ? a : null;
      if (!other) continue;
      if (strings.some((s) => s !== page.path && s.includes(other))) issues.push(`links to forbidden twin page "${other}"`);
    }

    // (e) rendered HTML
    const file = htmlPathFor(page.path);
    if (fs.existsSync(file)) {
      htmlChecked++;
      const html = fs.readFileSync(file, "utf8");
      if (page.type === "geo" && !html.includes(`href="${page.hub}"`)) issues.push(`rendered HTML has no link to hub href="${page.hub}"`);

      const proofRe = /data-proof-card[\s\S]{0,300}?href="\/case-studies"/g;
      if (proofRe.test(html)) issues.push(`rendered HTML: a data-proof-card element links to bare /case-studies`);

      const hrefRe = /href="([^"]*)"/g;
      let m: RegExpExecArray | null;
      const seenBad = new Set<string>();
      while ((m = hrefRe.exec(html)) !== null) {
        const href = m[1];
        const internal = href.startsWith("/") || href.startsWith("https://ecommwizards.com") || href.startsWith("https://www.ecommwizards.com");
        if (internal && href.includes("?c=") && !seenBad.has(href)) {
          seenBad.add(href);
          issues.push(`rendered HTML: internal href contains ?c= -> "${href}"`);
        }
      }
    } else {
      console.log(`SKIP ${page.path}: no rendered HTML at ${path.relative(ROOT, file)} (status=${page.status})`);
    }

    for (const i of issues) console.log(`FAIL ${page.path}: ${i}`);
    fails += issues.length;
    console.log(`PAGE ${page.path} | ${issues.length ? "FAIL" : "OK"} | proof=${page.proof.length}`);
  }

  console.log("");
  console.log(`Summary: ${GEO_PAGES.length} page(s), ${htmlChecked} rendered HTML file(s) checked, ${fails} FAIL`);
  return fails > 0 ? 1 : 0;
}

process.exit(main());
