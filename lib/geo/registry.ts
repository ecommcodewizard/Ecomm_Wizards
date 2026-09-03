// Registry of every geo programme page (hubs + geo pages). This list is the
// single source of truth for: the routes that exist, what the sitemap emits, the
// publish gate, and every guardrail script in scripts/geo/.
//
// Publishing is a discrete commit that flips a page's `status` to "published".
// scripts/geo/velocity.ts fails CI if more than 5 pages flip inside a rolling
// 7 days.

import { SERVICE_CATEGORIES } from "@/lib/services";
import { GeoProgrammePageSchema, NEEDS_INPUT, hasNeedsInput, proseStrings, wordCount, type GeoPage, type GeoProgrammePage, type HubPage } from "./types";
import { ECOMMERCE_AGENCY } from "./pages/ecommerce-agency";
import { ECOMMERCE_SEO_AGENCY } from "./pages/ecommerce-seo-agency";
import { ECOMMERCE_MARKETING_AGENCY } from "./pages/ecommerce-marketing-agency";
import { SHOPIFY_DEV_LOS_ANGELES } from "./pages/shopify-development-agency-los-angeles";
import { SHOPIFY_DEV_NEW_YORK } from "./pages/shopify-development-agency-new-york";
import { ECOMMERCE_AGENCY_NEW_YORK } from "./pages/ecommerce-agency-new-york";
import { SHOPIFY_SEO_NEW_YORK } from "./pages/shopify-seo-agency-new-york";

export const SITE_URL = "https://ecommwizards.com";

/** Add each new page here. Order is irrelevant; paths must be unique. */
export const GEO_PAGES: GeoProgrammePage[] = [ECOMMERCE_AGENCY, ECOMMERCE_SEO_AGENCY, ECOMMERCE_MARKETING_AGENCY, SHOPIFY_DEV_LOS_ANGELES, SHOPIFY_DEV_NEW_YORK, ECOMMERCE_AGENCY_NEW_YORK, SHOPIFY_SEO_NEW_YORK];

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

/** Geo children of a hub, published only (a hub never links to a 404). */
export function publishedChildren(hub: HubPage): GeoPage[] {
  return GEO_PAGES.filter((p): p is GeoPage => p.type === "geo" && p.hub === hub.path && p.status === "published");
}

/** Published geo pages sitting under a hub, addressed by PATH rather than by a
 *  HubPage object. publishedChildren above only works for hubs that are
 *  themselves in the geo programme; several hubs are ordinary hand-built
 *  service pages, and those still need to link down to their geo children or
 *  the geo page launches with no inbound internal link at all. */
export function publishedGeoForHub(hubPath: string): GeoPage[] {
  return GEO_PAGES.filter((p): p is GeoPage => p.type === "geo" && p.hub === hubPath && p.status === "published");
}

export function canonicalUrl(page: GeoProgrammePage): string {
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
// Publish gate
// ---------------------------------------------------------------------------

/** Paths that belong in the sitemap: published pages only. */
export function publishedGeoRoutes(): string[] {
  return GEO_PAGES.filter((p) => p.status === "published").map((p) => p.path);
}

/** Should this page render for a request?
 *
 *  Published pages always render. An unpublished page renders anywhere it can
 *  only be seen by the team, and 404s on the live site:
 *    - local `next dev`
 *    - Vercel PR preview deployments (VERCEL_ENV is "preview" there; the
 *      Hostinger production build never sets it, so live traffic still 404s)
 *    - any host where GEO_PREVIEW=1 is set deliberately
 *
 *  Note this is evaluated at build time for these statically prerendered
 *  routes, so the decision is baked into each deployment rather than read per
 *  request. Unpublished pages also carry robots noindex from the route's
 *  metadata, so a preview URL cannot be indexed even while it renders. */
export function isRenderable(page: GeoProgrammePage): boolean {
  if (page.status === "published") return true;
  if (process.env.NODE_ENV !== "production") return true;
  if (process.env.VERCEL_ENV === "preview") return true;
  return process.env.GEO_PREVIEW === "1";
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

  const publishing = page.status === "published";
  const gate = publishing ? err : warn;

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

/** Throws when a published page is not publishable. Called from the route at
 *  render time so `next build` itself fails on an unfinished published page. */
export function assertPublishable(page: GeoProgrammePage): void {
  if (page.status !== "published") return;
  const errors = validatePage(page).filter((i) => i.level === "error");
  if (errors.length) {
    throw new Error(
      `[geo] ${page.path} is marked published but is not publishable:\n` + errors.map((e) => `  - ${e.message}`).join("\n"),
    );
  }
}
