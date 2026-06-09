import type { Metadata } from "next";
import Link from "next/link";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";

const META_DESCRIPTION =
  "BigCommerce to Shopify migration without downtime. We move your products, customers, orders, and SEO with zero data loss. Get a free quote.";
const CANONICAL_URL = "https://ecommwizards.com/services/migration/bigcommerce-to-shopify";

export const metadata: Metadata = {
  // `absolute` renders the title exactly; the root layout's "%s | Ecomm Wizards"
  // template would otherwise append the brand to this custom title.
  title: { absolute: "BigCommerce to Shopify Migration Agency | Zero Downtime" },
  description: META_DESCRIPTION,
  keywords: [
    "bigcommerce to shopify migration",
    "migrate from bigcommerce to shopify",
    "bigcommerce to shopify plus migration",
    "bigcommerce to shopify",
    "bigcommerce migration agency",
    "bigcommerce to shopify migration services",
    "switch from bigcommerce to shopify",
    "bigcommerce shopify migration company",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "BigCommerce to Shopify Migration Agency | Zero Downtime",
    description: META_DESCRIPTION,
    images: [
      {
        url: "/images/bigcommerce-hero-bg.png",
        alt: "BigCommerce to Shopify migration by Ecomm Wizards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BigCommerce to Shopify Migration Agency | Zero Downtime",
    description: META_DESCRIPTION,
    images: ["/images/bigcommerce-hero-bg.png"],
  },
};

const TEST_DRIVE_URL = "/free-shopify-store-audit";
const CALL_URL = "/book-shopify-consultation";

const GRADIENT_TEXT = {
  background: "var(--brand-gradient)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const MIGRATION_CASE_CARDS = [
  {
    quote: "Working with EW was a truly top-notch experience. From start to finish, they made sure everything ran smoothly and professionally",
    logo: "/images/Frame_1000007615.webp",
    logoAlt: "EBY",
  },
  {
    quote: "Ecomm Wizards has done a great job of creating exactly what we visioned while constantly refining and improving every detail.",
    logo: "/images/cashmere-sale-logo.avif",
    logoAlt: "The Cashmere Sale",
  },
  {
    quote: "Their immense knowledge of Shopify Plus and exceptional communication skills made Ecomm Wizards a fantastic partner.",
    logo: "/images/Frame_1000007615-2.avif",
    logoAlt: "BARK",
  },
];

const MIGRATION_SLIDES: CaseStudySlide[] = [
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A dynamically personalized <strong>Shopify Store</strong> developed &amp; maintained for <strong>Bark</strong></>),
    quote: (<>&ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong> made Ecomm Wizards a fantastic partner.&rdquo;</>),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
  {
    key: "eby",
    image: "/images/Frame_1000004320.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>An elegant <strong>Shopify Store</strong> designed and built for EBY by <strong>Sofia Vergara</strong></>),
    quote: (<>&ldquo;Working with EW was a truly <strong>top-notch experience</strong>. From start to finish, they made sure everything ran smoothly and professionally. We couldn&rsquo;t be happier!&rdquo;</>),
    avatar: "/images/eby_dce31a54-eb36-409c-a8d7-e22fd8297de3_medium.webp",
    name: "EBY by Sofia Vergara",
    role: "Marketing Manager",
  },
  {
    key: "harvard",
    image: "/images/all-case-study-harvard.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A sophisticated <strong>Shopify Store</strong> designed and built for a <strong>Harvard University</strong></>),
    quote: (<>&ldquo;Our experience with EW was excellent, characterized by an <strong>efficient workflow</strong> and <strong>professional execution</strong>; we couldn&rsquo;t be more delighted&rdquo;</>),
    avatar: "/images/harvardperson_medium.webp",
    name: "Daniyal S.",
    role: "Harvard University",
  },
];

const AWARDS_ROW_1 = [
  { src: "/images/best-designrush.webp", alt: "DesignRush Best Website Design 2022", caption: "Best Website Design 2022" },
  { src: "/images/expertise_f69c262b-9692-4d07-9d0d-92f9b1dbf894-1.webp", alt: "Expertise.com Best Web Developers in New York 2022", caption: "Best Web Developers in New York 2022" },
  { src: "/images/clutch-1.webp", alt: "Clutch Top Web Developers 2020", caption: "Top Web Developers 2020" },
  { src: "/images/goodfirms.webp", alt: "GoodFirms Top Web Developers 2024", caption: "Top Web Developers 2024" },
  { src: "/images/shopify_expert.webp", alt: "Shopify Expert", caption: "Enterprise Shopify Plus" },
];

const AWARDS_ROW_2 = [
  { src: "/images/top-digital-new.webp", alt: "Top Digital Agency Best Development 2021", caption: "Best Development 2021" },
  { src: "/images/best-agencies-1.webp", alt: "Best Shopify Agencies 2024", caption: "Top Digital Agency 2024" },
  { src: "/images/upcity.webp", alt: "Upcity Best Shopify Agency", caption: "Best Shopify Agency" },
  { src: "/images/best-support-1.webp", alt: "G2 Best Support 2021", caption: "Best Support 2021" },
];

const INNOVATIVE_ROWS = [
  {
    direction: "left" as const,
    duration: 40,
    logos: [
      { src: "/images/trust_logo_7.svg", alt: "Sofia Vergara" },
      { src: "/images/trust_logo_6.svg", alt: "Bark Box" },
      { src: "/images/trust_logo_hover_3.svg", alt: "Harvard" },
      { src: "/images/trust_logo_hover_2.svg", alt: "Smurfs" },
      { src: "/images/trust_logo_hover_1.svg", alt: "Peanuts" },
      { src: "/images/trust_logo_2.svg", alt: "Trust" },
      { src: "/images/trust_logo_new_1.svg", alt: "Trust" },
    ],
  },
  {
    direction: "right" as const,
    duration: 42,
    logos: [
      { src: "/images/ipsy-logo.svg", alt: "Ipsy" },
      { src: "/images/everlast-icon.svg", alt: "Everlast" },
      { src: "/images/trust_logo_hover_10.svg", alt: "SarahChloe" },
      { src: "/images/trust_logo_32.svg", alt: "Forme" },
      { src: "/images/trust_logo_31.svg", alt: "Oshen" },
      { src: "/images/trust_logo_20.svg", alt: "Olaplex" },
    ],
  },
  {
    direction: "left" as const,
    duration: 44,
    logos: [
      { src: "/images/trust_logo_27.svg", alt: "Lucky" },
      { src: "/images/trust_logo_26.svg", alt: "Ulta" },
      { src: "/images/trust_logo_hover_14.svg", alt: "Blippi" },
      { src: "/images/trust_logo_hover_13.svg", alt: "Sesame Street" },
      { src: "/images/trust_logo_hover_12.svg", alt: "Lids" },
      { src: "/images/trust_logo_hover_11.svg", alt: "Cellar" },
    ],
  },
  {
    direction: "right" as const,
    duration: 46,
    logos: [
      { src: "/images/bottle-barn-final.webp", alt: "Bottle Barn" },
      { src: "/images/ebbets-fields-final-1.webp", alt: "Ebbets Fields" },
      { src: "/images/Group_38643.svg", alt: "Group" },
      { src: "/images/biopure.svg", alt: "BioPure" },
      { src: "/images/kaval-new.webp", alt: "Kaval" },
      { src: "/images/chalet.svg", alt: "Chalet" },
      { src: "/images/ebbets-fields-final.webp", alt: "Ebbets Fields" },
    ],
  },
];

const REVIEW_BADGES = [
  { src: "/images/trustpilot.svg", alt: "Trustpilot Reviews" },
  { src: "/images/clutch.svg", alt: "Clutch Reviews" },
  { src: "/images/shopify platinum partner logo.svg", alt: "Shopify Platinum Partner" },
  { src: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-1.svg", alt: "Shopify" },
  { src: "/images/review.svg", alt: "Shopify Reviews" },
];

const WHY_WORK_ITEMS = [
  "Transparent Communication",
  "Zero Cutting Corners",
  "World-Class Support",
  "Revenue-Driven Approach",
  "Proven Track Record",
  "Growth-Obsessed Team",
  "100% Client Satisfaction",
];

const MIGRATED_LOGOS = [
  { src: "/images/ipsy-logo.svg", alt: "IPSY" },
  { src: "/images/trust_logo_2.svg", alt: "Peanuts" },
  { src: "/images/Olaplex-logo-new.avif", alt: "Olaplex" },
  { src: "/images/trust_logo_27.svg", alt: "Forme" },
  { src: "/images/trust_logo_hover_10.svg", alt: "SarahChloe" },
  { src: "/images/trust_logo_hover_11.svg", alt: "Cellar.com" },
];

const IconWreath = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 14c-6 4-10 12-10 22 0 8 4 14 10 18" />
    <path d="M44 14c6 4 10 12 10 22 0 8-4 14-10 18" />
    <path d="M14 22c2 0 4 2 4 4M14 30c2 0 4 2 4 4M14 38c2 0 4 2 4 4" />
    <path d="M50 22c-2 0-4 2-4 4M50 30c-2 0-4 2-4 4M50 38c-2 0-4 2-4 4" />
    <path d="M32 22l2.4 5 5.6.8-4 4 1 5.6-5-2.6-5 2.6 1-5.6-4-4 5.6-.8z" />
  </svg>
);
const IconSync = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M50 22A20 20 0 0 0 14 32" />
    <path d="M14 42a20 20 0 0 0 36-10" />
    <path d="M50 14v8h-8" />
    <path d="M14 50v-8h8" />
  </svg>
);
const IconChecklist = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="12" y="14" width="6" height="6" rx="1" />
    <rect x="12" y="29" width="6" height="6" rx="1" />
    <rect x="12" y="44" width="6" height="6" rx="1" />
    <path d="M26 17h22M26 32h22M26 47h22" />
  </svg>
);

const MIGRATE_CARDS = [
  {
    Icon: IconWreath,
    title: "Why Migrate to Shopify Plus?",
    body:
      "Shopify Plus simplifies the online business experience, letting merchants manage inventory, process payments, and customize design in one elegant platform. Expand with thousands of native apps and plugins, and walk away from the clunkiness of BigCommerce for good.",
  },
  {
    Icon: IconSync,
    title: "Why Choose Us as Your Shopify Partner?",
    body:
      "As one of the top agencies for BigCommerce to Shopify Plus migration and among the best vendors for migrating to Shopify from BigCommerce, we bring the senior expertise needed to move from a clunky BigCommerce store to the streamlined simplicity of Shopify Plus.",
  },
  {
    Icon: IconChecklist,
    title: "What Challenges Should You Expect?",
    body:
      "Migrating from BigCommerce always carries risk: SEO losses, broken redirects, mismatched orders. With our guidance and the best practices for migrating ecommerce store to Shopify Plus, every redirect, every record, and every line of metadata is protected from kickoff to go-live, so nothing breaks and nothing leaks.",
  },
];

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

const FAQS = [
  {
    q: "Will I lose my SEO rankings migrating from BigCommerce to Shopify?",
    a: "No. We protect your SEO by mapping every BigCommerce URL, setting up 301 redirects, and carrying over metadata, structured data, and content. Google sees a clean handoff, so your rankings and traffic stay intact.",
  },
  {
    q: "How long does a BigCommerce to Shopify migration take?",
    a: "Most BigCommerce migrations run two to six weeks depending on catalog size, custom features, and integrations. We scope the exact timeline on your discovery call and give you a clear plan before any work begins.",
  },
  {
    q: "Will my BigCommerce store go down during the migration?",
    a: "No. We build and test your new Shopify store in parallel while your BigCommerce store keeps selling. We only point the domain over once everything is verified, so your customers never see downtime.",
  },
  {
    q: "What data transfers from BigCommerce to Shopify?",
    a: "Products, variants, customers, full order history, content, blogs, reviews, and SEO assets. Anything that lives in your BigCommerce store gets mapped to Shopify so nothing breaks and nothing duplicates.",
  },
  {
    q: "How much does a BigCommerce to Shopify migration cost?",
    a: "Cost depends on your catalog size, custom functionality, and the integrations you need rebuilt. We give fixed-price quotes with no hourly surprises. Book a call and we will send a detailed breakdown.",
  },
  {
    q: "What happens to my BigCommerce apps and integrations?",
    a: "We audit every integration you rely on, from ERP and 3PL to email, POS, and reviews, then rebuild or replace each one on Shopify so your operations keep running the day you go live.",
  },
  {
    q: "Do you migrate to Shopify or Shopify Plus?",
    a: "Both. We help you choose the right plan for your volume, then handle the full build. If you are scaling past BigCommerce Enterprise, our Shopify Plus migration experts set you up for high-traffic sales and B2B from day one.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Migration", item: "https://ecommwizards.com/services/migration" },
    { "@type": "ListItem", position: 4, name: "BigCommerce to Shopify", item: "https://ecommwizards.com/services/migration/bigcommerce-to-shopify" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      {/* 1 — Hero */}
      <section className="b2s-hero">
        <div className="b2s-hero-inner">
          <div className="b2s-hero-copy">
            <h1 className="b2s-hero-h1">
              <span style={GRADIENT_TEXT}>BigCommerce to Shopify</span> Plus Migration, Done Without Downtime
            </h1>
            <p className="b2s-hero-lead">
              Done patching, paying, and praying your way around BigCommerce? Ecomm Wizards is one
              of the best vendors for migrating to Shopify from BigCommerce. We lift your
              products, customers, orders, and SEO equity onto Shopify Plus without losing a single
              day of revenue.
            </p>
            <div className="b2s-hero-ctas">
              <Link href={TEST_DRIVE_URL} className="b2s-cta-outline">
                <span>Get a Free Shopify Test Drive</span>
                <Arrow />
              </Link>
              <Link href={CALL_URL} className="b2s-hero-text-link">
                <span>Book a Migration Call</span>
                <Arrow />
              </Link>
            </div>
            <p className="b2s-hero-trust">
              <strong>Shopify:</strong> named a Leader with proven track record in B2C
            </p>
          </div>

          <div className="b2s-hero-visual-stack">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bigcommerce-hero-bg.png"
              alt="BigCommerce to Shopify migration: Shopify admin and storefront after the move"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 2 — Why Shopify? For Seasoned Brands that are Switching */}
      <section className="b2s-why">
        <div className="b2s-why-inner">
          <p className="b2s-why-eyebrow">Why Shopify Plus?</p>
          <h2 className="b2s-why-h2">
            For Seasoned Brands Outgrowing BigCommerce
          </h2>

          <div className="b2s-why-grid">
            <div className="b2s-why-copy">
              <h3 className="b2s-why-pillar">Higher Revenue, Lower Risk</h3>
              <p className="b2s-why-lead">
                Shopify&rsquo;s checkout converts 12% better than BigCommerce&rsquo;s, and
                when you follow the best practices for migrating ecommerce store to Shopify Plus,
                those gains stack across every channel from day one.
              </p>

              <ul className="b2s-why-list">
                <li className="b2s-why-item">
                  <h4 className="b2s-why-title">Higher Conversion</h4>
                  <p className="b2s-why-body">
                    Shopify Plus checkout converts 12% better than BigCommerce, paired with Shop
                    Pay, the best-converting accelerated checkout on the internet. With more
                    than 150 million users already signed up, brands convert first-time visitors
                    into customers, and Shop Pay can boost conversion up to 50% over guest
                    checkout.
                  </p>
                </li>
                <li className="b2s-why-item">
                  <h4 className="b2s-why-title">Native Growth Tools</h4>
                  <p className="b2s-why-body">
                    Shop Pay, Shop App, Shop Instalments, and Audiences, native growth tools
                    designed to help merchants increase sales and revenue, available only on
                    Shopify Plus and a key reason brands hire a top agency for BigCommerce to
                    Shopify Plus migration to make the switch quickly.
                  </p>
                </li>
                <li className="b2s-why-item">
                  <h4 className="b2s-why-title">Unified Selling</h4>
                  <p className="b2s-why-body">
                    Unified selling across every sales channel: online, offline POS, and
                    B2B, in one platform. BigCommerce relies on apps or third-party tools
                    for POS and B2B, which fragments the user experience and quietly erodes margin
                    every quarter you stay on the platform.
                  </p>
                </li>
              </ul>
            </div>

            <div className="b2s-why-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bigcommerce-why-shopify-lull.webp"
                alt="Lull Shopify storefront with conversion-rate testimonial from Mark Nagelmann"
                width={951}
                height={1024}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Hundreds of brands have migrated from BigCommerce */}
      <section className="b2s-migrated">
        <div className="b2s-migrated-inner">
          <h2 className="b2s-migrated-h2">
            <span style={GRADIENT_TEXT}>Hundreds</span> of brands have migrated from BigCommerce to
            Shopify
          </h2>

          <div className="b2s-migrated-marquee">
            <div className="b2s-migrated-track b2s-migrated-track--ltr">
              {[...MIGRATED_LOGOS, ...MIGRATED_LOGOS].map((logo, i) => (
                <div key={`r1-${i}`} className="b2s-migrated-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="b2s-migrated-marquee">
            <div className="b2s-migrated-track b2s-migrated-track--rtl">
              {[...MIGRATED_LOGOS, ...MIGRATED_LOGOS].slice().reverse().map((logo, i) => (
                <div key={`r2-${i}`} className="b2s-migrated-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 + 5 — Why Shopify's Different / Site Speed + TCO panels */}
      <section className="b2s-innov">
        <div className="b2s-innov-inner">
          <div className="b2s-innov-top">
            <div className="b2s-innov-copy">
              <h2 className="b2s-innov-h2">Why Shopify Plus Wins on Innovation</h2>
              <p className="b2s-innov-sub">
                Shopify ships features faster than BigCommerce or any other commerce platform.
                That is the reason every top agency for BigCommerce to Shopify Plus migration ends
                up recommending it for long-term growth.
              </p>
              <div className="b2s-innov-ctas">
                <Link href={CALL_URL} className="b2s-cta-solid">
                  <span>Get a Demo</span>
                  <Arrow />
                </Link>
                <Link href={CALL_URL} className="b2s-cta-textlink">
                  <span>Schedule a Call</span>
                  <Arrow />
                </Link>
              </div>
            </div>
            <div className="b2s-innov-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bigcommerce-innovation-chart.png"
                alt="Commitment to innovation comparison: Shopify vs Salesforce, Adobe, BigCommerce"
                width={1024}
                height={752}
                loading="lazy"
              />
            </div>
          </div>

          <div className="b2s-innov-cards">
            <div className="b2s-innov-card">
              <h3 className="b2s-innov-card-h3">
                Shopify Plus Site Speed is <strong>1.4x faster than BigCommerce</strong>
              </h3>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bigcommerce-site-speed.webp"
                alt="Shopify site speed compared to BigCommerce, Salesforce, Adobe, and WooCommerce"
                width={1024}
                height={672}
                loading="lazy"
              />
            </div>
            <div className="b2s-innov-card">
              <h3 className="b2s-innov-card-h3">
                Shopify Plus TCO is <strong>31% better than BigCommerce</strong>
              </h3>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bigcommerce-tco.webp"
                alt="Total cost of ownership comparison: Shopify vs BigCommerce over 5 years"
                width={1024}
                height={672}
                loading="lazy"
              />
              <p className="b2s-innov-foot">
                *Average TCO savings according to research commissioned by Shopify from a leading
                independent consulting firm to study TCO across major platforms in North America
                and understand Shopify&rsquo;s relative positioning based on objective research
                methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Site Speed Comparison */}
      <section className="b2s-speed">
        <div className="b2s-speed-inner">
          <h2 className="b2s-speed-h2">
            Site Speed <strong>Comparison</strong>
          </h2>
          <div className="b2s-speed-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bigcommerce-site-speed-comparison.webp"
              alt="Site speed comparison table showing Shopify merchants with server and site load times"
              width={1024}
              height={672}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 7 — Conversion Comparison */}
      <section className="b2s-conv">
        <div className="b2s-conv-inner">
          <h2 className="b2s-conv-h2">
            Shopify converts up to <strong>36% better<br />than the competition</strong>
          </h2>

          <div className="b2s-conv-grid">
            <div className="b2s-conv-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bigcommerce-conversion-chart.webp"
                alt="Conversion rate comparison: Shopify vs Salesforce Commerce Cloud, Adobe Commerce, WooCommerce, and BigCommerce"
                width={1024}
                height={672}
                loading="lazy"
              />
            </div>
            <div className="b2s-conv-copy">
              <p className="b2s-conv-lede">
                On <strong>&ldquo;like-to-like&rdquo;</strong> samples, Shopify outperforms peers
                by up to <strong>36%, and by 15.2% on average</strong>, the uplift you can
                expect when you follow the best practices for migrating ecommerce store to Shopify
                Plus.
              </p>
              <p className="b2s-conv-body">
                Except for Shopify, all conversion numbers represent averages by store level from
                the data provided by the external vendor
              </p>
              <p className="b2s-conv-body">
                Shopify data was used to sample like-to-like stores matching characteristics of the
                stores in each platform for a fair comparison. 2.38 is the average conversion
                across those 4 samples of stores.
              </p>
              <p className="b2s-conv-body">
                Source: Internal Shopify and external other platform data. Analysis conducted by a
                leading global management consulting company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Migration Ratio + Market Share */}
      <section className="b2s-mratio">
        <div className="b2s-mratio-inner">
          <div className="b2s-mratio-grid">
            <div className="b2s-mratio-card">
              <h3 className="b2s-mratio-h3">Migration Ratio: ~6 to 1</h3>
              <p className="b2s-mratio-sub">
                Migrations in top <strong>1,000,000 ranked</strong> sites between Jan 1, 2023
                to August 9, 2024
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bigcommerce-migration-ratio.png"
                alt="Migration ratio: 768 BigCommerce-to-Shopify versus 136 Shopify-to-BigCommerce"
                width={1024}
                height={780}
                loading="lazy"
              />
            </div>
            <div className="b2s-mratio-card">
              <h3 className="b2s-mratio-h3">Market Share</h3>
              <p className="b2s-mratio-sub">
                Top In eCommerce Usage Distribution in the Top <strong>100k Sites</strong>
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bigcommerce-market-share.png"
                alt="Market share pie chart: Shopify 25%, BigCommerce 1% of the top 100k sites"
                width={1024}
                height={820}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9 — BigCommerce vs Shopify stat table */}
      <section className="b2s-stats">
        <div className="b2s-stats-inner">
          <div className="b2s-stats-card">
            <div className="b2s-stats-headrow">
              <div className="b2s-stats-headcell" />
              <div className="b2s-stats-headcell"><span>BigCommerce</span></div>
              <div className="b2s-stats-headcell"><span>Shopify</span></div>
            </div>

            <div className="b2s-stats-row">
              <div className="b2s-stats-aside">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bigcommerce-gartner.svg" alt="Gartner" className="b2s-stats-gartner" loading="lazy" />
                <p className="b2s-stats-aside-cap">
                  Shopify is rated highest on ability to execute digital commerce
                </p>
              </div>
              <div className="b2s-stats-cell">
                <p className="b2s-stats-num b2s-stats-num--bc">~41,000</p>
                <p className="b2s-stats-lbl">Brands use BigCommerce</p>
                <p className="b2s-stats-num b2s-stats-num--bc">~1300</p>
                <p className="b2s-stats-lbl">Available apps on BigCommerce</p>
              </div>
              <div className="b2s-stats-cell">
                <p className="b2s-stats-num b2s-stats-num--sh">~4,000,000+</p>
                <p className="b2s-stats-lbl">Brands use Shopify</p>
                <p className="b2s-stats-num b2s-stats-num--sh">~10,000</p>
                <p className="b2s-stats-lbl">Available apps in the Shopify ecosystem</p>
              </div>
            </div>

            <div className="b2s-stats-row">
              <div className="b2s-stats-aside">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bigcommerce-shopify-logo.svg" alt="Shopify" className="b2s-stats-shopify" loading="lazy" />
                <p className="b2s-stats-num b2s-stats-num--sh b2s-stats-cap-num">$85B</p>
                <p className="b2s-stats-aside-cap">Shopify Market Cap</p>
              </div>
              <div className="b2s-stats-cell">
                <p className="b2s-stats-num b2s-stats-num--bc">$84M</p>
                <p className="b2s-stats-lbl">In R&amp;D spend in 2023 at BigCommerce</p>
                <p className="b2s-stats-num b2s-stats-num--bc">260</p>
                <p className="b2s-stats-lbl">Developers at BigCommerce of~1300 total employees</p>
              </div>
              <div className="b2s-stats-cell">
                <p className="b2s-stats-num b2s-stats-num--sh">$1.7B</p>
                <p className="b2s-stats-lbl">In R&amp;D spend in 2023 at Shopify</p>
                <p className="b2s-stats-num b2s-stats-num--sh">4,500+</p>
                <p className="b2s-stats-lbl">Engineers focused on commerce* at Shopify</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — How to Migrate from BigCommerce to Shopify */}
      <section className="b2s-howto">
        <div className="b2s-howto-inner">
          <h2 className="b2s-howto-h2">
            At Ecomm Wizards, we treat every BigCommerce migration like the high-stakes project it
            is. That is exactly why we are ranked among the best agencies for BigCommerce
            to Shopify migration 2026.
          </h2>
          <p className="b2s-howto-lead">
            We follow the best practices for migrating ecommerce store to Shopify Plus on every
            project, mapping your BigCommerce customer, sales, and product data with the
            precision of a top agency for BigCommerce to Shopify Plus migration so you stay focused
            on running the business while we handle the platform switch.
          </p>
          <h3 className="b2s-howto-sub">How to Migrate from BigCommerce to Shopify</h3>

          <ul className="b2s-howto-grid">
            {MIGRATE_CARDS.map(({ Icon, title, body }) => (
              <li key={title} className="b2s-howto-card">
                <div className="b2s-howto-icon" aria-hidden><Icon /></div>
                <h4 className="b2s-howto-card-title">{title}</h4>
                <p className="b2s-howto-card-body">{body}</p>
              </li>
            ))}
          </ul>

          <div className="b2s-howto-cta-wrap">
            <Link href={TEST_DRIVE_URL} className="b2s-cta-solid">
              <span>Get a Migration Test Drive</span>
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* 11 — Migration Case Studies */}
      <section className="ssd-results-section" style={{ background: "#FFFFFF", color: "#334155", fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}>
        <div className="ssd-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="ssd-results-heading">Migration Case Studies</h2>
          <div className="ssd-results-cards">
            {MIGRATION_CASE_CARDS.map((c) => (
              <div key={c.logoAlt} className="ssd-results-card">
                <p className="ssd-results-card-quote">{c.quote}</p>
                <div className="ssd-results-card-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.logo} alt={c.logoAlt} />
                </div>
              </div>
            ))}
          </div>
          <CaseStudySlider slides={MIGRATION_SLIDES} intervalMs={6000} />
        </div>
      </section>

      {/* 13 — Why Work with Ecomm Wizards (marquee) */}
      <section className="mig-whywork" aria-label="Why Work with Ecomm Wizards">
        <div className="mig-whywork-inner">
          <h2 className="mig-whywork-heading">Why Work with <br className="mig-whywork-br" />Ecomm Wizards</h2>
          <div className="mig-whywork-marquee">
            <ul className="mig-whywork-track">
              {[...WHY_WORK_ITEMS, ...WHY_WORK_ITEMS].map((item, i) => (
                <li key={`${item}-${i}`} className="mig-whywork-item" aria-hidden={i >= WHY_WORK_ITEMS.length ? true : undefined}>
                  <span className="mig-whywork-text">{item}</span>
                  <span className="mig-whywork-dot" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 14 — Awards & Recognition */}
      <section className="b2s-awards" aria-label="Awards and recognition">
        <div className="b2s-awards-inner">
          <div className="b2s-awards-card b2s-awards-card--5">
            {AWARDS_ROW_1.map((a) => (
              <div key={a.caption} className="b2s-awards-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.src} alt={a.alt} loading="lazy" />
                <p>{a.caption}</p>
              </div>
            ))}
          </div>
          <div className="b2s-awards-card b2s-awards-card--4">
            {AWARDS_ROW_2.map((a) => (
              <div key={a.caption} className="b2s-awards-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.src} alt={a.alt} loading="lazy" />
                <p>{a.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15 — Trusted by the Worlds Most Innovative Brands */}
      <section className="mig-innov">
        <div className="mig-innov-inner">
          <h2 className="mig-innov-h2">
            Trusted by the World&rsquo;s<br />Top Brands on Shopify Plus
          </h2>
          {INNOVATIVE_ROWS.map((row, rowIdx) => (
            <div className="mig-innov-row" key={rowIdx}>
              <ul
                className={`mig-innov-track ${row.direction === "right" ? "mig-innov-track--reverse" : ""}`}
                style={{ animationDuration: `${row.duration}s` }}
              >
                {[...row.logos, ...row.logos].map((logo, i) => (
                  <li key={`${logo.src}-${i}`} className="mig-innov-slide">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.alt} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="b2s-faq">
        <div className="b2s-faq-inner">
          <h2 className="b2s-faq-h2">BigCommerce to Shopify Migration FAQs</h2>
          <div className="b2s-faq-acc">
            {FAQS.map((_, i) => (
              <input key={i} className="b2s-faq-rad" type="radio" id={`b2s-faq-${i}`} name="b2s-faq-acc" defaultChecked={i === 0} />
            ))}
            <div className="b2s-faq-list">
              {FAQS.map((f, i) => (
                <div key={i} className="b2s-faq-item" data-faq={`b2s-faq-${i}`}>
                  <label htmlFor={`b2s-faq-${i}`} className="b2s-faq-head">
                    <span className="b2s-faq-q">{f.q}</span>
                    <span className="b2s-faq-ico" aria-hidden>
                      <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.6 8.5c-.6-.6-1.5-.6-2.2-.1L16 21.2 2.6 8.4c-.6-.6-1.6-.5-2.2.1-.6.6-.5 1.6.1 2.2l14.5 13.7c.3.3.7.4 1 .4s.8-.1 1-.4l14.5-13.7c.6-.6.7-1.6.1-2.2z" /></svg>
                    </span>
                  </label>
                  <div className="b2s-faq-bodyc"><div className="b2s-faq-in"><p>{f.a}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 16 — Final CTA pair */}
      <section className="b2s-finalcta" aria-label="Get started">
        <div className="b2s-finalcta-inner">
          <Link href={CALL_URL} className="b2s-cta-outline-light">
            <span>Get a Demo</span>
            <Arrow />
          </Link>
          <Link href={TEST_DRIVE_URL} className="b2s-cta-solid">
            <span>Get a Migration Test Drive</span>
            <Arrow />
          </Link>
        </div>
      </section>

      {/* 17 — Review badges (static row) */}
      <section className="b2s-badges" aria-label="Review and partner badges">
        <ul className="b2s-badges-row">
          {REVIEW_BADGES.map((b) => (
            <li key={b.src} className="b2s-badges-slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.src} alt={b.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1 — Hero */
        .b2s-hero {
          position: relative;
          background-color: #000000;
          background-image: url("/images/bigcommerce-hero-bg.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          min-height: 540px;
          padding: 60px 20px;
          display: flex;
          align-items: center;
        }
        .b2s-hero-inner { width: 100%; max-width: 1320px; margin: 0 auto; }
        .b2s-hero-copy { color: #FFFFFF; max-width: 620px; }
        .b2s-hero-h1 {
          color: #FFFFFF;
          font-size: 44px;
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.4px;
          margin: 0 0 22px;
        }
        .b2s-hero-lead {
          color: #FFFFFF;
          font-size: 16px;
          line-height: 1.75;
          margin: 0 0 24px;
        }
        .b2s-hero-ctas { display: flex; align-items: center; gap: 28px; flex-wrap: wrap; margin-bottom: 30px; }

        .b2s-cta-outline,
        .b2s-cta-outline:link,
        .b2s-cta-outline:visited,
        .b2s-cta-outline:focus,
        .b2s-cta-outline:active {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          border-radius: 999px;
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          position: relative;
          border: 2px solid transparent;
          background-image: linear-gradient(#000, #000), var(--brand-gradient);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          transition: background-image .25s ease, color .25s ease, transform .2s ease;
        }
        .b2s-cta-outline:hover {
          color: #000000;
          background-image: linear-gradient(#FFFFFF, #FFFFFF), var(--brand-gradient);
          transform: translateY(-1px);
        }

        .b2s-hero-text-link,
        .b2s-hero-text-link:link,
        .b2s-hero-text-link:visited,
        .b2s-hero-text-link:hover,
        .b2s-hero-text-link:focus,
        .b2s-hero-text-link:active {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
        }
        .b2s-hero-text-link span { border-bottom: 1px solid #FFFFFF; padding-bottom: 2px; transition: border-color .2s ease; }
        .b2s-hero-text-link:hover span { border-bottom-color: #4FB872; }

        .b2s-hero-trust { color: #FFFFFF; font-size: 14px; font-weight: 400; line-height: 1.55; margin: 0; }
        .b2s-hero-trust strong { font-weight: 700; }

        .b2s-hero-visual-stack { display: none; }

        /* ── Laptop (1024) ── */
        @media (max-width: 1024px) {
          .b2s-hero-h1 { font-size: 40px; }
          .b2s-hero-copy { max-width: 480px; }
        }

        /* ── Tablet ── */
        @media (max-width: 1023px) {
          .b2s-hero {
            min-height: 0;
            padding: 56px 28px 56px;
            background-image: none;
          }
          .b2s-hero-copy { max-width: none; }
          .b2s-hero-h1 { font-size: 34px; letter-spacing: -0.3px; }
          .b2s-hero-lead { font-size: 15px; }
          .b2s-hero-visual-stack { display: block; margin: 36px auto 0; width: 100%; max-width: 680px; aspect-ratio: 1.6; overflow: hidden; }
          .b2s-hero-visual-stack img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
        }

        /* ── Mobile ── */
        @media (max-width: 639px) {
          .b2s-hero { padding: 44px 15px 44px; }
          .b2s-hero-h1 { font-size: 26px; line-height: 1.2; margin-bottom: 14px; letter-spacing: -0.2px; }
          .b2s-hero-lead { font-size: 14px; line-height: 1.65; margin-bottom: 14px; }
          .b2s-hero-ctas { gap: 18px; margin-bottom: 14px; }
          .b2s-cta-outline { width: 100%; justify-content: center; padding: 14px 20px; font-size: 14px; }
          .b2s-hero-text-link { font-size: 14px; }
          .b2s-hero-trust { font-size: 13px; }
          .b2s-hero-visual-stack { margin: 28px auto 0; max-width: 100%; }
        }

        /* 2 — Why Shopify? */
        .b2s-why { background: #FFFFFF; padding: 60px 40px; }
        .b2s-why-inner { max-width: 1320px; margin: 0 auto; }
        .b2s-why-eyebrow { text-align: center; color: #111111; font-size: 20px; font-weight: 500; line-height: 1.3; margin: 0 0 14px; }
        .b2s-why-h2 { text-align: center; color: #111111; font-size: 48px; font-weight: 700; line-height: 1.15; letter-spacing: -0.4px; margin: 0 0 30px; }
        .b2s-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }

        .b2s-why-pillar { color: #111111; font-size: 38px; font-weight: 700; line-height: 1.2; letter-spacing: -0.3px; margin: 0 0 18px; }
        .b2s-why-lead { color: #334155; font-size: 15px; line-height: 1.7; margin: 0 0 24px; max-width: 520px; }

        .b2s-why-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 26px; }
        .b2s-why-item { border-left: 3px solid #111111; padding: 4px 0 4px 22px; }
        .b2s-why-title { color: #111111; font-size: 18px; font-weight: 700; line-height: 1.35; margin: 0 0 10px; }
        .b2s-why-body { color: #334155; font-size: 15px; line-height: 1.7; margin: 0; }

        .b2s-why-visual { display: flex; justify-content: center; align-items: center; }
        .b2s-why-visual img { width: 100%; height: auto; max-width: 620px; display: block; }

        /* ── Laptop (1024) ── */
        @media (max-width: 1024px) {
          .b2s-why-h2 { font-size: 42px; margin-bottom: 24px; }
          .b2s-why-pillar { font-size: 32px; }
          .b2s-why-lead { font-size: 14px; margin-bottom: 18px; }
        }

        @media (max-width: 1023px) {
          .b2s-why { padding: 64px 24px; }
          .b2s-why-h2 { font-size: 32px; margin-bottom: 40px; }
          .b2s-why-grid { grid-template-columns: 1fr; gap: 48px; }
          .b2s-why-pillar { font-size: 28px; }
          .b2s-why-visual img { max-width: 540px; margin: 0 auto; }
        }
        @media (max-width: 639px) {
          .b2s-why { padding: 44px 15px; }
          .b2s-why-eyebrow { font-size: 16px; margin-bottom: 10px; }
          .b2s-why-h2 { font-size: 24px; line-height: 1.2; margin-bottom: 28px; letter-spacing: -0.2px; }
          .b2s-why-pillar { font-size: 22px; margin-bottom: 12px; }
          .b2s-why-lead { font-size: 13.5px; line-height: 1.65; margin-bottom: 24px; }
          .b2s-why-list { gap: 18px; }
          .b2s-why-item { padding: 2px 0 2px 16px; border-left-width: 2px; }
          .b2s-why-title { font-size: 15px; margin-bottom: 6px; }
          .b2s-why-body { font-size: 13px; line-height: 1.65; }
          .b2s-why-visual img { max-width: 100%; }
        }

        /* 3 — Hundreds of brands migrated */
        .b2s-migrated { background: #F0F5FA; padding: 60px 40px; }
        .b2s-migrated-inner { max-width: 1320px; margin: 0 auto; }
        .b2s-migrated-h2 { text-align: center; color: #111111; font-size: 30px; font-weight: 600; line-height: 1.3; margin: 0 0 56px; }

        .b2s-migrated-marquee { width: 100%; overflow: hidden; padding: 14px 0; }
        .b2s-migrated-track { display: flex; width: max-content; gap: 36px; align-items: center; will-change: transform; }
        .b2s-migrated-track--ltr { animation: b2s-migrated-scroll-ltr 35s linear infinite; }
        .b2s-migrated-track--rtl { animation: b2s-migrated-scroll-rtl 35s linear infinite; }
        .b2s-migrated-marquee:hover .b2s-migrated-track { animation-play-state: paused; }
        @keyframes b2s-migrated-scroll-ltr { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 18px)); } }
        @keyframes b2s-migrated-scroll-rtl { from { transform: translateX(calc(-50% - 18px)); } to { transform: translateX(0); } }
        @media (prefers-reduced-motion: reduce) { .b2s-migrated-track { animation: none; } }

        .b2s-migrated-card { flex: 0 0 auto; width: 200px; height: 96px; background: #FFFFFF; border-radius: 4px; box-shadow: 0 1px 3px rgba(15,23,42,0.04); display: flex; align-items: center; justify-content: center; padding: 18px 26px; }
        .b2s-migrated-card img { max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; display: block; }

        @media (max-width: 1023px) {
          .b2s-migrated { padding: 60px 24px; }
          .b2s-migrated-h2 { font-size: 24px; margin-bottom: 36px; }
          .b2s-migrated-card { width: 170px; height: 84px; padding: 14px 22px; }
          .b2s-migrated-track { gap: 24px; }
          @keyframes b2s-migrated-scroll-ltr { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 12px)); } }
          @keyframes b2s-migrated-scroll-rtl { from { transform: translateX(calc(-50% - 12px)); } to { transform: translateX(0); } }
        }
        @media (max-width: 639px) {
          .b2s-migrated { padding: 44px 15px; }
          .b2s-migrated-h2 { font-size: 18px; line-height: 1.3; margin-bottom: 28px; }
          .b2s-migrated-card { width: 130px; height: 64px; padding: 10px 16px; border-radius: 3px; }
          .b2s-migrated-track { gap: 16px; }
          @keyframes b2s-migrated-scroll-ltr { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 8px)); } }
          @keyframes b2s-migrated-scroll-rtl { from { transform: translateX(calc(-50% - 8px)); } to { transform: translateX(0); } }
        }

        /* 4 + 5 — Why Shopify's Different / Site Speed + TCO */
        .b2s-innov { background: #FFFFFF; padding: 60px 40px; }
        .b2s-innov-inner { max-width: 1320px; margin: 0 auto; }
        .b2s-innov-top { display: grid; grid-template-columns: 1fr 1.05fr; gap: 80px; align-items: center; margin-bottom: 60px; }
        .b2s-innov-h2 { color: #111111; font-size: 42px; font-weight: 700; line-height: 1.18; letter-spacing: -0.4px; margin: 0 0 22px; }
        .b2s-innov-sub { color: #111111; font-size: 22px; font-weight: 500; line-height: 1.4; margin: 0 0 36px; max-width: 460px; }
        .b2s-innov-ctas { display: flex; align-items: center; gap: 28px; flex-wrap: wrap; }

        .b2s-cta-solid,
        .b2s-cta-solid:link,
        .b2s-cta-solid:visited,
        .b2s-cta-solid:focus,
        .b2s-cta-solid:active { display: inline-flex; align-items: center; gap: 12px; padding: 16px 32px; border-radius: 999px; color: #FFFFFF; font-size: 15px; font-weight: 600; text-decoration: none; border: 2px solid transparent; background-image: linear-gradient(#111111, #111111), linear-gradient(#111111, #111111); background-origin: border-box; background-clip: padding-box, border-box; transition: background-image .25s ease, transform .2s ease; }
        .b2s-cta-solid:hover { background-image: linear-gradient(#111111, #111111), var(--brand-gradient); transform: translateY(-1px); color: #FFFFFF; }

        .b2s-cta-textlink,
        .b2s-cta-textlink:link,
        .b2s-cta-textlink:visited,
        .b2s-cta-textlink:hover,
        .b2s-cta-textlink:focus,
        .b2s-cta-textlink:active { display: inline-flex; align-items: center; gap: 10px; color: #111111; font-size: 15px; font-weight: 600; text-decoration: none; }
        .b2s-cta-textlink span { border-bottom: 1px solid #111111; padding-bottom: 2px; }

        .b2s-innov-visual img { width: 100%; height: auto; display: block; border-radius: 16px; }

        .b2s-innov-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .b2s-innov-card { background: #FBF7ED; border-radius: 16px; padding: 40px 36px; display: flex; flex-direction: column; }
        .b2s-innov-card-h3 { color: #111111; font-size: 28px; font-weight: 400; line-height: 1.25; letter-spacing: -0.2px; margin: 0 0 28px; }
        .b2s-innov-card-h3 strong { font-weight: 700; }
        .b2s-innov-card img { width: 100%; height: auto; display: block; }
        .b2s-innov-foot { color: #334155; font-size: 12.5px; line-height: 1.6; margin: 22px 0 0; }

        @media (max-width: 1023px) {
          .b2s-innov { padding: 64px 24px; }
          .b2s-innov-top { grid-template-columns: 1fr; gap: 40px; margin-bottom: 40px; }
          .b2s-innov-h2 { font-size: 32px; }
          .b2s-innov-sub { font-size: 18px; max-width: none; }
          .b2s-innov-cards { grid-template-columns: 1fr; gap: 20px; }
          .b2s-innov-card { padding: 32px 28px; }
          .b2s-innov-card-h3 { font-size: 22px; margin-bottom: 22px; }
        }
        @media (max-width: 639px) {
          .b2s-innov { padding: 44px 15px; }
          .b2s-innov-h2 { font-size: 24px; letter-spacing: -0.2px; margin-bottom: 14px; }
          .b2s-innov-sub { font-size: 15px; margin-bottom: 26px; }
          .b2s-innov-ctas { gap: 18px; }
          .b2s-cta-solid { width: 100%; justify-content: center; padding: 14px 20px; font-size: 14px; }
          .b2s-cta-textlink { font-size: 14px; }
          .b2s-innov-card { padding: 24px 20px; border-radius: 12px; }
          .b2s-innov-card-h3 { font-size: 18px; margin-bottom: 18px; }
          .b2s-innov-foot { font-size: 11.5px; margin-top: 16px; }
        }

        /* 6 — Site Speed Comparison */
        .b2s-speed {
          background-color: #000000;
          background-image:
            repeating-linear-gradient(to right, rgba(177,137,69,0.18) 0 8px, transparent 8px 24px),
            repeating-linear-gradient(to bottom, rgba(177,137,69,0.18) 0 8px, transparent 8px 24px);
          background-size: 100% 1px, 1px 100%;
          background-position: top left, top left;
          background-repeat: repeat-x, repeat-y;
          padding: 60px 40px;
        }
        .b2s-speed-inner { max-width: 1320px; margin: 0 auto; position: relative; }
        .b2s-speed-inner::before,
        .b2s-speed-inner::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background-image: repeating-linear-gradient(to right, rgba(177,137,69,0.45) 0 8px, transparent 8px 18px);
          pointer-events: none;
        }
        .b2s-speed-inner::before { top: -32px; }
        .b2s-speed-inner::after { bottom: -32px; }
        .b2s-speed-h2 { text-align: center; color: #FFFFFF; font-size: 44px; font-weight: 400; line-height: 1.2; letter-spacing: -0.3px; margin: 0 0 48px; }
        .b2s-speed-h2 strong { font-weight: 800; }
        .b2s-speed-visual { background: #FFFFFF; border-radius: 14px; padding: 0; overflow: hidden; box-shadow: 0 24px 60px rgba(0,0,0,0.35); }
        .b2s-speed-visual img { display: block; width: 100%; height: auto; }

        @media (max-width: 1023px) {
          .b2s-speed { padding: 60px 24px; }
          .b2s-speed-h2 { font-size: 32px; margin-bottom: 32px; }
        }
        @media (max-width: 639px) {
          .b2s-speed { padding: 44px 15px; }
          .b2s-speed-h2 { font-size: 24px; margin-bottom: 24px; letter-spacing: -0.2px; }
          .b2s-speed-visual { border-radius: 10px; }
        }

        /* 7 — Conversion Comparison */
        .b2s-conv { background: #FBF7ED; padding: 60px 40px; }
        .b2s-conv-inner { max-width: 1320px; margin: 0 auto; }
        .b2s-conv-h2 { text-align: center; color: #111111; font-size: 42px; font-weight: 400; line-height: 1.22; letter-spacing: -0.3px; margin: 0 0 30px; }
        .b2s-conv-h2 strong { font-weight: 700; }

        .b2s-conv-grid { display: grid; grid-template-columns: 1.05fr 1fr; gap: 60px; align-items: center; }
        .b2s-conv-visual img { width: 100%; height: auto; display: block; border-radius: 14px; }

        .b2s-conv-copy { color: #8B6A1F; }
        .b2s-conv-lede { color: #111111; font-size: 22px; font-weight: 500; line-height: 1.45; margin: 0 0 24px; }
        .b2s-conv-lede strong { font-weight: 700; }
        .b2s-conv-body { color: #111111; font-size: 15px; line-height: 1.7; margin: 0 0 18px; }
        .b2s-conv-body:last-child { margin-bottom: 0; }

        /* ── Laptop (1024) ── */
        @media (max-width: 1024px) {
          .b2s-conv-h2 { margin-bottom: 24px; }
          .b2s-conv-lede { margin-bottom: 18px; }
        }

        @media (max-width: 1023px) {
          .b2s-conv { padding: 64px 24px; }
          .b2s-conv-h2 { font-size: 32px; margin-bottom: 24px; }
          .b2s-conv-grid { grid-template-columns: 1fr; gap: 40px; }
          .b2s-conv-lede { font-size: 18px; }
        }
        @media (max-width: 639px) {
          .b2s-conv { padding: 44px 15px; }
          .b2s-conv-h2 { font-size: 22px; line-height: 1.25; margin-bottom: 16px; letter-spacing: -0.2px; }
          .b2s-conv-lede { font-size: 16px; margin-bottom: 12px; }
          .b2s-conv-body { font-size: 13.5px; line-height: 1.65; margin-bottom: 14px; }
        }

        /* 8 — Migration Ratio + Market Share */
        .b2s-mratio { background: #F0F5FA; padding: 60px 40px 40px; }
        .b2s-mratio-inner { max-width: 1320px; margin: 0 auto; }
        .b2s-mratio-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        .b2s-mratio-card { background: #FFFFFF; border-radius: 18px; padding: 44px 44px 36px; position: relative; border: 1px solid transparent; background-image: linear-gradient(#FFFFFF, #FFFFFF), var(--brand-gradient); background-origin: border-box; background-clip: padding-box, border-box; }
        .b2s-mratio-h3 { color: #111111; font-size: 30px; font-weight: 700; line-height: 1.2; letter-spacing: -0.2px; margin: 0 0 14px; }
        .b2s-mratio-sub { color: #334155; font-size: 14px; line-height: 1.65; margin: 0 0 24px; }
        .b2s-mratio-sub strong { color: #111111; font-weight: 700; }
        .b2s-mratio-card img { width: 100%; height: auto; display: block; }

        @media (max-width: 1023px) {
          .b2s-mratio { padding: 64px 24px 32px; }
          .b2s-mratio-grid { grid-template-columns: 1fr; gap: 24px; }
          .b2s-mratio-card { padding: 32px 28px 28px; }
          .b2s-mratio-h3 { font-size: 24px; }
        }
        @media (max-width: 639px) {
          .b2s-mratio { padding: 44px 15px 24px; }
          .b2s-mratio-card { padding: 24px 20px 20px; border-radius: 14px; }
          .b2s-mratio-h3 { font-size: 20px; margin-bottom: 10px; }
          .b2s-mratio-sub { font-size: 13px; margin-bottom: 18px; }
        }

        /* 9 — BigCommerce vs Shopify stat table */
        .b2s-stats { background: #F0F5FA; padding: 40px 40px 60px; }
        .b2s-stats-inner { max-width: 1320px; margin: 0 auto; }
        .b2s-stats-card { background: #FFFFFF; border-radius: 18px; padding: 50px 56px; box-shadow: 0 1px 3px rgba(15,23,42,0.04); }
        .b2s-stats-headrow { display: grid; grid-template-columns: 0.85fr 1fr 1fr; padding: 0 0 28px; }
        .b2s-stats-headcell { color: #111111; font-size: 22px; font-weight: 500; }

        .b2s-stats-row { display: grid; grid-template-columns: 0.85fr 1fr 1fr; gap: 0; padding: 36px 0; border-top: 1px solid #E5E7EB; border-radius: 14px; align-items: center; position: relative; }
        .b2s-stats-row { border: 1px solid #E5E7EB; border-radius: 14px; padding: 28px; margin-top: 18px; align-items: stretch; }
        .b2s-stats-row:first-of-type { margin-top: 8px; }

        .b2s-stats-aside { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; max-width: 240px; }
        .b2s-stats-gartner { width: 140px; height: auto; display: block; }
        .b2s-stats-shopify { width: 130px; height: auto; display: block; }
        .b2s-stats-aside-cap { color: #1E293B; font-size: 13.5px; line-height: 1.55; margin: 4px 0 0; }
        .b2s-stats-cap-num { margin: 6px 0 0 !important; font-size: 36px !important; }

        .b2s-stats-cell { display: flex; flex-direction: column; justify-content: center; gap: 6px; padding: 8px 14px; }
        .b2s-stats-cell:last-child { background: #EAF7F0; border-radius: 12px; }
        .b2s-stats-headcell:last-child { padding-left: 14px; }
        .b2s-stats-cell .b2s-stats-num + .b2s-stats-lbl { margin-bottom: 18px; }
        .b2s-stats-cell .b2s-stats-lbl:last-child { margin-bottom: 0; }
        .b2s-stats-num { font-size: 36px; font-weight: 800; line-height: 1.1; margin: 0; letter-spacing: -0.5px; }
        .b2s-stats-num--bc { color: #D43838; }
        .b2s-stats-num--sh { background: var(--brand-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: transparent; }
        .b2s-stats-lbl { color: #111111; font-size: 14px; font-weight: 700; line-height: 1.55; margin: 4px 0 0; }

        @media (max-width: 1023px) {
          .b2s-stats { padding: 32px 24px 64px; }
          .b2s-stats-card { padding: 36px 28px; }
          .b2s-stats-headrow { padding-bottom: 18px; }
          .b2s-stats-headcell { font-size: 18px; }
          .b2s-stats-row { padding: 28px 20px; }
          .b2s-stats-num { font-size: 28px; }
          .b2s-stats-gartner, .b2s-stats-shopify { width: 110px; }
        }
        @media (max-width: 639px) {
          .b2s-stats { padding: 24px 15px 44px; }
          .b2s-stats-card { padding: 24px 18px; border-radius: 14px; }
          .b2s-stats-headrow { grid-template-columns: 0.7fr 1fr 1fr; padding-bottom: 12px; }
          .b2s-stats-headcell { font-size: 13px; }
          .b2s-stats-headcell:last-child { padding-left: 8px; }
          .b2s-stats-row { grid-template-columns: 0.7fr 1fr 1fr; padding: 16px 12px; gap: 8px; }
          .b2s-stats-aside { max-width: none; }
          .b2s-stats-cell { padding: 6px 8px; }
          .b2s-stats-gartner, .b2s-stats-shopify { width: 80px; }
          .b2s-stats-aside-cap { font-size: 12px; flex: 1; }
          .b2s-stats-cap-num { font-size: 22px !important; }
          .b2s-stats-num { font-size: 18px; }
          .b2s-stats-lbl { font-size: 11.5px; }
          .b2s-stats-cell .b2s-stats-num + .b2s-stats-lbl { margin-bottom: 12px; }
        }

        /* 10 — How to Migrate from BigCommerce to Shopify */
        .b2s-howto { background: #FBF7ED; padding: 60px 40px; }
        .b2s-howto-inner { max-width: 1320px; margin: 0 auto; }
        .b2s-howto-h2 { text-align: center; color: #111111; font-size: 30px; font-weight: 700; line-height: 1.35; letter-spacing: -0.2px; margin: 0 auto 22px; max-width: 1100px; }
        .b2s-howto-lead { text-align: center; color: #111111; font-size: 15px; line-height: 1.7; margin: 0 auto 56px; max-width: 1040px; }
        .b2s-howto-sub { text-align: center; color: #111111; font-size: 30px; font-weight: 600; line-height: 1.3; margin: 0 0 44px; }

        .b2s-howto-grid { list-style: none; padding: 0; margin: 0 0 48px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .b2s-howto-card { background: #FFFFFF; border-radius: 18px; padding: 44px 36px; text-align: center; border: 1px solid transparent; background-image: linear-gradient(#FFFFFF, #FFFFFF), var(--brand-gradient); background-origin: border-box; background-clip: padding-box, border-box; display: flex; flex-direction: column; align-items: center; }
        .b2s-howto-icon { color: #2A9555; margin-bottom: 22px; line-height: 0; }
        .b2s-howto-card-title { color: #111111; font-size: 22px; font-weight: 600; line-height: 1.3; margin: 0 0 18px; }
        .b2s-howto-card-body { color: #334155; font-size: 14.5px; line-height: 1.7; margin: 0; }

        .b2s-howto-cta-wrap { display: flex; justify-content: center; }

        @media (max-width: 1023px) {
          .b2s-howto { padding: 64px 24px; }
          .b2s-howto-h2 { font-size: 22px; margin-bottom: 18px; }
          .b2s-howto-lead { font-size: 14px; margin-bottom: 40px; }
          .b2s-howto-sub { font-size: 24px; margin-bottom: 32px; }
          .b2s-howto-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 36px; }
          .b2s-howto-card { padding: 32px 26px; }
          .b2s-howto-card-title { font-size: 19px; }
        }
        @media (max-width: 639px) {
          .b2s-howto { padding: 44px 15px; }
          .b2s-howto-h2 { font-size: 18px; line-height: 1.35; margin-bottom: 14px; }
          .b2s-howto-lead { font-size: 13px; margin-bottom: 28px; }
          .b2s-howto-sub { font-size: 19px; margin-bottom: 24px; }
          .b2s-howto-card { padding: 26px 20px; border-radius: 14px; }
          .b2s-howto-icon { margin-bottom: 16px; }
          .b2s-howto-icon svg { width: 40px; height: 40px; }
          .b2s-howto-card-title { font-size: 17px; margin-bottom: 12px; }
          .b2s-howto-card-body { font-size: 13px; line-height: 1.65; }
        }

        /* 13 — Why Work with Ecomm Wizards marquee (ported from /migration) */
        .mig-whywork { background: #F0F5FA; padding: 0 20px; min-height: 96px; overflow: hidden; display: flex; align-items: center; font-family: 'Poppins', sans-serif; }
        .mig-whywork-inner { display: flex; align-items: center; gap: 32px; max-width: 1320px; margin: 0 auto; padding: 0; width: 100%; }
        .mig-whywork-heading { flex-shrink: 0; width: 220px; font-size: 18px; font-weight: 700; color: #000000; line-height: 26px; margin: 0; padding-right: 24px; border-right: 1px solid rgba(0,0,0,0.12); }
        .mig-whywork-br { display: inline; }
        .mig-whywork-marquee { flex: 1 1 auto; min-width: 0; overflow: hidden; }
        .mig-whywork-track { display: flex; align-items: center; width: max-content; margin: 0; padding: 0; list-style: none; animation: mig-whywork-scroll 30s linear infinite; }
        .mig-whywork-marquee:hover .mig-whywork-track { animation-play-state: paused; }
        .mig-whywork-item { display: inline-flex; align-items: center; gap: 60px; padding-right: 60px; font-size: 16px; font-weight: 400; color: #000000; white-space: nowrap; letter-spacing: 0.5px; }
        .mig-whywork-text { color: #000000; font-size: 16px; }
        .mig-whywork-dot { width: 7px; height: 7px; background: #000000; border-radius: 50%; flex-shrink: 0; }
        @keyframes mig-whywork-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .mig-whywork-track { animation: none; } }

        @media (max-width: 1023px) {
          .mig-whywork { padding: 28px 20px; }
          .mig-whywork-inner { flex-direction: column; align-items: flex-start; gap: 18px; }
          .mig-whywork-heading { width: 100%; padding-right: 0; border-right: none; }
          .mig-whywork-marquee { width: 100%; }
        }
        @media (max-width: 639px) {
          .mig-whywork { padding: 20px 15px; }
          .mig-whywork-inner { gap: 14px; }
          .mig-whywork-heading { font-size: 15px; line-height: 22px; }
          .mig-whywork-br { display: none; }
          .mig-whywork-item { gap: 30px; padding-right: 30px; font-size: 14px; }
          .mig-whywork-text { font-size: 14px; }
          .mig-whywork-dot { width: 6px; height: 6px; }
          .mig-whywork-track { animation-duration: 24s; }
        }

        /* 14 — Awards & Recognition */
        .b2s-awards { background: #F0F5FA; padding: 30px 40px 60px; }
        .b2s-awards-inner { max-width: 1320px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px; }
        .b2s-awards-card { background: #FFFFFF; border-radius: 18px; padding: 40px 40px 36px; display: grid; gap: 24px; align-items: start; box-shadow: 0 1px 3px rgba(15,23,42,0.04); }
        .b2s-awards-card--5 { grid-template-columns: repeat(5, 1fr); }
        .b2s-awards-card--4 { grid-template-columns: repeat(4, 1fr); max-width: 80%; margin: 0 auto; }

        .b2s-awards-item { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .b2s-awards-item img { height: 110px; width: auto; max-width: 100%; object-fit: contain; display: block; }
        .b2s-awards-item p { color: #111111; font-size: 15px; font-weight: 500; line-height: 1.4; margin: 18px 0 0; }

        @media (max-width: 1023px) {
          .b2s-awards { padding: 20px 24px 64px; }
          .b2s-awards-card { padding: 32px 28px 28px; }
          .b2s-awards-card--5 { grid-template-columns: repeat(3, 1fr); }
          .b2s-awards-card--4 { grid-template-columns: repeat(2, 1fr); max-width: 100%; }
          .b2s-awards-item img { height: 96px; }
          .b2s-awards-item p { font-size: 14px; margin-top: 14px; }
        }
        @media (max-width: 639px) {
          .b2s-awards { padding: 16px 15px 44px; }
          .b2s-awards-inner { gap: 16px; }
          .b2s-awards-card { padding: 22px 16px 20px; border-radius: 14px; gap: 18px; }
          .b2s-awards-card--5 { grid-template-columns: repeat(2, 1fr); }
          .b2s-awards-card--4 { grid-template-columns: repeat(2, 1fr); }
          .b2s-awards-item img { height: 80px; }
          .b2s-awards-item p { font-size: 12.5px; margin-top: 10px; }
        }

        /* 15 — Trusted by the Worlds Most Innovative Brands (4-row marquee, ported from /migration) */
        .mig-innov { background: #FFFFFF; padding: 0 20px; }
        .mig-innov-inner { max-width: 1320px; margin: 0 auto; padding: 60px 0; color: #334155; font-family: 'Poppins', sans-serif; }
        .mig-innov-h2 { color: #000; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 40px; max-width: 780px; }
        .mig-innov-row { overflow: hidden; margin-bottom: 32px; max-width: 1320px; margin-left: auto; margin-right: auto; }
        .mig-innov-row:last-child { margin-bottom: 0; }
        .mig-innov-track { display: flex; align-items: center; gap: 60px; width: max-content; margin: 0 auto; padding: 0; list-style: none; animation: mig-innov-scroll 40s linear infinite; }
        .mig-innov-track--reverse { animation-name: mig-innov-scroll-reverse; }
        .mig-innov-row:hover .mig-innov-track { animation-play-state: paused; }
        .mig-innov-slide { flex-shrink: 0; width: 200px; height: 90px; display: flex; align-items: center; justify-content: center; }
        .mig-innov-slide img { width: 200px; height: 90px; object-fit: contain; display: block; }
        @keyframes mig-innov-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes mig-innov-scroll-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @media (prefers-reduced-motion: reduce) { .mig-innov-track { animation: none; } }

        @media (max-width: 1023px) {
          .mig-innov { padding: 0 24px; }
          .mig-innov-inner { padding: 44px 0; }
          .mig-innov-h2 { font-size: 30px; line-height: 40px; margin-bottom: 28px; }
        }
        @media (max-width: 639px) {
          .mig-innov { padding: 0 15px; }
          .mig-innov-inner { padding: 40px 0; }
          .mig-innov-h2 { font-size: 22px; line-height: 30px; margin-bottom: 24px; letter-spacing: -0.2px; max-width: 320px; }
          .mig-innov-row { margin-bottom: 22px; }
          .mig-innov-track { gap: 32px; animation-duration: 26s; }
          .mig-innov-slide { width: 130px; height: 60px; }
          .mig-innov-slide img { width: 130px; height: 60px; }
        }

        /* 16 — Final CTA pair */
        .b2s-finalcta { background: #FFFFFF; padding: 30px 24px 50px; border-top: 1px solid #F1F5F9; }
        .b2s-finalcta-inner { max-width: 1320px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 24px; flex-wrap: wrap; }

        .b2s-cta-outline-light,
        .b2s-cta-outline-light:link,
        .b2s-cta-outline-light:visited,
        .b2s-cta-outline-light:focus,
        .b2s-cta-outline-light:active { display: inline-flex; align-items: center; gap: 12px; padding: 16px 36px; border-radius: 999px; color: #111111; font-size: 15px; font-weight: 600; text-decoration: none; border: 2px solid transparent; background-image: linear-gradient(#FFFFFF, #FFFFFF), var(--brand-gradient); background-origin: border-box; background-clip: padding-box, border-box; transition: background-image .25s ease, color .25s ease, transform .2s ease; }
        .b2s-cta-outline-light:hover { transform: translateY(-1px); color: #FFFFFF; background-image: linear-gradient(#000000, #000000), var(--brand-gradient); }

        @media (max-width: 639px) {
          .b2s-finalcta { padding: 24px 15px 36px; }
          .b2s-finalcta-inner { gap: 14px; }
          .b2s-cta-outline-light { padding: 14px 22px; font-size: 14px; }
        }

        /* 17 — Review badges (static row) */
        .b2s-badges { background: #FFFFFF; padding: 28px 40px 56px; border-top: 1px solid #F1F5F9; }
        .b2s-badges-row { list-style: none; padding: 0; margin: 0 auto; max-width: 1320px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
        .b2s-badges-slide { flex: 1 1 0; display: flex; align-items: center; justify-content: center; height: 70px; min-width: 140px; }
        .b2s-badges-slide img { height: 56px; width: auto; max-width: 100%; object-fit: contain; display: block; }

        @media (max-width: 1023px) {
          .b2s-badges { padding: 24px 24px 44px; }
          .b2s-badges-slide img { height: 48px; }
        }
        @media (max-width: 639px) {
          .b2s-badges { padding: 20px 15px 36px; }
          .b2s-badges-row { gap: 18px; }
          .b2s-badges-slide { flex: 1 1 40%; height: 52px; min-width: 120px; }
          .b2s-badges-slide img { height: 36px; }
        }

        /* ──────────────────────────────────────────────
           Tablet (~768px, target iPad portrait 768×755)
           ────────────────────────────────────────────── */
        @media (min-width: 700px) and (max-width: 900px) {
          /* 1 — Hero: compact, stacked visual */
          .b2s-hero { padding: 52px 28px 52px; }
          .b2s-hero-inner { padding: 0; }
          .b2s-hero-copy { max-width: none; }
          .b2s-hero-h1 { font-size: 34px; line-height: 1.18; margin-bottom: 16px; }
          .b2s-hero-lead { font-size: 14.5px; margin-bottom: 16px; }
          .b2s-hero-ctas { gap: 22px; margin-bottom: 16px; }
          .b2s-cta-outline { padding: 14px 26px; font-size: 14px; }
          .b2s-hero-text-link { font-size: 14px; }
          .b2s-hero-trust { font-size: 13.5px; }
          .b2s-hero-visual-stack { margin: 32px auto 0; max-width: 640px; }

          /* 2 — Why Shopify */
          .b2s-why { padding: 56px 28px; }
          .b2s-why-h2 { font-size: 30px; margin-bottom: 16px; }
          .b2s-why-grid { gap: 40px; }
          .b2s-why-pillar { font-size: 26px; margin-bottom: 10px; }
          .b2s-why-lead { font-size: 14px; margin-bottom: 14px; }
          .b2s-why-list { gap: 22px; }
          .b2s-why-title { font-size: 16px; }
          .b2s-why-body { font-size: 14px; line-height: 1.65; }
          .b2s-why-visual img { max-width: 480px; }

          /* 3 — Migrated brands marquee */
          .b2s-migrated { padding: 52px 28px; }
          .b2s-migrated-h2 { font-size: 22px; margin-bottom: 32px; }
          .b2s-migrated-card { width: 160px; height: 76px; padding: 12px 20px; }
          .b2s-migrated-track { gap: 22px; }

          /* 4 + 5 — Innovation top + Speed/TCO cards */
          .b2s-innov { padding: 56px 28px; }
          .b2s-innov-top { gap: 36px; margin-bottom: 36px; }
          .b2s-innov-h2 { font-size: 28px; margin-bottom: 16px; }
          .b2s-innov-sub { font-size: 16px; max-width: none; }
          .b2s-innov-cards { grid-template-columns: 1fr 1fr; }
          .b2s-innov-card { padding: 28px 24px; }
          .b2s-innov-card-h3 { font-size: 20px; margin-bottom: 18px; }

          /* 6 — Site speed comparison */
          .b2s-speed { padding: 52px 28px; }
          .b2s-speed-h2 { font-size: 28px; margin-bottom: 28px; }

          /* 7 — Conversion */
          .b2s-conv { padding: 56px 28px; }
          .b2s-conv-h2 { font-size: 28px; margin-bottom: 20px; }
          .b2s-conv-grid { gap: 36px; }
          .b2s-conv-lede { font-size: 17px; margin-bottom: 16px; }
          .b2s-conv-body { font-size: 14px; }

          /* 8 — Migration ratio cards */
          .b2s-mratio { padding: 52px 28px 28px; }
          .b2s-mratio-grid { grid-template-columns: 1fr 1fr; gap: 22px; }
          .b2s-mratio-card { padding: 28px 24px 24px; }
          .b2s-mratio-h3 { font-size: 22px; margin-bottom: 10px; }
          .b2s-mratio-sub { font-size: 13px; margin-bottom: 18px; }

          /* 9 — Stats table: collapse to 2-col grid with aside on top of each row */
          .b2s-stats { padding: 28px 28px 56px; }
          .b2s-stats-card { padding: 28px 22px; border-radius: 14px; }
          .b2s-stats-headrow { grid-template-columns: 1fr 1fr; padding-bottom: 14px; }
          .b2s-stats-headrow .b2s-stats-headcell:first-child { display: none; }
          .b2s-stats-headcell { font-size: 16px; }
          .b2s-stats-row { grid-template-columns: 1fr 1fr; padding: 22px 18px; gap: 14px; }
          .b2s-stats-aside { grid-column: 1 / -1; max-width: none; flex-direction: row; align-items: center; gap: 18px; padding-bottom: 10px; border-bottom: 1px solid #E5E7EB; margin-bottom: 6px; }
          .b2s-stats-gartner, .b2s-stats-shopify { width: 110px; }
          .b2s-stats-aside-cap { font-size: 13px; flex: 1; }
          .b2s-stats-cap-num { font-size: 28px !important; margin: 0 !important; }
          .b2s-stats-num { font-size: 24px; }
          .b2s-stats-lbl { font-size: 13px; }
          .b2s-stats-cell .b2s-stats-num + .b2s-stats-lbl { margin-bottom: 14px; }

          /* 10 — How to Migrate */
          .b2s-howto { padding: 56px 28px; }
          .b2s-howto-h2 { font-size: 20px; margin-bottom: 16px; }
          .b2s-howto-lead { font-size: 13.5px; margin-bottom: 32px; }
          .b2s-howto-sub { font-size: 22px; margin-bottom: 28px; }
          .b2s-howto-grid { gap: 18px; margin-bottom: 30px; }
          .b2s-howto-card { padding: 28px 22px; }
          .b2s-howto-icon { margin-bottom: 16px; }
          .b2s-howto-card-title { font-size: 18px; margin-bottom: 12px; }
          .b2s-howto-card-body { font-size: 13.5px; line-height: 1.65; }

          /* 13 — Why Work marquee */
          .mig-whywork { padding: 22px 28px; }
          .mig-whywork-heading { font-size: 16px; line-height: 22px; }
          .mig-whywork-item { font-size: 15px; gap: 44px; padding-right: 44px; }
          .mig-whywork-text { font-size: 15px; }

          /* 14 — Awards */
          .b2s-awards { padding: 18px 28px 56px; }
          .b2s-awards-card { padding: 28px 22px 24px; gap: 22px; }
          .b2s-awards-card--5 { grid-template-columns: repeat(3, 1fr); }
          .b2s-awards-card--4 { grid-template-columns: repeat(2, 1fr); max-width: 100%; }
          .b2s-awards-item img { height: 88px; }
          .b2s-awards-item p { font-size: 13px; margin-top: 12px; }

          /* 15 — Trust marquee */
          .mig-innov { padding: 0 28px; }
          .mig-innov-inner { padding: 40px 0; }
          .mig-innov-h2 { font-size: 26px; line-height: 36px; margin-bottom: 24px; }
          .mig-innov-slide { width: 150px; height: 70px; }
          .mig-innov-slide img { width: 150px; height: 70px; }
          .mig-innov-track { gap: 40px; }

          /* 16 — Final CTA pair */
          .b2s-finalcta { padding: 26px 28px 36px; }
          .b2s-finalcta-inner { gap: 18px; }
          .b2s-cta-outline-light { padding: 14px 26px; font-size: 14px; }
          .b2s-cta-solid { padding: 14px 26px; font-size: 14px; }

          /* 17 — Review badges */
          .b2s-badges { padding: 22px 28px 36px; }
          .b2s-badges-row { gap: 14px; }
          .b2s-badges-slide { height: 56px; }
          .b2s-badges-slide img { height: 40px; max-width: 130px; }
        }

        /* ──────────────────────────────────────────────
           Mobile Pro Max (~420–540px) — slightly roomier
           ────────────────────────────────────────────── */
        @media (min-width: 420px) and (max-width: 540px) {
          .b2s-hero-h1 { font-size: 28px; }
          .b2s-hero-lead { font-size: 14.5px; }
          .b2s-why-h2 { font-size: 26px; }
          .b2s-why-pillar { font-size: 24px; }
          .b2s-innov-h2 { font-size: 26px; }
          .b2s-conv-h2 { font-size: 24px; }
          .b2s-howto-h2 { font-size: 19px; }
          .b2s-howto-sub { font-size: 20px; }
          .b2s-howto-card-title { font-size: 18px; }
          .b2s-mratio-h3 { font-size: 21px; }
          .b2s-stats-num { font-size: 23px; }
          .b2s-speed-h2 { font-size: 26px; }
          .mig-innov-h2 { font-size: 24px; line-height: 32px; max-width: 360px; }
          .mig-whywork-heading { font-size: 16px; }
        }

        /* ──────────────────────────────────────────────
           4K / Ultrawide (≥1700px, target 2560×1079)
           Scale containers + type up so the page fills the screen
           ────────────────────────────────────────────── */
        @media (min-width: 1700px) {
          /* 1 — Hero */
          .b2s-hero { padding: 80px 40px; min-height: 640px; }
          .b2s-hero-inner { max-width: 1600px; }
          .b2s-hero-copy { max-width: 760px; }
          .b2s-hero-h1 { font-size: 56px; line-height: 1.15; }
          .b2s-hero-lead { font-size: 17px; line-height: 1.75; }
          .b2s-cta-outline { padding: 18px 40px; font-size: 16px; }
          .b2s-hero-text-link { font-size: 16px; }
          .b2s-hero-trust { font-size: 15px; }

          /* 2 — Why Shopify */
          .b2s-why { padding: 120px 40px; }
          .b2s-why-inner { max-width: 1600px; }
          .b2s-why-eyebrow { font-size: 22px; }
          .b2s-why-h2 { font-size: 56px; margin-bottom: 80px; }
          .b2s-why-grid { gap: 100px; }
          .b2s-why-pillar { font-size: 44px; }
          .b2s-why-lead { font-size: 17px; max-width: 600px; }
          .b2s-why-title { font-size: 20px; }
          .b2s-why-body { font-size: 16px; line-height: 1.75; }
          .b2s-why-visual img { max-width: 740px; }

          /* 3 — Migrated brands */
          .b2s-migrated { padding: 100px 40px; }
          .b2s-migrated-inner { max-width: 1600px; }
          .b2s-migrated-h2 { font-size: 36px; }
          .b2s-migrated-card { width: 230px; height: 108px; padding: 20px 30px; }
          .b2s-migrated-track { gap: 42px; }

          /* 4 + 5 — Innovation + Speed/TCO */
          .b2s-innov { padding: 120px 40px; }
          .b2s-innov-inner { max-width: 1600px; }
          .b2s-innov-top { gap: 100px; margin-bottom: 72px; }
          .b2s-innov-h2 { font-size: 52px; }
          .b2s-innov-sub { font-size: 24px; max-width: 540px; }
          .b2s-cta-solid { padding: 18px 40px; font-size: 16px; }
          .b2s-cta-textlink { font-size: 16px; }
          .b2s-innov-card { padding: 48px 44px; }
          .b2s-innov-card-h3 { font-size: 32px; }
          .b2s-innov-foot { font-size: 13.5px; }

          /* 6 — Site speed comparison */
          .b2s-speed { padding: 100px 40px; }
          .b2s-speed-inner { max-width: 1600px; }
          .b2s-speed-h2 { font-size: 52px; }

          /* 7 — Conversion */
          .b2s-conv { padding: 120px 40px; }
          .b2s-conv-inner { max-width: 1600px; }
          .b2s-conv-h2 { font-size: 52px; margin-bottom: 80px; }
          .b2s-conv-grid { gap: 80px; }
          .b2s-conv-lede { font-size: 26px; }
          .b2s-conv-body { font-size: 16px; line-height: 1.75; }

          /* 8 + 9 — Migration ratio + Stats */
          .b2s-mratio { padding: 100px 40px 48px; }
          .b2s-mratio-inner { max-width: 1600px; }
          .b2s-mratio-card { padding: 56px 56px 48px; }
          .b2s-mratio-h3 { font-size: 36px; }
          .b2s-mratio-sub { font-size: 16px; }
          .b2s-stats { padding: 48px 40px 120px; }
          .b2s-stats-inner { max-width: 1600px; }
          .b2s-stats-card { padding: 64px 72px; }
          .b2s-stats-headcell { font-size: 26px; }
          .b2s-stats-row { padding: 48px 36px; }
          .b2s-stats-num { font-size: 44px; }
          .b2s-stats-lbl { font-size: 15.5px; }
          .b2s-stats-aside-cap { font-size: 15px; }
          .b2s-stats-cap-num { font-size: 44px !important; }
          .b2s-stats-gartner, .b2s-stats-shopify { width: 170px; }

          /* 10 — How to Migrate */
          .b2s-howto { padding: 120px 40px; }
          .b2s-howto-inner { max-width: 1600px; }
          .b2s-howto-h2 { font-size: 36px; max-width: 1280px; }
          .b2s-howto-lead { font-size: 17px; max-width: 1180px; margin-bottom: 72px; }
          .b2s-howto-sub { font-size: 36px; margin-bottom: 56px; }
          .b2s-howto-grid { gap: 36px; margin-bottom: 60px; }
          .b2s-howto-card { padding: 56px 44px; }
          .b2s-howto-icon svg { width: 56px; height: 56px; }
          .b2s-howto-card-title { font-size: 24px; }
          .b2s-howto-card-body { font-size: 15.5px; line-height: 1.75; }

          /* 13 — Why Work marquee */
          .mig-whywork { min-height: 112px; }
          .mig-whywork-inner { max-width: 1600px; }
          .mig-whywork-heading { width: 260px; font-size: 20px; line-height: 28px; }
          .mig-whywork-item { font-size: 17px; gap: 70px; padding-right: 70px; }
          .mig-whywork-text { font-size: 17px; }
          .mig-whywork-dot { width: 8px; height: 8px; }

          /* 14 — Awards */
          .b2s-awards { padding: 36px 40px 100px; }
          .b2s-awards-inner { max-width: 1600px; gap: 28px; }
          .b2s-awards-card { padding: 52px 52px 48px; }
          .b2s-awards-item img { height: 132px; }
          .b2s-awards-item p { font-size: 16px; }

          /* 15 — Trust marquee */
          .mig-innov { padding: 0 40px; }
          .mig-innov-inner { max-width: 1600px; padding: 80px 0; }
          .mig-innov-h2 { font-size: 52px; line-height: 1.18; max-width: 920px; margin-bottom: 56px; }
          .mig-innov-slide { width: 220px; height: 100px; }
          .mig-innov-slide img { width: 220px; height: 100px; }

          /* 16 — Final CTA pair */
          .b2s-finalcta { padding: 40px 24px 60px; }
          .b2s-finalcta-inner { max-width: 1600px; gap: 28px; }
          .b2s-cta-outline-light { padding: 18px 40px; font-size: 16px; }

          /* 17 — Review badges */
          .b2s-badges { padding: 36px 40px 70px; }
          .b2s-badges-row { max-width: 1600px; }
          .b2s-badges-slide { height: 84px; }
          .b2s-badges-slide img { height: 66px; }

          /* 11 — Migration case studies (uses ssd-results-* from globals) */
          .ssd-results-inner { max-width: 1600px !important; }
        }

        /* FAQ (smooth accordion) */
        .b2s-faq { background: #FFFFFF; padding: 60px 40px; }
        .b2s-faq-inner { max-width: 860px; margin: 0 auto; }
        .b2s-faq-h2 { color: #111111; font-size: 36px; font-weight: 700; line-height: 1.2; letter-spacing: -0.3px; text-align: center; margin: 0 0 36px; }
        .b2s-faq-acc { position: relative; }
        .b2s-faq-rad { position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px; }
        .b2s-faq-list { display: flex; flex-direction: column; }
        .b2s-faq-item { border-top: 1px solid #E5E7EB; }
        .b2s-faq-item:last-child { border-bottom: 1px solid #E5E7EB; }
        .b2s-faq-head { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 22px 0; cursor: pointer; }
        .b2s-faq-q { color: #111111; font-size: 17px; font-weight: 600; line-height: 1.4; }
        .b2s-faq-ico { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; color: #111111; flex: 0 0 auto; transition: transform .3s ease; }
        .b2s-faq-bodyc { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows .3s ease, opacity .25s ease; }
        .b2s-faq-in { overflow: hidden; min-height: 0; }
        .b2s-faq-bodyc p { color: #334155; font-size: 15px; line-height: 1.75; margin: 0; padding: 0 40px 22px 0; }
        ${FAQS.map((_, i) => `#b2s-faq-${i}:checked ~ .b2s-faq-list [data-faq="b2s-faq-${i}"] .b2s-faq-bodyc`).join(",\n        ")} {
          grid-template-rows: 1fr; opacity: 1;
        }
        ${FAQS.map((_, i) => `#b2s-faq-${i}:checked ~ .b2s-faq-list [data-faq="b2s-faq-${i}"] .b2s-faq-ico`).join(",\n        ")} {
          transform: rotate(180deg);
        }
        @media (max-width: 1023px) {
          .b2s-faq { padding: 60px 24px; }
          .b2s-faq-h2 { font-size: 28px; margin-bottom: 28px; }
        }
        @media (max-width: 639px) {
          .b2s-faq { padding: 44px 15px; }
          .b2s-faq-h2 { font-size: 22px; }
          .b2s-faq-q { font-size: 15px; }
          .b2s-faq-bodyc p { font-size: 14px; padding-right: 0; }
        }
      ` }} />
    </>
  );
}
