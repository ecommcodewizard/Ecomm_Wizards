/**
 * Generates Next.js page files for all remaining Shopify service pages.
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP  = join(ROOT, 'app');

function page({ dir, title, metaTitle, metaDesc, badge, heroTitle, heroHighlight, heroSub, features, process: proc, faqs, ctaHeading, ctaSub }) {
  const feat = features || [];
  const steps = proc || [];
  const faqList = faqs || [];

  return `import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: ${JSON.stringify(metaTitle)},
  description: ${JSON.stringify(metaDesc)},
};
${feat.length ? `
const FEATURES = ${JSON.stringify(feat, null, 2)};
` : ''}${steps.length ? `
const PROCESS = ${JSON.stringify(steps, null, 2)};
` : ''}${faqList.length ? `
const FAQS = ${JSON.stringify(faqList, null, 2)};
` : ''}
export default function Page() {
  return (
    <>
      <PageHero
        badge=${JSON.stringify(badge)}
        title=${JSON.stringify(heroTitle)}
        ${heroHighlight ? `titleHighlight=${JSON.stringify(heroHighlight)}` : ''}
        subtitle=${JSON.stringify(heroSub)}
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />
${feat.length ? `
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our ${title} Services" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f: {icon:string;title:string;desc:string}) => (
              <div key={f.title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-slate-800">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
` : ''}${steps.length ? `
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Process" title="How We Deliver ${title}" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-${Math.min(steps.length, 5)}">
            {PROCESS.map((p: {step:string;title:string;desc:string}) => (
              <div key={p.step} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <span className="text-5xl font-extrabold text-slate-100 leading-none">{p.step}</span>
                <h3 className="mt-2 font-bold text-slate-800">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
` : ''}${faqList.length ? `
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader badge="FAQs" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {FAQS.map((faq: {q:string;a:string}) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-800">{faq.q}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
` : ''}
      <CTASection
        heading=${JSON.stringify(ctaHeading)}
        subheading=${JSON.stringify(ctaSub || "Get a free consultation from our Shopify experts. Response within 24 hours.")}
      />
    </>
  );
}
`;
}

const PAGES = [
  // ── Migration pages ──────────────────────────────────────────────────────
  {
    dir: 'migration',
    title: 'Shopify Migration', badge: 'Migrate to Shopify',
    metaTitle: 'Migrate to Shopify | Zero Data Loss Migration Service | Ecomm Wizards',
    metaDesc: 'Migrate to Shopify from any platform — WooCommerce, Magento, BigCommerce, and more. Zero data loss, zero downtime, certified Shopify Plus experts.',
    heroTitle: 'Migrate to Shopify.', heroHighlight: 'Zero Downtime. Zero Data Loss.',
    heroSub: 'Move your entire ecommerce operation to Shopify safely — products, customers, orders, SEO, and more. Certified Shopify Plus migration experts with 8+ years experience.',
    features: [
      { icon: '📦', title: 'Full Product Migration',    desc: 'All products, variants, images, metafields, and inventory transferred accurately.' },
      { icon: '👥', title: 'Customer & Order History',  desc: 'Every customer record and order history migrated — no data left behind.' },
      { icon: '🔍', title: 'SEO Preservation',          desc: '301 redirects, metadata, and URL structure preserved to protect your organic rankings.' },
      { icon: '⚡', title: 'Zero Downtime Launch',       desc: 'Your current store stays live until the Shopify store is fully tested and ready.' },
      { icon: '🔌', title: 'App & Integration Setup',   desc: 'All your key apps, payment gateways, and integrations configured on Shopify.' },
      { icon: '🎓', title: 'Team Training',              desc: 'Full Shopify Admin training for your team before go-live.' },
    ],
    process: [
      { step: '01', title: 'Audit',      desc: 'Full audit of your current platform — data volume, custom features, and integration requirements.' },
      { step: '02', title: 'Plan',       desc: 'Custom migration roadmap with timeline, milestones, and risk mitigation.' },
      { step: '03', title: 'Build',      desc: 'Shopify store setup, theme development, and app configuration.' },
      { step: '04', title: 'Migrate',    desc: 'Data transfer with full validation and QA — products, customers, orders.' },
      { step: '05', title: 'Launch',     desc: 'DNS cutover, SEO redirect setup, and 30-day post-launch monitoring.' },
    ],
    faqs: [
      { q: 'Will I lose my SEO rankings when I migrate?', a: 'Not with us. We implement proper 301 redirects, preserve metadata, and monitor rankings for 30 days post-migration to protect your organic traffic.' },
      { q: 'How long does a Shopify migration take?',     a: 'Typically 4–12 weeks depending on store size and complexity. We\'ll give you a precise timeline in your free migration consultation.' },
      { q: 'Can you migrate my order history?',          a: 'Yes — we migrate all historical orders, customer accounts, and transaction data to Shopify.' },
    ],
    ctaHeading: 'Ready to Make the Move to Shopify?',
    ctaSub: 'Book a free migration consultation and get a custom roadmap for your store — no commitment required.',
  },
  {
    dir: 'woocommerce-to-shopify', title: 'WooCommerce to Shopify Migration', badge: 'WooCommerce → Shopify',
    metaTitle: 'WooCommerce to Shopify Migration | Ecomm Wizards',
    metaDesc: 'Migrate from WooCommerce to Shopify without losing data, SEO, or customers. Certified Shopify migration experts. Free consultation.',
    heroTitle: 'WooCommerce to Shopify', heroHighlight: 'Migration Made Simple',
    heroSub: 'Escape WordPress complexity and move to Shopify — faster, more reliable, and built for ecommerce growth. Zero data loss. Zero downtime.',
    features: [
      { icon: '📦', title: 'Products & Variants',        desc: 'All WooCommerce products, attributes, variations, and images migrated to Shopify.' },
      { icon: '👥', title: 'Customers & Orders',          desc: 'Full customer database and order history transferred to Shopify.' },
      { icon: '🔍', title: 'SEO 301 Redirects',           desc: 'Automatic redirect mapping from all WooCommerce URLs to Shopify equivalents.' },
      { icon: '🔌', title: 'Plugin Replacement',          desc: 'We identify Shopify equivalents for every WooCommerce plugin you rely on.' },
      { icon: '🎨', title: 'Theme Redesign (Optional)',   desc: 'Upgrade your design at the same time — or migrate your existing look and feel.' },
      { icon: '⚡', title: 'Performance Boost',           desc: 'Shopify\'s infrastructure is faster, more reliable, and requires zero server maintenance.' },
    ],
    process: [
      { step: '01', title: 'WooCommerce Audit',  desc: 'We map all your products, plugins, custom features, and payment gateways.' },
      { step: '02', title: 'Shopify Setup',      desc: 'Store configuration, theme selection or build, and payment setup.' },
      { step: '03', title: 'Data Migration',     desc: 'Products, customers, orders — all transferred with full validation.' },
      { step: '04', title: 'QA & Testing',       desc: 'End-to-end testing across all devices and browsers.' },
      { step: '05', title: 'Go-Live',            desc: 'Cutover with 301 redirects, monitoring, and post-launch support.' },
    ],
    ctaHeading: 'Ready to Escape WooCommerce?', ctaSub: 'Book a free migration consultation — we\'ll tell you exactly what it takes to move your store.',
  },
  {
    dir: 'bigcommerce-to-shopify', title: 'BigCommerce to Shopify Migration', badge: 'BigCommerce → Shopify',
    metaTitle: 'BigCommerce to Shopify Migration | Ecomm Wizards',
    metaDesc: 'Seamlessly migrate from BigCommerce to Shopify. Products, customers, orders, and SEO preserved. Certified Shopify Plus Partner.',
    heroTitle: 'BigCommerce to Shopify', heroHighlight: 'Seamless Migration',
    heroSub: 'Move from BigCommerce to Shopify with zero data loss and zero downtime. Our certified team handles every step from audit to go-live.',
    features: [
      { icon: '📦', title: 'Full Product Transfer',   desc: 'All products, categories, options, and digital assets migrated accurately.' },
      { icon: '👥', title: 'Customer Data',            desc: 'Complete customer accounts, addresses, and purchase history.' },
      { icon: '📋', title: 'Order History',            desc: 'Historical orders imported for reporting, returns, and customer service.' },
      { icon: '🔍', title: 'SEO Preservation',         desc: 'URL redirects and metadata preservation to protect your organic traffic.' },
      { icon: '🎨', title: 'Theme Migration',           desc: 'Recreate your BigCommerce design in Shopify — or take the opportunity to upgrade.' },
      { icon: '🔌', title: 'App Stack Setup',           desc: 'Shopify app equivalents configured for everything you relied on in BigCommerce.' },
    ],
    ctaHeading: 'Ready to Move from BigCommerce to Shopify?',
  },
  {
    dir: 'magento-to-shopify', title: 'Magento to Shopify Migration', badge: 'Magento → Shopify',
    metaTitle: 'Magento to Shopify Migration | Escape Magento Complexity',
    metaDesc: 'Move from Magento 1 or Magento 2 to Shopify with zero data loss. Certified Shopify migration experts. Free consultation and quote.',
    heroTitle: 'Escape Magento.', heroHighlight: 'Migrate to Shopify.',
    heroSub: 'Magento is expensive, complex, and high-maintenance. Move to Shopify and take back control of your store — without losing products, customers, or SEO.',
    features: [
      { icon: '💰', title: 'Reduce Infrastructure Cost',  desc: 'No more server costs, developer dependency, or security patches. Shopify handles it all.' },
      { icon: '📦', title: 'Full Data Migration',          desc: 'All products, categories, customers, and orders — including Magento 1 and Magento 2.' },
      { icon: '🔍', title: 'SEO Continuity',               desc: 'URL mapping, 301 redirects, and metadata preservation built into every migration.' },
      { icon: '⚡', title: 'Performance Upgrade',          desc: 'Shopify\'s infrastructure is faster and more reliable than any self-hosted Magento install.' },
      { icon: '🎨', title: 'Modern Shopify Design',        desc: 'Migrate to a fresh, conversion-focused Shopify theme — or replicate your existing look.' },
      { icon: '🔌', title: 'Extension Replacement',        desc: 'We find Shopify equivalents for all your Magento extensions and configure them for you.' },
    ],
    ctaHeading: 'Ready to Leave Magento Behind?',
  },
  {
    dir: 'amazon-to-shopify', title: 'Amazon to Shopify Migration', badge: 'Amazon → Shopify',
    metaTitle: 'Amazon to Shopify | Build Your Own Direct-to-Consumer Channel',
    metaDesc: 'Move from Amazon to Shopify and own your customer data, margins, and brand. Build a DTC channel that works alongside or instead of Amazon.',
    heroTitle: 'Own Your Customers.', heroHighlight: 'Launch on Shopify.',
    heroSub: 'Stop giving Amazon your margins and customer data. Build a direct-to-consumer Shopify channel that you own, control, and grow on your terms.',
    features: [
      { icon: '👤', title: 'Own Your Customer Data',   desc: 'Build a direct relationship with your buyers — something Amazon never lets you do.' },
      { icon: '💰', title: 'Higher Margins',            desc: 'Cut out Amazon fees and keep more of every sale you make.' },
      { icon: '🎨', title: 'Brand Experience',          desc: 'Create a branded shopping experience that builds loyalty and repeat purchases.' },
      { icon: '📦', title: 'Product Catalogue Transfer', desc: 'All your ASINs and listings mapped to clean Shopify product records.' },
      { icon: '🔄', title: 'Inventory Sync',            desc: 'Optional: keep selling on Amazon while syncing inventory with your Shopify store.' },
      { icon: '📈', title: 'Growth Strategy',           desc: 'DTC growth strategy, email marketing, and retention flows to maximise lifetime value.' },
    ],
    ctaHeading: 'Ready to Own Your DTC Channel?',
  },
  {
    dir: 'prestashop-to-shopify', title: 'Prestashop to Shopify Migration', badge: 'Prestashop → Shopify',
    metaTitle: 'Prestashop to Shopify Migration | Full Data Transfer Service',
    metaDesc: 'Migrate from Prestashop to Shopify with zero data loss. Full product, customer, and order transfer with SEO preservation.',
    heroTitle: 'Prestashop to Shopify', heroHighlight: 'Full Migration Service',
    heroSub: 'Leave Prestashop\'s complexity behind and move to Shopify — the world\'s most popular ecommerce platform. We handle everything from audit to go-live.',
    features: [
      { icon: '📦', title: 'Products & Categories',    desc: 'All Prestashop products, categories, attributes, and images transferred to Shopify.' },
      { icon: '👥', title: 'Customers & Orders',        desc: 'Complete customer database and order history migrated with full validation.' },
      { icon: '🔍', title: 'SEO Redirects',             desc: '301 redirect mapping for all Prestashop URLs to protect your organic traffic.' },
      { icon: '🌍', title: 'Multi-Language/Currency',   desc: 'Multi-store Prestashop setups migrated to Shopify\'s international commerce features.' },
      { icon: '🎨', title: 'Theme Development',         desc: 'Modern, conversion-focused Shopify theme built to match or improve your Prestashop design.' },
      { icon: '🔌', title: 'Module Replacement',        desc: 'All critical Prestashop modules replaced with equivalent Shopify apps and configurations.' },
    ],
    ctaHeading: 'Ready to Migrate from Prestashop?',
  },
  {
    dir: 'salesforce-to-shopify', title: 'Salesforce Commerce Cloud to Shopify', badge: 'Salesforce → Shopify',
    metaTitle: 'Salesforce Commerce Cloud to Shopify Migration | Ecomm Wizards',
    metaDesc: 'Exit Salesforce Commerce Cloud and migrate to Shopify Plus. Reduce total cost of ownership and regain agility without sacrificing enterprise features.',
    heroTitle: 'Exit Salesforce Commerce Cloud.', heroHighlight: 'Move to Shopify Plus.',
    heroSub: 'Reduce TCO, increase agility, and unlock faster innovation on Shopify Plus — without losing the enterprise features your business depends on.',
    features: [
      { icon: '💰', title: 'Dramatically Lower TCO',   desc: 'Eliminate six-figure annual Salesforce licensing fees and proprietary developer costs.' },
      { icon: '⚡', title: 'Faster Time to Market',    desc: 'Launch campaigns, features, and seasonal changes in days, not months.' },
      { icon: '🔗', title: 'Salesforce CRM Integration', desc: 'Keep your Salesforce CRM — we integrate it directly with Shopify for seamless data flow.' },
      { icon: '📦', title: 'Full Data Migration',       desc: 'All products, customers, orders, and content migrated with zero loss.' },
      { icon: '🔍', title: 'SEO Continuity',            desc: 'URL redirects and metadata preservation to maintain all organic traffic.' },
      { icon: '🏢', title: 'Enterprise Features',       desc: 'Shopify Plus delivers the enterprise capabilities you need at a fraction of the cost.' },
    ],
    ctaHeading: 'Ready to Exit Salesforce Commerce Cloud?',
    ctaSub: 'Book a free consultation and we\'ll build your Salesforce to Shopify migration strategy.',
  },
  {
    dir: 'liquid-to-shopify-hydrogen', title: 'Liquid to Shopify Hydrogen Migration', badge: 'Liquid → Hydrogen',
    metaTitle: 'Liquid to Shopify Hydrogen | Headless Shopify Migration',
    metaDesc: 'Modernise your Shopify store by migrating from Liquid to Shopify Hydrogen and Next.js. Sub-second load times and full headless flexibility.',
    heroTitle: 'Modernise Your Shopify Store.', heroHighlight: 'Go Headless with Hydrogen.',
    heroSub: 'Migrate from a Liquid theme to Shopify Hydrogen — React-based, sub-second load times, and complete frontend flexibility. Built for brands that demand the best.',
    features: [
      { icon: '⚡', title: 'Sub-Second Performance',   desc: 'Hydrogen + Remix delivers the fastest possible storefront — Core Web Vitals maxed out.' },
      { icon: '⚛️', title: 'React-Powered Frontend',   desc: 'Full component-based architecture with unlimited UI flexibility.' },
      { icon: '🔗', title: 'Shopify Storefront API',   desc: 'Native integration with Shopify\'s Storefront API for real-time cart, products, and checkout.' },
      { icon: '🌐', title: 'Global CDN Delivery',      desc: 'Oxygen hosting with edge delivery — fast everywhere in the world.' },
      { icon: '🔀', title: 'Existing Data Preserved',  desc: 'All products, collections, customers, and metafields remain in Shopify Admin.' },
      { icon: '📱', title: 'Mobile-First Architecture', desc: 'Designed and built mobile-first — optimal performance on every device.' },
    ],
    ctaHeading: 'Ready to Go Headless with Shopify Hydrogen?',
  },
  // ── Design & Dev pages ────────────────────────────────────────────────────
  {
    dir: 'headless-shopify-agency', title: 'Headless Shopify', badge: 'Headless Shopify',
    metaTitle: 'Headless Shopify Agency | Next.js & Hydrogen Storefronts',
    metaDesc: 'Build a blazing-fast headless Shopify storefront with Next.js or Hydrogen. Certified Shopify Plus partner. Sub-second load times. Maximum flexibility.',
    heroTitle: 'Headless Shopify.', heroHighlight: 'Unlimited Frontend Freedom.',
    heroSub: 'Decouple your Shopify backend from your frontend and unlock sub-second performance, custom UI, and omnichannel experiences — built by certified headless experts.',
    features: [
      { icon: '⚡', title: 'Sub-Second Load Times',   desc: 'Server-side rendering and edge delivery that makes your store the fastest in your niche.' },
      { icon: '⚛️', title: 'Next.js Storefronts',    desc: 'Production-grade React storefronts powered by the Shopify Storefront API.' },
      { icon: '🌿', title: 'Shopify Hydrogen',        desc: 'Shopify\'s official React framework — built for headless commerce from the ground up.' },
      { icon: '🔗', title: 'Omnichannel Commerce',   desc: 'One Shopify backend powering web, mobile app, kiosk, and in-store experiences.' },
      { icon: '🎨', title: 'Unlimited UI Flexibility', desc: 'No Liquid constraints — build any user experience your brand vision demands.' },
      { icon: '📦', title: 'Shopify Admin Intact',   desc: 'Your team still uses familiar Shopify Admin — only the frontend changes.' },
    ],
    ctaHeading: 'Ready to Go Headless?',
  },
  {
    dir: 'shopify-theme-development', title: 'Shopify Theme Development', badge: 'Theme Development',
    metaTitle: 'Shopify Theme Development | Custom Liquid Themes | Ecomm Wizards',
    metaDesc: 'Custom Shopify theme development built for speed, conversions, and your unique brand. Shopify 2.0 architecture. Mobile-first. Zero page builders.',
    heroTitle: 'Custom Shopify Themes', heroHighlight: 'Built to Convert',
    heroSub: 'Bespoke Liquid themes engineered from scratch — no templates, no page builders, no compromise. Shopify 2.0 architecture, mobile-first, and built for speed.',
    features: [
      { icon: '🎨', title: 'Fully Custom Design',      desc: 'Your unique brand identity translated into a bespoke Shopify theme — not a customised template.' },
      { icon: '📱', title: 'Mobile-First',              desc: 'Built mobile-first by default — optimal experience on every screen size.' },
      { icon: '⚡', title: 'Speed Optimised',           desc: 'Lean, clean Liquid code. No bloat. Target: 90+ Lighthouse score out of the box.' },
      { icon: '🧩', title: 'Shopify 2.0 Sections',    desc: 'Full Sections Everywhere architecture — flexible, content-editable by your team.' },
      { icon: '♿', title: 'Accessibility Compliant',  desc: 'WCAG 2.1 AA compliance built in from day one.' },
      { icon: '🔌', title: 'App-Ready Architecture',   desc: 'Structured for seamless integration with your key Shopify apps from the start.' },
    ],
    ctaHeading: 'Ready for a Custom Shopify Theme?',
  },
  {
    dir: 'shopify-plus-development', title: 'Shopify Plus Development', badge: 'Shopify Plus',
    metaTitle: 'Shopify Plus Development Agency | Enterprise Shopify Solutions',
    metaDesc: 'Certified Shopify Plus development agency. Custom checkout, Shopify Flow, Scripts, B2B, and enterprise integrations. 700+ stores built.',
    heroTitle: 'Enterprise Shopify Plus', heroHighlight: 'Development',
    heroSub: 'Unlock the full power of Shopify Plus — custom checkout, Flow automations, Shopify Scripts, B2B, and enterprise-grade integrations. Built by certified Plus experts.',
    features: [
      { icon: '💳', title: 'Custom Checkout',      desc: 'Checkout Extensions, Functions, and branded checkout experiences unique to your brand.' },
      { icon: '🔄', title: 'Shopify Flow',          desc: 'Advanced automation workflows for orders, customers, inventory, and marketing.' },
      { icon: '📜', title: 'Shopify Scripts',       desc: 'Custom discount logic, tiered pricing, and cart modifications powered by Shopify Scripts.' },
      { icon: '🏢', title: 'B2B Features',          desc: 'Company profiles, custom pricing, net terms, and wholesale portals on Shopify Plus.' },
      { icon: '🔗', title: 'Enterprise Integrations', desc: 'ERP, CRM, 3PL, and custom API integrations at enterprise scale.' },
      { icon: '🌍', title: 'Multi-Store Management', desc: 'Shopify Markets, expansion stores, and international commerce — configured for global scale.' },
    ],
    ctaHeading: 'Ready to Unlock Shopify Plus?',
  },
  {
    dir: 'shopify-ux-and-ui-design', title: 'Shopify UX & UI Design', badge: 'UX & UI Design',
    metaTitle: 'Shopify UX and UI Design | Conversion-Focused Shopify Design Agency',
    metaDesc: 'Expert Shopify UX and UI design that drives conversions. Wireframes, high-fidelity mockups, and Figma-to-Shopify delivery by a certified Shopify agency.',
    heroTitle: 'Shopify UX & UI Design', heroHighlight: 'That Actually Converts',
    heroSub: 'Beautiful Shopify design is worthless if it doesn\'t sell. We design with conversion psychology, user behaviour data, and your brand at the centre of every decision.',
    features: [
      { icon: '🗺️', title: 'UX Audit & Research',      desc: 'Heatmaps, session recordings, and expert review to understand how users behave in your store.' },
      { icon: '✏️', title: 'Wireframing',               desc: 'Structured page layouts before a single pixel of design — ensuring every element has a purpose.' },
      { icon: '🎨', title: 'High-Fidelity Mockups',    desc: 'Pixel-perfect Figma designs across mobile, tablet, and desktop — ready for developer handover.' },
      { icon: '💳', title: 'Checkout UX',               desc: 'Optimised checkout flow design to reduce abandonment and increase completed purchases.' },
      { icon: '📱', title: 'Mobile-First Design',       desc: 'Designed for mobile first — where 70%+ of your traffic comes from.' },
      { icon: '🔄', title: 'Design to Development',    desc: 'We can take your design all the way to live Shopify — no handoff gaps.' },
    ],
    ctaHeading: 'Ready for a Shopify Design That Converts?',
  },
  {
    dir: 'shopify-conversion-rate-optimization-cro-agency', title: 'Shopify CRO', badge: 'CRO Agency',
    metaTitle: 'Shopify Conversion Rate Optimisation (CRO) Agency | Ecomm Wizards',
    metaDesc: 'Expert Shopify CRO agency. A/B testing, UX optimisation, checkout fixes, and data-driven experimentation to turn more visitors into buyers.',
    heroTitle: 'Turn More Visitors Into', heroHighlight: 'Paying Customers',
    heroSub: 'Shopify CRO agency specialising in data-driven experimentation, UX optimisation, and systematic conversion improvements. Average 28.5% conversion lift across our clients.',
    features: [
      { icon: '🔬', title: 'CRO Audit',              desc: 'Deep-dive analysis of your entire conversion funnel — from landing page to checkout.' },
      { icon: '🧪', title: 'A/B Testing',             desc: 'Structured hypothesis testing to identify and implement the changes that lift revenue.' },
      { icon: '🔥', title: 'Heatmaps & Session Replay', desc: 'Visual behaviour analysis revealing exactly where users drop off and why.' },
      { icon: '💳', title: 'Checkout Optimisation',   desc: 'Systematic checkout UX improvements that directly reduce cart abandonment.' },
      { icon: '📈', title: 'Revenue Impact Reports',  desc: 'Clear attribution of CRO work to revenue — every test tied to a business outcome.' },
      { icon: '🎯', title: 'Personalisation',         desc: 'Dynamic content and personalised experiences that increase relevance and conversion.' },
    ],
    ctaHeading: 'Ready to Increase Your Conversion Rate?',
    ctaSub: 'Get a free CRO audit and see exactly where your store is losing revenue.',
  },
  {
    dir: 'shopify-landing-page-design', title: 'Shopify Landing Page Design', badge: 'Landing Pages',
    metaTitle: 'Shopify Landing Page Design | High-Converting Campaign Pages',
    metaDesc: 'Custom Shopify landing pages designed and built to convert — product launches, seasonal campaigns, ad traffic, and more.',
    heroTitle: 'Shopify Landing Pages', heroHighlight: 'Built to Convert',
    heroSub: 'High-converting campaign pages for product launches, paid ads, seasonal promotions, and lead capture — designed and built by Shopify conversion experts.',
    features: [
      { icon: '🎯', title: 'Conversion-First Design',  desc: 'Every element placed to move visitors towards a purchase — backed by CRO best practices.' },
      { icon: '📱', title: 'Mobile-Optimised',          desc: 'Landing pages built mobile-first — where the majority of ad traffic converts.' },
      { icon: '⚡', title: 'Speed Optimised',           desc: 'Fast-loading pages that don\'t let paid ad spend go to waste on slow load times.' },
      { icon: '🧪', title: 'A/B Test Ready',            desc: 'Landing pages structured for easy A/B testing and iterative improvement.' },
      { icon: '🛍️', title: 'Direct to Checkout',       desc: 'Streamlined paths from landing page to purchase — minimal friction, maximum sales.' },
      { icon: '📊', title: 'Analytics Integration',    desc: 'Full tracking setup — GA4, Meta Pixel, TikTok Pixel, and conversion events.' },
    ],
    ctaHeading: 'Ready to Build a Landing Page That Converts?',
  },
  {
    dir: 'shopify-maintenance-and-support', title: 'Shopify Maintenance & Support', badge: 'Ongoing Support',
    metaTitle: 'Shopify Maintenance and Support | Ongoing Shopify Care Plans',
    metaDesc: 'Ongoing Shopify maintenance, support, and development from a certified Shopify Plus agency. Monthly care plans for stores that can\'t afford downtime.',
    heroTitle: 'Ongoing Shopify Maintenance', heroHighlight: '& Expert Support',
    heroSub: 'Your Shopify store never sleeps — and neither does our support team. Monthly care plans covering updates, bug fixes, performance monitoring, and on-demand development.',
    features: [
      { icon: '🔧', title: 'Bug Fixes & Updates',       desc: 'Same-day bug fixes and app update management — no issue left unresolved.' },
      { icon: '⚡', title: 'Performance Monitoring',    desc: 'Ongoing speed and Core Web Vitals monitoring with proactive optimisation.' },
      { icon: '🔒', title: 'Security & Theme Updates',  desc: 'Shopify theme updates applied safely with full testing before deployment.' },
      { icon: '🛠️', title: 'On-Demand Development',   desc: 'Monthly development hours for new features, customisations, and improvements.' },
      { icon: '📊', title: 'Monthly Reporting',         desc: 'Comprehensive monthly report covering performance, fixes, and recommendations.' },
      { icon: '🤝', title: 'Dedicated Account Manager', desc: 'A named account manager who knows your store inside out.' },
    ],
    ctaHeading: 'Looking for Reliable Shopify Support?',
    ctaSub: 'Get a free consultation and we\'ll recommend the right care plan for your store.',
  },
  {
    dir: 'shopify-integrations-erp-crm-3pl-etc', title: 'Shopify Integrations', badge: 'Integrations',
    metaTitle: 'Shopify Integrations | ERP, CRM, 3PL & More | Ecomm Wizards',
    metaDesc: 'Connect Shopify to any system — ERP, CRM, 3PL, marketing tools, and custom APIs. Real-time sync, zero data loss, certified Shopify Plus partner.',
    heroTitle: 'Connect Shopify to', heroHighlight: 'Every System You Use',
    heroSub: 'Real-time integrations between Shopify and your ERP, CRM, 3PL, warehouse, and marketing stack. We build the connections that make your operations run automatically.',
    features: [
      { icon: '🔷', title: 'ERP Integration',         desc: 'NetSuite, SAP, Microsoft Dynamics — real-time bi-directional sync.' },
      { icon: '☁️', title: 'CRM Integration',          desc: 'Salesforce, HubSpot, Klaviyo — customer data flowing where it needs to go.' },
      { icon: '📦', title: '3PL & Warehouse',          desc: 'ShipBob, ShipHero, Whiplash, and custom WMS connections for fulfilment automation.' },
      { icon: '💳', title: 'Payment Gateways',         desc: 'Custom payment provider integrations beyond Shopify\'s standard gateway options.' },
      { icon: '📊', title: 'Analytics & BI Tools',    desc: 'Google Analytics, Looker, Tableau — data flows for real-time business intelligence.' },
      { icon: '⚙️', title: 'Custom API',               desc: 'Any system with an API can be connected to Shopify — we build the middleware.' },
    ],
    ctaHeading: 'Ready to Connect Your Systems to Shopify?',
  },
  {
    dir: 'shopify-app-setup-and-app-optimization', title: 'Shopify App Setup & Optimisation', badge: 'App Optimisation',
    metaTitle: 'Shopify App Setup and Optimisation | Get More from Your App Stack',
    metaDesc: 'Expert Shopify app setup, configuration, and optimisation. Get the most from Klaviyo, Recharge, Yotpo, Gorgias, and every app in your stack.',
    heroTitle: 'Get More From Your', heroHighlight: 'Shopify App Stack',
    heroSub: 'Most merchants use a fraction of what their Shopify apps can do. We configure, optimise, and integrate your app stack to work harder for your store.',
    features: [
      { icon: '📧', title: 'Klaviyo Setup & Flows',     desc: 'Email and SMS flows, segments, and integrations configured for maximum revenue.' },
      { icon: '🔄', title: 'Recharge / Subscriptions', desc: 'Subscription app setup, migration, and optimisation for recurring revenue.' },
      { icon: '⭐', title: 'Reviews & Loyalty',         desc: 'Yotpo, Okendo, LoyaltyLion — configured and integrated with your storefront.' },
      { icon: '🛎️', title: 'Customer Support',          desc: 'Gorgias, Zendesk, and Freshdesk — set up with Shopify order data integration.' },
      { icon: '🔍', title: 'Search & Discovery',        desc: 'Searchanise, Boost Commerce — configured for maximum product discoverability.' },
      { icon: '📊', title: 'Analytics Apps',            desc: 'Glew, Triple Whale, and attribution tools — set up for accurate reporting.' },
    ],
    ctaHeading: 'Ready to Get More from Your Shopify Apps?',
  },
  {
    dir: 'shopify-2-0-development', title: 'Shopify 2.0 Development', badge: 'Shopify 2.0',
    metaTitle: 'Shopify 2.0 Development | Sections Everywhere & Online Store 2.0',
    metaDesc: 'Upgrade to Shopify 2.0 and unlock Sections Everywhere, metafields, and flexible content architecture. Certified Shopify 2.0 development agency.',
    heroTitle: 'Shopify 2.0 Development', heroHighlight: 'Built for the Future',
    heroSub: 'Unlock the full power of Shopify Online Store 2.0 — Sections Everywhere, metafields, flexible templates, and a content-editable storefront your team can manage.',
    features: [
      { icon: '🧩', title: 'Sections Everywhere',      desc: 'Full Shopify 2.0 architecture — sections and blocks on every page type.' },
      { icon: '📋', title: 'Metafields & Metaobjects', desc: 'Structured content and custom data built into your theme for ultimate flexibility.' },
      { icon: '⚡', title: 'Performance First',         desc: 'Shopify 2.0 themes built for speed — lazy loading, optimised assets, and clean code.' },
      { icon: '🎨', title: 'Theme Upgrade',             desc: 'Upgrade your existing Shopify theme to 2.0 — or build a new one from scratch.' },
      { icon: '🛠️', title: 'Custom Sections',          desc: 'Purpose-built sections and blocks for your specific content and merchandising needs.' },
      { icon: '🔌', title: 'App Block Integration',    desc: 'Shopify 2.0 app blocks integrated cleanly into your theme architecture.' },
    ],
    ctaHeading: 'Ready to Upgrade to Shopify 2.0?',
  },
  {
    dir: 'shopify-analytics-and-tracking-setup', title: 'Shopify Analytics & Tracking Setup', badge: 'Analytics & Tracking',
    metaTitle: 'Shopify Analytics and Tracking Setup | GA4, GTM, Pixels',
    metaDesc: 'Full Shopify analytics setup — Google Analytics 4, Google Tag Manager, Meta Pixel, TikTok Pixel, and custom conversion tracking. Accurate data for better decisions.',
    heroTitle: 'Shopify Analytics', heroHighlight: '& Tracking Done Right',
    heroSub: 'Make decisions based on accurate data — not gut feel. Full GA4, GTM, and ad pixel setup for Shopify with conversion event tracking and revenue attribution.',
    features: [
      { icon: '📊', title: 'Google Analytics 4 (GA4)', desc: 'Full GA4 implementation with enhanced ecommerce events, funnels, and revenue reporting.' },
      { icon: '🏷️', title: 'Google Tag Manager',      desc: 'GTM setup with all conversion tags, remarketing pixels, and custom events.' },
      { icon: '📘', title: 'Meta Pixel',               desc: 'Facebook/Instagram Pixel with server-side API for accurate conversion tracking post-iOS 14.' },
      { icon: '🎵', title: 'TikTok & Other Pixels',   desc: 'TikTok, Pinterest, Snapchat, and any other platform pixel configured and validated.' },
      { icon: '🎯', title: 'Conversion Tracking',      desc: 'Purchase, add-to-cart, checkout, and custom funnel events tracked accurately.' },
      { icon: '📈', title: 'Revenue Attribution',      desc: 'Multi-touch attribution reporting so you know which channels actually drive revenue.' },
    ],
    ctaHeading: 'Ready for Accurate Shopify Analytics?',
    ctaSub: 'Get a free analytics audit and we\'ll show you exactly what tracking you\'re missing.',
  },
  {
    dir: 'shopify-speed-optimization', title: 'Shopify Speed Optimisation', badge: 'Speed Optimisation',
    metaTitle: 'Shopify Speed Optimisation | Sub-2s Load Times | Ecomm Wizards',
    metaDesc: 'Expert Shopify speed optimisation service. Improve Core Web Vitals, Lighthouse scores, and page load times. Every 1s faster = more revenue.',
    heroTitle: 'Shopify Speed Optimisation', heroHighlight: 'Sub-2s Load Times',
    heroSub: 'Every second of load time costs you conversions. Our speed experts optimise your Shopify store for Core Web Vitals, Lighthouse scores, and real-world performance.',
    features: [
      { icon: '📊', title: 'Speed Audit',              desc: 'Full benchmarking across mobile and desktop with Lighthouse, WebPageTest, and GTmetrix.' },
      { icon: '🖼️', title: 'Image Optimisation',       desc: 'Next-gen formats, lazy loading, and responsive images that load instantly.' },
      { icon: '🧹', title: 'Code Optimisation',        desc: 'Minification, unused CSS removal, render-blocking script elimination.' },
      { icon: '🔌', title: 'App Audit',                desc: 'Identify and remove apps that are secretly killing your store speed.' },
      { icon: '⚡', title: 'Critical CSS',              desc: 'Above-the-fold content prioritised for instant visual rendering.' },
      { icon: '🌐', title: 'CDN & Caching',            desc: 'Proper cache configuration and CDN asset delivery for global performance.' },
    ],
    ctaHeading: 'Ready to Speed Up Your Shopify Store?',
    ctaSub: 'Get a free speed audit and see your Core Web Vitals, Lighthouse scores, and quick wins.',
  },
  {
    dir: 'shopify-store-audit', title: 'Shopify Store Audit', badge: 'Store Audit',
    metaTitle: 'Shopify Audit | Expert Store Review & Revenue Recovery Report',
    metaDesc: 'Expert Shopify store audit covering UX, speed, CRO, SEO, checkout, and revenue leaks. Get a prioritised action plan from a certified Shopify Plus agency.',
    heroTitle: 'Shopify Store Audit', heroHighlight: 'Find What\'s Costing You Revenue',
    heroSub: 'An expert review of your entire Shopify store — UX, speed, SEO, checkout, and conversion funnel. Get a prioritised action plan delivered within 48 hours.',
    features: [
      { icon: '🎨', title: 'UX & Design Review',        desc: 'Homepage, collection, and product page analysis — what\'s working and what\'s hurting conversions.' },
      { icon: '⚡', title: 'Speed & Performance',        desc: 'Core Web Vitals, Lighthouse scores, and specific bottleneck identification.' },
      { icon: '💳', title: 'Checkout Funnel',            desc: 'Step-by-step checkout analysis to pinpoint exactly where you\'re losing customers.' },
      { icon: '🔍', title: 'SEO Health',                 desc: 'Technical SEO, metadata, structured data, and content gap analysis.' },
      { icon: '📱', title: 'Mobile Experience',          desc: 'Detailed mobile UX review — navigation, images, CTAs, and checkout on small screens.' },
      { icon: '📋', title: 'Priority Action Plan',       desc: 'A ranked list of fixes ordered by estimated revenue impact — not just a list of problems.' },
    ],
    ctaHeading: 'Claim Your Free Shopify Store Audit',
    ctaSub: 'No commitment. Delivered within 48 hours. Every fix prioritised by revenue impact.',
  },
  {
    dir: 'a-b-testing', title: 'A/B Testing for Shopify', badge: 'A/B Testing',
    metaTitle: 'Shopify A/B Testing Agency | CRO Experimentation | Ecomm Wizards',
    metaDesc: 'Data-driven A/B testing and CRO experimentation for Shopify stores. Test product pages, landing pages, checkout, and more. Results tied to revenue.',
    heroTitle: 'Shopify A/B Testing', heroHighlight: 'Data-Driven Growth',
    heroSub: 'Stop guessing what works. We design, run, and analyse A/B tests that systematically improve your Shopify store\'s conversion rate — with results tied directly to revenue.',
    features: [
      { icon: '🧪', title: 'Hypothesis Development',   desc: 'Data-backed test hypotheses built from analytics, heatmaps, and session recordings.' },
      { icon: '🎯', title: 'Test Design',               desc: 'Statistical test design ensuring valid, reliable results with proper sample sizes.' },
      { icon: '🔧', title: 'Test Implementation',       desc: 'Custom test development using Shopify-compatible experimentation tools.' },
      { icon: '📊', title: 'Results Analysis',          desc: 'Statistical significance testing and revenue impact analysis for every experiment.' },
      { icon: '📈', title: 'Winning Variant Rollout',   desc: 'Fast deployment of winning variants with full QA and monitoring.' },
      { icon: '🔄', title: 'Continuous Iteration',     desc: 'An ongoing testing programme that compounds improvements month over month.' },
    ],
    ctaHeading: 'Ready to Start A/B Testing Your Shopify Store?',
  },
  {
    dir: 'shopify-mobile-app-development', title: 'Shopify Mobile App Development', badge: 'Mobile Apps',
    metaTitle: 'Shopify Mobile App Development | iOS & Android Shopping Apps',
    metaDesc: 'Turn your Shopify store into a branded mobile app for iOS and Android. Push notifications, loyalty, and native shopping experience for your customers.',
    heroTitle: 'Turn Your Shopify Store', heroHighlight: 'Into a Mobile App',
    heroSub: 'A branded iOS and Android mobile app connected directly to your Shopify store. Push notifications, in-app loyalty, and a native shopping experience that increases LTV.',
    features: [
      { icon: '📱', title: 'Native iOS & Android',      desc: 'Purpose-built mobile apps using React Native — not wrapped web views.' },
      { icon: '🔔', title: 'Push Notifications',        desc: 'Direct customer communication — abandoned cart, new products, and personalised offers.' },
      { icon: '🛒', title: 'Shopify Sync',              desc: 'Real-time product, inventory, and order sync from your existing Shopify store.' },
      { icon: '🎁', title: 'In-App Loyalty',            desc: 'Gamified loyalty programmes and rewards built directly into the app experience.' },
      { icon: '💳', title: 'Native Checkout',           desc: 'Streamlined checkout with Apple Pay, Google Pay, and saved payment methods.' },
      { icon: '📊', title: 'App Analytics',             desc: 'Full in-app behaviour tracking and revenue attribution for mobile commerce.' },
    ],
    ctaHeading: 'Ready to Launch Your Shopify Mobile App?',
  },
  {
    dir: 'bulk-hours', title: 'Bulk Shopify Dev Hours', badge: 'Bulk Hours',
    metaTitle: 'Bulk Shopify Development Hours | On-Demand Dev Team | Ecomm Wizards',
    metaDesc: 'Buy bulk Shopify development hours and get on-demand access to our expert team. Theme customisation, bug fixes, new features, and more — on your schedule.',
    heroTitle: 'On-Demand Shopify Dev Hours', heroHighlight: 'No Retainer Required',
    heroSub: 'Buy a block of Shopify development hours and use them whenever you need. Theme customisations, bug fixes, new features, and app integrations — on your schedule.',
    features: [
      { icon: '🎨', title: 'Theme Customisation',       desc: 'Any change to your Shopify theme — layout, colours, fonts, sections, and blocks.' },
      { icon: '🔧', title: 'Bug Fixes',                  desc: 'Fast resolution of any Shopify theme or app issue — same-day turnaround available.' },
      { icon: '🔌', title: 'App Integration',            desc: 'Connect new apps to your theme or build custom integrations between your tools.' },
      { icon: '⚡', title: 'Performance Fixes',           desc: 'Targeted speed improvements to specific pages or components.' },
      { icon: '📱', title: 'Mobile Fixes',               desc: 'Mobile-specific layout fixes and responsive design improvements.' },
      { icon: '🛠️', title: 'Feature Development',       desc: 'New features, custom sections, and functionality added to your existing store.' },
    ],
    ctaHeading: 'Need a Shopify Developer On-Demand?',
    ctaSub: 'Get a quote for bulk development hours — fixed price, no commitment, use when you need.',
  },
  // ── Company pages ─────────────────────────────────────────────────────────
  {
    dir: 'partner-program', title: 'Partner Program', badge: 'Partner Program',
    metaTitle: 'Ecomm Wizards Partner Program | Refer & Earn',
    metaDesc: 'Partner with Ecomm Wizards and earn recurring commissions for every Shopify client you refer. Join our growing network of agencies, freelancers, and consultants.',
    heroTitle: 'Join the Ecomm Wizards', heroHighlight: 'Partner Program',
    heroSub: 'Earn recurring commissions for every Shopify client you refer. Join our network of agencies, freelancers, and ecommerce consultants.',
    features: [
      { icon: '💰', title: 'Recurring Commissions',     desc: 'Earn a commission for every project your referrals bring to Ecomm Wizards.' },
      { icon: '🤝', title: 'Dedicated Partner Manager', desc: 'A named contact to support you, your clients, and every referral you send.' },
      { icon: '📈', title: 'Co-Marketing Opportunities', desc: 'Joint webinars, case studies, and content to grow your audience together.' },
      { icon: '🎓', title: 'Shopify Training Access',   desc: 'Exclusive access to our internal Shopify training resources and playbooks.' },
      { icon: '🏆', title: 'Partner Certification',     desc: 'Ecomm Wizards partner badge for your website and proposals.' },
      { icon: '🌐', title: 'Partner Directory Listing', desc: 'Featured listing on our website to drive inbound clients your way.' },
    ],
    ctaHeading: 'Ready to Become a Partner?', ctaSub: 'Apply to the program and we\'ll be in touch within 24 hours.',
  },
  {
    dir: 'services', title: 'All Services', badge: 'Our Services',
    metaTitle: 'Shopify Services | Full-Service Shopify Agency | Ecomm Wizards',
    metaDesc: 'Full-service Shopify agency offering store development, migrations, CRO, SEO, app development, B2B, POS, and marketing. 700+ stores built.',
    heroTitle: 'All Shopify Services', heroHighlight: 'Under One Roof',
    heroSub: 'From first pixel to post-launch growth — every Shopify service your brand needs, delivered by a certified Shopify Plus agency with 700+ stores and $900M+ revenue.',
    features: [
      { icon: '🏗️', title: 'Build',        desc: 'Custom themes, new stores, Shopify Plus, headless, Figma-to-Shopify, and 2.0 development.' },
      { icon: '🚚', title: 'Migrate',      desc: 'WooCommerce, BigCommerce, Magento, Salesforce, Amazon — zero data loss migration to Shopify.' },
      { icon: '📈', title: 'Optimize',     desc: 'Speed, CRO, A/B testing, SEO, analytics, store audits, and UX improvements.' },
      { icon: '⚙️', title: 'Apps',         desc: 'Custom private apps, public App Store apps, mobile apps, and ERP integrations.' },
      { icon: '🏢', title: 'B2B',          desc: 'Shopify Plus wholesale portals, custom pricing, ERP sync, and B2B app development.' },
      { icon: '🛒', title: 'POS',          desc: 'Shopify POS setup, migration from Square/Lightspeed, and multi-location configuration.' },
    ],
    ctaHeading: 'Not Sure Which Service You Need?', ctaSub: 'Book a free consultation and we\'ll recommend the right solution for your goals.',
  },
  {
    dir: 'faqs', title: 'FAQs', badge: 'FAQs',
    metaTitle: 'FAQs | Ecomm Wizards Shopify Agency',
    metaDesc: 'Frequently asked questions about working with Ecomm Wizards. Shopify development, pricing, timelines, and more.',
    heroTitle: 'Frequently Asked', heroHighlight: 'Questions',
    heroSub: 'Everything you want to know about working with Ecomm Wizards — from pricing and timelines to process and results.',
    faqs: [
      { q: 'How much does a custom Shopify store cost?',   a: 'Custom builds range from $5K–$50K+ depending on scope and complexity. We provide fixed-price quotes — no surprises. Contact us for a free estimate.' },
      { q: 'How long does a Shopify project take?',        a: 'A standard build takes 4–8 weeks. Migrations 4–12 weeks. Enterprise projects 8–16 weeks. We\'ll give you a precise timeline in your free consultation.' },
      { q: 'Do you offer ongoing Shopify support?',        a: 'Yes — monthly support plans covering bug fixes, updates, performance monitoring, and on-demand development hours.' },
      { q: 'Are you a certified Shopify Plus Partner?',    a: 'Yes. We\'re a certified Shopify Plus Partner with 8+ years experience and 700+ stores built.' },
      { q: 'What platforms can you migrate from?',         a: 'Any platform — WooCommerce, BigCommerce, Magento, Salesforce, Prestashop, Amazon, and custom platforms.' },
      { q: 'Do you do free audits?',                       a: 'Yes — we offer free store audits covering speed, UX, SEO, and conversion rate. No commitment required.' },
      { q: 'What industries do you specialise in?',        a: 'We work across all ecommerce verticals — fashion, beauty, health, food, electronics, B2B wholesale, and more.' },
      { q: 'Can I see examples of your work?',             a: 'Yes — contact us and we\'ll share relevant case studies and examples from your niche.' },
    ],
    ctaHeading: 'Still Have Questions?', ctaSub: 'Book a free 30-minute call with one of our Shopify experts — no sales pitch, just answers.',
  },
  {
    dir: 'reviews', title: 'Reviews', badge: 'Client Reviews',
    metaTitle: 'Ecomm Wizards Reviews | Client Testimonials & Case Studies',
    metaDesc: 'Read what 700+ Shopify merchants say about working with Ecomm Wizards. Real reviews, real results, real revenue growth.',
    heroTitle: 'What Our Clients Say', heroHighlight: 'About Ecomm Wizards',
    heroSub: '700+ Shopify stores built. $900M+ in client revenue generated. 8+ years of compounding results — read what our clients say.',
    ctaHeading: 'Ready to Join Our Happy Clients?', ctaSub: 'Book a free consultation and take the first step towards a high-converting Shopify store.',
  },
  {
    dir: 'partners', title: 'Our Partners', badge: 'Valued Partners',
    metaTitle: 'Our Shopify Partners | Ecomm Wizards',
    metaDesc: 'Ecomm Wizards works with the world\'s best Shopify apps and service providers. See our trusted partner network.',
    heroTitle: 'Our Valued', heroHighlight: 'Partners',
    heroSub: 'We work with the best tools and platforms in ecommerce — ensuring every Shopify store we build is powered by the right technology stack.',
    ctaHeading: 'Want to Become a Partner?', ctaSub: 'Join our partner program and earn commissions on every Shopify referral.',
  },
  {
    dir: 'migrate-to-shopify', title: 'Migrate to Shopify', badge: 'Platform Migration',
    metaTitle: 'Migrate to Shopify | From Any Platform | Ecomm Wizards',
    metaDesc: 'Migrate to Shopify from any ecommerce platform. Zero data loss. Zero downtime. Certified Shopify Plus migration experts.',
    heroTitle: 'Migrate to Shopify', heroHighlight: 'From Any Platform',
    heroSub: 'Move your entire ecommerce operation to Shopify — no matter where you\'re coming from. Certified migration experts with 8+ years and 100+ successful migrations.',
    features: [
      { icon: '🔀', title: 'Any Platform',          desc: 'WooCommerce, BigCommerce, Magento, Salesforce, Prestashop, and any custom platform.' },
      { icon: '📦', title: 'Full Data Transfer',     desc: 'All products, customers, orders, reviews, and content — zero loss guaranteed.' },
      { icon: '🔍', title: 'SEO Preserved',           desc: '301 redirects and metadata protection to maintain your organic search rankings.' },
      { icon: '⏱️', title: 'Zero Downtime',           desc: 'Your current store stays live until your Shopify store is fully tested.' },
      { icon: '🎓', title: 'Team Training',            desc: 'Full Shopify Admin training so your team hits the ground running.' },
      { icon: '🛠️', title: '30-Day Post-Launch Support', desc: 'We monitor and support your store for 30 days after go-live.' },
    ],
    ctaHeading: 'Ready to Migrate to Shopify?',
  },
];

let count = 0;
for (const p of PAGES) {
  const outDir = join(APP, p.dir);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'page.tsx'), page(p));
  count++;
  console.log(`✓ ${p.dir}`);
}
console.log(`\nDone — ${count} pages generated.`);
