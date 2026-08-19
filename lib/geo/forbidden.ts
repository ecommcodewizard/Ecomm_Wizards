// Copy and schema constraints for the geo programme, shared by the components
// (dev-time warnings) and scripts/geo/check-forbidden.ts + check-schema.ts (CI).
//
// Two classes of rule:
//  1. Banned copy: AI filler and hype words (Master Strategy section 5.5) plus
//     the site-wide copy rules (no em dashes, US spelling).
//  2. Presence claims: this agency has no staffed office in any of these cities.
//     No page may say or imply otherwise. The permitted form is
//     "for [city] brands"; "in [city]" is flagged for human review because it
//     appears legitimately in phrases like "brands selling in California".

/** Exact-phrase bans (case-insensitive). "leverage" is banned as a verb; the
 *  regex below catches "leverage"/"leverages"/"leveraging" followed by a word. */
export const BANNED_PHRASES: { pattern: RegExp; label: string }[] = [
  { pattern: /\bunlock(?:s|ed|ing)?\b/i, label: "unlock" },
  { pattern: /\belevat(?:e|es|ed|ing)\b/i, label: "elevate" },
  { pattern: /in today'?s fast[- ]paced/i, label: "in today's fast-paced" },
  { pattern: /we'?re passionate about/i, label: "we're passionate about" },
  { pattern: /\bseamless(?:ly)?\b/i, label: "seamless" },
  { pattern: /\bcutting[- ]edge\b/i, label: "cutting-edge" },
  { pattern: /\bworld[- ]class\b/i, label: "world-class" },
  { pattern: /\bdominat(?:e|es|ed|ing)\b/i, label: "dominate" },
  { pattern: /\bleverag(?:e|es|ed|ing)\s+(?:the|your|our|its|their|a|an|this|these|those)\b/i, label: "leverage (verb)" },
  // Site-wide copy rules (owner's standing list), in addition to the manual's set.
  { pattern: /\brobust\b/i, label: "robust" },
  { pattern: /\bempower(?:s|ed|ing|ment)?\b/i, label: "empower" },
  { pattern: /\bdive in(?:to)?\b/i, label: "dive in" },
  { pattern: /\bgame[- ]chang(?:er|ing)\b/i, label: "game-changer" },
  { pattern: /\brevolutioni[sz](?:e|es|ed|ing)\b/i, label: "revolutionize" },
  { pattern: /\btailored\b/i, label: "tailored" },
  { pattern: /\bbespoke\b/i, label: "bespoke" },
  { pattern: /\bholistic\b/i, label: "holistic" },
  { pattern: /\btransformative\b/i, label: "transformative" },
  { pattern: /\binnovative\b/i, label: "innovative" },
];

/** Typographic rules. En dashes in numeric ranges are allowed; em dashes are not. */
export const BANNED_CHARACTERS: { pattern: RegExp; label: string }[] = [
  { pattern: /—/, label: "em dash (U+2014)" },
];

/** UK spellings on US-targeted pages. Word-boundary, case-insensitive. */
export const UK_SPELLINGS: { pattern: RegExp; label: string; us: string }[] = [
  { pattern: /\boptimis(?:e|es|ed|ing|ation|ations)\b/i, label: "optimise", us: "optimize" },
  { pattern: /\bcolour(?:s|ed)?\b/i, label: "colour", us: "color" },
  { pattern: /\borganis(?:e|es|ed|ing|ation|ations)\b/i, label: "organise", us: "organize" },
  { pattern: /\bcatalogue(?:s|d)?\b/i, label: "catalogue", us: "catalog" },
  { pattern: /\bfavourite(?:s)?\b/i, label: "favourite", us: "favorite" },
  { pattern: /\bcentre(?:s|d)?\b/i, label: "centre", us: "center" },
  { pattern: /\bprogramme(?:s)?\b/i, label: "programme", us: "program" },
  { pattern: /\bbehaviour(?:s|al)?\b/i, label: "behaviour", us: "behavior" },
  { pattern: /\banalys(?:e|es|ed|ing)\b/i, label: "analyse", us: "analyze" },
  { pattern: /\blicence(?:s)?\b/i, label: "licence", us: "license" },
  { pattern: /\bfulfil(?:s|led|ling|ment)?\b/i, label: "fulfil", us: "fulfill" },
  { pattern: /\bcustomis(?:e|es|ed|ing|ation)\b/i, label: "customise", us: "customize" },
  { pattern: /\bprioritis(?:e|es|ed|ing|ation)\b/i, label: "prioritise", us: "prioritize" },
  { pattern: /\brecognis(?:e|es|ed|ing)\b/i, label: "recognise", us: "recognize" },
  { pattern: /\brealis(?:e|es|ed|ing)\b/i, label: "realise", us: "realize" },
  { pattern: /\bcancell(?:ed|ing|ation)\b/i, label: "cancelled", us: "canceled" },
  { pattern: /£/, label: "pound sign", us: "USD ($)" },
];

/** Presence claims: hard failures regardless of city. */
export const PRESENCE_HARD: { pattern: RegExp; label: string }[] = [
  { pattern: /\bnear me\b/i, label: "near me" },
  { pattern: /\byour local\b/i, label: "your local" },
  { pattern: /\bour (?:[A-Z][a-z]+ )+(?:office|team|studio|hq|headquarters)\b/, label: "our [City] office/team" },
  { pattern: /\b(?:office|offices|studio|hq|headquarters) in [A-Z][a-z]+/, label: "office in [City]" },
  { pattern: /\bbased in\b/i, label: "based in" },
  { pattern: /\bheadquartered in\b/i, label: "headquartered in" },
  { pattern: /\bserving [A-Z][a-z]+(?: [A-Z][a-z]+)? since\b/, label: "serving [City] since" },
  { pattern: /\blocated in\b/i, label: "located in" },
  { pattern: /\bwe are in [A-Z][a-z]+/, label: "we are in [City]" },
  { pattern: /\b(?:local|on-site|onsite) (?:team|office|presence|staff)\b/i, label: "local team/office/presence" },
];

/** Presence claims: flagged for human review, not hard-failed. A page carrying
 *  one of these must acknowledge it in `reviewedPhrases` (see check-forbidden). */
export function presenceSoftPatterns(cityNames: string[]): { pattern: RegExp; label: string }[] {
  const escaped = cityNames.filter(Boolean).map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (escaped.length === 0) return [];
  const alt = `(?:${escaped.join("|")})`;
  return [
    { pattern: new RegExp(`\\bin ${alt}\\b`, "i"), label: "in [City] (review: presence or context?)" },
    { pattern: new RegExp(`\\b${alt}(?:'s)? (?:office|team|studio|agency|experts?|developers?)\\b`, "i"), label: "[City] team/agency (review)" },
  ];
}

/** Schema types and properties that must never appear in any JSON-LD emitted by
 *  a geo programme page, including nested. Enforced by check-schema.ts. */
export const FORBIDDEN_SCHEMA_TYPES = [
  "LocalBusiness",
  "PostalAddress",
  "GeoCoordinates",
  "GeoShape",
  "AggregateRating",
  "Review",
  "ProfessionalService",
  "Store",
] as const;

export const FORBIDDEN_SCHEMA_PROPERTIES = [
  "address",
  "telephone",
  "geo",
  "openingHours",
  "openingHoursSpecification",
  "aggregateRating",
  "review",
  "hasMap",
  "faxNumber",
] as const;

/** JSON-LD types a geo programme page is allowed to emit. Anything else fails. */
export const ALLOWED_SCHEMA_TYPES = [
  "Service",
  "BreadcrumbList",
  "ListItem",
  "FAQPage",
  "Question",
  "Answer",
  "Country",
  "City",
  "State",
  "AdministrativeArea",
] as const;
