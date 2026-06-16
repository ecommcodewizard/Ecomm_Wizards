import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    // HTML/page responses must always revalidate. Otherwise a shared cache
    // (LiteSpeed/CDN) holds stale HTML that references hashed JS/CSS from an
    // older build — which later deploys delete, causing 404s ("broken CSS/JS").
    // Hashed assets under /_next/static are excluded so they stay immutable.
    return [
      {
        source: "/((?!_next/).*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
      {
        // Security headers on every route. CSP is intentionally left to the
        // platform (upgrade-insecure-requests) — a strict CSP needs dedicated
        // testing against inline styles, JSON-LD, and Google Fonts.
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/shopify-app-setup-and-app-optimization",
        destination: "/services/shopify-app-setup-and-app-optimization",
        permanent: true,
      },
      {
        source: "/shopify-seo-agency",
        destination: "/services/shopify-seo-agency",
        permanent: true,
      },
      {
        source: "/shopify-analytics-and-tracking-setup",
        destination: "/services/shopify-analytics-and-tracking-setup",
        permanent: true,
      },
      {
        source: "/shopify-maintenance-and-support",
        destination: "/services/shopify-maintenance-and-support",
        permanent: true,
      },
      {
        source: "/services/shopify-integrations",
        destination: "/services/shopify-integration-services",
        permanent: true,
      },
      {
        source: "/shopify-development-agency",
        destination: "/services/shopify-development-agency",
        permanent: true,
      },
      {
        source: "/shopify-conversion-rate-optimization-cro-agency",
        destination: "/services/shopify-cro-agency",
        permanent: true,
      },
      {
        source: "/headless-shopify-agency",
        destination: "/services/headless-shopify-agency",
        permanent: true,
      },
      {
        source: "/shopify-store-development",
        destination: "/services/shopify-store-development",
        permanent: true,
      },
      {
        source: "/shopify-store-audit",
        destination: "/services/shopify-store-audit",
        permanent: true,
      },
      {
        source: "/figma-to-shopify-conversion",
        destination: "/services/figma-to-shopify-conversion",
        permanent: true,
      },
      {
        source: "/shopify-app-development",
        destination: "/services/shopify-app-development",
        permanent: true,
      },
      {
        source: "/shopify-pos-setup",
        destination: "/services/shopify-pos-setup",
        permanent: true,
      },
      {
        source: "/shopify-b2b-store-setup",
        destination: "/services/shopify-b2b-store-setup",
        permanent: true,
      },
      {
        source: "/a-b-testing",
        destination: "/services/a-b-testing",
        permanent: true,
      },
      {
        source: "/shopify-speed-optimization",
        destination: "/services/shopify-speed-optimization",
        permanent: true,
      },
      {
        source: "/shopify-ux-and-ui-design",
        destination: "/services/shopify-ux-and-ui-design",
        permanent: true,
      },
      {
        source: "/klaviyo-audit",
        destination: "/services/klaviyo-audit",
        permanent: true,
      },
      { source: "/migration", destination: "/services/migration", permanent: true },
      { source: "/amazon-to-shopify", destination: "/services/migration/amazon-to-shopify", permanent: true },
      { source: "/woocommerce-to-shopify", destination: "/services/migration/woocommerce-to-shopify", permanent: true },
      { source: "/bigcommerce-to-shopify", destination: "/services/migration/bigcommerce-to-shopify", permanent: true },
      { source: "/magento-to-shopify", destination: "/services/migration/magento-to-shopify", permanent: true },
      { source: "/prestashop-to-shopify", destination: "/services/migration/prestashop-to-shopify", permanent: true },
      { source: "/salesforce-to-shopify", destination: "/services/migration/salesforce-to-shopify", permanent: true },
      { source: "/liquid-to-shopify-hydrogen", destination: "/services/migration/liquid-to-shopify-hydrogen", permanent: true },
      // migrate-to-shopify page removed; send its traffic to the migration hub
      { source: "/migrate-to-shopify", destination: "/services/migration", permanent: true },
      { source: "/erp-connections-to-shopify", destination: "/services/erp-connections-to-shopify", permanent: true },
      // Removed top-level duplicates; canonical pages live under /services
      { source: "/shopify-integrations-erp-crm-3pl-etc", destination: "/services/shopify-integration-services", permanent: true },
      { source: "/shopify-theme-development", destination: "/services/shopify-theme-development", permanent: true },
      { source: "/shopify-landing-page-design", destination: "/services/shopify-landing-page-design", permanent: true },
      { source: "/shopify-2-0-development", destination: "/services/shopify-2-0-development", permanent: true },
    ];
  },
};

export default nextConfig;
