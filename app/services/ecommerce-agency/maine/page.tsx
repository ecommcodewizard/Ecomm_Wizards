import type { Metadata } from "next";
import GeoPageTemplate from "@/components/sections/geo/GeoPageTemplate";
import { ECOMMERCE_AGENCY_MAINE as page } from "@/lib/geo/pages/ecommerce-agency-maine";
import { canonicalUrl } from "@/lib/geo/registry";
import { og } from "@/lib/og";

// Geo programme Maine #36 (Batch 1b), the second Maine page and the state page on
// the ecommerce-agency hub. Its sibling, row #35, sits on the
// shopify-development-agency hub and is written for a different reader. Content
// lives in lib/geo/pages/ecommerce-agency-maine.ts; this route wires metadata and
// the template only. Every page in the registry is live.

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
