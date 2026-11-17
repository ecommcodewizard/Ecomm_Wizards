import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/geo/ServicePageTemplate";
import { SHOPIFY_DEV_ARKANSAS as page } from "@/lib/geo/pages/shopify-development-agency-arkansas";
import { canonicalUrl } from "@/lib/geo/registry";
import { og } from "@/lib/og";

// Geo v5 Phase 2a page 6 (service format). Content lives in
// lib/geo/pages/shopify-development-agency-arkansas.ts.

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
  return <ServicePageTemplate page={page} />;
}
