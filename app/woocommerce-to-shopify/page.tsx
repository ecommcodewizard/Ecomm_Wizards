import type { Metadata } from "next";
import Link from "next/link";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import RodeoCarousel, { type RodeoSlide } from "@/components/sections/RodeoCarousel";
import CustomizerCarousel, { type CustomizerSlide } from "@/components/sections/CustomizerCarousel";

export const metadata: Metadata = {
  title: "Migrate from WooCommerce to Shopify | Ecomm Wizards",
  description:
    "We're the Shopify experts who actually pick up the phone. Talk to us about your woocommerce migration to shopify and we'll handle every product, order, customer, and redirect for you. Risk-free test drive on the house.",
};

const TEST_DRIVE_URL = "/free-shopify-store-audit";
const CALL_URL = "/book-shopify-consultation";

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
    quote: (<>&ldquo;Working with EW was a truly <strong>top-notch experience</strong>. From start to finish, they made sure everything ran smoothly and professionally &ndash; we couldn&rsquo;t be happier!&rdquo;</>),
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

const CUSTOMIZER_SLIDES: CustomizerSlide[] = [
  {
    desktopSrc: "/images/slider-desktop-three_2048x2048.webp",
    mobileSrc: "/images/slider-mobile-three_1024x1024.webp",
    caption: "Custom cart drawers, no developer required.",
  },
  {
    desktopSrc: "/images/slider-desktop-two_2048x2048.png",
    mobileSrc: "/images/slider-mobile-two_1024x1024.webp",
    caption: "Build product pages exactly how you want them.",
  },
  {
    desktopSrc: "/images/slider-desktop-four_2048x2048.webp",
    mobileSrc: "/images/slider-mobile-four_1024x1024.png",
    caption: "Landing pages you can rebuild whenever the campaign changes.",
  },
];

const PARTNER_ROWS: { src: string; alt: string }[][] = [
  // Row 1 — 5 logos
  [
    { src: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg", alt: "Shopify" },
    { src: "/images/partner_logo_2-1.svg", alt: "Yotpo" },
    { src: "/images/partner_logo_3-1.svg", alt: "Rebuy" },
    { src: "/images/partner_logo_4-1.svg", alt: "Recharge" },
    { src: "/images/partner_logo_5-1.svg", alt: "Klaviyo" },
  ],
  // Row 2 — 4 logos (no Ecomm Wizards center box; distributed evenly across the row)
  [
    { src: "/images/partner_logo_6-1.svg", alt: "Gorgias" },
    { src: "/images/partner_logo_7-1.svg", alt: "Okendo" },
    { src: "/images/partner_logo_8-1.svg", alt: "Nosto" },
    { src: "/images/partner_logo_9-1.svg", alt: "ShipStation" },
  ],
  // Row 3 — 5 logos
  [
    { src: "/images/partner_logo_10-1.svg", alt: "Rise.ai" },
    { src: "/images/partner_logo_11-1.svg", alt: "Glew" },
    { src: "/images/partner_logo_12-1.svg", alt: "Matrixify" },
    { src: "/images/partner_logo_13-1.svg", alt: "Route" },
    { src: "/images/partner_logo_14-1.svg", alt: "Carro" },
  ],
];

const RODEO_SLIDES: RodeoSlide[] = [
  { src: "/images/bark-px-new-2.webp", alt: "BARK Meal Plans Shopify storefront on desktop and mobile" },
  { src: "/images/olaplex-px-new-2.webp", alt: "Olaplex Experience Stronger, Healthier Hair Shopify storefront" },
  { src: "/images/everlast-final-new.png", alt: "Everlast Shopify storefront" },
  { src: "/images/unique-vintage-px-new-2.webp", alt: "Unique Vintage Shopify storefront" },
  { src: "/images/ebbets.webp", alt: "Ebbets Field Flannels Shopify storefront" },
  { src: "/images/lids-px-new-2.png", alt: "Lids Shopify storefront" },
  { src: "/images/everlast-px-new-2.png", alt: "Everlast Men's Apparel Shopify storefront" },
];

const DATA_TRANSFER_ITEMS = [
  { key: "products", label: "Products" },
  { key: "cms", label: "CMS pages" },
  { key: "categories", label: "Categories" },
  { key: "reviews", label: "Reviews" },
  { key: "orders", label: "Orders" },
  { key: "gift", label: "Gift Cards and Coupons" },
  { key: "customers", label: "Customers" },
  { key: "seo", label: "SEO Preservation" },
  { key: "groups", label: "Customer Groups" },
  { key: "subs", label: "Subscriptions" },
  { key: "members", label: "Members" },
  { key: "recurring", label: "Recurring Payments" },
];

const DataIcon = ({ name }: { name: string }) => {
  const props = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "products":
      return (<svg {...props}><path d="M3 3h2v18H3zM19 3h2v18h-2z" /><path d="M7 6h10M7 10h10M7 14h10M7 18h7" /></svg>);
    case "cms":
      return (<svg {...props}><path d="M7 3h8l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M15 3v4h4" /><path d="M9 12h6M9 16h6" /></svg>);
    case "categories":
      return (<svg {...props}><rect x="3" y="5" width="18" height="3" rx="1" /><rect x="3" y="11" width="18" height="3" rx="1" /><rect x="3" y="17" width="18" height="3" rx="1" /><circle cx="6" cy="6.5" r="0.7" fill="currentColor" /><circle cx="6" cy="12.5" r="0.7" fill="currentColor" /><circle cx="6" cy="18.5" r="0.7" fill="currentColor" /></svg>);
    case "reviews":
      return (<svg {...props}><path d="M7 3h8l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M15 3v4h4" /><path d="M9 12h6M9 16h4" /></svg>);
    case "orders":
      return (<svg {...props}><circle cx="5" cy="6" r="1.4" /><circle cx="5" cy="12" r="1.4" /><circle cx="5" cy="18" r="1.4" /><path d="M10 6h12M10 12h12M10 18h12" /></svg>);
    case "gift":
      return (<svg {...props}><rect x="3" y="8" width="18" height="13" rx="1" /><path d="M3 12h18" /><path d="M12 8v13" /><path d="M8.5 8s-2-3 0-4.5S12 6 12 8M15.5 8s2-3 0-4.5S12 6 12 8" /></svg>);
    case "customers":
      return (<svg {...props}><circle cx="9" cy="9" r="3" /><path d="M3 21c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="10" r="2.4" /><path d="M15 20c0-2.6 2-4.8 4.5-4.8" /></svg>);
    case "seo":
      return (<svg {...props}><circle cx="6" cy="6" r="2" /><path d="M9 6h13" /><circle cx="14" cy="12" r="2" /><path d="M2 12h10M17 12h5" /><circle cx="9" cy="18" r="2" /><path d="M2 18h5M12 18h10" /></svg>);
    case "groups":
      return (<svg {...props}><circle cx="12" cy="6" r="2.4" /><circle cx="5" cy="18" r="2.4" /><circle cx="19" cy="18" r="2.4" /><path d="M12 8.5v6M10.5 14L7 16M13.5 14L17 16" /></svg>);
    case "subs":
      return (<svg {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
    case "members":
      return (<svg {...props}><rect x="3" y="4" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2.4" /><path d="M5 17c0-1.8 1.8-3 4-3s4 1.2 4 3" /><path d="M16 9h3M16 12h3" /></svg>);
    case "recurring":
      return (<svg {...props}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /><circle cx="12" cy="16" r="1" /></svg>);
    default:
      return null;
  }
};

const PROCESS_STEPS = [
  {
    key: "plan",
    title: "Plan",
    body: (<>An idiot with a plan beats a genius without one. We pair you with a senior team that&rsquo;s lived through hundreds of woocommerce migration to shopify projects, then we map out a <strong>plan of action</strong> built around your business, not a generic checklist.</>),
  },
  {
    key: "design",
    title: "Design",
    body: (<>Steve Jobs said design is how it works, not how it looks. We design for conversion. <strong>Every screen, every flow</strong>, every detail is built to help your visitors buy and your AOV climb.</>),
  },
  {
    key: "develop",
    title: "Develop",
    body: (<>Your store is your business, and <strong>bad development sinks it</strong>. Our Shopify devs handle the engine while you stay focused on customers, marketing, and the things that grow your brand.</>),
  },
  {
    key: "deploy",
    title: "Deploy",
    body: (<>We deploy without surprises. <strong>Bulletproof version control</strong>, end-to-end QA, no &ldquo;that wasn&rsquo;t supposed to go live&rdquo; moments. Just a clean launch on the day we promised it.</>),
  },
  {
    key: "ab",
    title: "AB Testing",
    body: (<>Launch day isn&rsquo;t the finish line. We run <strong>continuous AB testing</strong> on every element of your store so revenue keeps climbing months after go-live. Data over guesswork, every single time.</>),
  },
];

const ProcessIcon = ({ name }: { name: string }) => {
  const props = { width: 30, height: 30, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "plan":
      return (
        <svg {...props}>
          <rect x="6" y="4" width="12" height="16" rx="1" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9" y1="16" x2="13" y2="16" />
        </svg>
      );
    case "design":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="14" rx="2" />
          <path d="M7 21h10M12 17v4" />
          <path d="M12 10l3-3" />
          <circle cx="8" cy="8" r="0.6" fill="currentColor" />
        </svg>
      );
    case "develop":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 8h.01M12 8h.01M16 8h.01" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      );
    case "deploy":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="12" cy="14" r="3" />
          <path d="M12 11v6" />
        </svg>
      );
    case "ab":
      return (
        <svg {...props}>
          <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
        </svg>
      );
    default:
      return null;
  }
};

const SCALABLE_FEATURES = [
  { key: "channels", title: "Sell across 20+ channels without writing a line of custom code" },
  { key: "uptime", title: "99.99% uptime, even when your traffic spikes overnight" },
  { key: "api", title: "Plug into any third-party system through a clean, open API" },
  { key: "customize", title: "Build the storefront you actually want, no template handcuffs" },
  { key: "apps", title: "Test and ship fast with 10,000+ ready-to-go apps" },
  { key: "support", title: "Real humans on support 24/7, anywhere on the planet" },
  { key: "secure", title: "Sleep at night knowing patches and security are handled for you" },
];

const ScalableIcon = ({ name }: { name: string }) => {
  const props = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "channels":
      return (
        <svg {...props}>
          {[4, 12, 20].flatMap((cx) => [4, 12, 20].map((cy) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" />))}
        </svg>
      );
    case "uptime":
      return (
        <svg {...props}>
          <path d="M4.5 16.5c-1 1 1 4 1 4s3-2 4-3" />
          <path d="M10 14L5 9c1-4 4-7 9-7 0 5-3 8-7 9z" />
          <path d="M9 11l1 2 2 1" />
          <circle cx="14" cy="6" r="1" />
        </svg>
      );
    case "api":
      return (
        <svg {...props}>
          <circle cx="12" cy="3" r="1.4" />
          <circle cx="12" cy="21" r="1.4" />
          <circle cx="3" cy="12" r="1.4" />
          <circle cx="21" cy="12" r="1.4" />
          <circle cx="5.6" cy="5.6" r="1.4" />
          <circle cx="18.4" cy="5.6" r="1.4" />
          <circle cx="5.6" cy="18.4" r="1.4" />
          <circle cx="18.4" cy="18.4" r="1.4" />
        </svg>
      );
    case "customize":
      return (
        <svg {...props}>
          <path d="M12 3L3 8l9 5 9-5z" />
          <path d="M3 12l9 5 9-5" />
          <path d="M3 16l9 5 9-5" />
        </svg>
      );
    case "apps":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="3" y="15" width="6" height="6" rx="1" />
          <rect x="15" y="15" width="6" height="6" rx="1" />
        </svg>
      );
    case "support":
      return (
        <svg {...props}>
          <path d="M4 13a8 8 0 0 1 16 0v4" />
          <rect x="2" y="13" width="4" height="6" rx="1" />
          <rect x="18" y="13" width="4" height="6" rx="1" />
          <path d="M20 19v1a2 2 0 0 1-2 2h-4" />
        </svg>
      );
    case "secure":
      return (
        <svg {...props}>
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      );
    default:
      return null;
  }
};

const CompareIcon = ({ name }: { name: string }) => {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "file":
      return (
        <svg {...props}>
          <path d="M7 3h8l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
          <path d="M15 3v4h4" />
          <path d="M9 12h6M9 16h6" />
        </svg>
      );
    case "growth":
      return (
        <svg {...props}>
          <path d="M4 20V10M10 20V14M16 20V6M22 20V12" />
        </svg>
      );
    case "team":
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.2" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M15 20c0-2.4 2-4.4 4-4.4" />
        </svg>
      );
    case "lock":
      return (
        <svg {...props}>
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
      );
    case "support":
      return (
        <svg {...props}>
          <path d="M4 13a8 8 0 0 1 16 0v4" />
          <rect x="2" y="13" width="4" height="6" rx="1" />
          <rect x="18" y="13" width="4" height="6" rx="1" />
          <path d="M20 19v1a2 2 0 0 1-2 2h-4" />
        </svg>
      );
    case "network":
      return (
        <svg {...props}>
          <circle cx="5" cy="6" r="2" />
          <circle cx="19" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M7 7l4 8M17 7l-4 8" />
        </svg>
      );
    case "database":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5" rx="8" ry="2.5" />
          <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
          <path d="M4 11v8c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-8" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "smartphone":
      return (
        <svg {...props}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case "badge":
      return (
        <svg {...props}>
          <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8z" />
          <path d="M8 18l-2 4 4-1.5L12 22l2-1.5L18 22l-2-4" />
        </svg>
      );
    default:
      return null;
  }
};

const TRANSITION_MARQUEE_ITEMS = [
  "We move everything. D2C, B2B, wholesale, and point of sale, nothing left behind.",
  "Want to know how a woocommerce migration to shopify actually works? Book a call.",
  "Curious about the data? Grab a free test-drive of your migration in two clicks.",
];

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

export default function Page() {
  return (
    <>
      {/* 1 — Hero (WP source: "Seamless Migration to Shopify / Your WooCommerce Store's Next Destination") */}
      <section className="w2s-hero">
        <div className="w2s-hero-inner">
          <div className="w2s-hero-copy">
            <h1 className="w2s-hero-h1">
              Ready to migrate from WooCommerce to Shopify? We&rsquo;ll handle the messy parts.
            </h1>
            <p className="w2s-hero-lead">
              You run an ecommerce brand. We run woocommerce to shopify migration services for a
              living. Tell us where you&rsquo;re stuck and we&rsquo;ll move your products,
              customers, orders, and content across cleanly. D2C, B2B, wholesale, point of sale,
              we&rsquo;ve done every flavor of it.
            </p>
            <div className="w2s-hero-cta-row">
              <Link href={TEST_DRIVE_URL} className="w2s-hero-cta">
                <span>Try it Free</span>
                <Arrow />
              </Link>
              <p className="w2s-hero-risk">
                Test our woocommerce migration to shopify before you commit a cent.<br />
                Risk-free, no pressure, no sales pitch.
              </p>
            </div>
          </div>

          <div className="w2s-hero-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/woocommerce-hero-scaled.webp"
              alt="WooCommerce store transitioning to Shopify analytics dashboard"
              width={1024}
              height={1024}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 2 — Transition to Shopify to unlock a world of potential */}
      <section className="w2s-transition">
        <div className="w2s-transition-inner">
          <h2 className="w2s-transition-h2">
            Switching platforms is a lot like moving houses. We pack, lift, and unpack for you.
          </h2>
          <p className="w2s-transition-lead">
            Deciding to migrate from woocommerce to shopify is the easy part. The hard part is
            figuring out what moves first, how to pack things so nothing breaks, and how fast
            you can shut the old store down. We&rsquo;ve been doing this for years, so you can
            stop worrying about plugin conflicts and start planning your next quarter instead.
          </p>

          <div className="w2s-transition-marquee" aria-hidden="true">
            <ul className="w2s-transition-marquee-track">
              {[...TRANSITION_MARQUEE_ITEMS, ...TRANSITION_MARQUEE_ITEMS].map((item, i) => (
                <li key={i} className="w2s-transition-marquee-item">
                  <span className="w2s-transition-marquee-text">{item}</span>
                  <span className="w2s-transition-marquee-dot" />
                </li>
              ))}
            </ul>
          </div>

          <div className="w2s-transition-video">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src="/images/5a8e17ef773c4b6a9675ecd2347ac9de.HD-1080p-7.2Mbps-58742493-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
            />
          </div>
        </div>
      </section>

      {/* 3 — Grab Your Free Guide for Moving from WooCommerce to Shopify */}
      <section className="w2s-guide">
        <div className="w2s-guide-inner">
          <div className="w2s-guide-copy">
            <h2 className="w2s-guide-h2">
              The playbook we use to migrate from WooCommerce to Shopify. Yours, free.
            </h2>
            <p className="w2s-guide-lead">
              Thinking about a woocommerce migration to shopify but not sure where to start?
              Drop your email and we&rsquo;ll send you the same playbook we run on real client
              projects. Step by step, no fluff, no upsell, just the work that actually moves
              the needle.
            </p>
            <form className="w2s-guide-form" method="post" action="#">
              <label htmlFor="w2s-guide-email" className="w2s-guide-srlabel">Email</label>
              <input
                id="w2s-guide-email"
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                className="w2s-guide-input"
              />
              <button type="submit" className="w2s-guide-submit">Send it to Me!</button>
            </form>
          </div>

          <div className="w2s-guide-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/migration-shopify-right-image.webp"
              alt="WooCommerce to Shopify migration guide preview"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 4 — The best-converting checkout on the planet */}
      <section className="w2s-checkout">
        <div className="w2s-checkout-inner">
          <div className="w2s-checkout-visual">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src="/images/9fe8312bdc644954b6e3f17792ae21de.HD-1080p-2.5Mbps-20028686.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controlsList="nodownload"
            />
          </div>
          <div className="w2s-checkout-copy">
            <h2 className="w2s-checkout-h2">
              The highest-converting checkout in ecommerce ships with Shopify
            </h2>
            <p className="w2s-checkout-lead">
              Shop Pay turns first-time browsers into paying customers in one tap. You get it
              the moment you migrate from woocommerce to shopify, no plugins, no extra setup,
              no surprises.
            </p>
            <Link href="/case-studies" className="w2s-checkout-cta">
              <span>Case Studies</span>
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* 5 — Shopify Plus is the world's most scalable and robust platform */}
      <section className="w2s-scalable">
        <div className="w2s-scalable-inner">
          <div className="w2s-scalable-copy">
            <h2 className="w2s-scalable-h2">
              Shopify Plus scales with you, even on Black Friday at 3 AM
            </h2>
            <hr className="w2s-scalable-divider" />
            <ul className="w2s-scalable-list">
              {SCALABLE_FEATURES.map((f) => (
                <li key={f.key} className="w2s-scalable-item">
                  <span className="w2s-scalable-icon" aria-hidden="true">
                    <ScalableIcon name={f.key} />
                  </span>
                  <h3 className="w2s-scalable-title">{f.title}</h3>
                </li>
              ))}
            </ul>
          </div>

          <div className="w2s-scalable-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/build-step-image-1.webp"
              alt="Shopify Plus admin and customizer interface showcasing OLAPLEX store"
              width={952}
              height={1024}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 6 — Why Shopify is Better Than WooCommerce (multi-block comparison) */}
      <section className="w2s-compare">
        <div className="w2s-compare-inner">
          <h2 className="w2s-compare-h2">
            Why we keep telling clients to <strong>migrate from WooCommerce to Shopify</strong>
          </h2>
          <p className="w2s-compare-lead">
            Honest reason enterprise brands are walking away from WordPress? We pulled the
            2025 data so you don&rsquo;t have to. Here&rsquo;s what the numbers actually say
            about woocommerce migration to shopify, side by side.
          </p>

          <div className="w2s-compare-grid">
            <article className="w2s-compare-card">
              <div className="w2s-compare-tag">
                <span className="w2s-compare-tag-icon" aria-hidden="true">
                  <CompareIcon name="file" />
                </span>
                <span className="w2s-compare-tag-label">Overview</span>
              </div>
              <h3 className="w2s-compare-title">Overview</h3>
              <p className="w2s-compare-body">
                Shopify wins on the basics. Easier to run day to day, faster, and built to
                handle the kind of growth that breaks a WordPress site. WooCommerce still
                holds 38.76% of the global ecommerce market against Shopify&rsquo;s 27%, but
                zoom into the top 1 million sites and Shopify pulls ahead with 28.8% versus
                WooCommerce&rsquo;s 18.2% (MobiLoud, 2025). High-growth brands keep picking
                Shopify, and that should tell you where this is heading.
              </p>
              <div className="w2s-compare-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/overview-2.png"
                  alt="Everlast Shopify store on desktop and mobile"
                  width={724}
                  height={539}
                  loading="lazy"
                />
              </div>
            </article>

            <article className="w2s-compare-card">
              <div className="w2s-compare-tag">
                <span className="w2s-compare-tag-icon" aria-hidden="true">
                  <CompareIcon name="growth" />
                </span>
                <span className="w2s-compare-tag-label">Scalability</span>
              </div>
              <h3 className="w2s-compare-title">Scalability</h3>
              <p className="w2s-compare-body">
                Shopify auto-scales the second traffic spikes. 99.98% uptime, up to 11,000
                orders a minute on peak days like Black Friday (Shopify, 2025). WooCommerce
                scales as fast as your hosting plan does, which usually means scrambling for
                upgrades right when you can least afford it.
              </p>
              <h4 className="w2s-compare-subtitle">
                We work on what actually moves your revenue
              </h4>
              <p className="w2s-compare-body">
                We don&rsquo;t pick the easy work first. Product data, payment gateways,
                checkout flow, anything tied to revenue gets locked down before we touch
                anything else.
              </p>
              <div className="w2s-compare-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/wc-grid-1.webp"
                  alt="Scalability, Flexibility, Reliability, Hosted SaaS and High-Growth pill cluster"
                  width={543}
                  height={221}
                  loading="lazy"
                />
              </div>
            </article>

            {/* Customization — with 3 sub-feature mini-boxes */}
            <article className="w2s-compare-card">
              <div className="w2s-compare-tag">
                <span className="w2s-compare-tag-icon" aria-hidden="true">
                  <CompareIcon name="team" />
                </span>
                <span className="w2s-compare-tag-label">Customization</span>
              </div>
              <h3 className="w2s-compare-title">Customization</h3>
              <p className="w2s-compare-body">
                Want a custom Shopify Plus store? HTML and CSS will get you there. The same
                effort on WooCommerce means digging into WordPress architecture and a stack of
                plugins before you can move a single button.
              </p>
              <ul className="w2s-compare-features">
                <li>
                  <h5 className="w2s-compare-feat-title">Total Control</h5>
                  <p className="w2s-compare-feat-body">
                    You own every piece of your business. Shopify gives you the tools to
                    customize and extend without fighting the platform.
                  </p>
                </li>
                <li>
                  <h5 className="w2s-compare-feat-title">Obsessed with performance</h5>
                  <p className="w2s-compare-feat-body">
                    Shopify Plus stores load in 309ms on average. WooCommerce sits at 776ms
                    (Eklipse Creative, 2025). Shopify&rsquo;s checkout is 17% faster too
                    (Shopify, 2025). Speed sells, and your conversion rate proves it.
                  </p>
                </li>
                <li>
                  <h5 className="w2s-compare-feat-title">Themes</h5>
                  <p className="w2s-compare-feat-body">
                    Add up to 100 themes to your Shopify account. Test what works, kill what
                    doesn&rsquo;t, then go live with the winner.
                  </p>
                </li>
              </ul>
            </article>

            {/* Security */}
            <article className="w2s-compare-card">
              <div className="w2s-compare-tag">
                <span className="w2s-compare-tag-icon" aria-hidden="true">
                  <CompareIcon name="lock" />
                </span>
                <span className="w2s-compare-tag-label">Security</span>
              </div>
              <h3 className="w2s-compare-title">Security</h3>
              <p className="w2s-compare-body">
                Customers won&rsquo;t buy from a store they don&rsquo;t trust. Shopify is
                Level 1 PCI-compliant from day one, SSL is built in, and zero major
                vulnerabilities were reported in 2025. WooCommerce had documented issues back
                in 2023 and still hands you the PCI compliance work to figure out on your own
                (Shopify, 2025). That&rsquo;s a real risk on a real store.
              </p>
              <div className="w2s-compare-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/security-image.webp"
                  alt="Shopify Level 1 PCI-compliant security visual"
                  width={1024}
                  height={423}
                  loading="lazy"
                />
              </div>
            </article>

            {/* Support — with image + quote */}
            <article className="w2s-compare-card">
              <div className="w2s-compare-tag">
                <span className="w2s-compare-tag-icon" aria-hidden="true">
                  <CompareIcon name="support" />
                </span>
                <span className="w2s-compare-tag-label">Support</span>
              </div>
              <h3 className="w2s-compare-title">Support</h3>
              <p className="w2s-compare-body">
                Shopify Plus gives you a real team you can reach. Launch engineers, solution
                engineers, front-end devs, and dedicated support staff, all available 24/7.
                WooCommerce points you at community forums and hopes a stranger replies before
                your store goes down (WPBeginner, 2025).
              </p>
              <div className="w2s-compare-image w2s-compare-image--support">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/wc-support.webp"
                  alt="Shopify Plus support network"
                  width={946}
                  height={638}
                  loading="lazy"
                />
                <span className="w2s-compare-logo-overlay" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/ecomm-green-logo-cropped.png" alt="" />
                </span>
              </div>
              <blockquote className="w2s-compare-quote">
                <p>
                  &ldquo;Plugin conflicts and downtime during updates were killing us on
                  WooCommerce. Once we moved to Shopify we stopped firefighting and started
                  selling again. Site speed jumped 60%, and the platform never blinks during
                  peak traffic.&rdquo;
                </p>
                <footer className="w2s-compare-quote-attr">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp"
                    alt=""
                    width={45}
                    height={45}
                  />
                  <span>
                    <strong>Ben Francis</strong>
                    <em>Founder, Gymshark</em>
                  </span>
                </footer>
              </blockquote>
            </article>

            {/* Ecosystem — with 3 partner sub-boxes */}
            <article className="w2s-compare-card">
              <div className="w2s-compare-tag">
                <span className="w2s-compare-tag-icon" aria-hidden="true">
                  <CompareIcon name="network" />
                </span>
                <span className="w2s-compare-tag-label">Ecosystem</span>
              </div>
              <h3 className="w2s-compare-title">Ecosystem</h3>
              <p className="w2s-compare-body">
                Adding a new tool on Shopify takes minutes. Email, reviews, subscriptions,
                loyalty, search, you install it in two clicks and get back to work. On
                WooCommerce you&rsquo;re juggling PHP versions, plugin conflicts, and update
                breakages every time you want to try something new.
              </p>
              <ul className="w2s-compare-features">
                <li>
                  <h5 className="w2s-compare-feat-title">Vetted app store</h5>
                  <p className="w2s-compare-feat-body">
                    Every app in Shopify&rsquo;s store is reviewed before it lists. You install
                    quality, not whatever a stranger pushed last week.
                  </p>
                </li>
                <li>
                  <h5 className="w2s-compare-feat-title">One-click installs</h5>
                  <p className="w2s-compare-feat-body">
                    Hook up Klaviyo, Recharge, Gorgias, Yotpo, you name it. No FTP, no SQL,
                    no debugging someone else&rsquo;s code.
                  </p>
                </li>
                <li>
                  <h5 className="w2s-compare-feat-title">Updates that don&rsquo;t break</h5>
                  <p className="w2s-compare-feat-body">
                    Shopify ships platform updates without taking your apps down with them.
                    Your store stays live, your team stays focused.
                  </p>
                </li>
              </ul>
            </article>

          </div>
        </div>
      </section>

      {/* ── Standalone follow-up sections (each its own <section>, after Section 6) ── */}

      {/* Mobile optimization → Customization (standalone section, cream card on WHITE outer, vertical mobile-mockup sliders) */}
      <section className="w2s-followup w2s-followup--white">
        <div className="w2s-followup-inner">
          <article className="w2s-compare-card w2s-compare-card--full w2s-compare-card--split">
            <div className="w2s-compare-split-copy">
              <div className="w2s-compare-tag">
                <span className="w2s-compare-tag-icon" aria-hidden="true">
                  <CompareIcon name="smartphone" />
                </span>
                <span className="w2s-compare-tag-label">Mobile optimization</span>
              </div>
              <h3 className="w2s-compare-title">Customization</h3>
              <p className="w2s-compare-body">
                Building a custom Shopify Plus storefront takes HTML and CSS skills. Mobile,
                desktop, edge cases, all of it. WooCommerce expects you to know WordPress
                architecture plus the quirks of every plugin in your stack before you can move
                a button. We&rsquo;d rather you spend that time talking to customers.
              </p>
            </div>
            <div className="w2s-compare-split-visual w2s-compare-mobile-grid">
              <div className="w2s-compare-mobile-col">
                <div className="w2s-compare-mobile-track">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner-images-1-4.webp" alt="" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner-images-3-1.webp" alt="" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner-images-1-1.webp" alt="" loading="lazy" />
                  {/* duplicate for seamless loop */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner-images-1-4.webp" alt="" aria-hidden="true" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner-images-3-1.webp" alt="" aria-hidden="true" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner-images-1-1.webp" alt="" aria-hidden="true" loading="lazy" />
                </div>
              </div>
              <div className="w2s-compare-mobile-col w2s-compare-mobile-col--offset">
                <div className="w2s-compare-mobile-track w2s-compare-mobile-track--reverse">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner-images-3-2.webp" alt="" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner-images-1-2.webp" alt="" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner-images-2-1.webp" alt="" loading="lazy" />
                  {/* duplicate for seamless loop */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner-images-3-2.webp" alt="" aria-hidden="true" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner-images-1-2.webp" alt="" aria-hidden="true" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner-images-2-1.webp" alt="" aria-hidden="true" loading="lazy" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Customization → Ecosystem (standalone section, white card on WHITE outer, JESSAKAE image left + partner features right) */}
      <section className="w2s-followup w2s-followup--white">
        <div className="w2s-followup-inner">
          <article className="w2s-compare-card w2s-compare-card--full w2s-compare-card--split w2s-compare-card--jessakae">
            <div className="w2s-compare-split-visual w2s-compare-jessakae-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/woocommerce-updates_1024x1024.webp"
                alt="JESSAKAE Valentine's Day lookbook on desktop and mobile"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
            <div className="w2s-compare-split-copy">
              <div className="w2s-compare-tag">
                <span className="w2s-compare-tag-icon" aria-hidden="true">
                  <CompareIcon name="badge" />
                </span>
                <span className="w2s-compare-tag-label">Customization</span>
              </div>
              <h3 className="w2s-compare-title">Ecosystem</h3>
              <p className="w2s-compare-body">
                Shopify gives you 8,000+ apps that work out of the box. WooCommerce has 900+
                extensions, and most of them need a developer just to install cleanly. Big
                difference when you&rsquo;re trying to ship next week, not next quarter.
              </p>
              <ul className="w2s-compare-features">
                <li>
                  <h5 className="w2s-compare-feat-title">Solutions Partners</h5>
                  <p className="w2s-compare-feat-body">
                    Designers and developers who live and breathe Shopify Plus themes, app
                    integrations, and customization
                  </p>
                </li>
                <li>
                  <h5 className="w2s-compare-feat-title">Technology Partners</h5>
                  <p className="w2s-compare-feat-body">
                    Tools, providers, and integrations built to stretch what Shopify Plus can
                    do for your store
                  </p>
                </li>
                <li>
                  <h5 className="w2s-compare-feat-title">Agency Partners</h5>
                  <p className="w2s-compare-feat-body">
                    Full-service agencies handling creative, marketing, and development under
                    one roof
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Implementation (standalone section — TWO separate cards in a row, gap between) */}
      <section className="w2s-followup">
        <div className="w2s-followup-inner">
          <div className="w2s-implement-row">
            <article className="w2s-compare-card w2s-implement-info">
              <div className="w2s-compare-tag">
                <span className="w2s-compare-tag-icon" aria-hidden="true">
                  <CompareIcon name="database" />
                </span>
                <span className="w2s-compare-tag-label">Implementation</span>
              </div>
              <h3 className="w2s-compare-title">Implementation</h3>
              <p className="w2s-compare-body">
                We&rsquo;re built for speed. Because we handle the architecture, hosting, and
                security for you, most woocommerce to shopify migration services projects ship
                in 2 to 4 months. No surprise overruns, no half-done launches.
              </p>
            </article>
            <article className="w2s-compare-card w2s-implement-quote-card">
              <blockquote className="w2s-compare-quote w2s-compare-quote--plain">
                <p>
                  &ldquo;Our launch engineer was incredible. Emails, Slack messages, smoke
                  signals, he answered everything within minutes, even at 2 AM. His advice
                  saved us. Honestly, I&rsquo;m relieved I never have to run another critical
                  security patch or pay another WordPress hosting bill again.&rdquo;
                </p>
                <footer className="w2s-compare-quote-attr">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp"
                    alt=""
                    width={45}
                    height={45}
                  />
                  <span>
                    <strong>Ben Francis</strong>
                    <em>Founder, Gymshark</em>
                  </span>
                </footer>
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      {/* Global and Omnichannel (standalone section, white card with OLAPLEX image) */}
      <section className="w2s-followup">
        <div className="w2s-followup-inner">
          <article className="w2s-compare-card w2s-compare-card--full w2s-compare-card--split w2s-compare-card--global">
            <div className="w2s-compare-split-copy">
              <div className="w2s-compare-tag">
                <span className="w2s-compare-tag-icon" aria-hidden="true">
                  <CompareIcon name="globe" />
                </span>
                <span className="w2s-compare-tag-label">Global and omnichannel</span>
              </div>
              <h3 className="w2s-compare-title">Global and Omnichannel</h3>
              <p className="w2s-compare-body">
                Shopify lets you sell wherever your customers hang out. Shopify Plus brands
                run 20+ sales channels at once. Facebook, Messenger, Pinterest, Instagram,
                eBay, Houzz, Ebates, Wanelo, all of it managed from one dashboard. WooCommerce
                wants a separate plugin for every channel, and you&rsquo;re the one keeping
                them all alive. After your woocommerce migration to shopify, you stop juggling
                and start selling.
              </p>
            </div>
            <div className="w2s-compare-split-visual w2s-compare-global-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/build-step-image-1.webp"
                alt="Shopify Plus admin showcasing OLAPLEX omnichannel store"
                width={952}
                height={1024}
                loading="lazy"
              />
            </div>
          </article>
        </div>
      </section>

      {/* 7 — Our Process (5-step horizontal scroll: Plan, Design, Develop, Deploy, AB Testing) */}
      <section className="w2s-process">
        <div className="w2s-process-inner">
          <h2 className="w2s-process-h2">How we actually run a WooCommerce to Shopify migration</h2>
          <div className="w2s-process-scroll">
            <ul className="w2s-process-list">
              {PROCESS_STEPS.map((step) => (
                <li key={step.key} className="w2s-process-item">
                  <div className="w2s-process-icon-wrap" aria-hidden="true">
                    <span className="w2s-process-icon-dot" />
                    <span className="w2s-process-icon-svg">
                      <ProcessIcon name={step.key} />
                    </span>
                  </div>
                  <h3 className="w2s-process-title">{step.title}</h3>
                  <p className="w2s-process-body">{step.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8 — What data do we transfer? (image left, heading + lead + 12-item grid right) */}
      <section className="w2s-data">
        <div className="w2s-data-inner">
          <div className="w2s-data-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/data-transfernew_0584e32e-af30-477d-821f-3e09e5592468-scaled.webp"
              alt="Woman with tablet reviewing migration data"
              loading="lazy"
            />
          </div>
          <div className="w2s-data-copy">
            <h2 className="w2s-data-h2">Here&rsquo;s what we move when you migrate from WooCommerce to Shopify</h2>
            <p className="w2s-data-lead">
              We move everything you&rsquo;ve built. Products, customers, orders, content, all
              of it lands on Shopify or Shopify Plus exactly where it should. Doesn&rsquo;t
              matter if you&rsquo;re on WooCommerce 1 or 2, nothing gets left behind on the
              old store.
            </p>
            <ul className="w2s-data-grid">
              {DATA_TRANSFER_ITEMS.map((item) => (
                <li key={item.key} className="w2s-data-item">
                  <span className="w2s-data-icon" aria-hidden="true">
                    <DataIcon name={item.key} />
                  </span>
                  <span className="w2s-data-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9 — Not Our First Rodeo (centered heading + lead + autoplay carousel with prev/next) */}
      <section className="w2s-rodeo-section">
        <div className="w2s-rodeo-inner">
          <h2 className="w2s-rodeo-h2">We&rsquo;ve done this thousands of times. Literally.</h2>
          <p className="w2s-rodeo-lead">
            We&rsquo;ve moved some of the most recognizable brands on the internet from
            WooCommerce to Shopify. D2C, B2B, wholesale, POS, we&rsquo;ve shipped every model
            of it. As a top-rated Shopify agency with 100% client satisfaction, we&rsquo;ve
            delivered thousands of woocommerce to shopify migration services projects with 90%
            less downtime and post-launch site speeds up to 150% faster. If you&rsquo;re also asking
            how to migrate from shopify to woocommerce, or wondering whether to migrate shopify
            to woocommerce at all, that question comes up less and less. For every brand
            migrating from shopify to woocommerce, six are heading the other way (Shopify,
            2025). We focus where the market is going.
          </p>
          <RodeoCarousel slides={RODEO_SLIDES} intervalMs={5000} visibleCount={2} />
        </div>
      </section>

      {/* 10 — Our Valued Partners (centered heading + lead + 5x3 logo grid, center cell empty) */}
      <section className="w2s-partners">
        <div className="w2s-partners-inner">
          <h2 className="w2s-partners-h2">
            The partners we actually <strong>work with</strong>
          </h2>
          <p className="w2s-partners-lead">
            We&rsquo;ve spent the last decade building real working <strong>relationships</strong>
            with some of the best companies in commerce. These are the brands we collaborate
            with every day to build technical solutions that actually help Shopify merchants
            grow. If you&rsquo;re planning a woocommerce migration to shopify, chances are
            we&rsquo;ve worked alongside the apps and platforms you&rsquo;re already using.
          </p>
          <div className="w2s-partners-grid">
            {PARTNER_ROWS.map((row, rowIdx) => (
              <ul key={rowIdx} className="w2s-partners-row">
                {row.map((logo) => (
                  <li key={logo.src} className="w2s-partners-cell">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.alt} loading="lazy" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — Built with Shopify Customizer (cream bg, carousel of 3 customizer screens) */}
      <section className="w2s-customizer">
        <div className="w2s-customizer-inner">
          <h2 className="w2s-customizer-h2">Built right inside the Shopify Customizer</h2>
          <p className="w2s-customizer-lead">
            Shopify&rsquo;s customizer lets you tweak and update your storefront without filing
            a ticket with developers every time you want a small change. Edit it, ship it,
            move on with your day.
          </p>
          <CustomizerCarousel slides={CUSTOMIZER_SLIDES} intervalMs={5000} />
        </div>
      </section>

      {/* 12 — Trusted by the World's Most Innovative Brands (kept — shared) */}
      <section className="mig-innov">
        <div className="mig-innov-inner">
          <h2 className="mig-innov-h2">
            Trusted by the World&rsquo;s Most<br />Innovative Brands on Shopify Plus
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

      {/* 13 — Team grid ($900M+ in Client Revenue) — to be built */}

      {/* 14 — Why Work with Ecomm Wizards (kept — shared) */}
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

      {/* 15 — Migration Case Studies (kept — shared) */}
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

      {/* 16 — Final CTA pair (kept — shared) */}
      <section className="w2s-finalcta" aria-label="Get started">
        <div className="w2s-finalcta-inner">
          <Link href={CALL_URL} className="w2s-cta-outline-light">
            <span>Get a Demo</span>
            <Arrow />
          </Link>
          <Link href={TEST_DRIVE_URL} className="w2s-cta-solid">
            <span>Get a Migration Test Drive</span>
            <Arrow />
          </Link>
        </div>
      </section>

      {/* 17 — Review badges (kept — shared) */}
      <section className="w2s-badges" aria-label="Review and partner badges">
        <ul className="w2s-badges-row">
          {REVIEW_BADGES.map((b) => (
            <li key={b.src} className="w2s-badges-slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.src} alt={b.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Base inner-container pattern (matches WP/Elementor reference: max-width 1320px,
           10px padding, flex column + justify center, Poppins/16/26.4/#334155). */
        .w2s-hero-inner,
        .w2s-transition-inner,
        .w2s-guide-inner,
        .w2s-checkout-inner,
        .w2s-scalable-inner,
        .w2s-compare-inner,
        .w2s-process-inner,
        .w2s-data-inner,
        .w2s-rodeo-inner,
        .w2s-partners-inner,
        .w2s-customizer-inner,
        .w2s-finalcta-inner {
          font-family: 'Poppins', sans-serif;
          color: #334155;
          font-size: 16px;
          line-height: 26.4px;
          padding: 10px;
          display: flex;
          justify-content: center;
          max-width: 1320px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ============================================================
           SECTION 1 — Hero
           ------------------------------------------------------------
           WP source layout: 2-column row on black background.
           Left column: H1 (single block, white) + lead paragraph (white,
           ~85% opacity) + outlined "Try it Free" CTA + risk-free subtext.
           Right column: dark-themed WooCommerce → Shopify analytics mockup.
           CTA hover matches the header "Get Started" pattern:
           bg → white, text → black.
           ============================================================ */
        .w2s-hero {
          background: #000000;
          padding: 60px 0;
          overflow: hidden;
          position: relative;
        }
        .w2s-hero-inner {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding-left: 40px;
          padding-right: 40px;
          min-height: 364px;
        }
        .w2s-hero-copy {
          flex: 1 1 540px;
          max-width: 640px;
          min-width: 0;
          padding: 10px;
        }
        .w2s-hero-h1 {
          color: #FFFFFF;
          font-size: 36px;
          font-weight: 500;
          line-height: 1.25;
          letter-spacing: -0.2px;
          margin: 0 0 24px;
          max-width: 540px;
        }
        .w2s-hero-lead {
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 36px;
          max-width: 520px;
          font-weight: 400;
        }
        .w2s-hero-cta-row {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }
        .w2s-hero-cta,
        .w2s-hero-cta:link,
        .w2s-hero-cta:visited,
        .w2s-hero-cta:focus,
        .w2s-hero-cta:active {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 36px;
          border-radius: 999px;
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          border: 2px solid transparent;
          background-image: linear-gradient(#000000, #000000), var(--brand-gradient);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          transition: background-image .25s ease, color .25s ease, transform .2s ease;
        }
        .w2s-hero-cta:hover {
          color: #000000;
          background-image: linear-gradient(#FFFFFF, #FFFFFF), var(--brand-gradient);
          transform: translateY(-1px);
        }
        .w2s-hero-risk {
          color: rgba(255, 255, 255, 0.7);
          font-size: 13.5px;
          line-height: 1.55;
          margin: 0;
          max-width: 280px;
          font-weight: 400;
        }
        .w2s-hero-visual {
          flex: 1 1 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          position: relative;
          min-width: 0;
        }
        .w2s-hero-visual img {
          width: 100%;
          height: auto;
          max-width: 100%;
          display: block;
          margin-right: -40px;
        }

        /* Hero — tablet */
        @media (max-width: 1023px) {
          .w2s-hero { padding: 60px 0; }
          .w2s-hero-inner { flex-direction: column; gap: 40px; padding-left: 24px; padding-right: 24px; }
          .w2s-hero-copy { max-width: none; flex: 1 1 auto; text-align: center; }
          .w2s-hero-h1 { font-size: 30px; max-width: none; }
          .w2s-hero-lead { font-size: 15px; margin-left: auto; margin-right: auto; }
          .w2s-hero-cta-row { flex-direction: column; justify-content: center; align-items: center; gap: 18px; }
          .w2s-hero-risk { max-width: 420px; margin: 0 auto; }
          /* Image's right ~60% holds the cards; shift it left inside a fixed-aspect frame so the dense area sits centered in the viewport */
          .w2s-hero-visual {
            flex: 0 0 auto;
            width: 100%;
            max-width: 560px;
            aspect-ratio: 4 / 3;
            padding: 0;
            margin: 0 auto;
            align-self: center;
            justify-content: flex-start;
            overflow: hidden;
            border-radius: 14px;
          }
          .w2s-hero-visual img {
            width: 165%;
            max-width: none;
            height: 100%;
            margin-left: -60%;
            margin-right: 0;
            object-fit: cover;
            object-position: left center;
            aspect-ratio: auto;
            display: block;
          }
        }

        /* Hero — mobile (430): keep the tablet shift-and-crop so the dense card area fills the frame */
        @media (max-width: 639px) {
          .w2s-hero { padding: 40px 0; }
          .w2s-hero-inner { gap: 28px; padding-left: 15px; padding-right: 15px; }
          .w2s-hero-h1 { font-size: 24px; line-height: 1.25; letter-spacing: -0.1px; margin-bottom: 18px; max-width: none; }
          .w2s-hero-lead { font-size: 14px; line-height: 1.7; margin-bottom: 26px; }
          .w2s-hero-cta-row { gap: 16px; flex-direction: column; align-items: center; }
          .w2s-hero-cta { width: 100%; justify-content: center; padding: 14px 22px; font-size: 14px; }
          .w2s-hero-risk { font-size: 12.5px; max-width: 100%; text-align: center; }
          .w2s-hero-visual {
            width: 100%;
            max-width: 400px;
            aspect-ratio: 4 / 3;
            overflow: hidden;
            border-radius: 14px;
            margin: 0 auto;
          }
          .w2s-hero-visual img {
            width: 170%;
            max-width: none;
            height: 100%;
            margin-left: -65%;
            margin-right: 0;
            object-fit: cover;
            object-position: left center;
            aspect-ratio: auto;
            display: block;
          }
        }

        /* Hero — 4K */
        @media (min-width: 1700px) {
          .w2s-hero { padding: 60px 0; }
          .w2s-hero-inner { max-width: 1600px; gap: 100px; padding-left: 40px; padding-right: 40px; }
          .w2s-hero-h1 { font-size: 44px; margin-bottom: 28px; max-width: 640px; }
          .w2s-hero-lead { font-size: 18px; max-width: 640px; margin-bottom: 44px; }
          .w2s-hero-cta { padding: 18px 42px; font-size: 16px; }
          .w2s-hero-risk { font-size: 14px; max-width: 320px; }
          .w2s-hero-visual img { max-height: 480px; max-width: none; height: 100%; width: auto; }
        }

        /* ============================================================
           SECTION 2 — Transition to Shopify to unlock a world of potential
           ------------------------------------------------------------
           White section. Centered heading + lead + horizontal text
           marquee + autoplay/loop video (kept native HTML5 so we don't
           ship a YouTube iframe + tracker on initial paint).
           ============================================================ */
        .w2s-transition {
          background: #FFFFFF;
          padding: 60px 0;
        }
        .w2s-transition-inner {
          flex-direction: column;
          align-items: center;
          gap: 28px;
          padding-left: 40px;
          padding-right: 40px;
        }
        .w2s-transition-h2 {
          color: #0F172A;
          font-size: 38px;
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: -0.2px;
          text-align: center;
          max-width: 1100px;
          margin: 0;
        }
        .w2s-transition-lead {
          color: #334155;
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          max-width: 980px;
          margin: 0;
        }
        .w2s-transition-marquee {
          width: 100%;
          overflow: hidden;
          padding: 16px 0;
        }
        .w2s-transition-marquee-track {
          display: flex;
          width: max-content;
          list-style: none;
          padding: 0;
          margin: 0;
          align-items: center;
          animation: w2s-transition-marquee-scroll 30s linear infinite;
          will-change: transform;
        }
        .w2s-transition-marquee:hover .w2s-transition-marquee-track {
          animation-play-state: paused;
        }
        .w2s-transition-marquee-item {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          margin-right: 60px;
        }
        .w2s-transition-marquee-text {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #000000;
          letter-spacing: 0.5px;
        }
        .w2s-transition-marquee-dot {
          width: 7px;
          height: 7px;
          background: #000000;
          border-radius: 50%;
          margin-left: 60px;
          flex-shrink: 0;
        }
        @keyframes w2s-transition-marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .w2s-transition-marquee-track { animation: none; }
        }
        .w2s-transition-video {
          width: 100%;
          max-width: 1100px;
          aspect-ratio: 16 / 9;
          border-radius: 14px;
          overflow: hidden;
          background: #000000;
          box-shadow: 0 12px 40px rgba(15, 23, 42, 0.12);
        }
        .w2s-transition-video video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        /* Section 2 — tablet */
        @media (max-width: 1023px) {
          .w2s-transition { padding: 56px 0; }
          .w2s-transition-inner { padding-left: 24px; padding-right: 24px; gap: 22px; }
          .w2s-transition-h2 { font-size: 30px; }
          .w2s-transition-lead { font-size: 15px; line-height: 1.65; }
          .w2s-transition-marquee-text { font-size: 18px; }
          .w2s-transition-marquee-item { margin-right: 50px; }
          .w2s-transition-marquee-dot { margin-left: 50px; }
        }

        /* Section 2 — mobile (tighten bottom padding so the gap before the Free Guide section shrinks) */
        @media (max-width: 639px) {
          .w2s-transition { padding: 32px 0 12px; }
          .w2s-transition-inner { padding-left: 15px; padding-right: 15px; gap: 18px; }
          .w2s-transition-h2 { font-size: 22px; line-height: 1.28; letter-spacing: -0.1px; }
          .w2s-transition-lead { font-size: 13.5px; line-height: 1.65; }
          .w2s-transition-marquee { padding: 12px 0; }
          .w2s-transition-marquee-text { font-size: 15px; }
          .w2s-transition-marquee-item { margin-right: 36px; }
          .w2s-transition-marquee-dot { margin-left: 36px; width: 6px; height: 6px; }
          .w2s-transition-marquee-track { animation-duration: 24s; }
          .w2s-transition-video { border-radius: 10px; }
        }

        /* Section 2 — 4K */
        @media (min-width: 1700px) {
          .w2s-transition { padding: 90px 0; }
          .w2s-transition-inner { max-width: 1600px; gap: 36px; padding-left: 40px; padding-right: 40px; }
          .w2s-transition-h2 { font-size: 52px; max-width: 1320px; }
          .w2s-transition-lead { font-size: 18px; max-width: 1180px; }
          .w2s-transition-marquee-text { font-size: 18px; }
          .w2s-transition-video { max-width: 1320px; border-radius: 18px; }
        }

        /* ============================================================
           SECTION 3 — Grab Your Free Guide
           ------------------------------------------------------------
           2-column row. Left: olive-green gradient panel with white
           heading + lead + email opt-in form. Right: migration guide
           image, bleeds to the right edge of the inner container.
           ============================================================ */
        .w2s-guide {
          background: #FFFFFF;
          padding: 0;
        }
        .w2s-guide-inner {
          flex-direction: row;
          align-items: stretch;
          justify-content: space-between;
          gap: 0;
          padding: 30px 0 30px 20px;
          min-height: 437px;
        }
        .w2s-guide-copy {
          flex: 1 1 50%;
          background-color: #143824;
          background-image: var(--brand-gradient);
          background-blend-mode: multiply;
          border-radius: 18px 0 0 18px;
          padding: 38px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 18px;
          color: #FFFFFF;
          min-width: 0;
        }
        .w2s-guide-h2 {
          color: #FFFFFF;
          font-size: 36px;
          font-weight: 500;
          line-height: 1.25;
          letter-spacing: -0.2px;
          margin: 0;
          max-width: 520px;
        }
        .w2s-guide-lead {
          color: rgba(255, 255, 255, 0.88);
          font-size: 15.5px;
          line-height: 1.7;
          margin: 0;
          max-width: 540px;
          font-weight: 400;
        }
        .w2s-guide-form {
          display: flex;
          align-items: stretch;
          gap: 14px;
          width: 100%;
          max-width: 540px;
          margin-top: 8px;
        }
        .w2s-guide-srlabel {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .w2s-guide-input {
          flex: 1 1 60%;
          min-width: 0;
          height: 50px;
          padding: 0 22px;
          border-radius: 999px;
          border: 1.5px solid rgba(255, 255, 255, 0.6);
          background: transparent;
          color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          font-size: 14.5px;
          font-weight: 400;
          outline: none;
          transition: border-color .2s ease, background .2s ease;
        }
        .w2s-guide-input::placeholder { color: rgba(255, 255, 255, 0.65); }
        .w2s-guide-input:focus { border-color: #FFFFFF; background: rgba(255, 255, 255, 0.06); }
        .w2s-guide-submit {
          flex: 0 0 auto;
          height: 50px;
          padding: 0 28px;
          border-radius: 999px;
          border: 2px solid transparent;
          background-color: #000000;
          color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          font-size: 14.5px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color .25s ease, color .25s ease, transform .2s ease;
        }
        .w2s-guide-submit:hover {
          background-color: #FFFFFF;
          color: #000000;
          transform: translateY(-1px);
        }
        .w2s-guide-visual {
          flex: 1 1 50%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          min-width: 0;
          overflow: hidden;
          border-radius: 0 18px 18px 0;
          background: #FFFFFF;
        }
        .w2s-guide-visual img {
          width: 100%;
          height: 100%;
          max-height: 377px;
          object-fit: cover;
          object-position: left center;
          display: block;
        }

        /* Section 3 — tablet (hide image per user feedback; the copy card now reads as one clean unit) */
        @media (max-width: 1023px) {
          .w2s-guide { padding: 56px 0; }
          .w2s-guide-inner { flex-direction: column; padding-left: 24px; padding-right: 24px; }
          .w2s-guide-copy { border-radius: 18px; padding: 44px 36px; gap: 18px; }
          .w2s-guide-h2 { font-size: 28px; }
          .w2s-guide-lead { font-size: 14.5px; }
          .w2s-guide-visual { display: none; }
        }

        /* Section 3 — mobile (tighter top padding to shrink the gap after the Transition video) */
        @media (max-width: 639px) {
          .w2s-guide { padding: 12px 0 32px; }
          .w2s-guide-inner { padding-left: 15px; padding-right: 15px; }
          .w2s-guide-copy { border-radius: 14px 14px 0 0; padding: 32px 22px; gap: 14px; }
          .w2s-guide-h2 { font-size: 22px; line-height: 1.28; letter-spacing: -0.1px; }
          .w2s-guide-lead { font-size: 13.5px; line-height: 1.65; }
          .w2s-guide-form { flex-direction: column; gap: 10px; }
          .w2s-guide-input { height: 46px; font-size: 14px; flex-basis: auto; }
          .w2s-guide-submit { height: 46px; font-size: 14px; width: 100%; }
          .w2s-guide-visual { border-radius: 0 0 14px 14px; min-height: 220px; }
          .w2s-guide-visual img { max-height: 260px; }
        }

        /* Section 3 — 4K */
        @media (min-width: 1700px) {
          .w2s-guide { padding: 90px 0; }
          .w2s-guide-inner { max-width: 1600px; padding-left: 40px; padding-right: 40px; }
          .w2s-guide-copy { padding: 72px 72px; gap: 28px; border-radius: 24px 0 0 24px; }
          .w2s-guide-h2 { font-size: 48px; max-width: 640px; }
          .w2s-guide-lead { font-size: 18px; max-width: 640px; }
          .w2s-guide-form { max-width: 620px; gap: 16px; }
          .w2s-guide-input { height: 58px; font-size: 16px; padding: 0 26px; }
          .w2s-guide-submit { height: 58px; font-size: 16px; padding: 0 34px; }
          .w2s-guide-visual { border-radius: 0 24px 24px 0; }
          .w2s-guide-visual img { max-height: 580px; }
        }

        /* ============================================================
           SECTION 4 — The best-converting checkout on the planet
           ------------------------------------------------------------
           2-column row. Left: autoplay/looped Shop Pay checkout video.
           Right: heading + lead + black "Case Studies" pill CTA.
           ============================================================ */
        .w2s-checkout {
          background: #FFFFFF;
          padding: 60px 0;
        }
        .w2s-checkout-inner {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          padding-left: 40px;
          padding-right: 40px;
        }
        .w2s-checkout-visual {
          flex: 1 1 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }
        .w2s-checkout-visual video {
          width: 100%;
          height: auto;
          max-width: 560px;
          display: block;
        }
        .w2s-checkout-copy {
          flex: 1 1 50%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 10px;
          min-width: 0;
        }
        .w2s-checkout-h2 {
          color: #0F172A;
          font-size: 38px;
          font-weight: 500;
          line-height: 1.22;
          letter-spacing: -0.3px;
          margin: 0;
          max-width: 520px;
        }
        .w2s-checkout-lead {
          color: #334155;
          font-size: 16px;
          line-height: 1.7;
          margin: 0;
          max-width: 500px;
          font-weight: 400;
        }
        .w2s-checkout-cta,
        .w2s-checkout-cta:link,
        .w2s-checkout-cta:visited,
        .w2s-checkout-cta:focus,
        .w2s-checkout-cta:active {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          border-radius: 999px;
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          border: 2px solid transparent;
          background-image: linear-gradient(#000000, #000000), linear-gradient(#000000, #000000);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          transition: background-image .25s ease;
          align-self: flex-start;
          margin-top: 8px;
        }
        .w2s-checkout-cta:hover {
          color: #FFFFFF;
          background-image: linear-gradient(#000000, #000000), var(--brand-gradient);
        }

        /* Section 4 — tablet */
        @media (max-width: 1023px) {
          .w2s-checkout { padding: 56px 0; }
          .w2s-checkout-inner { flex-direction: column; gap: 36px; padding-left: 24px; padding-right: 24px; }
          .w2s-checkout-visual video { max-width: 520px; }
          .w2s-checkout-copy { max-width: none; text-align: center; align-items: center; }
          .w2s-checkout-h2 { font-size: 30px; max-width: none; }
          .w2s-checkout-lead { font-size: 15px; max-width: 640px; }
        }

        /* Section 4 — mobile */
        @media (max-width: 639px) {
          .w2s-checkout { padding: 40px 0; }
          .w2s-checkout-inner { gap: 28px; padding-left: 15px; padding-right: 15px; }
          .w2s-checkout-visual video { max-width: 100%; }
          .w2s-checkout-copy { gap: 18px; }
          .w2s-checkout-h2 { font-size: 22px; line-height: 1.28; letter-spacing: -0.1px; }
          .w2s-checkout-lead { font-size: 13.5px; line-height: 1.65; }
          .w2s-checkout-cta { padding: 14px 26px; font-size: 14px; }
        }

        /* Section 4 — 4K */
        @media (min-width: 1700px) {
          .w2s-checkout { padding: 90px 0; }
          .w2s-checkout-inner { max-width: 1600px; gap: 100px; padding-left: 40px; padding-right: 40px; }
          .w2s-checkout-visual video { max-width: 720px; }
          .w2s-checkout-copy { gap: 32px; }
          .w2s-checkout-h2 { font-size: 52px; max-width: 640px; }
          .w2s-checkout-lead { font-size: 18px; max-width: 640px; }
          .w2s-checkout-cta { padding: 18px 38px; font-size: 16px; }
        }

        /* ============================================================
           SECTION 5 — Shopify Plus is the world's most scalable
           ------------------------------------------------------------
           2-column row on cream/beige bg. Left: heading + divider + 7
           icon-text list items. Right: build-step admin image with
           rounded corners.
           ============================================================ */
        .w2s-scalable {
          background: #FBF7ED;
          padding: 60px 0;
        }
        .w2s-scalable-inner {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          padding-left: 40px;
          padding-right: 40px;
        }
        .w2s-scalable-copy {
          flex: 1 1 50%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 10px;
          min-width: 0;
        }
        .w2s-scalable-h2 {
          color: #0F172A;
          font-size: 36px;
          font-weight: 500;
          line-height: 1.22;
          letter-spacing: -0.3px;
          margin: 0;
          max-width: 520px;
        }
        .w2s-scalable-divider {
          border: 0;
          border-top: 1px solid #D1D5DB;
          margin: 0 0 4px;
          width: 100%;
          max-width: 520px;
        }
        .w2s-scalable-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .w2s-scalable-item {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .w2s-scalable-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #0F172A;
        }
        .w2s-scalable-title {
          color: #0F172A;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          margin: 0;
        }
        .w2s-scalable-visual {
          flex: 1 1 50%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          min-width: 0;
        }
        .w2s-scalable-visual img {
          width: 100%;
          height: auto;
          max-width: 540px;
          display: block;
          border-radius: 18px;
        }

        /* Section 5 — tablet (hide OLAPLEX image per user feedback; text-only at 768) */
        @media (max-width: 1023px) {
          .w2s-scalable { padding: 56px 0; }
          .w2s-scalable-inner { flex-direction: column; gap: 36px; padding-left: 24px; padding-right: 24px; }
          .w2s-scalable-copy { max-width: 640px; }
          .w2s-scalable-h2 { font-size: 28px; max-width: none; }
          .w2s-scalable-visual { display: none; }
          .w2s-scalable-divider { max-width: none; }
          .w2s-scalable-list { gap: 18px; }
          .w2s-scalable-icon { width: 40px; height: 40px; }
          .w2s-scalable-visual { justify-content: center; }
          .w2s-scalable-visual img { max-width: 520px; }
        }

        /* Section 5 — mobile */
        @media (max-width: 639px) {
          .w2s-scalable { padding: 40px 0; }
          .w2s-scalable-inner { gap: 28px; padding-left: 15px; padding-right: 15px; }
          .w2s-scalable-h2 { font-size: 22px; line-height: 1.28; letter-spacing: -0.1px; }
          .w2s-scalable-list { gap: 16px; }
          .w2s-scalable-item { gap: 14px; }
          .w2s-scalable-icon { width: 36px; height: 36px; }
          .w2s-scalable-icon svg { width: 22px; height: 22px; }
          .w2s-scalable-title { font-size: 14px; }
          .w2s-scalable-visual img { max-width: 100%; border-radius: 14px; }
        }

        /* Section 5 — 4K */
        @media (min-width: 1700px) {
          .w2s-scalable { padding: 90px 0; }
          .w2s-scalable-inner { max-width: 1600px; gap: 100px; padding-left: 40px; padding-right: 40px; }
          .w2s-scalable-copy { gap: 26px; }
          .w2s-scalable-h2 { font-size: 48px; max-width: 680px; }
          .w2s-scalable-divider { max-width: 680px; }
          .w2s-scalable-list { gap: 28px; }
          .w2s-scalable-icon { width: 52px; height: 52px; }
          .w2s-scalable-icon svg { width: 32px; height: 32px; }
          .w2s-scalable-title { font-size: 18px; }
          .w2s-scalable-visual img { max-width: 680px; border-radius: 22px; }
        }

        /* ============================================================
           SECTION 6 — Why Shopify is Better Than WooCommerce
           ------------------------------------------------------------
           White section bg. Centered H2 (with "Shopify is Better" bold)
           + lead. Then a 2-column grid of cream comparison cards.
           Each card: small icon+label tag, h3 title, body, optional
           sub-title + sub-body, image at bottom.
           ============================================================ */
        .w2s-compare {
          background: #FFFFFF;
          padding: 60px 0;
        }
        .w2s-compare-inner {
          flex-direction: column;
          align-items: center;
          gap: 26px;
          padding-left: 40px;
          padding-right: 40px;
        }
        .w2s-compare-h2 {
          color: #0F172A;
          font-size: 38px;
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: -0.2px;
          text-align: center;
          max-width: 1000px;
          margin: 0;
        }
        .w2s-compare-h2 strong { font-weight: 700; }
        .w2s-compare-lead {
          color: #334155;
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          max-width: 760px;
          margin: 0;
        }
        .w2s-compare-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-top: 10px;
        }
        .w2s-compare-card {
          background: #FBF7ED;
          border-radius: 18px;
          padding: 36px 36px 36px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .w2s-compare-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .w2s-compare-tag-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #B18945;
        }
        .w2s-compare-tag-label {
          color: #0F172A;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.1px;
        }
        .w2s-compare-title {
          color: #0F172A;
          font-size: 30px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.3px;
          margin: 0;
        }
        .w2s-compare-body {
          color: #334155;
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
        }
        .w2s-compare-subtitle {
          color: #0F172A;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
          margin: 8px 0 0;
        }
        .w2s-compare-image {
          margin-top: auto;
          padding-top: 12px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .w2s-compare-image img {
          width: 100%;
          height: auto;
          max-width: 100%;
          display: block;
          border-radius: 10px;
        }
        .w2s-compare-image--support {
          position: relative;
        }
        .w2s-compare-logo-overlay {
          position: absolute;
          /* matches the white rounded box in wc-support.webp (946x638) */
          top: 39%;
          left: 77%;
          width: 14.5%;
          aspect-ratio: 1 / 1;
          background: #FFFFFF;
          border-radius: 18%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(15,23,42,0.12);
        }
        .w2s-compare-logo-overlay img {
          width: 62%;
          height: auto;
          display: block;
          border-radius: 0;
        }
        .w2s-compare-features {
          list-style: none;
          padding: 0;
          margin: 6px 0 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .w2s-compare-features li {
          border-left: 2px solid #B18945;
          padding: 2px 0 2px 14px;
        }
        .w2s-compare-feat-title {
          color: #0F172A;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
          margin: 0 0 6px;
        }
        .w2s-compare-feat-body {
          color: #334155;
          font-size: 14px;
          line-height: 1.65;
          margin: 0;
        }
        .w2s-compare-quote {
          background: rgba(255,255,255,0.6);
          border-radius: 12px;
          padding: 18px 20px;
          margin: 6px 0 0;
          border-left: 3px solid #B18945;
        }
        .w2s-compare-quote p {
          color: #0F172A;
          font-size: 14.5px;
          line-height: 1.65;
          margin: 0 0 14px;
          font-style: italic;
        }
        .w2s-compare-quote-attr {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #0F172A;
        }
        .w2s-compare-quote-attr img {
          width: 38px;
          height: 38px;
          border-radius: 999px;
          object-fit: cover;
          display: block;
        }
        .w2s-compare-quote-attr span {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }
        .w2s-compare-quote-attr strong {
          font-size: 14px;
          font-weight: 700;
        }
        .w2s-compare-quote-attr em {
          font-size: 13px;
          font-style: normal;
          color: #475569;
        }
        .w2s-compare-card--full {
          grid-column: 1 / -1;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
        }
        .w2s-compare-card--full .w2s-compare-quote {
          background: #FBF7ED;
        }
        /* Split card: 2-column inner layout with image on one side */
        .w2s-compare-card--split {
          flex-direction: row;
          align-items: stretch;
          gap: 40px;
          padding: 0;
          overflow: hidden;
        }
        .w2s-compare-card--split.w2s-compare-card--reverse { flex-direction: row-reverse; }
        /* JESSAKAE card: image fills its column edge-to-edge (image already has lavender bg baked in) */
        .w2s-compare-card--jessakae .w2s-compare-jessakae-visual {
          padding: 0;
          background: transparent;
          overflow: hidden;
        }
        .w2s-compare-jessakae-visual img {
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        /* Tablet: image needs a definite aspect ratio when stacked vertically so it doesn't collapse */
        @media (max-width: 1023px) {
          .w2s-compare-jessakae-visual {
            aspect-ratio: 4 / 3;
            max-height: 480px;
          }
          .w2s-compare-jessakae-visual img {
            height: 100%;
            min-height: 320px;
          }
        }
        .w2s-compare-split-copy {
          flex: 1 1 45%;
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 40px 36px;
          justify-content: center;
        }
        .w2s-compare-split-visual {
          flex: 1 1 55%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }
        /* First split card (Mobile opt → Customization): cream */
        .w2s-compare-card--split:not(.w2s-compare-card--reverse):not(.w2s-compare-card--jessakae):not(.w2s-compare-card--implement):not(.w2s-compare-card--global) {
          background: #FBF7ED;
          border: 0;
        }
        /* JESSAKAE/Ecosystem, Implementation, Global split cards: pure white */
        .w2s-compare-card--jessakae,
        .w2s-compare-card--implement,
        .w2s-compare-card--global {
          background: #FFFFFF;
        }
        /* Implementation: 2 separate cards side by side with a gap */
        .w2s-implement-row {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.4fr);
          gap: 28px;
          width: 100%;
        }
        .w2s-implement-info {
          background: #FFFFFF;
          border: 0;
          padding: 36px 36px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-radius: 18px;
        }
        .w2s-implement-quote-card {
          background: #FFFFFF;
          border: 0;
          padding: 36px 40px;
          display: flex;
          align-items: center;
          border-radius: 18px;
        }
        .w2s-implement-quote-card .w2s-compare-quote--plain {
          width: 100%;
        }
        @media (max-width: 1023px) {
          .w2s-implement-row { grid-template-columns: 1fr; gap: 18px; }
          .w2s-implement-info, .w2s-implement-quote-card { padding: 28px 26px; }
        }
        @media (max-width: 639px) {
          .w2s-implement-row { gap: 14px; }
          .w2s-implement-info, .w2s-implement-quote-card { padding: 22px 20px; border-radius: 14px; }
        }

        /* Implementation: plain quote on the right (no inset background) */
        .w2s-compare-implement-quote {
          flex: 1 1 60%;
          display: flex;
          align-items: center;
          padding: 40px 36px;
          min-width: 0;
        }
        .w2s-compare-quote--plain {
          background: transparent;
          border-left: 0;
          padding: 0;
          margin: 0;
        }
        .w2s-compare-quote--plain p {
          font-size: 16px;
          line-height: 1.65;
          color: #0F172A;
          font-style: normal;
          margin: 0 0 22px;
        }
        /* Global: OLAPLEX image fills the right column */
        .w2s-compare-global-visual {
          padding: 36px;
          align-items: center;
          justify-content: center;
        }
        .w2s-compare-global-visual img {
          width: 100%;
          height: auto;
          max-width: 540px;
          display: block;
          border-radius: 16px;
        }

        @media (max-width: 1023px) {
          .w2s-compare-implement-quote { padding: 28px 26px; }
          .w2s-compare-global-visual { padding: 28px; }
          .w2s-compare-global-visual img { max-width: 100%; }
        }
        @media (max-width: 639px) {
          .w2s-compare-implement-quote { padding: 24px 20px; }
          .w2s-compare-quote--plain p { font-size: 14px; margin-bottom: 16px; }
          .w2s-compare-global-visual { padding: 20px; }
          .w2s-compare-global-visual img { border-radius: 12px; }
        }
        /* Mobile mockup 2-column vertical scroll */
        .w2s-compare-mobile-grid {
          flex: 1 1 55%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding: 24px 40px;
          height: 360px;
          overflow: hidden;
          align-items: stretch;
        }
        .w2s-compare-mobile-col {
          height: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
        }
        .w2s-compare-mobile-col:first-child { justify-content: flex-end; }
        .w2s-compare-mobile-col:last-child { justify-content: flex-start; }
        .w2s-compare-mobile-col--offset .w2s-compare-mobile-track {
          margin-top: -90px;
        }
        .w2s-compare-mobile-track {
          display: flex;
          flex-direction: column;
          animation: w2s-compare-vscroll 5s linear infinite;
          will-change: transform;
          width: 48%;
        }
        .w2s-compare-mobile-track--reverse {
          animation-name: w2s-compare-vscroll-reverse;
        }
        /* Pause only the hovered column's track; the other keeps moving */
        .w2s-compare-mobile-col:hover .w2s-compare-mobile-track {
          animation-play-state: paused;
        }
        .w2s-compare-mobile-track img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 18px;
          box-shadow: 0 8px 22px rgba(15, 23, 42, 0.12);
          flex-shrink: 0;
          margin-bottom: 24px;
        }
        @keyframes w2s-compare-vscroll {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes w2s-compare-vscroll-reverse {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .w2s-compare-mobile-track { animation: none; }
        }

        /* Section 6 split — tablet */
        @media (max-width: 1023px) {
          .w2s-compare-card--split,
          .w2s-compare-card--split.w2s-compare-card--reverse { flex-direction: column; gap: 0; }
          .w2s-compare-split-copy { padding: 32px 26px; }
          .w2s-compare-mobile-grid {
            flex: 0 0 auto;
            height: 1100px;
            min-height: 1100px;
            max-height: 1100px;
            padding: 18px 24px;
          }
          .w2s-compare-mobile-col--offset .w2s-compare-mobile-track { margin-top: -160px; }
        }
        @media (max-width: 639px) {
          .w2s-compare-split-copy { padding: 24px 20px; gap: 14px; }
          .w2s-compare-mobile-grid {
            flex: 0 0 auto;
            padding: 14px 18px;
            gap: 10px;
            height: 500px;
            min-height: 500px;
            max-height: 500px;
          }
          .w2s-compare-mobile-track img { border-radius: 12px; }
        }

        /* Section 6 — tablet */
        @media (max-width: 1023px) {
          .w2s-compare { padding: 56px 0; }
          .w2s-compare-inner { padding-left: 24px; padding-right: 24px; gap: 22px; }
          .w2s-compare-h2 { font-size: 30px; }
          .w2s-compare-lead { font-size: 15px; }
          .w2s-compare-grid { grid-template-columns: 1fr; gap: 22px; }
          .w2s-compare-card { padding: 30px 26px; }
          .w2s-compare-title { font-size: 26px; }
        }

        /* Section 6 — mobile */
        @media (max-width: 639px) {
          .w2s-compare { padding: 40px 0; }
          .w2s-compare-inner { padding-left: 15px; padding-right: 15px; gap: 18px; }
          .w2s-compare-h2 { font-size: 22px; letter-spacing: -0.1px; line-height: 1.28; }
          .w2s-compare-lead { font-size: 13.5px; line-height: 1.65; }
          .w2s-compare-grid { gap: 18px; }
          .w2s-compare-card { padding: 24px 20px; border-radius: 14px; gap: 14px; }
          .w2s-compare-title { font-size: 22px; }
          .w2s-compare-body { font-size: 13.5px; line-height: 1.65; }
          .w2s-compare-subtitle { font-size: 16px; }
        }

        /* Section 6 — 4K */
        @media (min-width: 1700px) {
          .w2s-compare { padding: 90px 0; }
          .w2s-compare-inner { max-width: 1600px; gap: 36px; padding-left: 40px; padding-right: 40px; }
          .w2s-compare-h2 { font-size: 56px; max-width: 1280px; }
          .w2s-compare-lead { font-size: 18px; max-width: 880px; }
          .w2s-compare-grid { gap: 36px; }
          .w2s-compare-card { padding: 48px 44px; gap: 20px; border-radius: 24px; }
          .w2s-compare-title { font-size: 38px; }
          .w2s-compare-body { font-size: 16.5px; line-height: 1.75; }
          .w2s-compare-subtitle { font-size: 22px; }
        }

        /* ============================================================
           Standalone follow-up sections (each its own <section> after
           Section 6, wrapping a single .w2s-compare-card--split card)
           ============================================================ */
        .w2s-followup {
          background: #FBF7ED;
          padding: 20px 0;
        }
        .w2s-followup.w2s-followup--white {
          background: #FFFFFF;
        }
        .w2s-followup-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 10px 40px;
        }

        @media (max-width: 1023px) {
          .w2s-followup { padding: 16px 0; }
          .w2s-followup-inner { padding: 10px 24px; }
        }
        @media (max-width: 639px) {
          .w2s-followup { padding: 12px 0; }
          .w2s-followup-inner { padding: 8px 15px; }
        }
        @media (min-width: 1700px) {
          .w2s-followup { padding: 28px 0; }
          .w2s-followup-inner { max-width: 1600px; padding: 10px 40px; }
        }

        /* ============================================================
           SECTION 7 — Our Process (Plan → Design → Develop → Deploy → AB Testing)
           ------------------------------------------------------------
           White section. Centered H2. Horizontal scroll list with 5 steps.
           Each step: square icon box with gold accent dot at top-left,
           title, body. Dashed connector line between consecutive steps.
           Scroll: native overflow-x with hidden scrollbar.
           ============================================================ */
        .w2s-process {
          background: #FFFFFF;
          padding: 60px 0;
        }
        .w2s-process-inner {
          flex-direction: column;
          align-items: stretch;
          gap: 24px;
          padding-left: 40px;
          padding-right: 40px;
        }
        .w2s-process-h2 {
          color: #0F172A;
          font-size: 38px;
          font-weight: 500;
          line-height: 1.25;
          letter-spacing: -0.2px;
          text-align: center;
          margin: 0;
        }
        .w2s-process-scroll {
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 20px 0 30px;
        }
        .w2s-process-scroll::-webkit-scrollbar { display: none; }
        .w2s-process-list {
          list-style: none;
          padding: 0 10px;
          margin: 0;
          display: flex;
          gap: 60px;
          width: max-content;
        }
        .w2s-process-item {
          min-width: 340px;
          max-width: 380px;
          flex-shrink: 0;
          position: relative;
          text-align: left;
        }
        /* Dashed connector line between consecutive process items */
        .w2s-process-item:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 34px;
          left: calc(100% + 8px);
          width: 44px;
          height: 2px;
          background-image: repeating-linear-gradient(
            to right,
            #B18945 0,
            #B18945 6px,
            transparent 6px,
            transparent 12px
          );
        }
        .w2s-process-icon-wrap {
          width: 70px;
          height: 70px;
          margin: 14px 14px 24px 0;
          position: relative;
          overflow: visible;
        }
        .w2s-process-icon-svg {
          width: 70px;
          height: 70px;
          border: 2.5px solid #0F172A;
          border-radius: 8px;
          background: #FFFFFF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          color: #0F172A;
        }
        .w2s-process-icon-dot {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 30px;
          height: 30px;
          background-color: #B18945;
          background-image: var(--brand-gradient);
          border-radius: 999px;
          z-index: 1;
        }
        .w2s-process-title {
          color: #0F172A;
          font-size: 24px;
          font-weight: 500;
          line-height: 1.2;
          margin: 0 0 14px;
        }
        .w2s-process-body {
          color: rgba(15, 23, 42, 0.82);
          font-size: 15px;
          line-height: 1.65;
          margin: 0;
        }
        .w2s-process-body strong {
          color: #0F172A;
          font-weight: 600;
        }

        /* Section 7 — tablet (tighten items so 3 fit across 768) */
        @media (max-width: 1023px) {
          .w2s-process { padding: 56px 0; }
          .w2s-process-inner { padding-left: 24px; padding-right: 24px; }
          .w2s-process-h2 { font-size: 30px; }
          .w2s-process-list { gap: 22px; padding: 0 2px; }
          .w2s-process-item { min-width: 218px; max-width: 230px; }
          .w2s-process-item:not(:last-child)::after { width: 18px; left: calc(100% + 2px); }
          .w2s-process-title { font-size: 20px; }
          .w2s-process-body { font-size: 13.5px; }
          .w2s-process-icon-wrap, .w2s-process-icon-svg { width: 60px; height: 60px; }
        }

        /* Section 7 — mobile: stack all 5 pillars vertically so every step is visible without horizontal-scroll cropping */
        @media (max-width: 639px) {
          .w2s-process { padding: 40px 0; }
          .w2s-process-inner { padding-left: 15px; padding-right: 15px; gap: 18px; }
          .w2s-process-h2 { font-size: 22px; }
          .w2s-process-scroll { overflow: visible; padding: 8px 0; }
          .w2s-process-list {
            flex-direction: column;
            width: 100%;
            gap: 28px;
            padding: 0;
          }
          .w2s-process-item {
            min-width: 0;
            max-width: 100%;
            width: 100%;
          }
          /* Dashed connectors don't make sense in a vertical stack — hide them */
          .w2s-process-item:not(:last-child)::after { display: none; }
          .w2s-process-icon-wrap, .w2s-process-icon-svg { width: 60px; height: 60px; }
          .w2s-process-icon-wrap { margin: 14px 14px 16px 0; }
          .w2s-process-title { font-size: 20px; }
          .w2s-process-body { font-size: 13.5px; }
        }

        /* Section 7 — 4K */
        @media (min-width: 1700px) {
          .w2s-process { padding: 90px 0; }
          .w2s-process-inner { max-width: 1600px; padding-left: 40px; padding-right: 40px; gap: 36px; }
          .w2s-process-h2 { font-size: 52px; }
          .w2s-process-list { gap: 80px; }
          .w2s-process-item { min-width: 420px; max-width: 460px; }
          .w2s-process-item:not(:last-child)::after { width: 60px; }
          .w2s-process-icon-wrap, .w2s-process-icon-svg { width: 84px; height: 84px; }
          .w2s-process-icon-dot { width: 26px; height: 26px; }
          .w2s-process-title { font-size: 30px; }
          .w2s-process-body { font-size: 16.5px; }
        }

        /* ============================================================
           SECTION 8 — What data do we transfer?
           ------------------------------------------------------------
           Cream/beige section. 2 columns: left image (woman with tablet),
           right copy: heading + lead + 2-column grid of 12 data items,
           each row separated by a thin border line.
           ============================================================ */
        .w2s-data {
          background: #FBF7ED;
          padding: 60px 0;
        }
        .w2s-data-inner {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          padding-left: 40px;
          padding-right: 40px;
        }
        .w2s-data-visual {
          flex: 1 1 45%;
          min-width: 0;
          display: flex;
          justify-content: flex-start;
        }
        .w2s-data-visual img {
          width: 100%;
          height: auto;
          max-width: 580px;
          display: block;
          border-radius: 22px;
          object-fit: cover;
        }
        .w2s-data-copy {
          flex: 1 1 55%;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 10px;
        }
        .w2s-data-h2 {
          color: #0F172A;
          font-size: 38px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.3px;
          margin: 0;
        }
        .w2s-data-lead {
          color: #334155;
          font-size: 15.5px;
          line-height: 1.7;
          margin: 0;
          max-width: 620px;
        }
        .w2s-data-grid {
          list-style: none;
          padding: 0;
          margin: 8px 0 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-top: 1px solid #D6CCB1;
        }
        .w2s-data-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 4px;
          border-bottom: 1px solid #D6CCB1;
        }
        .w2s-data-item:nth-child(odd) {
          padding-right: 24px;
          border-right: 1px solid #D6CCB1;
        }
        .w2s-data-icon {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #0F172A;
          width: 30px;
          height: 30px;
        }
        .w2s-data-label {
          color: #0F172A;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.3;
        }

        /* Section 8 — tablet */
        @media (max-width: 1023px) {
          .w2s-data { padding: 56px 0; }
          .w2s-data-inner { flex-direction: column; gap: 36px; padding-left: 24px; padding-right: 24px; }
          .w2s-data-visual { justify-content: center; }
          .w2s-data-visual img { max-width: 520px; }
          .w2s-data-h2 { font-size: 28px; }
          .w2s-data-lead { font-size: 14.5px; }
        }

        /* Section 8 — mobile */
        @media (max-width: 639px) {
          .w2s-data { padding: 40px 0; }
          .w2s-data-inner { gap: 28px; padding-left: 15px; padding-right: 15px; }
          .w2s-data-visual img { max-width: 100%; border-radius: 16px; }
          .w2s-data-copy { gap: 14px; }
          .w2s-data-h2 { font-size: 22px; letter-spacing: -0.1px; }
          .w2s-data-lead { font-size: 13.5px; line-height: 1.65; }
          .w2s-data-item { padding: 14px 4px; gap: 10px; }
          .w2s-data-item:nth-child(odd) { padding-right: 12px; }
          .w2s-data-icon { width: 24px; height: 24px; }
          .w2s-data-icon svg { width: 18px; height: 18px; }
          .w2s-data-label { font-size: 13.5px; }
        }

        /* Section 8 — 4K */
        @media (min-width: 1700px) {
          .w2s-data { padding: 90px 0; }
          .w2s-data-inner { max-width: 1600px; gap: 100px; padding-left: 40px; padding-right: 40px; }
          .w2s-data-visual img { max-width: 720px; border-radius: 26px; }
          .w2s-data-copy { gap: 28px; }
          .w2s-data-h2 { font-size: 52px; }
          .w2s-data-lead { font-size: 18px; max-width: 720px; }
          .w2s-data-item { padding: 22px 4px; gap: 18px; }
          .w2s-data-icon { width: 36px; height: 36px; }
          .w2s-data-icon svg { width: 26px; height: 26px; }
          .w2s-data-label { font-size: 18px; }
        }

        /* ============================================================
           SECTION 9 — Not Our First Rodeo (autoplay case-study carousel)
           ------------------------------------------------------------
           White section, centered heading + lead, then a carousel with
           2 visible slides at a time, prev/next round buttons on the
           sides, autoplay 5s, infinite loop, pause on hover.
           ============================================================ */
        .w2s-rodeo-section {
          background: #FFFFFF;
          padding: 60px 0;
        }
        .w2s-rodeo-inner {
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding-left: 40px;
          padding-right: 40px;
        }
        .w2s-rodeo-h2 {
          color: #0F172A;
          font-size: 42px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.3px;
          text-align: center;
          margin: 0;
        }
        .w2s-rodeo-lead {
          color: #334155;
          font-size: 15.5px;
          line-height: 1.7;
          text-align: center;
          max-width: 1080px;
          margin: 0 0 14px;
        }

        .w2s-rodeo {
          position: relative;
          width: 100%;
        }
        .w2s-rodeo-viewport {
          width: 100%;
          overflow: hidden;
        }
        .w2s-rodeo-track {
          display: flex;
          align-items: stretch;
          will-change: transform;
        }
        .w2s-rodeo-cell {
          flex: 0 0 auto;
          box-sizing: border-box;
          padding: 0 12px;
        }
        .w2s-rodeo-slide {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 14px;
        }
        .w2s-rodeo-btn,
        .w2s-rodeo-btn:link,
        .w2s-rodeo-btn:visited,
        .w2s-rodeo-btn:focus,
        .w2s-rodeo-btn:active {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 0;
          background: #0F172A;
          color: #FFFFFF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          transition: background-color .25s ease, transform .2s ease;
        }
        .w2s-rodeo-btn:hover {
          background: #FFFFFF;
          color: #0F172A;
          box-shadow: 0 0 0 2px #0F172A inset;
        }
        .w2s-rodeo-btn--prev { left: -18px; }
        .w2s-rodeo-btn--next { right: -18px; }

        /* Section 9 — tablet */
        @media (max-width: 1023px) {
          .w2s-rodeo-section { padding: 56px 0; }
          .w2s-rodeo-inner { padding-left: 24px; padding-right: 24px; }
          .w2s-rodeo-h2 { font-size: 32px; }
          .w2s-rodeo-lead { font-size: 14.5px; }
          .w2s-rodeo-track { gap: 18px; }
          .w2s-rodeo-btn { width: 40px; height: 40px; }
          .w2s-rodeo-btn--prev { left: -10px; }
          .w2s-rodeo-btn--next { right: -10px; }
        }

        /* Section 9 — mobile */
        @media (max-width: 639px) {
          .w2s-rodeo-section { padding: 40px 0; }
          .w2s-rodeo-inner { gap: 16px; padding-left: 15px; padding-right: 15px; }
          .w2s-rodeo-h2 { font-size: 24px; }
          .w2s-rodeo-lead { font-size: 13.5px; line-height: 1.65; }
          .w2s-rodeo-btn { width: 36px; height: 36px; }
          .w2s-rodeo-btn svg { width: 18px; height: 18px; }
          .w2s-rodeo-btn--prev { left: 4px; }
          .w2s-rodeo-btn--next { right: 4px; }
        }

        /* Section 9 — 4K */
        @media (min-width: 1700px) {
          .w2s-rodeo-section { padding: 90px 0; }
          .w2s-rodeo-inner { max-width: 1600px; gap: 28px; padding-left: 40px; padding-right: 40px; }
          .w2s-rodeo-h2 { font-size: 56px; }
          .w2s-rodeo-lead { font-size: 18px; max-width: 1280px; }
          .w2s-rodeo-track { gap: 32px; }
          .w2s-rodeo-btn { width: 52px; height: 52px; }
          .w2s-rodeo-btn svg { width: 26px; height: 26px; }
          .w2s-rodeo-btn--prev { left: -22px; }
          .w2s-rodeo-btn--next { right: -22px; }
        }

        /* ============================================================
           SECTION 10 — Our Valued Partners
           ------------------------------------------------------------
           White section, centered heading + lead, then a 5-column logo
           grid (14 logos in a 5x3 layout with the center cell empty —
           explicitly NO Ecomm Wizards box in the middle).
           ============================================================ */
        .w2s-partners {
          background: #FFFFFF;
          padding: 60px 0;
        }
        .w2s-partners-inner {
          flex-direction: column;
          align-items: center;
          gap: 22px;
          padding-left: 40px;
          padding-right: 40px;
        }
        .w2s-partners-h2 {
          color: #0F172A;
          font-size: 38px;
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: -0.2px;
          text-align: center;
          margin: 0;
        }
        .w2s-partners-h2 strong { font-weight: 700; }
        .w2s-partners-lead {
          color: #334155;
          font-size: 15.5px;
          line-height: 1.7;
          text-align: center;
          max-width: 1080px;
          margin: 0 0 20px;
        }
        .w2s-partners-lead strong { color: #0F172A; font-weight: 600; }
        .w2s-partners-grid {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 56px;
        }
        .w2s-partners-row {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 40px;
          width: 100%;
        }
        .w2s-partners-cell {
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
          width: 0;
          min-width: 0;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .w2s-partners-cell img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }

        /* Section 10 — tablet (768): flatten all 14 logos into ONE 3-col grid by using display: contents on the row wrappers */
        @media (max-width: 1023px) {
          .w2s-partners { padding: 56px 0; }
          .w2s-partners-inner { padding-left: 24px; padding-right: 24px; }
          .w2s-partners-h2 { font-size: 30px; }
          .w2s-partners-lead { font-size: 14.5px; }
          .w2s-partners-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px 24px;
          }
          .w2s-partners-row { display: contents; }
          .w2s-partners-cell { flex: none; width: 100%; height: 52px; }
        }

        /* Section 10 — mobile (430): flat 2-col grid */
        @media (max-width: 639px) {
          .w2s-partners { padding: 40px 0; }
          .w2s-partners-inner { gap: 16px; padding-left: 15px; padding-right: 15px; }
          .w2s-partners-h2 { font-size: 22px; }
          .w2s-partners-lead { font-size: 13.5px; line-height: 1.65; }
          .w2s-partners-grid { grid-template-columns: repeat(2, 1fr); gap: 22px 16px; }
          .w2s-partners-cell { height: 40px; }
        }

        /* Section 10 — 4K */
        @media (min-width: 1700px) {
          .w2s-partners { padding: 90px 0; }
          .w2s-partners-inner { max-width: 1600px; gap: 32px; padding-left: 40px; padding-right: 40px; }
          .w2s-partners-h2 { font-size: 52px; }
          .w2s-partners-lead { font-size: 18px; max-width: 1280px; }
          .w2s-partners-grid { gap: 72px; }
          .w2s-partners-row { gap: 56px; }
          .w2s-partners-cell { height: 76px; }
        }

        /* ============================================================
           SECTION 11 — Built with Shopify Customizer
           ------------------------------------------------------------
           Cream/beige section. Centered heading + lead, then a carousel
           with 3 customizer screen mockups (desktop background image
           with a mobile mockup overlay positioned bottom-right). Caption
           below each slide. Round black prev/next buttons on the sides.
           ============================================================ */
        .w2s-customizer {
          background: #FBF7ED;
          padding: 60px 0;
        }
        .w2s-customizer-inner {
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding-left: 40px;
          padding-right: 40px;
        }
        .w2s-customizer-h2 {
          color: #0F172A;
          font-size: 42px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.3px;
          text-align: center;
          margin: 0;
        }
        .w2s-customizer-lead {
          color: #334155;
          font-size: 15.5px;
          line-height: 1.7;
          text-align: center;
          max-width: 880px;
          margin: 0 0 14px;
        }

        .w2s-cust {
          position: relative;
          width: 100%;
        }
        .w2s-cust-viewport {
          width: 100%;
          overflow: hidden;
        }
        .w2s-cust-track {
          display: flex;
          align-items: stretch;
          will-change: transform;
        }
        .w2s-cust-cell {
          flex: 0 0 auto;
          box-sizing: border-box;
          padding: 0 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .w2s-cust-stage {
          position: relative;
          width: 100%;
          max-width: 1000px;
          aspect-ratio: 16 / 9.6;
        }
        .w2s-cust-desktop {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .w2s-cust-mobile {
          position: absolute;
          right: 3%;
          bottom: -8%;
          width: 22%;
          height: auto;
          display: block;
          filter: drop-shadow(0 18px 36px rgba(15, 23, 42, 0.18));
        }
        .w2s-cust-caption {
          color: #0F172A;
          font-size: 18px;
          font-weight: 500;
          text-align: center;
          margin: 36px 0 0;
        }
        .w2s-cust-btn,
        .w2s-cust-btn:link,
        .w2s-cust-btn:visited,
        .w2s-cust-btn:focus,
        .w2s-cust-btn:active {
          position: absolute;
          top: 42%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: 999px;
          border: 0;
          background: #0F172A;
          color: #FFFFFF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          transition: background-color .25s ease;
        }
        .w2s-cust-btn:hover {
          background: #FFFFFF;
          color: #0F172A;
          box-shadow: 0 0 0 2px #0F172A inset;
        }
        .w2s-cust-btn--prev { left: -20px; }
        .w2s-cust-btn--next { right: -20px; }

        @media (max-width: 1023px) {
          .w2s-customizer { padding: 56px 0; }
          .w2s-customizer-inner { padding-left: 24px; padding-right: 24px; }
          .w2s-customizer-h2 { font-size: 32px; }
          .w2s-customizer-lead { font-size: 14.5px; }
          .w2s-cust-caption { font-size: 16px; margin-top: 24px; }
          .w2s-cust-btn { width: 44px; height: 44px; }
          .w2s-cust-btn--prev { left: -10px; }
          .w2s-cust-btn--next { right: -10px; }
        }

        @media (max-width: 639px) {
          .w2s-customizer { padding: 40px 0; }
          .w2s-customizer-inner { gap: 16px; padding-left: 15px; padding-right: 15px; }
          .w2s-customizer-h2 { font-size: 24px; }
          .w2s-customizer-lead { font-size: 13.5px; line-height: 1.65; }
          .w2s-cust-caption { font-size: 14.5px; margin-top: 18px; }
          .w2s-cust-mobile { width: 28%; bottom: -4%; }
          .w2s-cust-btn { width: 36px; height: 36px; }
          .w2s-cust-btn svg { width: 18px; height: 18px; }
          .w2s-cust-btn--prev { left: -4px; }
          .w2s-cust-btn--next { right: -4px; }
        }

        @media (min-width: 1700px) {
          .w2s-customizer { padding: 90px 0; }
          .w2s-customizer-inner { max-width: 1600px; gap: 28px; padding-left: 40px; padding-right: 40px; }
          .w2s-customizer-h2 { font-size: 56px; }
          .w2s-customizer-lead { font-size: 18px; max-width: 1080px; }
          .w2s-cust-stage { max-width: 1200px; }
          .w2s-cust-caption { font-size: 22px; margin-top: 44px; }
          .w2s-cust-btn { width: 64px; height: 64px; }
          .w2s-cust-btn svg { width: 28px; height: 28px; }
          .w2s-cust-btn--prev { left: -24px; }
          .w2s-cust-btn--next { right: -24px; }
        }

        /* ============================================================
           SMALL-LAPTOP TWEAKS (1024–1280)
           ------------------------------------------------------------
           At 1024px laptop viewports the 2-col layouts can feel tight.
           These overrides give each column a bit more room without
           collapsing the grid.
           ============================================================ */
        @media (min-width: 1024px) and (max-width: 1280px) {
          /* Hero: shrink copy slightly so the visual gets more space */
          .w2s-hero-inner { gap: 32px; padding-left: 32px; padding-right: 32px; }
          .w2s-hero-copy { flex: 1 1 460px; max-width: 520px; }
          /* Hero image: don't bleed past the viewport edge; align to the LEFT of the visual column so every mockup card stays visible */
          .w2s-hero-visual { justify-content: flex-start; padding: 10px 0; }
          .w2s-hero-visual img { margin-right: 0; width: 100%; max-width: 100%; }

          /* Compare grid: smaller card padding so body text has room */
          .w2s-compare-card { padding: 30px 28px; }
          .w2s-compare-title { font-size: 26px; }
          .w2s-compare-body { font-size: 14.5px; }
          .w2s-compare-grid { gap: 24px; }

          /* Free guide / Best-converting / Scalable / Global / Data / Process: tighter gaps */
          .w2s-guide-inner,
          .w2s-checkout-inner,
          .w2s-scalable-inner,
          .w2s-data-inner,
          .w2s-process-inner { padding-left: 32px; padding-right: 32px; }
          .w2s-checkout-inner { gap: 48px; }
          .w2s-scalable-inner { gap: 48px; }
          .w2s-data-inner { gap: 48px; }

          /* Customizer + Rodeo carousel arrows tucked closer */
          .w2s-cust-btn--prev,
          .w2s-rodeo-btn--prev { left: -10px; }
          .w2s-cust-btn--next,
          .w2s-rodeo-btn--next { right: -10px; }

          /* Our Process: tighten items so 3 fit fully, 4th hints at horizontal scroll */
          .w2s-process-list { gap: 32px; padding: 0 4px; }
          .w2s-process-item { min-width: 270px; max-width: 300px; }
          .w2s-process-item:not(:last-child)::after { width: 22px; left: calc(100% + 5px); }
          .w2s-process-title { font-size: 22px; }
          .w2s-process-body { font-size: 14px; }
        }

        /* ============================================================
           SHARED SECTION STYLES (kept from previous build)
           ============================================================ */

        /* 12 — Trusted Brands marquee */
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
          .mig-innov-track { gap: 36px; }
          .mig-innov-slide { width: 150px; height: 70px; }
          .mig-innov-slide img { width: 150px; height: 70px; }
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

        /* 14 — Why Work marquee */
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

        /* 16 — Final CTA pair */
        .w2s-finalcta { background: #FFFFFF; padding: 30px 24px 50px; border-top: 1px solid #F1F5F9; }
        .w2s-finalcta-inner { flex-direction: row; align-items: center; justify-content: center; gap: 24px; flex-wrap: wrap; }

        .w2s-cta-solid,
        .w2s-cta-solid:link,
        .w2s-cta-solid:visited,
        .w2s-cta-solid:focus,
        .w2s-cta-solid:active { display: inline-flex; align-items: center; gap: 12px; padding: 16px 32px; border-radius: 999px; color: #FFFFFF; font-size: 15px; font-weight: 600; text-decoration: none; border: 2px solid transparent; background-image: linear-gradient(#111111, #111111), linear-gradient(#111111, #111111); background-origin: border-box; background-clip: padding-box, border-box; transition: background-image .25s ease, transform .2s ease; }
        .w2s-cta-solid:hover { background-image: linear-gradient(#111111, #111111), var(--brand-gradient); transform: translateY(-1px); color: #FFFFFF; }

        .w2s-cta-outline-light,
        .w2s-cta-outline-light:link,
        .w2s-cta-outline-light:visited,
        .w2s-cta-outline-light:focus,
        .w2s-cta-outline-light:active { display: inline-flex; align-items: center; gap: 12px; padding: 16px 36px; border-radius: 999px; color: #111111; font-size: 15px; font-weight: 600; text-decoration: none; border: 2px solid transparent; background-image: linear-gradient(#FFFFFF, #FFFFFF), var(--brand-gradient); background-origin: border-box; background-clip: padding-box, border-box; transition: background-image .25s ease, color .25s ease, transform .2s ease; }
        .w2s-cta-outline-light:hover { transform: translateY(-1px); color: #FFFFFF; background-image: linear-gradient(#000000, #000000), var(--brand-gradient); }

        @media (max-width: 639px) {
          .w2s-finalcta { padding: 24px 15px 36px; }
          .w2s-finalcta-inner { gap: 14px; }
          .w2s-cta-outline-light { padding: 14px 22px; font-size: 14px; }
        }

        /* 17 — Review badges */
        .w2s-badges { background: #FFFFFF; padding: 28px 40px 56px; border-top: 1px solid #F1F5F9; }
        .w2s-badges-row { list-style: none; padding: 0; margin: 0 auto; max-width: 1320px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
        .w2s-badges-slide { flex: 1 1 0; display: flex; align-items: center; justify-content: center; height: 70px; min-width: 140px; }
        .w2s-badges-slide img { height: 56px; width: auto; max-width: 100%; object-fit: contain; display: block; }

        @media (max-width: 1023px) {
          .w2s-badges { padding: 24px 24px 44px; }
          .w2s-badges-slide img { height: 48px; }
        }
        @media (max-width: 639px) {
          .w2s-badges { padding: 20px 15px 36px; }
          .w2s-badges-row { gap: 18px; }
          .w2s-badges-slide { flex: 1 1 40%; height: 52px; min-width: 120px; }
          .w2s-badges-slide img { height: 36px; }
        }
      ` }} />
    </>
  );
}
