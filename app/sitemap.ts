import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";
import { APP_CASE_STUDIES } from "@/lib/shopify-app-studies";
import { KLAVIYO_CASE_STUDIES } from "@/lib/klaviyo-studies";

const SITE_URL = "https://ecommwizards.com";

// URL-only sitemap. lastmod/priority/changefreq are intentionally omitted:
// Google ignores priority and changefreq, and an accurate lastmod can't be
// produced reliably on the production build, so a clean list of canonical URLs
// is the honest choice.
//
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
  "/services/shopify-agentic-commerce",
  "/services/creative-strategy",
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
  }));

  const caseStudySlugs = [
    ...CASE_STUDIES.map((c) => c.slug),
    ...APP_CASE_STUDIES.map((c) => c.slug),
    ...KLAVIYO_CASE_STUDIES.map((c) => c.slug),
  ];

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${SITE_URL}/case-studies/${slug}`,
  }));

  return [...staticEntries, ...caseStudyEntries];
}
