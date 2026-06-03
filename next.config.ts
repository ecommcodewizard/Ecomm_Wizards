import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
