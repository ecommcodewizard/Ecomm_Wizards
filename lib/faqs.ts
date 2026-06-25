// FAQ hub content for /faqs. Single source of truth: the page renders these and
// builds the FAQPage JSON-LD from the same data, so the schema never drifts from
// the visible text. Answers are concise (a direct lead answer plus a little
// detail) and link to the relevant service page. Copy rules: US spelling, no em
// dashes, no filler. Stats follow the canonical set (8+ yrs, 9+ awards, 700+
// stores, $900M+).

export type FaqIcon = "info" | "tag" | "code" | "migrate" | "chart" | "search" | "store" | "support";

export type FaqItem = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

export type FaqCategory = {
  id: string;
  label: string;
  icon: FaqIcon;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "about",
    label: "About",
    icon: "info",
    items: [
      {
        question: "What is Ecomm Wizards and what do you specialize in?",
        answer:
          "Ecomm Wizards is a full-service Shopify agency. We design, build, migrate, optimize, and support Shopify and Shopify Plus stores, plus custom apps, B2B, POS, and SEO. Over 8+ years we have built 700+ stores and helped brands generate $900M+ in revenue.",
        link: { label: "See all services", href: "/services" },
      },
      {
        question: "What makes Ecomm Wizards different from other Shopify agencies?",
        answer:
          "We are a certified Shopify Plus Partner with an in-house team across design, development, CRO, and SEO, so your project is handled end to end by specialists rather than passed around. We focus on measurable results like speed, conversion rate, and revenue, backed by 9+ industry awards.",
      },
      {
        question: "Are you a certified Shopify Plus Partner?",
        answer:
          "Yes. We are a certified Shopify Plus Partner with 8+ years of experience and 700+ stores built across every Shopify plan, from brand new stores to enterprise Plus builds.",
      },
      {
        question: "What store sizes and industries do you work with?",
        answer:
          "We work with brands of every size, from new stores to high-volume Shopify Plus merchants, across fashion, beauty, health, food and beverage, electronics, and B2B wholesale. The common thread is ambitious brands that want to grow on Shopify.",
      },
      {
        question: "Do you work with brands globally?",
        answer:
          "Yes. We work with ecommerce brands worldwide and run projects remotely with clear communication and regular check-ins, so location is never a barrier.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Services & Pricing",
    icon: "tag",
    items: [
      {
        question: "How much does a Shopify store cost?",
        answer:
          "Most custom Shopify builds range from $5,000 to $50,000+, depending on scope, design, integrations, and complexity. We always give a fixed-price quote up front, so there are no surprises. The fastest way to get an exact number is a free quote.",
        link: { label: "Get a free quote", href: "/free-shopify-store-audit" },
      },
      {
        question: "How much does it cost to migrate to Shopify?",
        answer:
          "Migrations typically range from $3,000 to $15,000+, based on your current platform, product and order volume, and custom integrations. Moving from Magento, WooCommerce, BigCommerce, Salesforce, or PrestaShop each has its own scope, which we confirm in a fixed-price quote.",
        link: { label: "Shopify migration services", href: "/services/migration" },
      },
      {
        question: "How much does Shopify Plus cost?",
        answer:
          "Shopify Plus starts around $2,300 per month, billed by Shopify rather than us, and scales for high-volume merchants. That is separate from build or design work. We help you decide whether Plus is worth it for your sales volume and feature needs.",
        link: { label: "Shopify Plus development", href: "/services/shopify-plus-development" },
      },
      {
        question: "Do you charge fixed-price or hourly?",
        answer:
          "Most projects are fixed-price, so you know the cost before we start. We scope the work, lock the price, and stick to it. For ongoing work we offer monthly plans with a set number of hours.",
      },
      {
        question: "What is included in a Shopify build?",
        answer:
          "A typical build includes strategy, design, development, content setup, app and payment integrations, data migration if needed, testing, and launch, plus training so your team can run the store. You get a fast, conversion-ready store, not just a theme.",
      },
      {
        question: "Do you offer a free audit or quote?",
        answer:
          "Yes. We offer a free Shopify store audit covering speed, UX, SEO, and conversion, with no commitment. It is also the quickest way to get an accurate quote for new work.",
        link: { label: "Get a free audit", href: "/free-shopify-store-audit" },
      },
    ],
  },
  {
    id: "development",
    label: "Development & Design",
    icon: "code",
    items: [
      {
        question: "How long does it take to build a Shopify store?",
        answer:
          "A standard build takes about 4 to 8 weeks. Migrations run 4 to 12 weeks, and larger Shopify Plus or enterprise projects take 8 to 16 weeks. Timelines depend on scope, integrations, and how quickly we get feedback and content. You get a milestone plan up front.",
      },
      {
        question: "Do you build custom themes or use templates?",
        answer:
          "Both. We build fully custom themes when you want a unique, conversion-focused design, and we customize premium themes when speed and budget matter more. We recommend the right path for your goals and timeline.",
        link: { label: "Shopify theme development", href: "/services/shopify-theme-development" },
      },
      {
        question: "Do you build on Shopify Plus and Shopify 2.0?",
        answer:
          "Yes. We build on Shopify 2.0 architecture by default and are a certified Shopify Plus Partner for enterprise features like checkout extensibility, B2B, and Shopify Functions.",
        link: { label: "Shopify Plus development", href: "/services/shopify-plus-development" },
      },
      {
        question: "Will my store be fast and mobile-optimized?",
        answer:
          "Yes. We build mobile-first and optimize Core Web Vitals so your store loads fast on every device. Speed affects both rankings and conversion, so it is part of every build, and we also offer dedicated speed optimization.",
        link: { label: "Speed optimization", href: "/services/shopify-speed-optimization" },
      },
      {
        question: "Do you build custom Shopify apps?",
        answer:
          "Yes. We build custom Shopify apps and private integrations when off-the-shelf apps cannot do the job, from custom checkout logic to bespoke admin tools and API connections.",
        link: { label: "Shopify app development", href: "/services/shopify-app-development" },
      },
    ],
  },
  {
    id: "migrations",
    label: "Migrations & Integrations",
    icon: "migrate",
    items: [
      {
        question: "Which platforms can you migrate to Shopify?",
        answer:
          "We migrate from any platform, including WooCommerce, Magento, BigCommerce, Salesforce Commerce, PrestaShop, Amazon, and custom builds. We handle products, customers, orders, and SEO so nothing important is left behind.",
        link: { label: "Shopify migration services", href: "/services/migration" },
      },
      {
        question: "Will I lose my Google rankings when I migrate to Shopify?",
        answer:
          "No, not when it is done right. We map every old URL to its new one with 301 redirects, preserve titles and meta data, and keep your site structure clean. A careful migration protects your rankings and often improves them through better speed and structure.",
      },
      {
        question: "Can you move my products, customers, and order history?",
        answer:
          "Yes. We migrate products, collections, customers, and order history, along with content like blogs and pages. For security, customer passwords cannot transfer between platforms, so customers reset them on first login, which is standard for any migration.",
      },
      {
        question: "Can you integrate Shopify with my ERP, CRM, 3PL, or email tools?",
        answer:
          "Yes. We connect Shopify to ERPs, CRMs, 3PLs, accounting, and marketing tools, including Klaviyo for email and SMS. When a native integration does not exist, we build a custom one.",
        link: { label: "Shopify integrations", href: "/services/shopify-integration-services" },
      },
    ],
  },
  {
    id: "cro",
    label: "CRO & A/B Testing",
    icon: "chart",
    items: [
      {
        question: "What is conversion rate optimization (CRO)?",
        answer:
          "CRO is the practice of turning more of your existing traffic into buyers by removing friction and testing changes to layout, copy, and checkout. Instead of paying for more visitors, you earn more revenue from the visitors you already have.",
        link: { label: "Shopify CRO agency", href: "/services/shopify-cro-agency" },
      },
      {
        question: "How much can CRO improve my conversion rate?",
        answer:
          "It depends on your starting point, but data-led CRO commonly lifts conversion rate and revenue per visitor over a few testing cycles. We focus on high-impact areas first, like product pages, cart, and checkout, and prove each change with data.",
      },
      {
        question: "Do you run A/B tests?",
        answer:
          "Yes. We run structured A/B tests so design and copy decisions are based on real visitor behavior, not opinions. Each test isolates one change and runs to statistical significance before we roll it out.",
        link: { label: "Shopify A/B testing", href: "/services/a-b-testing" },
      },
      {
        question: "How do you increase average order value (AOV)?",
        answer:
          "We raise AOV with bundles, volume discounts, upsells and cross-sells, and product recommendations, matched to your margins. The goal is more revenue per order without hurting conversion.",
      },
    ],
  },
  {
    id: "seo",
    label: "Shopify SEO",
    icon: "search",
    items: [
      {
        question: "Can a Shopify store rank well on Google?",
        answer:
          "Yes. Shopify can rank very well when the technical foundation, site structure, page speed, and content are done right. We have grown organic traffic for stores in competitive niches by fixing the fundamentals first, then building content and authority.",
        link: { label: "Shopify SEO agency", href: "/services/shopify-seo-agency" },
      },
      {
        question: "What is included in your Shopify SEO service?",
        answer:
          "Our SEO work covers technical SEO, on-page optimization for collections and product pages, site speed, content strategy, and ongoing tracking. We start with an audit, fix what is holding the store back, then grow rankings and traffic over time.",
      },
      {
        question: "How long until SEO results show?",
        answer:
          "Most stores see meaningful movement within 3 to 6 months, with technical fixes often paying off sooner. SEO compounds, so the gains keep building as content and authority grow.",
      },
    ],
  },
  {
    id: "b2b-pos",
    label: "B2B & POS",
    icon: "store",
    items: [
      {
        question: "Can you set up B2B or wholesale on Shopify?",
        answer:
          "Yes. We set up B2B and wholesale on Shopify Plus with company accounts, customer-specific pricing and catalogs, net payment terms, and quick-order workflows, so wholesale buyers get an experience built for them.",
        link: { label: "Shopify B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        question: "Is Shopify good for B2B?",
        answer:
          "Yes. Shopify Plus has strong native B2B features like company profiles, price lists, net terms, and self-serve ordering, often replacing clunky legacy systems at a lower cost. We set it up around your sales process and approval rules.",
        link: { label: "Shopify B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        question: "Do you set up Shopify POS and omnichannel selling?",
        answer:
          "Yes. We set up Shopify POS so your in-store and online sales, inventory, and customers stay in sync, giving you one source of truth across every channel.",
        link: { label: "Shopify POS setup", href: "/services/shopify-pos-setup" },
      },
    ],
  },
  {
    id: "support",
    label: "Support & Getting Started",
    icon: "support",
    items: [
      {
        question: "Do you offer ongoing support and maintenance?",
        answer:
          "Yes. We offer monthly care plans covering bug fixes, updates, monitoring, and on-demand development hours, so your store stays fast, secure, and improving after launch.",
        link: { label: "Maintenance and support", href: "/services/shopify-maintenance-and-support" },
      },
      {
        question: "What happens after my store launches?",
        answer:
          "Every build includes a post-launch support window to catch any issues and fine-tune. After that, most clients move to a monthly care plan for ongoing updates, improvements, and priority help.",
      },
      {
        question: "What does a Shopify agency do, and how do we get started?",
        answer:
          "A Shopify agency plans, designs, builds, and grows your store, then supports it over time. Getting started with us is simple: book a free consultation or request a free audit, and we will scope the work and send a fixed-price plan.",
        link: { label: "Book a free consultation", href: "/book-shopify-consultation" },
      },
      {
        question: "How will we communicate during the project?",
        answer:
          "You get a dedicated point of contact and regular check-ins, with clear updates at each milestone. You always know what we are working on, what is next, and how the project is tracking.",
      },
    ],
  },
];

// Flattened list for the FAQPage JSON-LD (schema uses the plain-text answer only).
export const ALL_FAQS: FaqItem[] = FAQ_CATEGORIES.flatMap((c) => c.items);
