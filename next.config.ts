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
    ];
  },
};

export default nextConfig;
