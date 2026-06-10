// Shared OpenGraph helper for simple pages. Next.js replaces (does not merge)
// the layout's openGraph when a page sets its own, so each page needs a COMPLETE
// block. og:title and og:description auto-derive from the page's title/description.
const SITE_URL = "https://ecommwizards.com";

export function og(
  path: string,
  image = "/images/main-hero-f-desktop.webp",
  alt = "Ecomm Wizards Shopify agency",
) {
  return {
    type: "website" as const,
    siteName: "Ecomm Wizards",
    url: `${SITE_URL}${path}`,
    images: [{ url: image, alt }],
  };
}
