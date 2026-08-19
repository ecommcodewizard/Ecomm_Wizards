import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HubPageTemplate from "@/components/sections/geo/HubPageTemplate";
import { ECOMMERCE_AGENCY as page } from "@/lib/geo/pages/ecommerce-agency";
import { canonicalUrl, isRenderable } from "@/lib/geo/registry";
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
  ...(page.status !== "published" ? { robots: { index: false, follow: false } } : {}),
};

export default function Page() {
  if (!isRenderable(page)) notFound();
  return <HubPageTemplate page={page} />;
}
