import type { Metadata } from "next";
import GeoPageTemplate from "@/components/sections/geo/GeoPageTemplate";
import { ECOMMERCE_MARKETING_AGENCY_MIAMI as page } from "@/lib/geo/pages/ecommerce-marketing-agency-miami";
import { canonicalUrl } from "@/lib/geo/registry";
import { og } from "@/lib/og";

// Inventory row #17. Content lives in
// lib/geo/pages/ecommerce-marketing-agency-miami.ts; this route wires
// metadata and the template only.

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
