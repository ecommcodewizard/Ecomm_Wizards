import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GeoPageTemplate from "@/components/sections/geo/GeoPageTemplate";
import { SHOPIFY_SEO_NEW_YORK as page } from "@/lib/geo/pages/shopify-seo-agency-new-york";
import { canonicalUrl, isRenderable } from "@/lib/geo/registry";
import { og } from "@/lib/og";

// Geo programme page 7 (Batch 1b), the third and last New York page. Content
// lives in lib/geo/pages/shopify-seo-agency-new-york.ts; this route wires
// metadata and the template only. Draft pages 404 in production.

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
  ...(page.status !== "published" ? { robots: { index: false, follow: false } } : {}),
};

export default function Page() {
  if (!isRenderable(page)) notFound();
  return <GeoPageTemplate page={page} />;
}
