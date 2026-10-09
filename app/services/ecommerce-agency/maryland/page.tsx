import type { Metadata } from "next";
import GeoPageTemplate from "@/components/sections/geo/GeoPageTemplate";
import { ECOMMERCE_AGENCY_MARYLAND as page } from "@/lib/geo/pages/ecommerce-agency-maryland";
import { canonicalUrl } from "@/lib/geo/registry";
import { og } from "@/lib/og";

// Geo programme Maryland #38 (Batch 1b), a state page on the ecommerce-agency
// hub and the only page in the batch carrying no original research of its own.
// Two measurements were built and killed for it, so its asset sets out a
// published federal shipping rule instead, and says so in its own intro. The
// owner agreed to that explicitly rather than skip the row. Content lives in
// lib/geo/pages/ecommerce-agency-maryland.ts; this route wires metadata and the
// template only. Every page in the registry is live.

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
