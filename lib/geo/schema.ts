// JSON-LD builders for geo programme pages. Generated from the content object,
// never hand-authored per page, so the visible page and the schema cannot drift.
//
// Emits ONLY: Service (via components/seo/ServiceSchema.tsx), BreadcrumbList,
// FAQPage. Never LocalBusiness, PostalAddress, geo, openingHours,
// AggregateRating, Review, address, telephone (see lib/geo/forbidden.ts;
// enforced by scripts/geo/check-schema.ts).

import type { Crumb } from "@/components/ui/Breadcrumbs";
import type { FAQ, GeoProgrammePage } from "./types";
import { SITE_URL, hubPathToLabel } from "./registry";

/** Visible breadcrumb trail for a page. Geo pages name the HUB as position 3,
 *  never a redirecting path. The last crumb has no href (current page). */
export function breadcrumbTrail(page: GeoProgrammePage): Crumb[] {
  const trail: Crumb[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];
  if (page.type === "geo") {
    trail.push({ name: hubPathToLabel(page.hub), href: page.hub });
    trail.push({ name: page.geo.name });
  } else {
    trail.push({ name: page.shortTitle });
  }
  return trail;
}

/** BreadcrumbList JSON-LD from the same trail the visible component renders. */
export function breadcrumbListJsonLd(trail: Crumb[], currentPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href ?? currentPath}`,
    })),
  };
}

/** FAQPage JSON-LD from the exact array the visible FAQ block renders. */
export function faqPageJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
