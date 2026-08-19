// Geo programme content model. Single source of truth for the shape of every
// hub and geo landing page under /services/<hub>[/<geo>].
//
// The build renders SHELL only: every prose slot below is filled by a human in
// lib/geo/pages/<slug>.ts. Unfilled slots stay as "[NEEDS INPUT: ...]" markers.
// A page with status "published" that still contains a marker FAILS the build
// (see lib/geo/registry.ts assertPublishable and scripts/geo/validate-content.ts).
// That failure is deliberate: it is what stops an unfinished page reaching prod.
//
// Copy rules for everything typed into these slots: US spelling, no em dashes,
// no AI filler ("unlock", "elevate", "seamless", "cutting-edge", ...), no
// presence claims ("for [city] brands", never "in [city]" / "near me" /
// "our [city] office"). See lib/geo/forbidden.ts.

import { z } from "zod";

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

/** Marker a human replaces with sourced copy. Anything containing this fails
 *  validation for a published page. */
export const NEEDS_INPUT = "[NEEDS INPUT";

export const PAGE_STATUSES = ["draft", "review", "published"] as const;
export type PageStatus = (typeof PAGE_STATUSES)[number];

export const REVIEW_AFTER_DAYS = [90, 180, 365] as const;
export type ReviewAfterDays = (typeof REVIEW_AFTER_DAYS)[number];

export const ASSET_RENDERERS = ["matrix", "checklist", "model", "frequency", "comparison"] as const;
export type AssetRenderer = (typeof ASSET_RENDERERS)[number];

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
/** ISO date, or an unfilled marker while the page is a draft. A published page
 *  with a marker here fails validation (registry.validatePage). */
const isoDate = z
  .string()
  .refine((s) => ISO_DATE_RE.test(s) || s.startsWith(NEEDS_INPUT), "ISO date (YYYY-MM-DD) or a [NEEDS INPUT] marker");

// ---------------------------------------------------------------------------
// Sub-objects
// ---------------------------------------------------------------------------

/** A dated, attributable source for a fact rendered on the page. */
export const SourceSchema = z.object({
  /** Stable id referenced inline in prose as [src:id]. */
  id: z.string().min(1),
  /** What this source supports, in one line. */
  claim: z.string().min(1),
  url: z.string().min(1),
  publisher: z.string().min(1),
  /** ISO date the fact was captured. */
  captured: isoDate,
  reviewAfterDays: z.union([z.literal(90), z.literal(180), z.literal(365)]),
});
export type Source = z.infer<typeof SourceSchema>;

/** A proof card. Resolves to /case-studies/<slug>; NEVER a bare index link and
 *  NEVER a client location. `verified` is literally `true`: the type will not
 *  accept a study that has not passed the client verification table. */
export const CaseStudyRefSchema = z.object({
  slug: z.string().min(1),
  vertical: z.string().min(1),
  whatWasBuilt: z.string().min(1),
  /** Must be a measurable outcome, e.g. "+46% conversion rate". */
  outcome: z.string().min(1),
  verified: z.literal(true),
});
export type CaseStudyRef = z.infer<typeof CaseStudyRefSchema>;

export const FAQSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
  /** True when this question exists on no other page in the geo set. */
  unique: z.boolean(),
});
export type FAQ = z.infer<typeof FAQSchema>;

export const ObjectionSchema = z.object({
  objection: z.string().min(1),
  answer: z.string().min(1),
});
export type Objection = z.infer<typeof ObjectionSchema>;

/** The Only-Here Asset: a static, accessible table / checklist / model with its
 *  method disclosed ABOVE the artifact and a review flag. Never paragraphs. */
export const OnlyHereAssetSchema = z.object({
  title: z.string().min(1),
  /** One-line framing shown under the title (what the reader gets). */
  intro: z.string().optional(),
  renderer: z.enum(ASSET_RENDERERS),
  method: z.object({
    sampleSize: z.number().int().positive().optional(),
    window: z.string().optional(),
    captured: isoDate,
    howGathered: z.string().min(1),
  }),
  /** First column is the row label column; give it a header too. */
  columns: z.array(z.string().min(1)).min(2),
  rows: z
    .array(
      z.object({
        label: z.string().min(1),
        cells: z.array(z.string()),
        note: z.string().optional(),
      }),
    )
    .min(1),
  /** The conclusion drawn from the artifact, in prose. */
  derived: z.string().min(1),
  /** Optional derived list, e.g. "Don't use Shopify if..." with 4-5 conditions. */
  derivedList: z
    .object({
      title: z.string().min(1),
      items: z.array(z.string().min(1)).min(1),
    })
    .optional(),
  supportingBlocks: z.array(z.object({ heading: z.string().min(1), body: z.string().min(1) })).optional(),
  reviewAfterDays: z.union([z.literal(90), z.literal(180), z.literal(365)]),
});
export type OnlyHereAsset = z.infer<typeof OnlyHereAssetSchema>;

/** "Who we work with": the categories this agency has actually shipped in, and
 *  what changes technically in each. Keep the list to categories the case-study
 *  corpus can back, so the proof block below it reads as evidence rather than
 *  coincidence. */
/** Icon keys the SegmentsBlock knows how to draw. Adding a key here means
 *  adding the matching SVG in components/sections/geo/SegmentsBlock.tsx. */
export const SEGMENT_ICONS = ["apparel", "beauty", "consumable", "jewelry", "outdoor", "wholesale", "cart", "box"] as const;
export type SegmentIcon = (typeof SEGMENT_ICONS)[number];

export const SegmentSchema = z.object({
  icon: z.enum(SEGMENT_ICONS),
  name: z.string().min(1),
  /** What is genuinely different about building for this category. */
  what: z.string().min(1),
  /** The concrete failure mode, rendered in the callout strip. Name the thing
   *  that actually goes wrong, not a benefit restated as a risk. */
  breaks: z.string().min(1),
});
export type Segment = z.infer<typeof SegmentSchema>;

export const SegmentsSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1),
  items: z.array(SegmentSchema).min(3).max(9),
});
export type Segments = z.infer<typeof SegmentsSchema>;

/** Results and client voice. Only slugs: every quote, name, role, avatar and
 *  metric is read from lib/case-studies.ts at render time, so a testimonial can
 *  only appear if a real published case study carries it. Nothing is retyped
 *  here, which makes inventing one impossible by construction. */
export const ResultsSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1),
  slugs: z.array(z.string().min(1)).min(1).max(4),
});
export type Results = z.infer<typeof ResultsSchema>;

/** The client logo bar under the hero. Copy only: the logo set itself lives in
 *  the component, because it is the same verified list on every page.
 *  Brand-stat tokens such as {storesBuilt} are substituted at render time, so a
 *  revised headline figure never has to be chased through page copy. */
export const TrustSchema = z.object({
  heading: z.string().min(1),
  subheading: z.string().min(1),
});
export type Trust = z.infer<typeof TrustSchema>;

export const ConversionSchema = z.object({
  /** One line restating what the reader gets from a call, specific to this page. */
  whatYouGet: z.string().min(1),
  /** One sentence naming something we would advise AGAINST spending on. */
  whatWeWillTellYouNotToDo: z.string().min(1),
  /** When they hear back, and from whom. */
  responseExpectation: z.string().min(1),
});
export type Conversion = z.infer<typeof ConversionSchema>;

/** A link rendered inside the service map (H3 hub only). */
export const ServiceMapItemSchema = z.object({
  name: z.string().min(1),
  href: z.string().startsWith("/"),
  /** One line: what this service contributes. Must NOT re-explain the service. */
  role: z.string().min(1),
});
export type ServiceMapItem = z.infer<typeof ServiceMapItemSchema>;

/** One phase card in the engagement block. Rendered as a numbered card matching
 *  the process section on the live Shopify development landing page: the step
 *  number is generated from array position, so the order of `steps` IS the
 *  sequence. */
export const EngagementStepSchema = z.object({
  /** Timing label, e.g. "Week 1" or "Weeks 2 to 4". Shown above the title. */
  week: z.string().min(1),
  /** Phase name, e.g. "Scope and fixed price". */
  title: z.string().min(1),
  what: z.string().min(1),
});
export type EngagementStep = z.infer<typeof EngagementStepSchema>;

/** Block 5 on a hub page. Heading and intro live here rather than in the
 *  template because they are copy, not layout. */
export const EngagementSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1),
  steps: z.array(EngagementStepSchema).min(3).max(6),
});
export type Engagement = z.infer<typeof EngagementSchema>;

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

const BaseSchema = z.object({
  /** URL slug for hubs ("ecommerce-agency") or geo ("los-angeles"). */
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "kebab-case slug, no dots"),
  /** Site-relative path, e.g. "/services/ecommerce-agency". Self-canonical. */
  path: z.string().startsWith("/services/"),
  status: z.enum(PAGE_STATUSES),

  // SEO
  targetKeyword: z.string().min(1),
  secondaryKeywords: z.array(z.string()),
  /** Tertiary / FAQ keyphrases assigned to this page in the keyword plan. These
   *  are long-tail question forms: they earn their place through the FAQ block
   *  and answer-shaped passages, not through exact-match repetition. Tracked
   *  here so scripts/geo/keyword-report.ts can prove coverage instead of
   *  assuming it. */
  faqKeywords: z.array(z.string()).default([]),
  /** <title>, rendered as title.absolute (no site suffix appended). */
  metaTitle: z.string().min(1).max(70),
  metaDescription: z.string().min(1).max(170),
  /** Short label for the dynamic OG card and hero eyebrow. */
  shortTitle: z.string().min(1).max(60),
  /** Concise category for Service schema serviceType, e.g. "Ecommerce agency". */
  serviceType: z.string().min(1),

  // Spine
  /** Exact target keyword, sentence-cased. */
  h1: z.string().min(1),
  /** The line under H1: revenue band + who this is NOT for. */
  qualifier: z.string().min(1),
  /** Optional hero image. Present: the hero splits into two columns. Absent:
   *  the copy runs full width. Alt text describes the image, and must never
   *  imply a location. */
  heroImage: z.object({ src: z.string().startsWith("/"), alt: z.string().min(1) }).optional(),
  hook: z.string().min(1),
  /** 40-60 word answer-first block. Defines the entity the page is named after
   *  and states who it is for. This is the passage AI Overviews and LLM answers
   *  quote, so it must stand alone without the surrounding page. */
  quickAnswer: z.string().min(1).optional(),
  /** Optional client logo bar, rendered directly under the hero. */
  trust: TrustSchema.optional(),
  /** Optional "who we work with" category block. */
  segments: SegmentsSchema.optional(),
  /** Optional results + client-quote block. */
  results: ResultsSchema.optional(),
  asset: OnlyHereAssetSchema,
  /** One-line conversion prompt rendered directly under the Only-Here Asset,
   *  where reader intent peaks. Keep it a question or an offer, not a slogan. */
  midCta: z.object({ text: z.string().min(1), label: z.string().min(1) }).optional(),
  /** Section headings are copy, not layout, so they live here rather than being
   *  hardcoded in the template. Write a real headline: a bare noun like "Proof"
   *  reads as a placeholder. */
  proofHeading: z.string().min(1),
  objectionsHeading: z.string().min(1),
  /** 2-3 when published (validatePage enforces); may be empty while the client
   *  verification table is incomplete, since `verified: true` cannot be set
   *  honestly before then. */
  proof: z.array(CaseStudyRefSchema).max(3),
  objections: z.array(ObjectionSchema).length(3),
  faqs: z.array(FAQSchema).min(6).max(8),
  conversion: ConversionSchema,
  sources: z.array(SourceSchema),
  wordCountTarget: z.tuple([z.number().int().positive(), z.number().int().positive()]),
  /** Soft presence-claim phrases (e.g. "in California") a human has reviewed and
   *  accepted as non-presence context. check-forbidden requires an entry here
   *  for every soft flag it finds. */
  reviewedPhrases: z.array(z.string()).optional(),
});

export const HubPageSchema = BaseSchema.extend({
  type: z.literal("hub"),
  /** Block 3: service, delivery model, price band. Paragraphs split on blank lines. */
  whatWeDo: z.string().min(1),
  /** Optional map variant (H3): links down to the service pages it gathers. */
  serviceMap: z.array(ServiceMapItemSchema).optional(),
  /** Block 5: the engagement, phase by phase. */
  engagement: EngagementSchema,
  /** Block 6: explicit scope boundary, one item per line. */
  whatWeDontDo: z.array(z.string().min(1)).min(1),
  /** Paths of geo pages beneath this hub (rendered only when those are published). */
  children: z.array(z.string().startsWith("/services/")),
});
export type HubPage = z.infer<typeof HubPageSchema>;

export const GeoPageSchema = BaseSchema.extend({
  type: z.literal("geo"),
  /** Path of the owning hub, e.g. "/services/shopify-development-agency". */
  hub: z.string().startsWith("/services/"),
  geo: z.object({
    name: z.string().min(1),
    type: z.enum(["metro", "state"]),
    /** Passed to Service.areaServed. Country stays "United States"; the
     *  place name is descriptive, never a presence claim. */
    areaServed: z.string().min(1),
  }),
  archetype: z.array(z.string().regex(/^[A-G]$/)).min(1),
  /** Block 3: the reader's commercial world, refracted through the service. */
  placeLayer: z.string().min(1),
  /** Block 4: service x place. Minimum two sourced facts. */
  gradientLayer: z.string().min(1),
  gradientFacts: z.array(SourceSchema),
  /** Block 6: the service framed as the response, with price band + hub link. */
  whatWeDoAboutIt: z.string().min(1),
});
export type GeoPage = z.infer<typeof GeoPageSchema>;

export const GeoProgrammePageSchema = z.discriminatedUnion("type", [HubPageSchema, GeoPageSchema]);
export type GeoProgrammePage = z.infer<typeof GeoProgrammePageSchema>;

// ---------------------------------------------------------------------------
// Helpers shared by components and scripts
// ---------------------------------------------------------------------------

/** True when a string still carries an unfilled marker. */
export function hasNeedsInput(s: string): boolean {
  return s.includes(NEEDS_INPUT);
}

/** Every human-authored prose string on a page, in reading order. Used for word
 *  counts, shingle checks and forbidden-copy checks. Structural strings
 *  (slugs, paths, urls, ids, dates) are excluded on purpose. */
export function proseStrings(page: GeoProgrammePage): string[] {
  const out: string[] = [page.h1, page.qualifier, page.hook];
  if (page.quickAnswer) out.push(page.quickAnswer);
  if (page.trust) out.push(page.trust.heading, page.trust.subheading);
  if (page.results) out.push(page.results.heading, page.results.intro);
  if (page.segments) {
    out.push(page.segments.heading, page.segments.intro);
    for (const s of page.segments.items) out.push(s.name, s.what, s.breaks);
  }
  if (page.type === "hub") {
    out.push(page.whatWeDo);
    for (const s of page.serviceMap ?? []) out.push(s.role);
    out.push(page.engagement.heading, page.engagement.intro);
    for (const s of page.engagement.steps) out.push(s.week, s.title, s.what);
    out.push(...page.whatWeDontDo);
  } else {
    out.push(page.placeLayer, page.gradientLayer, page.whatWeDoAboutIt);
  }
  const a = page.asset;
  out.push(a.title);
  if (a.intro) out.push(a.intro);
  out.push(a.method.howGathered, ...a.columns);
  for (const r of a.rows) {
    out.push(r.label, ...r.cells);
    if (r.note) out.push(r.note);
  }
  out.push(a.derived);
  if (a.derivedList) out.push(a.derivedList.title, ...a.derivedList.items);
  for (const b of a.supportingBlocks ?? []) out.push(b.heading, b.body);
  if (page.midCta) out.push(page.midCta.text, page.midCta.label);
  out.push(page.proofHeading, page.objectionsHeading);
  for (const p of page.proof) out.push(p.vertical, p.whatWasBuilt, p.outcome);
  for (const o of page.objections) out.push(o.objection, o.answer);
  for (const f of page.faqs) out.push(f.question, f.answer);
  out.push(page.conversion.whatYouGet, page.conversion.whatWeWillTellYouNotToDo, page.conversion.responseExpectation);
  return out;
}

/** Every string on a page including structural ones (for schema-type and URL
 *  checks). */
export function allStrings(value: unknown, acc: string[] = []): string[] {
  if (typeof value === "string") acc.push(value);
  else if (Array.isArray(value)) for (const v of value) allStrings(v, acc);
  else if (value && typeof value === "object") for (const v of Object.values(value as Record<string, unknown>)) allStrings(v, acc);
  return acc;
}

/** Counts the words a reader actually sees. Unfilled markers contribute nothing,
 *  inline source markers render as a superscript rather than prose, and a link
 *  marker counts only its visible label. Without this normalization the count
 *  drifts upward as sources are cited, which would push a finished page out of
 *  its target range for no editorial reason. */
export function wordCount(strings: string[]): number {
  return strings
    .join(" ")
    .replace(/\[NEEDS INPUT[^\]]*\]/g, " ")
    .replace(/\[src:[a-z0-9-]+\]/gi, " ")
    .replace(/\[link:[^\]|]+\|([^\]]+)\]/g, "$1")
    .split(/\s+/)
    .filter(Boolean).length;
}
