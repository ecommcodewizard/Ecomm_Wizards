import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTABar from "@/components/layout/CTABar";

const SITE_URL = "https://ecommwizards.com";
const SITE_NAME = "Ecomm Wizards";
const ROOT_TITLE = "Ecomm Wizards — Shopify Integration & Automation Experts";
const ROOT_DESCRIPTION =
  "Shopify experts specializing in store builds, migrations, optimization, custom apps, B2B, POS, and marketing. Let's grow your ecommerce together.";
const OG_IMAGE = "/images/main-hero-f-desktop.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: ROOT_TITLE,
    template: "%s | Ecomm Wizards",
  },
  description: ROOT_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
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

// Site-wide structured data (Organization + WebSite). Note: `sameAs` is omitted
// because the footer social links are generic network homepages, not real
// profile URLs. Add the real profile URLs here to enable sameAs.
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
        "Shopify automation agency",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col" style={{ backgroundColor: "var(--color-white)", color: "var(--color-dark)" }} suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
        <Header />
        <main className="flex-1 pt-[100px] sm:pt-[70px] md:pt-[100px] lg:pt-[86px] xl:pt-[96px]">{children}</main>
        <CTABar />
        <Footer />
      </body>
    </html>
  );
}
