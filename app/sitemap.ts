import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";
import { APP_CASE_STUDIES } from "@/lib/shopify-app-studies";
import { KLAVIYO_CASE_STUDIES } from "@/lib/klaviyo-studies";

const SITE_URL = "https://ecommwizards.com";

// Canonical routes only. Redirect sources from next.config.ts are intentionally
// excluded (they 301 to /services/*): /shopify-development-agency,
// /shopify-conversion-rate-optimization-cro-agency, /headless-shopify-agency,
// /shopify-seo-agency, /shopify-maintenance-and-support,
// /shopify-analytics-and-tracking-setup, /shopify-app-setup-and-app-optimization,
// /services/shopify-integrations.
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  // Core
  { path: "/about-shopify-agency", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact-shopify-agency", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
  { path: "/reviews", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.5, changeFrequency: "monthly" },
  { path: "/partners", priority: 0.5, changeFrequency: "monthly" },
  { path: "/partner-program", priority: 0.5, changeFrequency: "monthly" },

  // Lead gen
  { path: "/book-shopify-consultation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/free-shopify-store-audit", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/klaviyo-audit", priority: 0.6, changeFrequency: "monthly" },

  // Service pages (/services/*)
  { path: "/services/shopify-development-agency", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/shopify-cro-agency", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/headless-shopify-agency", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/shopify-seo-agency", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/shopify-plus-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/shopify-theme-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/shopify-2-0-development", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/shopify-landing-page-design", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/shopify-app-setup-and-app-optimization", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/shopify-analytics-and-tracking-setup", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/shopify-maintenance-and-support", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/shopify-integration-services", priority: 0.7, changeFrequency: "monthly" },

  // Standalone service / topic pages
  { path: "/services/shopify-store-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/shopify-app-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/shopify-mobile-app-development", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/shopify-b2b-store-setup", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/shopify-pos-setup", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/shopify-store-audit", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/shopify-speed-optimization", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/shopify-ux-and-ui-design", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/erp-connections-to-shopify", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/a-b-testing", priority: 0.6, changeFrequency: "monthly" },

  // Migration / platform-to-Shopify (nested under /services/migration)
  { path: "/services/migration", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/figma-to-shopify-conversion", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/migration/amazon-to-shopify", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/migration/woocommerce-to-shopify", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/migration/magento-to-shopify", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/migration/bigcommerce-to-shopify", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/migration/prestashop-to-shopify", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/migration/salesforce-to-shopify", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/migration/liquid-to-shopify-hydrogen", priority: 0.6, changeFrequency: "monthly" },

  // Campaign
  { path: "/q4-breakthrough-journey", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const caseStudySlugs = [
    ...CASE_STUDIES.map((c) => c.slug),
    ...APP_CASE_STUDIES.map((c) => c.slug),
    ...KLAVIYO_CASE_STUDIES.map((c) => c.slug),
  ];

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${SITE_URL}/case-studies/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...caseStudyEntries];
}
