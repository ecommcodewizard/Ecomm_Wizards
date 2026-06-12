import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { CASE_STUDIES } from "@/lib/case-studies";
import { APP_CASE_STUDIES } from "@/lib/shopify-app-studies";
import { KLAVIYO_CASE_STUDIES } from "@/lib/klaviyo-studies";

const SITE_URL = "https://ecommwizards.com";

// <lastmod> is read from git history at build time: %cs = committer date as
// YYYY-MM-DD. The deploy builds on the server with full history present, so each
// page reflects when its source file was genuinely last committed. Pages you
// don't touch keep their real date instead of resetting on every deploy.
// Falls back to today if git is unavailable (e.g. a shallow CI clone) so the
// build never breaks. priority/changefreq are intentionally omitted — Google
// ignores both.
const FALLBACK = new Date().toISOString().slice(0, 10);

function gitDate(...files: string[]): string {
  let latest = "";
  for (const file of files) {
    try {
      const date = execFileSync("git", ["log", "-1", "--format=%cs", "--", file], {
        encoding: "utf8",
      }).trim();
      // ISO YYYY-MM-DD strings sort lexicographically, so this picks the newest.
      if (date > latest) latest = date;
    } catch {
      // File missing from history or git unavailable — skip it.
    }
  }
  return latest || FALLBACK;
}

// "/" -> app/page.tsx, "/services/x" -> app/services/x/page.tsx
const routeFile = (path: string) => (path === "/" ? "app/page.tsx" : `app${path}/page.tsx`);

// Canonical routes only. Redirect sources from next.config.ts are intentionally
// excluded (they 308 to /services/*): /shopify-development-agency,
// /shopify-conversion-rate-optimization-cro-agency, /headless-shopify-agency,
// /shopify-seo-agency, /shopify-maintenance-and-support,
// /shopify-analytics-and-tracking-setup, /shopify-app-setup-and-app-optimization,
// /services/shopify-integrations.
const ROUTES: string[] = [
  "/",

  // Core
  "/about-shopify-agency",
  "/contact-shopify-agency",
  "/services",
  "/case-studies",
  "/reviews",
  "/faqs",
  "/partners",
  "/partner-program",

  // Lead gen
  "/book-shopify-consultation",
  "/free-shopify-store-audit",
  "/services/klaviyo-audit",

  // Service pages (/services/*)
  "/services/shopify-development-agency",
  "/services/shopify-cro-agency",
  "/services/headless-shopify-agency",
  "/services/shopify-seo-agency",
  "/services/shopify-plus-development",
  "/services/shopify-theme-development",
  "/services/shopify-2-0-development",
  "/services/shopify-landing-page-design",
  "/services/shopify-app-setup-and-app-optimization",
  "/services/shopify-analytics-and-tracking-setup",
  "/services/shopify-maintenance-and-support",
  "/services/shopify-integration-services",

  // Standalone service / topic pages
  "/services/shopify-store-development",
  "/services/shopify-app-development",
  "/shopify-mobile-app-development",
  "/services/shopify-b2b-store-setup",
  "/services/shopify-pos-setup",
  "/services/shopify-store-audit",
  "/services/shopify-speed-optimization",
  "/services/shopify-ux-and-ui-design",
  "/services/erp-connections-to-shopify",
  "/services/a-b-testing",

  // Migration / platform-to-Shopify (nested under /services/migration)
  "/services/migration",
  "/services/figma-to-shopify-conversion",
  "/services/migration/amazon-to-shopify",
  "/services/migration/woocommerce-to-shopify",
  "/services/migration/magento-to-shopify",
  "/services/migration/bigcommerce-to-shopify",
  "/services/migration/prestashop-to-shopify",
  "/services/migration/salesforce-to-shopify",
  "/services/migration/liquid-to-shopify-hydrogen",

  // Campaign
  "/q4-breakthrough-journey",

  // Other
  "/bulk-hours",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: gitDate(routeFile(path)),
  }));

  // Case studies all render through the same [slug] template and live in three
  // data files, so each group's date = newest of (template, its data file).
  const STUDY_TEMPLATE = "app/case-studies/[slug]/page.tsx";
  const studyGroups = [
    { items: CASE_STUDIES, file: "lib/case-studies.ts" },
    { items: APP_CASE_STUDIES, file: "lib/shopify-app-studies.ts" },
    { items: KLAVIYO_CASE_STUDIES, file: "lib/klaviyo-studies.ts" },
  ];

  const caseStudyEntries: MetadataRoute.Sitemap = studyGroups.flatMap(({ items, file }) => {
    const lastModified = gitDate(STUDY_TEMPLATE, file);
    return items.map((c) => ({
      url: `${SITE_URL}/case-studies/${c.slug}`,
      lastModified,
    }));
  });

  return [...staticEntries, ...caseStudyEntries];
}
