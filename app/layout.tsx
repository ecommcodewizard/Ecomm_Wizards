import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
// Self-hosted Poppins (replaces the render-blocking Google Fonts link). Keeps the
// family name "Poppins", so every existing font-family reference resolves unchanged.
import "@fontsource/poppins/latin-300.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/poppins/latin-800.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTABar from "@/components/layout/CTABar";
import PauseOffscreenAnimations from "@/components/PauseOffscreenAnimations";

const SITE_URL = "https://ecommwizards.com";
const SITE_NAME = "Ecomm Wizards";
const ROOT_TITLE = "Ecomm Wizards — Shopify Integration & Automation Experts";
const ROOT_DESCRIPTION =
  "Shopify experts specializing in store builds, migrations, optimization, custom apps, B2B, POS, and marketing. Let's grow your ecommerce together.";
const OG_IMAGE = "/images/main-hero-f-desktop.webp";

// Google Tag Manager container (holds Google Ads + GA4 conversion tags).
const GTM_ID = "GTM-PZV8S2C2";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: ROOT_TITLE,
    template: "%s | Ecomm Wizards",
  },
  description: ROOT_DESCRIPTION,
  openGraph: {
    // No `url` here on purpose: subpages inherit this OpenGraph block, and a
    // hard-coded homepage url would clash with each page's own canonical.
    // Pages that need og:url (home, service pages) set it themselves.
    type: "website",
    siteName: SITE_NAME,
    title: ROOT_TITLE,
    description: ROOT_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Ecomm Wizards Shopify agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: ROOT_TITLE,
    description: ROOT_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

// Site-wide structured data (Organization + WebSite). `sameAs` lists the brand's
// real social profiles so Google can resolve the Organization entity across the
// web; keep these in sync with the footer social links (components/layout/Footer.tsx).
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/ecomm-green.png`,
      description: ROOT_DESCRIPTION,
      knowsAbout: [
        "Shopify development agency",
        "Shopify design agency",
        "Shopify Plus agency",
        "Shopify migration services",
        "Shopify CRO agency",
        "Shopify SEO agency",
        "Shopify AI agency",
        "Shopify agentic commerce",
        "Generative Engine Optimization",
        "Shopify automation agency",
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61591725146049",
        "https://x.com/theecommwizards",
        "https://www.instagram.com/theecommwizards/",
        "https://www.linkedin.com/company/ecomm-wizards",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="flex min-h-screen flex-col" style={{ backgroundColor: "var(--color-white)", color: "var(--color-dark)" }} suppressHydrationWarning>
        {/* Google Tag Manager — loads after the page is interactive so it never blocks rendering */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
        <Header />
        <main className="flex-1 pt-[100px] sm:pt-[70px] md:pt-[100px] lg:pt-[86px] xl:pt-[96px]">{children}</main>
        <CTABar />
        <Footer />
        <PauseOffscreenAnimations />
      </body>
    </html>
  );
}
