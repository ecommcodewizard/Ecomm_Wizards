import type { Metadata } from "next";
import GeoPageTemplate from "@/components/sections/geo/GeoPageTemplate";
import { SHOPIFY_APP_RALEIGH as page } from "@/lib/geo/pages/shopify-app-development-raleigh";
import { canonicalUrl } from "@/lib/geo/registry";
import { og } from "@/lib/og";

// Geo programme Raleigh #24 (Batch 1b), a metro page on the app-development
// hub. Content lives in lib/geo/pages/shopify-app-development-raleigh.ts; this
// route wires metadata and the template only. Draft pages 404 in production
// and render on previews and locally.

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
