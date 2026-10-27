import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  // BUILD PARALLELISM IS CAPPED ON PURPOSE. The first two Next 16 deploys to
  // Hostinger died during "Collecting page data" with "OS can't spawn worker
  // thread: Resource temporarily unavailable (os error 11)", then SIGABRT.
  // The container allows 120 processes/threads; the build wanted far more.
  //
  // This is HALF the fix. `cpus` caps how many page-data WORKER PROCESSES Next
  // forks (build/index.js:379 returns this value verbatim once it differs from
  // the default, which also bypasses Next's usual minimum of 4). It does NOT
  // reach inside those workers: the error string itself lives in the @next/swc
  // NATIVE binary next to "RAYON_NUM_THREADS" and "available_parallelism", so
  // the threads that actually failed to spawn are a Rust (rayon) pool sized
  // from the HOST's core count, which a shared container over-reports. That
  // pool is capped by RAYON_NUM_THREADS in scripts/build.mjs, which has to be
  // set before Node loads Next at all — hence a wrapper rather than this file.
  //
  // Note `workerThreads` is deliberately NOT set: false is already the Next 16
  // default (config-shared.js:228), so setting it would be a no-op that reads
  // like a fix.
  experimental: {
    cpus: 2,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 changed the `qualities` default from "any value allowed" to
    // exactly [75], and SILENTLY COERCES anything else to the nearest allowed
    // value. PageHero passes quality={55} for its full-bleed background, which
    // would have become 75 without this line — heavier hero images on every
    // page that uses PageHero, with no error to notice it by.
    qualities: [55, 75],
    // CMS images live in Neon object storage, which is a different host from
    // the site, and next/image refuses any remote host not listed here. Without
    // this, every featured image and every image inside an article fails the
    // moment one is set.
    //
    // Two entries on purpose. The first is the exact bucket host for this
    // environment, derived from the same variable the uploader uses, so it is
    // always right and never drifts. The second is a narrow fallback covering
    // Neon storage hosts generally, so a missing variable degrades to "images
    // still load" rather than "every image 400s". Each Neon branch has its own
    // hostname, which is why the fallback matters.
    remotePatterns: [
      ...(process.env.AWS_ENDPOINT_URL_S3
        ? [
            {
              protocol: "https" as const,
              hostname: new URL(process.env.AWS_ENDPOINT_URL_S3).hostname,
              pathname: "/**",
            },
          ]
        : []),
      { protocol: "https" as const, hostname: "**.storage.aws.neon.tech", pathname: "/**" },
      { protocol: "https" as const, hostname: "**.aws.neon.tech", pathname: "/**" },
    ],
    // Cap generated widths at 2048. The site has no 4K-critical imagery, so the
    // default 3840 candidate only wasted bandwidth on full-bleed hero images.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Allow the self-hosted SVG logo through next/image. Our own static asset
    // (no scripts); served as an attachment so a direct hit can't render inline.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
  async headers() {
    // HTML/page responses must always revalidate. Otherwise a shared cache
    // (LiteSpeed/CDN) holds stale HTML that references hashed JS/CSS from an
    // older build — which later deploys delete, causing 404s ("broken CSS/JS").
    // Hashed assets under /_next/static are excluded so they stay immutable.
    return [
      {
        source: "/((?!_next/|images/).*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
      {
        // INERT IN PRODUCTION, kept for `next dev` and `next start`. Under
        // Passenger on cPanel, Apache/LiteSpeed serves anything that exists on
        // disk under the document root without handing the request to Node, so
        // this rule never runs against the live site. Verified 2026-08-24: a
        // hashed /_next/static asset comes back with the immutable header set
        // below, while /images/performance-1.webp comes back from `Server:
        // hcdn` with no Cache-Control at all. The header that actually applies
        // to /images in production lives in public/.htaccess.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Security headers on every route. The CSP intentionally carries only
        // directives that are safe regardless of the site's inline styles,
        // inline scripts, and Cal.com booking embed: object-src, base-uri,
        // frame-ancestors, + upgrade-insecure-requests. Locking down
        // script-src/style-src needs a tested Report-Only rollout (inline styles
        // force 'unsafe-inline'; the booking embed loads app.cal.com).
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "Content-Security-Policy", value: "upgrade-insecure-requests; object-src 'none'; base-uri 'self'; frame-ancestors 'self'" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // The blog launched at /blog and moved to /insights.
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:slug", destination: "/insights/:slug", permanent: true },
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
      // shopify-mobile-app-development page removed; send it + its old WP URL to the closest service
      { source: "/shopify-mobile-app-development", destination: "/services/shopify-app-development", permanent: true },
      { source: "/services/shopify-mobile-app-development", destination: "/services/shopify-app-development", permanent: true },
    ];
  },
};

// withPayload teaches the bundler about Payload's server-only packages and its
// admin bundle. The site's own config above is untouched by it — redirects,
// headers, image settings and the build worker caps all still apply.
export default withPayload(nextConfig, { devBundleServerPackages: false });
