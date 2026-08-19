// Guardrail 3: JSON-LD safety.
// Pass 1 (always): rebuild the JSON-LD each page emits (BreadcrumbList, FAQPage,
// Service) from the content object and walk it recursively. FAIL on any @type
// outside ALLOWED_SCHEMA_TYPES, on any FORBIDDEN_SCHEMA_PROPERTIES key, and on
// any FAQPage entry that does not match page.faqs exactly.
// Pass 2 (only when .next/server/app exists): parse every
// <script type="application/ld+json"> block from the rendered HTML of each page
// and run the same checks, plus: BreadcrumbList must contain the hub path for
// geo pages, and no LocalBusiness / PostalAddress / telephone anywhere.
//
// Run: npx tsx scripts/geo/check-schema.ts

import fs from "node:fs";
import path from "node:path";
import { GEO_PAGES, SITE_URL, canonicalUrl } from "@/lib/geo/registry";
import { breadcrumbListJsonLd, breadcrumbTrail, faqPageJsonLd } from "@/lib/geo/schema";
import { ALLOWED_SCHEMA_TYPES, FORBIDDEN_SCHEMA_PROPERTIES, FORBIDDEN_SCHEMA_TYPES } from "@/lib/geo/forbidden";
import type { GeoProgrammePage } from "@/lib/geo/types";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, ".next", "server", "app");
const ORG_ID = `${SITE_URL}/#organization`;

const allowedTypes = new Set<string>(ALLOWED_SCHEMA_TYPES);
const forbiddenTypes = new Set<string>(FORBIDDEN_SCHEMA_TYPES);
const forbiddenProps = new Set<string>(FORBIDDEN_SCHEMA_PROPERTIES);
/** Types emitted site-wide by app/layout.tsx (Organization + WebSite graph).
 *  They appear in every rendered page, so pass 2 tolerates them; forbidden
 *  types and properties are still checked inside them. */
const LAYOUT_TYPES = new Set<string>(["Organization", "WebSite"]);

type Issue = string;

/** Service JSON-LD shaped exactly like components/seo/ServiceSchema.tsx. */
function serviceJsonLd(page: GeoProgrammePage) {
  const url = canonicalUrl(page);
  const areaServed = page.type === "geo" ? "United States" : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.h1,
    serviceType: page.serviceType,
    provider: { "@id": ORG_ID },
    ...(areaServed ? { areaServed: { "@type": "Country", name: areaServed } } : {}),
    url,
    description: page.metaDescription,
  };
}

/** Recursively check @type values and property keys. */
function walk(node: unknown, where: string, issues: Issue[], extraAllowed: Set<string> = new Set()): void {
  if (Array.isArray(node)) {
    node.forEach((n, i) => walk(n, `${where}[${i}]`, issues, extraAllowed));
    return;
  }
  if (!node || typeof node !== "object") return;
  const obj = node as Record<string, unknown>;
  for (const [key, value] of Object.entries(obj)) {
    if (key === "@type") {
      const types = Array.isArray(value) ? value : [value];
      for (const t of types) {
        if (typeof t !== "string") continue;
        if (forbiddenTypes.has(t)) issues.push(`${where}: forbidden @type "${t}"`);
        else if (!allowedTypes.has(t) && !extraAllowed.has(t)) issues.push(`${where}: @type "${t}" is not in ALLOWED_SCHEMA_TYPES`);
      }
      continue;
    }
    if (forbiddenProps.has(key)) issues.push(`${where}: forbidden property "${key}"`);
    walk(value, `${where}.${key}`, issues, extraAllowed);
  }
}

function collectByType(node: unknown, type: string, acc: Record<string, unknown>[] = []): Record<string, unknown>[] {
  if (Array.isArray(node)) {
    for (const n of node) collectByType(n, type, acc);
    return acc;
  }
  if (!node || typeof node !== "object") return acc;
  const obj = node as Record<string, unknown>;
  if (obj["@type"] === type) acc.push(obj);
  for (const v of Object.values(obj)) collectByType(v, type, acc);
  return acc;
}

function checkFaqPage(faqPage: Record<string, unknown>, page: GeoProgrammePage, where: string, issues: Issue[]): void {
  const main = faqPage.mainEntity;
  if (!Array.isArray(main)) {
    issues.push(`${where}: FAQPage.mainEntity is not an array`);
    return;
  }
  if (main.length !== page.faqs.length) issues.push(`${where}: FAQPage has ${main.length} question(s); page.faqs has ${page.faqs.length}`);
  const n = Math.min(main.length, page.faqs.length);
  for (let i = 0; i < n; i++) {
    const q = main[i] as Record<string, unknown>;
    const faq = page.faqs[i];
    if (q.name !== faq.question) issues.push(`${where}: FAQPage question ${i + 1} name does not match page.faqs[${i}].question`);
    const ans = q.acceptedAnswer as Record<string, unknown> | undefined;
    if (!ans || ans.text !== faq.answer) issues.push(`${where}: FAQPage question ${i + 1} answer text does not match page.faqs[${i}].answer`);
  }
}

function checkGraph(graph: unknown, page: GeoProgrammePage, where: string, issues: Issue[], extraAllowed?: Set<string>): void {
  walk(graph, where, issues, extraAllowed);
  for (const faqPage of collectByType(graph, "FAQPage")) checkFaqPage(faqPage, page, where, issues);
}

function pass1(): number {
  let fails = 0;
  for (const page of GEO_PAGES) {
    const issues: Issue[] = [];
    const graph = [breadcrumbListJsonLd(breadcrumbTrail(page), page.path), faqPageJsonLd(page.faqs), serviceJsonLd(page)];
    checkGraph(graph, page, "jsonld", issues);
    for (const i of issues) console.log(`FAIL ${page.path}: ${i}`);
    fails += issues.length;
    console.log(`PAGE ${page.path} | pass1 | ${issues.length ? "FAIL" : "OK"} | ${graph.length} block(s)`);
  }
  return fails;
}

function extractJsonLd(html: string): { raw: string; index: number }[] {
  const out: { raw: string; index: number }[] = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) out.push({ raw: m[1], index: m.index });
  return out;
}

function htmlPathFor(routePath: string): string {
  return path.join(APP_DIR, ...routePath.split("/").filter(Boolean)) + ".html";
}

function pass2(): number {
  let fails = 0;
  let checked = 0;
  for (const page of GEO_PAGES) {
    const file = htmlPathFor(page.path);
    if (!fs.existsSync(file)) {
      console.log(`SKIP ${page.path}: no rendered HTML at ${path.relative(ROOT, file)} (status=${page.status})`);
      continue;
    }
    // An unpublished page renders as notFound() in a production build, so the
    // emitted .html is the 404 shell and carries no page schema. Checking it
    // would fail every draft. The route's own guard is what keeps it a 404;
    // pass 1 already validated the schema this page WILL emit once published.
    if (page.status !== "published") {
      console.log(`SKIP ${page.path}: status=${page.status}, rendered HTML is the 404 shell (pass 1 covers its schema)`);
      continue;
    }
    checked++;
    const html = fs.readFileSync(file, "utf8");
    const blocks = extractJsonLd(html);
    const issues: Issue[] = [];
    if (blocks.length === 0) issues.push("rendered HTML has no application/ld+json blocks");

    const parsed: unknown[] = [];
    blocks.forEach((b, i) => {
      try {
        parsed.push(JSON.parse(b.raw));
      } catch (e) {
        issues.push(`ld+json block ${i + 1} is not valid JSON: ${(e as Error).message}`);
      }
    });

    checkGraph(parsed, page, "html", issues, LAYOUT_TYPES);

    // Geo pages: BreadcrumbList must contain the hub path.
    if (page.type === "geo") {
      const lists = collectByType(parsed, "BreadcrumbList");
      const hubUrl = `${SITE_URL}${page.hub}`;
      const hasHub = lists.some((l) => JSON.stringify(l).includes(hubUrl));
      if (!hasHub) issues.push(`BreadcrumbList does not contain the hub ${hubUrl}`);
    }

    // Belt and braces: raw text scan of every block for LocalBusiness / PostalAddress / telephone.
    for (const [i, b] of blocks.entries()) {
      for (const bad of ["LocalBusiness", "PostalAddress", "telephone"]) {
        if (b.raw.includes(bad)) issues.push(`ld+json block ${i + 1} contains "${bad}"`);
      }
    }

    for (const i of issues) console.log(`FAIL ${page.path}: ${i}`);
    fails += issues.length;
    console.log(`PAGE ${page.path} | pass2 | ${issues.length ? "FAIL" : "OK"} | ${blocks.length} ld+json block(s)`);
  }
  if (checked === 0) console.log("WARN pass 2: no rendered geo page HTML found under .next/server/app (nothing checked)");
  return fails;
}

function main(): number {
  console.log(`check-schema: ${GEO_PAGES.length} page(s)`);
  console.log("");
  console.log("Pass 1: JSON-LD rebuilt from content objects");
  let fails = pass1();
  console.log("");
  if (fs.existsSync(APP_DIR)) {
    console.log(`Pass 2: rendered HTML under ${path.relative(ROOT, APP_DIR)}`);
    fails += pass2();
  } else {
    console.log("Pass 2: skipped (.next/server/app does not exist; run next build first to check rendered HTML)");
  }
  console.log("");
  console.log(`Summary: ${fails} FAIL`);
  return fails > 0 ? 1 : 0;
}

process.exit(main());
