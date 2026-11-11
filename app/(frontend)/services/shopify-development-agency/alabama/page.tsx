import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/geo/ServicePageTemplate";
import { SHOPIFY_DEV_ALABAMA as page } from "@/lib/geo/pages/shopify-development-agency-alabama";
import { canonicalUrl } from "@/lib/geo/registry";
import { og } from "@/lib/og";

// Geo v5 S2 page 16 (service format). Content lives in
// lib/geo/pages/shopify-development-agency-alabama.ts.

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
