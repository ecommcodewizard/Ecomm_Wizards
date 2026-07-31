// Single source of truth for agency-wide "trust" statistics. Update the numbers
// HERE; shared trust blocks import from this file so the figures can't drift.
//
// Note: individual service pages may cite their OWN service-specific counts
// (e.g. 100+ themes, 200+ landing pages) that are deliberately different from the
// headline set below, and case-study pages carry their own per-study results.

export const BRAND_STATS = {
  storesBuilt: "150+",
  revenue: "$400M+",
  years: "8+",
  awards: "9+",
  rating: "4.9★",
} as const;

// The canonical four-stat trust block (stores / revenue / years / awards), in order.
export const TRUST_STATS: { value: string; label: string }[] = [
  { value: BRAND_STATS.storesBuilt, label: "Stores Built" },
  { value: BRAND_STATS.revenue, label: "Revenue Generated" },
  { value: BRAND_STATS.years, label: "Years of Experience" },
  { value: BRAND_STATS.awards, label: "Awards For Ecomm Wizards" },
];

// Deliberately distinct, service-specific build counts.
export const SERVICE_COUNTS = {
  themes: "100+",
  integrations: "100+",
  landingPages: "200+",
} as const;
