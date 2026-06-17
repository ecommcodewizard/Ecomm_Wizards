// Builds the URL for the dynamic Open Graph image route (app/og/route.tsx).
// Pass a short page title; the generator renders a unique branded 1200x630 card.
// The relative URL is resolved to absolute by `metadataBase` in app/layout.tsx.
const SITE_URL = "https://ecommwizards.com";

export function ogImage(title: string): string {
  return `/og?title=${encodeURIComponent(title)}`;
}

// Shared OpenGraph helper for simple pages. Next.js replaces (does not merge)
// the layout's openGraph when a page sets its own, so each page needs a COMPLETE
// block. og:title and og:description auto-derive from the page's title/description.
// The social image is a unique, auto-generated branded card based on `title`.
export function og(path: string, title: string, alt?: string) {
  return {
    type: "website" as const,
    siteName: "Ecomm Wizards",
    url: `${SITE_URL}${path}`,
    images: [{ url: ogImage(title), width: 1200, height: 630, alt: alt ?? `${title} — Ecomm Wizards` }],
  };
}
