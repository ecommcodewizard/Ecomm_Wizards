// Registry of every geo programme page (hubs + geo pages). This list is the
// single source of truth for: the routes that exist, what the sitemap emits, and
// every guardrail script in scripts/geo/.
//
// There is no publish gate. Adding a page here and merging to main puts it live:
// it renders, it enters the sitemap, and its hub links down to it.
//
// The guardrails in scripts/geo are the only gate, and nothing runs them for you:
// this repo has no CI workflow. Run `npm run geo:check` before every merge. An
// unfinished page also fails `next build`, which is the backstop.

import { SERVICE_CATEGORIES } from "@/lib/services";
import { GeoProgrammePageSchema, NEEDS_INPUT, ServiceGeoPageSchema, hasNeedsInput, proseStrings, serviceH1, serviceProseStrings, wordCount, type GeoPage, type GeoProgrammePage, type HubPage, type ServiceGeoPage } from "./types";
import { CASE_STUDIES } from "@/lib/case-studies";
import { SHOPIFY_DEV_CHARLOTTE } from "./pages/shopify-development-agency-charlotte";
import { SHOPIFY_DEV_CHICAGO } from "./pages/shopify-development-agency-chicago";
import { SHOPIFY_DEV_DALLAS } from "./pages/shopify-development-agency-dallas";
import { ECOMMERCE_AGENCY } from "./pages/ecommerce-agency";
import { ECOMMERCE_SEO_AGENCY } from "./pages/ecommerce-seo-agency";
import { ECOMMERCE_MARKETING_AGENCY } from "./pages/ecommerce-marketing-agency";
import { SHOPIFY_DEV_LOS_ANGELES } from "./pages/shopify-development-agency-los-angeles";
import { SHOPIFY_DEV_NEW_YORK } from "./pages/shopify-development-agency-new-york";
import { ECOMMERCE_AGENCY_LOS_ANGELES } from "./pages/ecommerce-agency-los-angeles";
import { ECOMMERCE_AGENCY_NEW_YORK } from "./pages/ecommerce-agency-new-york";
import { SHOPIFY_SEO_NEW_YORK } from "./pages/shopify-seo-agency-new-york";
import { SHOPIFY_DEV_AUSTIN } from "./pages/shopify-development-agency-austin";
import { ECOMMERCE_AGENCY_AUSTIN } from "./pages/ecommerce-agency-austin";
import { ECOMMERCE_AGENCY_DALLAS } from "./pages/ecommerce-agency-dallas";
import { ECOMMERCE_MARKETING_AGENCY_LOS_ANGELES } from "./pages/ecommerce-marketing-agency-los-angeles";
import { ECOMMERCE_AGENCY_SAN_DIEGO } from "./pages/ecommerce-agency-san-diego";
import { SHOPIFY_DEV_SAN_DIEGO } from "./pages/shopify-development-agency-san-diego";
import { SHOPIFY_DEV_ORANGE_COUNTY } from "./pages/shopify-development-agency-orange-county";
import { SHOPIFY_DEV_CALIFORNIA } from "./pages/shopify-development-agency-california";
import { SHOPIFY_THEME_CALIFORNIA } from "./pages/shopify-theme-development-california";
import { SHOPIFY_DEV_BOSTON } from "./pages/shopify-development-agency-boston";
import { ECOMMERCE_AGENCY_BOSTON } from "./pages/ecommerce-agency-boston";
import { SHOPIFY_APP_RALEIGH } from "./pages/shopify-app-development-raleigh";
import { ECOMMERCE_AGENCY_RALEIGH } from "./pages/ecommerce-agency-raleigh";
import { SHOPIFY_DEV_MINNEAPOLIS } from "./pages/shopify-development-agency-minneapolis";
import { ECOMMERCE_AGENCY_MINNEAPOLIS } from "./pages/ecommerce-agency-minneapolis";
import { ECOMMERCE_AGENCY_SAN_FRANCISCO } from "./pages/ecommerce-agency-san-francisco";
import { ECOMMERCE_AGENCY_MIAMI } from "./pages/ecommerce-agency-miami";
import { ECOMMERCE_AGENCY_CHICAGO } from "./pages/ecommerce-agency-chicago";
import { ECOMMERCE_SEO_AGENCY_CHICAGO } from "./pages/ecommerce-seo-agency-chicago";
import { ECOMMERCE_AGENCY_ATLANTA } from "./pages/ecommerce-agency-atlanta";
import { ECOMMERCE_AGENCY_DENVER } from "./pages/ecommerce-agency-denver";
import { ECOMMERCE_AGENCY_PHILADELPHIA } from "./pages/ecommerce-agency-philadelphia";
import { ECOMMERCE_AGENCY_MILWAUKEE } from "./pages/ecommerce-agency-milwaukee";
import { ECOMMERCE_AGENCY_WISCONSIN } from "./pages/ecommerce-agency-wisconsin";
import { SHOPIFY_DEV_MAINE } from "./pages/shopify-development-agency-maine";
import { ECOMMERCE_AGENCY_MAINE } from "./pages/ecommerce-agency-maine";
import { ECOMMERCE_AGENCY_ARIZONA } from "./pages/ecommerce-agency-arizona";
import { ECOMMERCE_AGENCY_MARYLAND } from "./pages/ecommerce-agency-maryland";
import { ECOMMERCE_AGENCY_NEW_JERSEY } from "./pages/ecommerce-agency-new-jersey";
import { ECOMMERCE_MARKETING_AGENCY_MIAMI } from "./pages/ecommerce-marketing-agency-miami";
import { ECOMMERCE_SEO_AGENCY_MIAMI } from "./pages/ecommerce-seo-agency-miami";
import { SHOPIFY_DEV_FLORIDA } from "./pages/shopify-development-agency-florida";
import { ECOMMERCE_AGENCY_FLORIDA } from "./pages/ecommerce-agency-florida";
import { ECOMMERCE_SEO_AGENCY_FLORIDA } from "./pages/ecommerce-seo-agency-florida";

export const SITE_URL = "https://ecommwizards.com";

/** Add each new page here. Order is irrelevant; paths must be unique. */
export const GEO_PAGES: GeoProgrammePage[] = [ECOMMERCE_AGENCY, ECOMMERCE_SEO_AGENCY, ECOMMERCE_MARKETING_AGENCY, SHOPIFY_DEV_LOS_ANGELES, SHOPIFY_DEV_NEW_YORK, ECOMMERCE_AGENCY_NEW_YORK, SHOPIFY_SEO_NEW_YORK, ECOMMERCE_AGENCY_LOS_ANGELES, ECOMMERCE_MARKETING_AGENCY_LOS_ANGELES, ECOMMERCE_AGENCY_SAN_DIEGO, SHOPIFY_DEV_SAN_DIEGO, SHOPIFY_DEV_ORANGE_COUNTY, SHOPIFY_DEV_CALIFORNIA, SHOPIFY_THEME_CALIFORNIA, ECOMMERCE_AGENCY_SAN_FRANCISCO, SHOPIFY_DEV_AUSTIN, ECOMMERCE_AGENCY_AUSTIN, ECOMMERCE_AGENCY_DALLAS, SHOPIFY_DEV_BOSTON, ECOMMERCE_AGENCY_BOSTON, SHOPIFY_APP_RALEIGH, ECOMMERCE_AGENCY_RALEIGH, SHOPIFY_DEV_MINNEAPOLIS, ECOMMERCE_AGENCY_MINNEAPOLIS, ECOMMERCE_AGENCY_MIAMI, ECOMMERCE_AGENCY_CHICAGO, ECOMMERCE_SEO_AGENCY_CHICAGO, ECOMMERCE_AGENCY_ATLANTA, ECOMMERCE_AGENCY_DENVER, ECOMMERCE_AGENCY_PHILADELPHIA, ECOMMERCE_AGENCY_MILWAUKEE, ECOMMERCE_AGENCY_WISCONSIN, SHOPIFY_DEV_MAINE, ECOMMERCE_AGENCY_MAINE, ECOMMERCE_AGENCY_ARIZONA, ECOMMERCE_AGENCY_MARYLAND, ECOMMERCE_AGENCY_NEW_JERSEY, ECOMMERCE_MARKETING_AGENCY_MIAMI, ECOMMERCE_SEO_AGENCY_MIAMI, SHOPIFY_DEV_FLORIDA, ECOMMERCE_AGENCY_FLORIDA, ECOMMERCE_SEO_AGENCY_FLORIDA];

/** Service-format location pages (geo v5, owner-approved 2026-11-08). Live
 *  the moment they reach main, exactly like GEO_PAGES. Kept in their own list
 *  because they have their own schema; every guardrail reads both lists. */
export const SERVICE_GEO_PAGES: ServiceGeoPage[] = [SHOPIFY_DEV_CHARLOTTE, SHOPIFY_DEV_CHICAGO, SHOPIFY_DEV_DALLAS];

/** Anything a hub links down to or the footer lists. */
export type LocationPage = GeoPage | ServiceGeoPage;

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------

export function getPageByPath(path: string): GeoProgrammePage | undefined {
  return GEO_PAGES.find((p) => p.path === path);
}

export function getHub(slug: string): HubPage | undefined {
  const p = GEO_PAGES.find((x) => x.type === "hub" && x.slug === slug);
  return p && p.type === "hub" ? p : undefined;
}

export function getGeo(hubPath: string, slug: string): GeoPage | undefined {
  const p = GEO_PAGES.find((x) => x.type === "geo" && x.hub === hubPath && x.slug === slug);
  return p && p.type === "geo" ? p : undefined;
}

/** Geo children of a hub. Every registered page is live, so this is all of them. */
export function hubChildren(hub: HubPage): GeoPage[] {
  return GEO_PAGES.filter((p): p is GeoPage => p.type === "geo" && p.hub === hub.path);
}

/** Geo pages sitting under a hub, addressed by PATH rather than by a HubPage
 *  object. hubChildren above only works for hubs that are themselves in the geo
 *  programme; several hubs are ordinary hand-built service pages, and those
 *  still need to link down to their geo children or the geo page launches with
 *  no inbound internal link at all. */
export function geoForHub(hubPath: string): LocationPage[] {
  const old = GEO_PAGES.filter((p): p is GeoPage => p.type === "geo" && p.hub === hubPath);
  const svc = SERVICE_GEO_PAGES.filter((p) => p.hub === hubPath);
  return [...old, ...svc];
}

export function canonicalUrl(page: { path: string }): string {
  return `${SITE_URL}${page.path}`;
}

/** Display label for a hub path: registry first, then the service catalog, then
 *  a humanized slug. Used by breadcrumbs on geo pages. */
export function hubPathToLabel(hubPath: string): string {
  const reg = GEO_PAGES.find((p) => p.type === "hub" && p.path === hubPath);
  if (reg) return reg.shortTitle;
  for (const cat of SERVICE_CATEGORIES) {
    const item = cat.items.find((i) => i.href === hubPath);
    if (item) return item.name;
  }
  const slug = hubPath.split("/").filter(Boolean).pop() ?? "";
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// ---------------------------------------------------------------------------
// Footer "Localized" column
// ---------------------------------------------------------------------------

/** Footer labels for each hub. Shorter than the registry's own shortTitle,
 *  because the footer column is narrow and "Shopify Development Agency" wraps
 *  onto three lines there. A hub with no entry here falls back to
 *  hubPathToLabel. */
const FOOTER_HUB_LABELS: Record<string, string> = {
  "/services/ecommerce-agency": "Ecommerce Agency",
  "/services/shopify-development-agency": "Shopify Development",
  "/services/ecommerce-seo-agency": "Ecommerce SEO",
  "/services/ecommerce-marketing-agency": "Ecommerce Marketing",
  "/services/shopify-seo-agency": "Shopify SEO",
  "/services/shopify-theme-development": "Theme Development",
  "/services/shopify-app-development": "App Development",
};

export type LocalizedGroup = {
  label: string;
  href: string;
  items: { name: string; href: string }[];
};

/** Every hub that has geo pages, with its locations, for the footer's
 *  "Localized" column. Hubs are ordered by how many locations they carry, so
 *  the biggest cluster leads; locations are alphabetical within a hub.
 *
 *  RETURNS NAMES AND PATHS ONLY, AND THAT IS THE POINT. components/layout/
 *  Footer.tsx is a client component, so whatever this returns is serialized
 *  into the page and shipped to every visitor. Handing it GeoPage objects
 *  would put all 39 pages' full copy, sourced facts and asset tables into the
 *  bundle of every page on the site. Keep this projection small. */
export function localizedFooterGroups(): LocalizedGroup[] {
  const byHub = new Map<string, { name: string; href: string }[]>();

  const located: LocationPage[] = [...GEO_PAGES.filter((p): p is GeoPage => p.type === "geo"), ...SERVICE_GEO_PAGES];
  for (const p of located) {
    if (!byHub.has(p.hub)) byHub.set(p.hub, []);
    byHub.get(p.hub)!.push({ name: p.geo.name, href: p.path });
  }

  return [...byHub.entries()]
    .map(([hub, items]) => ({
      label: FOOTER_HUB_LABELS[hub] ?? hubPathToLabel(hub),
      href: hub,
      items: items.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => b.items.length - a.items.length || a.label.localeCompare(b.label));
}

// ---------------------------------------------------------------------------
// Routes and validation
// ---------------------------------------------------------------------------

/** Paths that belong in the sitemap: every registered page. */
export function geoRoutes(): string[] {
  return [...GEO_PAGES.map((p) => p.path), ...SERVICE_GEO_PAGES.map((p) => p.path)];
}

export type ValidationIssue = { path: string; level: "error" | "warn"; message: string };

/** Full content validation for one page. Errors block publishing; warnings do
 *  not. Mirrors the rules in Build Manual section 7 (validate-content). */
export function validatePage(page: GeoProgrammePage, today: Date = new Date()): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const err = (message: string) => issues.push({ path: page.path, level: "error", message });
  const warn = (message: string) => issues.push({ path: page.path, level: "warn", message });

  const parsed = GeoProgrammePageSchema.safeParse(page);
  if (!parsed.success) {
    for (const i of parsed.error.issues) err(`shape: ${i.path.join(".")}: ${i.message}`);
    return issues; // shape errors make the rest meaningless
  }

  // Every registered page is live, so a content fault is always an error. There
  // is no draft state left to downgrade it to a warning.
  const gate = err;

  // Unfilled slots
  const markers = proseStrings(page).filter(hasNeedsInput).length;
  if (markers > 0) gate(`${markers} slot(s) still contain ${NEEDS_INPUT} markers`);
  const structuralMarkers = [page.metaTitle, page.metaDescription, page.shortTitle].filter(hasNeedsInput).length;
  if (structuralMarkers > 0) gate(`${structuralMarkers} SEO field(s) still contain ${NEEDS_INPUT} markers`);
  for (const s of page.sources) {
    if (hasNeedsInput(s.url) || hasNeedsInput(s.claim) || hasNeedsInput(s.publisher) || hasNeedsInput(s.captured)) gate(`source "${s.id}" incomplete`);
  }
  if (hasNeedsInput(page.asset.method.captured)) gate("Only-Here Asset method.captured is not set");
  if (page.asset.rows.some((r) => r.cells.length !== page.asset.columns.length - 1)) {
    err(`Only-Here Asset: every row must have ${page.asset.columns.length - 1} cells (one per non-label column)`);
  }

  // Proof
  if (page.proof.length < 2) gate(`proof has ${page.proof.length} case stud(ies); 2-3 required, each verified: true`);
  for (const p of page.proof) if (hasNeedsInput(p.whatWasBuilt) || hasNeedsInput(p.outcome) || hasNeedsInput(p.vertical)) gate(`proof "${p.slug}" incomplete`);

  // FAQ
  const unique = page.faqs.filter((f) => f.unique).length;
  if (unique < 3) gate(`only ${unique} FAQ(s) marked unique; minimum 3`);

  // Geo-only
  if (page.type === "geo") {
    if (page.gradientFacts.length < 2) gate(`gradientFacts has ${page.gradientFacts.length}; minimum 2 sourced facts`);
    // Block 3 must render something: the place layer, or the industries block
    // standing in for it (segmentsReplacePlace, added 2026-09-19).
    if (!page.placeLayer && !(page.segmentsReplacePlace && page.segments)) {
      err("no placeLayer, and no segments set to replace it (segmentsReplacePlace)");
    }
    // Downgraded from a gate to a warning on 2026-09-03, owner's decision.
    //
    // Page Spec section 6.4 required this FAQ as the page's presence
    // disclaimer. The owner's position is now explicit and consistent: we make
    // no claim to be in the city, so we should make no claim that we are not
    // either. A buyer at this deal size cares about accountability, not an
    // address, and volunteering "we have no office here" answers a doubt most
    // readers never had.
    //
    // The actual compliance requirement is untouched. Master Strategy section 4
    // forbids PRESENCE claims - "in [city]", "based in", "our [city] office",
    // local schema - and check-forbidden still enforces every one of those.
    // Nothing in the spec ever required a disclaimer of absence.
    //
    // Kept as a warning rather than deleted so the question stays visible to
    // whoever writes the next geo page: it is often the right FAQ to include,
    // just not a publishable-or-not one.
    if (!page.faqs.some((f) => /do you have an office/i.test(f.question))) {
      warn("no 'Do you have an office in [city]?' FAQ. Optional since 2026-09-03, but confirm nothing else on the page implies a local presence");
    }
  }

  // On-page citations are retired: the pages carry no visible Sources section
  // and no inline markers, so a leftover [src:...] would render as literal text.
  const refs = proseStrings(page).join(" ").match(/\[src:[a-z0-9-]+\]/gi) ?? [];
  if (refs.length > 0) {
    err(`${refs.length} inline [src:...] marker(s) remain (${refs.slice(0, 3).join(", ")}); on-page citations are retired, remove them`);
  }

  // Word count
  const words = wordCount(proseStrings(page));
  const [lo, hi] = page.wordCountTarget;
  if (words < lo || words > hi) gate(`word count ${words} outside target ${lo}-${hi}`);

  // Review flags
  const stale = (captured: string, days: number) => {
    const d = new Date(captured);
    if (Number.isNaN(d.getTime())) return false;
    return d.getTime() + days * 86400000 < today.getTime();
  };
  if (stale(page.asset.method.captured, page.asset.reviewAfterDays)) {
    warn(`Only-Here Asset captured ${page.asset.method.captured} is past its ${page.asset.reviewAfterDays}-day review window`);
  }
  for (const s of page.sources) {
    if (stale(s.captured, s.reviewAfterDays)) warn(`source "${s.id}" captured ${s.captured} is past its ${s.reviewAfterDays}-day review window`);
  }

  return issues;
}

/** Content validation for a service-format location page. */
export function validateServicePage(page: ServiceGeoPage, today: Date = new Date()): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const err = (message: string) => issues.push({ path: page.path, level: "error", message });
  const warn = (message: string) => issues.push({ path: page.path, level: "warn", message });

  const parsed = ServiceGeoPageSchema.safeParse(page);
  if (!parsed.success) {
    for (const i of parsed.error.issues) err(`shape: ${i.path.join(".")}: ${i.message}`);
    return issues;
  }

  const prose = serviceProseStrings(page);
  const markers = prose.filter(hasNeedsInput).length;
  if (markers > 0) err(`${markers} slot(s) still contain ${NEEDS_INPUT} markers`);
  if ([page.metaTitle, page.metaDescription, page.shortTitle].some(hasNeedsInput)) err(`SEO fields still contain ${NEEDS_INPUT} markers`);
  for (const s of page.sources) {
    if (hasNeedsInput(s.url) || hasNeedsInput(s.claim) || hasNeedsInput(s.publisher) || hasNeedsInput(s.captured)) err(`source "${s.id}" incomplete`);
  }

  // Case studies must resolve to a published study.
  const known = new Set(CASE_STUDIES.map((c) => c.slug));
  for (const c of page.caseStudies.items) if (!known.has(c.slug)) err(`case study "${c.slug}" is not in lib/case-studies.ts`);

  const unique = page.faqs.filter((f) => f.unique).length;
  if (unique < 3) err(`only ${unique} FAQ(s) marked unique; minimum 3`);

  // No prices in copy (owner rule): any sentence carrying a dollar figure next
  // to price language fails. Dollar figures that are results or thresholds
  // (brand stats, case-study revenue, a tax threshold) pass.
  const PRICE_WORDS = /\b(cost|costs|price|priced|pricing|budget|fee|fees|retainer|starts? at|starting at|per (?:month|hour)|hourly rate|packages? from)\b/i;
  for (const s of prose) {
    for (const sentence of s.split(/(?<=[.!?])\s+/)) {
      if (/\$\s?\d/.test(sentence) && PRICE_WORDS.test(sentence)) err(`possible price in copy: "${sentence.slice(0, 100)}"`);
    }
  }

  // The accordions and the FAQ render plain text, so a link or bold marker
  // there would show as literal brackets.
  for (const s of [...page.services.items.map((i) => i.body), ...page.faqs.flatMap((f) => [f.question, f.answer])]) {
    if (/\[link:|\*\*/.test(s)) err(`marker in a plain-text slot (services accordion or FAQ): "${s.slice(0, 80)}"`);
  }

  const words = wordCount(prose);
  const [lo, hi] = page.wordCountTarget;
  if (words < lo || words > hi) err(`word count ${words} outside target ${lo}-${hi}`);

  // Scope summary: short enough to be quoted whole.
  const summaryWords = wordCount([page.summary]);
  if (summaryWords < 35 || summaryWords > 70) err(`summary is ${summaryWords} words; keep it 35-70 so it can be quoted whole`);

  for (const i of keywordIssues(page, prose, words)) (i.level === "error" ? err : warn)(i.message);

  for (const s of page.sources) {
    const d = new Date(s.captured);
    if (!Number.isNaN(d.getTime()) && d.getTime() + s.reviewAfterDays * 86400000 < today.getTime()) {
      warn(`source "${s.id}" captured ${s.captured} is past its ${s.reviewAfterDays}-day review window`);
    }
  }
  return issues;
}

/** Keyword placement, per the Page Standard (Step 09) for the primary and
 *  Copy Standard 7.2 for secondaries. Matching ignores case and punctuation,
 *  so "Shopify Agency Dallas | ..." counts as the phrase.
 *
 *  Primary: exact phrase in the title, meta description, H1, first 100 words
 *  of the hero copy and at least one heading; at least 0.4% of visible words
 *  (the standard aims for ~0.6% and says 0.4% clean beats 0.6% stuffed);
 *  never in the booking section. Above ~0.8% is a warning: that is where a
 *  reader starts to notice.
 *
 *  Secondary: its phrase without the place name must lead a section, in a
 *  heading or the first sentence of a section or item. More than three uses
 *  on the page is a warning (each secondary owns one section). */
function keywordIssues(page: ServiceGeoPage, prose: string[], words: number): { level: "error" | "warn"; message: string }[] {
  const out: { level: "error" | "warn"; message: string }[] = [];
  const norm = (s: string) => " " + s.toLowerCase().replace(/\[link:[^\]|]+\|([^\]]+)\]/g, "$1").replace(/[^a-z0-9]+/g, " ").trim() + " ";
  const count = (s: string, phrase: string) => norm(s).split(norm(phrase)).length - 1;
  const has = (s: string, phrase: string) => count(s, phrase) > 0;

  const kw = page.targetKeyword;
  const headings = [
    page.trust.heading, page.pains.heading, page.services.heading, page.local.heading, page.caseStudies.heading,
    page.process.heading, page.compare.heading, page.industries.heading, page.faqHeading,
    ...page.pains.items.map((i) => i.name), ...page.services.items.map((i) => i.title),
    ...page.local.items.map((i) => i.name), ...page.process.steps.map((s) => s.title), ...page.faqs.map((f) => f.question),
  ];
  const first100 = page.hero.intro.replace(/\[link:[^\]|]+\|([^\]]+)\]/g, "$1").split(/\s+/).slice(0, 100).join(" ");
  const book = [page.book.heading, page.book.sub, ...page.book.bullets].join(" ");

  if (!has(page.metaTitle, kw)) out.push({ level: "error", message: `primary "${kw}" missing from the title` });
  if (!has(page.metaDescription, kw)) out.push({ level: "error", message: `primary "${kw}" missing from the meta description` });
  if (!has(serviceH1(page), kw)) out.push({ level: "error", message: `primary "${kw}" missing from the H1` });
  if (!has(first100, kw)) out.push({ level: "error", message: `primary "${kw}" missing from the first 100 words of the hero copy` });
  if (!headings.some((h) => has(h, kw))) out.push({ level: "error", message: `primary "${kw}" is in no section heading` });
  if (has(book, kw)) out.push({ level: "error", message: `primary "${kw}" appears in the booking section (must be 0)` });

  const uses = prose.reduce((a, s) => a + count(s, kw), 0);
  const min = Math.floor(words * 0.004);
  const pct = ((uses / words) * 100).toFixed(2);
  if (uses < min) out.push({ level: "error", message: `primary "${kw}" used ${uses}x (${pct}%); needs at least ${min} (0.4% of ${words} words)` });
  else if (uses > Math.ceil(words * 0.008)) out.push({ level: "warn", message: `primary "${kw}" used ${uses}x (${pct}%), above 0.8%: check none read as stuffed` });

  const place = new Set([page.geo.name.toLowerCase(), "nc", "il", "tx", "in"]);
  const leads = [
    ...headings,
    ...[page.pains.intro, page.services.intro, page.local.intro, page.caseStudies.intro, page.process.intro, page.compare.intro, page.industries.intro,
      ...page.services.items.map((i) => i.body), ...page.pains.items.map((i) => i.desc), ...page.local.items.map((i) => i.desc),
      ...page.faqs.map((f) => f.answer)].map((s) => s.split(/(?<=[.!?])\s+/)[0]),
  ];
  for (const sec of page.secondaryKeywords) {
    const core = sec.toLowerCase().split(/\s+/).filter((w) => !place.has(w)).join(" ");
    if (!leads.some((s) => has(s, core))) out.push({ level: "error", message: `secondary "${sec}": "${core}" does not lead any section (heading or first sentence)` });
    const n = prose.reduce((a, s) => a + count(s, core), 0);
    if (n > 3) out.push({ level: "warn", message: `secondary "${sec}": "${core}" used ${n}x; each secondary should own one section` });
  }
  return out;
}

export function assertServicePublishable(page: ServiceGeoPage): void {
  const errors = validateServicePage(page).filter((i) => i.level === "error");
  if (errors.length) {
    throw new Error(`[geo] ${page.path} is not fit to be live:\n` + errors.map((e) => `  - ${e.message}`).join("\n"));
  }
}

/** Throws when a page is not fit to be live. Called from the route at render
 *  time so `next build` itself fails on an unfinished page. */
export function assertPublishable(page: GeoProgrammePage): void {
  const errors = validatePage(page).filter((i) => i.level === "error");
  if (errors.length) {
    throw new Error(
      `[geo] ${page.path} is not fit to be live:\n` + errors.map((e) => `  - ${e.message}`).join("\n"),
    );
  }
}
