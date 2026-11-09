// /llms.txt: the plain-text site guide for LLM crawlers (llmstxt.org format).
//
// Generated rather than hand-written (2026-11-10). The old public/llms.txt was
// last edited on 5 Nov 2026 and had already missed the Shopify development
// hub, the Klaviyo agency page and every location page. The location section
// below is read from the geo registry, so a page added to GEO_PAGES or
// SERVICE_GEO_PAGES appears here on its next deploy with no extra step.
//
// Static at build time: the content only changes when the code does.
// Facts here must match lib/brand-stats.ts and the owner's claim rules (no
// Klaviyo partner claim; partner wording is Shopify Plus Partner).

import { GEO_PAGES, SERVICE_GEO_PAGES, SITE_URL, hubPathToLabel, type LocationPage } from "@/lib/geo/registry";
import type { GeoPage } from "@/lib/geo/types";

export const dynamic = "force-static";

const HEADER = `# Ecomm Wizards

> Ecomm Wizards is a Shopify Plus agency that designs, builds, migrates, and optimizes high-converting Shopify and Shopify Plus stores. 150+ stores built, $400M+ in client revenue, 8+ years of experience.

Key facts:
- Founded in 2017; 8+ years building on Shopify and Shopify Plus.
- Shopify Plus Partner (since 2021).
- 150+ Shopify stores launched and $400M+ in client revenue generated.
- Works only on Shopify. Projects are fixed price, with the launch date agreed in writing before work starts; most stores go live in about six weeks.
- Services span store development, Shopify Plus, replatforming/migration, conversion rate optimization (CRO), SEO, email and SMS marketing on Klaviyo, custom app development, theme development, headless commerce, B2B, and POS.
- Work includes brands such as Everlast, Candy Kittens, Happy Mammoth, 111SKIN, Ronaldo Jewelry, Twillory, VITHIT, Saddleback, and Wild.

## Services
- [Shopify Development Agency](${SITE_URL}/services/shopify-development-agency): Custom Shopify builds, theme development, Shopify Plus and migrations at a fixed price, with most stores live in about six weeks.
- [Ecommerce Agency](${SITE_URL}/services/ecommerce-agency): Full-service ecommerce agency for brands turning over $1M to $50M. Builds, replatforms and rescues on Shopify at a fixed price.
- [Ecommerce SEO Agency](${SITE_URL}/services/ecommerce-seo-agency): Ecommerce SEO for $1M to $50M catalogs: crawl budget, faceted navigation, duplicate variant URLs and index bloat.
- [Ecommerce Marketing Agency](${SITE_URL}/services/ecommerce-marketing-agency): For brands with a funnel that already works: finds the step that's leaking, fixes it, and shows what it moved.
- [Klaviyo Agency](${SITE_URL}/services/klaviyo-agency): Klaviyo agency for Shopify brands: runs flows, campaigns, segments and deliverability, and fixes the store data Klaviyo runs on.
- [Shopify Store Development](${SITE_URL}/services/shopify-store-development): Custom Shopify store design and build for DTC and growth-stage brands.
- [Shopify Plus Development](${SITE_URL}/services/shopify-plus-development): Enterprise Shopify Plus builds with custom theme, checkout, and integrations.
- [Headless Shopify Agency](${SITE_URL}/services/headless-shopify-agency): Headless Shopify storefronts on Hydrogen and Next.js with sub-second load times.
- [Shopify Migration](${SITE_URL}/services/migration): Replatforming to Shopify from Magento, WooCommerce, BigCommerce, and others, with SEO-safe redirects.
- [Conversion Rate Optimization](${SITE_URL}/services/shopify-cro-agency): Data-driven CRO programs with A/B testing to lift conversion rate and revenue.
- [Cart Gamification](${SITE_URL}/services/shopify-cart-gamification): Increase average order value with free-shipping progress bars, tiered rewards, and gift-with-purchase built into the Shopify cart.
- [Shopify SEO](${SITE_URL}/services/shopify-seo-agency): Technical and content SEO for Shopify stores to grow organic traffic.
- [Shopify App Development](${SITE_URL}/services/shopify-app-development): Custom public and private Shopify apps, including checkout and fulfillment integrations.
- [Theme Development](${SITE_URL}/services/shopify-theme-development): Custom Shopify Online Store 2.0 themes built for performance and merchandiser control.
- [B2B Store Setup](${SITE_URL}/services/shopify-b2b-store-setup): Shopify Plus B2B stores with company accounts, tiered pricing, and trade portals.
- [POS Setup](${SITE_URL}/services/shopify-pos-setup): Shopify POS configuration to unify in-store and online retail.
`;

const CASE_STUDIES = `## Case Studies
- [Daring — Headless Shopify](${SITE_URL}/case-studies/daring-headless-shopify-hydrogen): A headless Shopify Plus storefront on Hydrogen lifted conversion rate 38%, cut page load time 42%, and raised average order value 27%.
- [Denim Tears — Headless Shopify](${SITE_URL}/case-studies/denim-tears-headless-shopify-hydrogen): An editorial headless storefront on Hydrogen and Sanity CMS lifted conversion rate 38% and made pages load 45% faster.
- [Chilly's — Headless Commerce](${SITE_URL}/case-studies/chillys-headless-commerce-layer): A headless rebuild on Commerce Layer made the store 42% faster, lifted conversion rate 28%, and cut running costs 31%.
- [Saddleback — Shopify Plus B2B](${SITE_URL}/case-studies/saddleback-shopify-plus-b2b): +881% B2B sales growth and +704% traffic after a Shopify Plus B2B rebuild.
- [Mouldings One — Shopify Plus B2B](${SITE_URL}/case-studies/mouldings-one-shopify-b2b-portal): +50% B2B revenue and 74% faster order processing with a Shopify Plus B2B trade portal.
- [Henchman — Shopify Plus B2B](${SITE_URL}/case-studies/henchman-shopify-plus-b2b): +58% online revenue and 70% faster wholesale order processing after leaving Magento.
- [Candy Kittens — Food & Beverage CRO](${SITE_URL}/case-studies/candy-kittens-shopify-food-beverage-cro): +182% conversion rate and +$8.1M new annual revenue.
- [Sneak Energy — Mobile-First Redesign](${SITE_URL}/case-studies/sneak-energy-shopify-redesign): +68% mobile conversion rate and +52% add-to-cart rate.
- [Ronaldo Jewelry — Shopify Plus Redesign](${SITE_URL}/case-studies/ronaldo-jewelry-shopify-plus-redesign): +250% total sales and +120% conversion rate.
- [John Hardy — Shopify Plus Migration](${SITE_URL}/case-studies/john-hardy-shopify-plus-migration): Replatformed from Salesforce Commerce Cloud in under three months; +71% conversion rate.
- [VITHIT — Shopify Plus D2C](${SITE_URL}/case-studies/vithit-shopify-plus-d2c): +170% conversion rate and +115% revenue year on year.
- [Everlast — Sports Redesign](${SITE_URL}/case-studies/everlast-shopify-plus-sports-redesign): +152% conversion rate and +48% total orders.
- [Evie Lou — Fashion CRO](${SITE_URL}/case-studies/evie-lou-shopify-fashion-cro): +82% conversion rate and +31% average order value.
- [Happy Mammoth — Subscriptions CRO](${SITE_URL}/case-studies/happy-mammoth-shopify-subscriptions-cro): +134% subscription revenue and +61% conversion rate.
- [Twillory — Shopify CRO](${SITE_URL}/case-studies/twillory-shopify-cro): $5.4M new annual revenue from a systematic CRO and A/B testing program.
- [111SKIN — CRO & Redesign](${SITE_URL}/case-studies/111skin-shopify-cro-redesign): +46% conversion rate and +21% revenue for a luxury skincare brand.
- [Wild — Subscriptions](${SITE_URL}/case-studies/wild-shopify-plus-subscriptions): Scaled to 80,000+ active monthly subscribers with +218% subscription revenue.
- [teelaunch — Print-on-Demand App](${SITE_URL}/case-studies/teelaunch-print-on-demand): Built a print-on-demand fulfillment app on the Shopify App Store, reaching 50,000+ merchants.
- [Chilly's — Creative Strategy](${SITE_URL}/case-studies/chillys-creative-strategy): Performance creative for paid social lifted revenue 33% and ROAS 60% while cutting ad spend 22%.
- [Prose — Creative Strategy](${SITE_URL}/case-studies/prose-creative-strategy): A micro-influencer creative engine for paid social lifted return on ad spend 53% and cut cost per acquisition 28%.
- [Nurture Life — Creative Strategy](${SITE_URL}/case-studies/nurture-life-creative-strategy): Parent and kid UGC for paid social lifted conversions 130% and conversion rate 232% while cutting cost per acquisition 14%.
- [All Case Studies](${SITE_URL}/case-studies): Full portfolio of 30+ Shopify store, app, email marketing, and creative strategy projects.
`;

const FOOTER = `## Company
- [About](${SITE_URL}/about-shopify-agency): Agency background, team, and award-winning track record.
- [Reviews](${SITE_URL}/reviews): Client reviews and testimonials.
- [Contact](${SITE_URL}/contact-shopify-agency): Get in touch to scope a Shopify project.

## Get Started
- [Book a Free Consultation](${SITE_URL}/book-shopify-consultation): Schedule a free Shopify strategy call.
- [Free Shopify Store Audit](${SITE_URL}/free-shopify-store-audit): Request a no-cost audit of an existing Shopify store.

## Optional
- [FAQs](${SITE_URL}/faqs): Common questions about services, process, pricing, and timelines.
`;

/** One line per location page, grouped under its hub. Service-format pages
 *  use their scope summary (written to be quoted); older pages use their meta
 *  description. */
function locationSection(): string {
  const pages: LocationPage[] = [...GEO_PAGES.filter((p): p is GeoPage => p.type === "geo"), ...SERVICE_GEO_PAGES];
  const byHub = new Map<string, LocationPage[]>();
  for (const p of pages) byHub.set(p.hub, [...(byHub.get(p.hub) ?? []), p]);

  const blocks = [...byHub.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .map(([hub, list]) => {
      const lines = list
        .sort((a, b) => a.geo.name.localeCompare(b.geo.name))
        .map((p) => `- [${p.shortTitle}](${SITE_URL}${p.path}): ${p.type === "service" ? p.summary : p.metaDescription}`);
      return `### ${hubPathToLabel(hub)}\n${lines.join("\n")}`;
    });

  return `## Location Pages\nShopify services written for brands in specific US cities and states.\n\n${blocks.join("\n\n")}\n`;
}

export function GET() {
  const body = [HEADER, locationSection(), CASE_STUDIES, FOOTER].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
