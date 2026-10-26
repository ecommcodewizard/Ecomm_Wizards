import type { Metadata } from "next";
import GeoPageTemplate from "@/components/sections/geo/GeoPageTemplate";
import { ECOMMERCE_AGENCY_NEW_JERSEY as page } from "@/lib/geo/pages/ecommerce-agency-new-jersey";
import { canonicalUrl } from "@/lib/geo/registry";
import { og } from "@/lib/og";

// Geo programme New Jersey #39 (Batch 1b), a state page on the ecommerce-agency
// hub, pointed at the row's three design and development secondaries. Three
// original measurements were built and killed for this row, so the asset is
// Shopify's own published documentation on what a merchant can change without a
// developer, and the intro says as much rather than dressing it up as research.
// Content lives in lib/geo/pages/ecommerce-agency-new-jersey.ts; this route
// wires metadata and the template only. Every page in the registry is live.

const CANONICAL_URL = canonicalUrl(page);

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    ...og(page.path, page.shortTitle),
    title: page.metaTitle,
    description: page.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: page.metaTitle,
    description: page.metaDescription,
    images: og(page.path, page.shortTitle).images,
  },
};

export default function Page() {
  return <GeoPageTemplate page={page} />;
}
