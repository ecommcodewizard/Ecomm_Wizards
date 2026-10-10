import type { Metadata } from "next";
import GeoPageTemplate from "@/components/sections/geo/GeoPageTemplate";
import { ECOMMERCE_AGENCY_ARIZONA as page } from "@/lib/geo/pages/ecommerce-agency-arizona";
import { canonicalUrl } from "@/lib/geo/registry";
import { og } from "@/lib/og";

// Geo programme Arizona #37 (Batch 1b), a state page on the ecommerce-agency hub
// and the first row in four to carry archetype A rather than a derived E. It is
// also the widest page on the hub: seven disciplines and a six-item segments
// block, because the owner's brief was that somebody searching "ecommerce
// agency" wants every service named. Content lives in
// lib/geo/pages/ecommerce-agency-arizona.ts; this route wires metadata and the
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
