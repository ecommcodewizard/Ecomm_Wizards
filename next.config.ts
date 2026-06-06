import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
    ];
  },
};

export default nextConfig;
