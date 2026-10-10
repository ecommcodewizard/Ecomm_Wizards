import type { Metadata } from "next";
import HubPageTemplate from "@/components/sections/geo/HubPageTemplate";
import { ECOMMERCE_AGENCY as page } from "@/lib/geo/pages/ecommerce-agency";
import { canonicalUrl } from "@/lib/geo/registry";
import { og } from "@/lib/og";

// Geo programme hub H1 (Batch 1, page 1). All content lives in
// lib/geo/pages/ecommerce-agency.ts; this route only wires metadata and the
// template. While the page is a draft it returns 404 in production and renders
// with highlighted [NEEDS INPUT] slots in development. Publishing = flipping
// `status` in the content file (see scripts/geo/README.md for the gates).

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
  return <HubPageTemplate page={page} />;
}
