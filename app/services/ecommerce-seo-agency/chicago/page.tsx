import type { Metadata } from "next";
import GeoPageTemplate from "@/components/sections/geo/GeoPageTemplate";
import { ECOMMERCE_SEO_AGENCY_CHICAGO as page } from "@/lib/geo/pages/ecommerce-seo-agency-chicago";
import { canonicalUrl } from "@/lib/geo/registry";
import { og } from "@/lib/og";

// Geo programme Chicago #29 (Batch 1b), the first city page on the
// ecommerce-seo-agency hub and the second page for this metro. Content lives in
// lib/geo/pages/ecommerce-seo-agency-chicago.ts; this route wires metadata and
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
