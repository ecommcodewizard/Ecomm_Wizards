import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify UX and UI Design - Ecomm Wizards",
  description:
    "Shopify UI UX design that turns visitors into loyal customers. Data-backed UX/UI systems, custom app interfaces, email design and clickable prototypes by Ecomm Wizards.",
};

const GRADIENT_TEXT = {
  background: "var(--brand-gradient)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const C_DARK = "#111111";
const C_TEXT = "#334155";
const C_CREAM = "#FBF7ED";
const C_SOFT_BLUE = "#F0F5FA";

const TRUST_LOGOS = [
  { src: "/images/trust_logo_20.svg", alt: "SarahChloe" },
  { src: "/images/trust_logo_27.svg", alt: "Cellar.com" },
  { src: "/images/Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif", alt: "Lids" },
  { src: "/images/Olaplex-logo-new.avif", alt: "Olaplex" },
  { src: "/images/everlast-icon.svg", alt: "Everlast" },
  { src: "/images/ipsy-logo.svg", alt: "IPSY" },
  { src: "/images/trust_logo_2.svg", alt: "Peanuts" },
  { src: "/images/trust_logo_31.svg", alt: "Forme" },
  { src: "/images/trust_logo_32.svg", alt: "Trust badge" },
];

const WHAT_WE_DO = [
  {
    title: "Full Store UX and UI Overhaul",
    body:
      "Most Shopify stores look like they were built from a template because they were. Our Shopify UI UX design team rebuilds your entire store experience from the ground up. We study how your actual customers navigate, where they hesitate, and what makes them leave. Then we redesign every screen so the path from landing to checkout feels effortless. No guessing. No decorating. Just research backed design that moves product.",
    open: true,
  },
  {
    title: "Email Campaigns That Get Opened and Clicked",
    body:
      "Your email list is sitting on revenue you are not collecting. We design email flows and campaigns that match the same visual quality and conversion focus as your storefront, so every touchpoint with your brand feels intentional and every send drives measurable results.",
  },
  {
    title: "Custom Shopify App Interfaces",
    body:
      "If you are building a custom app for your store, the interface matters just as much as the functionality. We design Shopify app experiences that feel native to the platform and intuitive for your customers, so adoption is instant and support tickets stay low.",
  },
  {
    title: "Clickable Prototypes Before a Single Line of Code Prototyping for User Flows",
    body:
      "We do not start coding until you have seen and approved exactly what your store will look and feel like. Interactive Figma prototypes let you click through every page, test every flow, and give feedback before development begins. Zero surprises on launch day.",
  },
  {
    title: "Brand Identity That Customers Remember",
    body:
      "Your brand is more than a logo. We build complete visual identity systems including color palettes, typography, iconography, and guidelines that keep your Shopify UI UX design consistent across every channel and every touchpoint.",
  },
];

const FUNNEL_TABS = [
  {
    id: "fhome",
    label: "Home Page UX & UI Design",
    heading: "Your Homepage Has 5 Seconds to Prove You Are Worth Buying From",
    body:
      "Most Shopify homepages try to show everything at once and end up communicating nothing. We take a completely different approach to Shopify UI UX design for your homepage. We map out the exact scroll journey your customer takes, then design each section to answer the one question they have at that exact moment. Hero, trust signals, social proof, collection highlights, and a clear call to action, all in the right order, all designed to keep them moving deeper instead of bouncing.",
    cta: "Redesign My Homepage",
  },
  {
    id: "fcoll",
    label: "Collection Page UX & UI Design",
    heading: "Stop Losing Buyers Between the Homepage and the Product Page",
    body:
      "Collection pages are where most stores silently bleed revenue. Customers land here ready to browse, and they get hit with a wall of products with no visual hierarchy, no filters that actually work, and no reason to keep scrolling. Our Shopify UI UX design for collection pages fixes all of that. Smart filtering, grid layouts that highlight bestsellers and new arrivals, quick view options, and visual cues that guide shoppers toward the products they are most likely to buy.",
    cta: "Fix My Collection Pages",
  },
  {
    id: "fpdp",
    label: "Product Page UX & UI Design",
    heading: "The Page That Closes the Sale (Or Kills It)",
    body:
      "Your product page is your closer. It is the last thing a customer sees before they decide to add to cart or walk away. We design product pages that do the heavy lifting for you. Image galleries that build desire, descriptions that answer objections before they form, trust badges placed exactly where hesitation lives, and buy buttons that feel like the obvious next step. Every element on the page has a job, and if it does not earn its spot, we cut it.",
    cta: "Upgrade My Product Pages",
  },
  {
    id: "fcart",
    label: "Cart Drawer UX & UI Design",
    heading: "The Last 10 Seconds Before the Money Hits Your Account",
    body:
      "Most cart drawers are an afterthought. A tiny sidebar that shows what is in the bag and a checkout button. That is a wasted opportunity. We design cart drawers that increase AOV with smart upsells, reinforce trust with guarantee badges and shipping thresholds, and eliminate last second friction that causes abandonment. When your Shopify UI UX design extends all the way to the cart drawer, you capture revenue that every other store leaves on the table.",
    cta: "Optimize My Cart",
  },
];

const FUNNEL_MOCKUPS = [
  "/images/audit-1_1024x1024.webp",
  "/images/audit-2_1024x1024-1.webp",
  "/images/audit-9_1024x1024-1.webp",
  "/images/audit-7_1024x1024-1.webp",
  "/images/audit-8_1024x1024-1.webp",
];

const AWARDS = [
  { src: "/images/best-support_1024x1024.webp", alt: "G2 Best Support 2021" },
  { src: "/images/best-designrush_1024x1024.webp", alt: "DesignRush Best Shopify Agencies" },
  { src: "/images/top-digital-new_1024x1024.webp", alt: "Upcity Top Digital Agency" },
  { src: "/images/goodfirms_1024x1024-1.webp", alt: "GoodFirms Top Web Dev Companies" },
  { src: "/images/clutch_1024x1024.png", alt: "Clutch Top Web Developers 2020" },
  { src: "/images/expertise_f69c262b-9692-4d07-9d0d-92f9b1dbf894_1024x1024.webp", alt: "Expertise.com Best Web Developers 2022" },
];

const EMAIL_ACCORDION = [
  {
    title: "Newsletter Design",
    body:
      "Your newsletter is not a chore your subscribers tolerate. It is a weekly touchpoint with your most engaged buyers. We design newsletters that people actually open, actually read, and actually click through because the layout makes it easy and the visuals make it irresistible.",
    open: true,
  },
  {
    title: "Promotional Email Design",
    body:
      "Flash sales, product launches, seasonal drops. We design promotional emails that create urgency without feeling spammy, using layout hierarchy and visual pacing to guide the eye straight to the offer and straight to the button.",
  },
  {
    title: "Transactional Email Design",
    body:
      "Order confirmations, shipping updates, and account emails are the most opened emails you will ever send. We make sure they reinforce your brand instead of looking like default Shopify notifications that could belong to any store.",
  },
  {
    title: "Email Template Development",
    body:
      "We build modular, reusable email templates in Klaviyo, Mailchimp, or whatever platform you use, so your team can swap content and send on brand emails without needing a designer every time.",
  },
  {
    title: "Email Marketing Strategy",
    body:
      "Design without strategy is just decoration. We map out the full email journey from welcome series to win back flows and design each touchpoint to move the customer closer to the next purchase.",
  },
];

const APP_CHECKS = [
  "Built around Shopify's design language and Polaris guidelines",
  "Every interaction designed from the user's perspective first",
  "Navigation that makes sense without a tutorial",
  "Interfaces that look sharp on every screen size",
  "Fully responsive from desktop admin to mobile storefront",
];

const PROTOTYPE_CHECKS = [
  "Wireframes mapped to your actual customer journey",
  "Fully clickable prototypes you can share with your team",
  "Visual walkthroughs of every critical user flow",
  "Real user testing baked into the process before development",
  "Developer ready specs so nothing gets lost in translation",
];

const BRAND_CHECKS = [
  "Full brand strategy aligned to your market and audience",
  "Color systems chosen for emotional impact and accessibility",
  "Typography that reinforces your brand personality and reads clean on every device",
  "Logo design that scales from favicon to billboard",
  "Complete brand guidelines your team can follow without guessing",
];

/* Apps showcase — two horizontal marquee rows */
const APPS_ROW_A = ["/images/image-1-1.webp", "/images/image-1-2-copy-scaled.webp", "/images/image-1-3-copy-scaled.webp", "/images/image-1-4-copy-scaled.webp"];
const APPS_ROW_B = ["/images/image-2-1.webp", "/images/image-2-2.png", "/images/image-2-3.webp", "/images/image-2-4.webp"];

/* Brand showcase — two horizontal marquee rows */
const BRAND_ROW_A = ["/images/image-3-1.webp", "/images/image-3-2.webp", "/images/image-3-3-1.webp", "/images/image-3-4.webp"];
const BRAND_ROW_B = ["/images/image-3-5.png", "/images/image-3-6.png", "/images/image-3-7.webp", "/images/image-3-8.webp"];

const Arrow = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
    <path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckCircle = () => (
  <svg width="22" height="22" viewBox="0 0 512 512" aria-hidden fill="currentColor">
    <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM227 387l184-184c6-6 6-16 0-23l-22-22c-6-7-17-7-23 0L216 308l-70-70c-7-6-17-6-23 0l-22 22c-7 7-7 17 0 23l104 104c6 6 17 6 22 0z" />
  </svg>
);

export default function Page() {
  return (
    <>
      {/* 1 — Hero (dark) */}
      <section className="uxui-hero" style={{ background: "#000000" }} aria-label="Shopify UI UX Design hero">
        <div
          className="uxui-hero-grid mx-auto grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "80px 20px" }}
        >
          <div>
            <h1 className="uxui-hero-h1 font-bold" style={{ color: "#FFFFFF", fontSize: "56px", lineHeight: 1.18, margin: 0 }}>
              Shopify <span style={GRADIENT_TEXT}>UI UX Design</span> That Turns Visitors Into Loyal Customers
            </h1>
            <p className="uxui-hero-p mt-7 max-w-[600px]" style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: "28px" }}>
              Your store gets one chance to make a first impression. If the layout confuses people, if the navigation feels
              clunky, if the checkout creates even a second of hesitation, they leave. Ecomm Wizards builds Shopify UI UX
              design systems that remove every point of friction between your customer and the buy button. No templates.
              No guesswork. Just data backed design that looks premium and converts like it should.
            </p>
            <Link href="/book-shopify-consultation" className="uxui-hero-cta mt-10 inline-flex items-center gap-3">
              <span>See Our Design Packages</span>
              <Arrow />
            </Link>
          </div>

          <div className="uxui-hero-image relative">
            <Image
              src="/images/Group_1000003974_d0eba414-7aec-4930-b534-a4dcc91d004e_1024x1024.png"
              alt="Shopify UI UX design mockups — Olaplex, Buddy Scripts and Everlast storefronts above a laptop"
              width={1024}
              height={648}
              priority
              className="block h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* 2 — Innovative Brands logo slider (white) */}
      <section className="uxui-trust" style={{ background: "#FFFFFF" }} aria-label="Brands that work with Ecomm Wizards">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "70px 20px 80px" }}>
          <h2 className="uxui-trust-h2 text-center" style={{ color: C_DARK, fontSize: 32, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            The <b>World&rsquo;s Most Innovative</b> Brands <span aria-hidden>🤝</span> Work with <b>Ecomm Wizards</b>
          </h2>

          <div className="uxui-trust-carousel" style={{ marginTop: 50, width: "100%", overflow: "hidden" }}>
            <div className="uxui-trust-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
                <div key={i} className="uxui-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src} alt={i < TRUST_LOGOS.length ? l.alt : ""} className="uxui-trust-logo" width={220} height={100} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 — What We Actually Do (image + accordion, cream) */}
      <section className="uxui-wwd" style={{ background: C_CREAM }} aria-label="What we actually do">
        <div
          className="uxui-wwd-grid mx-auto grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "90px 20px" }}
        >
          <div className="uxui-wwd-image">
            <Image
              src="/images/Group_1000003963_845c2075-faa7-4162-9fbb-11df7e2cf529-scaled.webp"
              alt="Shopify store UX/UI design mockups for Jessakae with Arctic Grey Shopify Plus Experts five star review"
              width={962}
              height={1024}
              className="block h-auto w-full"
            />
          </div>

          <div>
            <h2 className="uxui-wwd-h2" style={{ color: C_DARK, fontSize: 36, fontWeight: 700, lineHeight: 1.25, margin: 0 }}>
              What We Actually Do (And Why It Works)
            </h2>

            <div className="uxui-acc" style={{ marginTop: 28 }}>
              {WHAT_WE_DO.map((it) => (
                <details key={it.title} className="uxui-acc-item" open={it.open}>
                  <summary>
                    <span>{it.title}</span>
                    <svg className="uxui-acc-icon" viewBox="0 0 32 32" width="18" height="18" aria-hidden>
                      <path d="M31.6 8.5c-.6-.6-1.5-.6-2.2-.1L16 21.2 2.6 8.4c-.6-.6-1.6-.5-2.2.1-.6.6-.5 1.6.1 2.2l14.5 13.7c.3.3.7.4 1 .4s.8-.1 1-.4l14.5-13.7c.6-.6.7-1.6.1-2.2z" fill="currentColor" />
                    </svg>
                  </summary>
                  <p>{it.body}</p>
                </details>
              ))}
            </div>

            <Link href="/book-shopify-consultation" className="uxui-cta-dark mt-9 inline-flex items-center gap-3">
              <span>Talk to Our Design Team</span>
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* 4 — Where the Real Revenue Leaks Hide (cream, 4 radio tabs, vertical marquee mockups) */}
      <section className="uxui-funnel" style={{ background: C_CREAM }} aria-label="Where the real revenue leaks hide">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "90px 20px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 44, fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
            Where the Real Revenue Leaks Hide
          </h2>
          <p className="mx-auto mt-4 text-center" style={{ color: C_TEXT, fontSize: 16, lineHeight: "26px", maxWidth: 760 }}>
            Your store has four critical pages that either make or lose you money. We redesign all of them.
          </p>

          <div className="uxui-tabs" style={{ marginTop: 44 }}>
            {FUNNEL_TABS.map((t, i) => (
              <input key={t.id} type="radio" name="uxui-funnel" id={t.id} defaultChecked={i === 0} aria-hidden tabIndex={-1} />
            ))}

            <div className="uxui-tab-labels" role="tablist">
              {FUNNEL_TABS.map((t) => (
                <label key={t.id} htmlFor={t.id} className="uxui-tab-label">
                  {t.label}
                </label>
              ))}
            </div>

            <div className="uxui-tab-panels">
              {FUNNEL_TABS.map((t) => (
                <div key={t.id} data-panel={t.id} className="uxui-tab-panel">
                  <div className="uxui-tab-panel-inner">
                    <div className="uxui-tab-text">
                      <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden style={{ color: "#E3C46B" }}>
                        <rect x="6" y="10" width="52" height="14" rx="2" fill="currentColor" />
                        <rect x="6" y="30" width="11" height="11" rx="2" fill="currentColor" opacity=".7" />
                        <rect x="20" y="30" width="11" height="11" rx="2" fill="currentColor" opacity=".7" />
                        <rect x="34" y="30" width="11" height="11" rx="2" fill="currentColor" opacity=".7" />
                        <rect x="48" y="30" width="10" height="11" rx="2" fill="currentColor" opacity=".7" />
                      </svg>
                      <h3 style={{ color: C_DARK, fontSize: 28, fontWeight: 700, lineHeight: 1.25, margin: "20px 0 18px" }}>{t.heading}</h3>
                      <p style={{ color: C_TEXT, fontSize: 15, lineHeight: "26px", margin: 0 }}>{t.body}</p>
                      <Link href="/book-shopify-consultation" className="uxui-cta-dark mt-7 inline-flex items-center gap-3">
                        <span>{t.cta}</span>
                        <Arrow />
                      </Link>
                    </div>

                    {/* Vertical marquee — 2 columns scrolling up at different speeds */}
                    <div className="uxui-tab-marquee">
                      {[0, 1].map((col) => (
                        <div key={col} className="uxui-tab-mcol">
                          <div className="uxui-tab-mtrack" style={{ animationDuration: col === 0 ? "22s" : "28s" }}>
                            {[...FUNNEL_MOCKUPS, ...FUNNEL_MOCKUPS].map((src, i) => (
                              <Image key={i} src={src} alt="" width={500} height={420} className="block h-auto w-full rounded-md" />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Awards & Certification (cream) */}
      <section className="uxui-awards" style={{ background: C_CREAM }} aria-label="Awards and certifications">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "0 20px 90px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 32, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
            The Multi <span aria-hidden>🏆</span> Awards and Certification
          </h2>
          <div className="uxui-awards-row" style={{ marginTop: 48 }}>
            {AWARDS.map((a) => (
              <div key={a.src} className="uxui-award">
                <Image src={a.src} alt={a.alt} width={150} height={150} className="block h-auto w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Emails (image + accordion, soft blue) */}
      <section className="uxui-emails" style={{ background: C_SOFT_BLUE }} aria-label="Email design">
        <div
          className="uxui-emails-grid mx-auto grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "90px 20px" }}
        >
          <div className="uxui-emails-image">
            <Image
              src="/images/Group_1000003975_1024x1024.webp"
              alt="Hiya email design mockups showing newsletter and product email layouts"
              width={850}
              height={1024}
              className="block h-auto w-full"
            />
          </div>

          <div>
            <h2 style={{ color: C_DARK, fontSize: 36, fontWeight: 700, lineHeight: 1.25, margin: 0 }}>
              Emails That Actually Look Like Your Brand (And Actually Convert)
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              Most ecommerce emails look like they were thrown together in five minutes because they were. Generic templates,
              mismatched colors, and zero connection to the store experience your customer just had. We design email systems
              that feel like a natural extension of your Shopify store. Same visual language, same attention to detail, same
              obsession with getting the click.
            </p>

            <div className="uxui-acc" style={{ marginTop: 28 }}>
              {EMAIL_ACCORDION.map((it) => (
                <details key={it.title} className="uxui-acc-item" open={it.open}>
                  <summary>
                    <span>{it.title}</span>
                    <svg className="uxui-acc-icon" viewBox="0 0 32 32" width="18" height="18" aria-hidden>
                      <path d="M31.6 8.5c-.6-.6-1.5-.6-2.2-.1L16 21.2 2.6 8.4c-.6-.6-1.6-.5-2.2.1-.6.6-.5 1.6.1 2.2l14.5 13.7c.3.3.7.4 1 .4s.8-.1 1-.4l14.5-13.7c.6-.6.7-1.6.1-2.2z" fill="currentColor" />
                    </svg>
                  </summary>
                  <p>{it.body}</p>
                </details>
              ))}
            </div>

            <Link href="/book-shopify-consultation" className="uxui-cta-dark mt-9 inline-flex items-center gap-3">
              <span>Level Up My Email Design</span>
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* 7 — Shopify Apps (white, text+checks, then horizontal marquee rows) */}
      <section className="uxui-apps" style={{ background: "#FFFFFF" }} aria-label="Shopify app design">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "90px 20px 30px" }}>
          <div className="uxui-apps-grid grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <h2 style={{ color: C_DARK, fontSize: 36, fontWeight: 700, lineHeight: 1.25, margin: 0 }}>
                Shopify Apps That Feel Like They Belong
              </h2>
              <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
                Building a Shopify app is one thing. Making it feel intuitive is another problem entirely. We design app
                interfaces specifically for the Shopify ecosystem, so your app feels native from the first interaction. No
                learning curve. No confusion. Just clean, functional Shopify UI UX design that merchants and their customers
                actually enjoy using.
              </p>
              <Link href="/book-shopify-consultation" className="uxui-cta-dark mt-8 inline-flex items-center gap-3">
                <span>Design My Shopify App</span>
                <Arrow />
              </Link>
            </div>

            <ul className="uxui-check-list">
              {APP_CHECKS.map((c) => (
                <li key={c}>
                  <span style={{ color: C_DARK }}><CheckCircle /></span>
                  <strong>{c}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto slider-wrapper" style={{ maxWidth: "1320px", padding: "40px 20px 90px" }}>
          <div className="uxui-h-marquee" style={{ marginBottom: 28 }}>
            <div className="uxui-h-track uxui-h-left">
              {[...APPS_ROW_A, ...APPS_ROW_A].map((src, i) => (
                <div key={i} className="uxui-h-card">
                  <Image src={src} alt="Custom Shopify app dashboard interface" width={620} height={440} className="block h-auto w-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="uxui-h-marquee">
            <div className="uxui-h-track uxui-h-right">
              {[...APPS_ROW_B, ...APPS_ROW_B].map((src, i) => (
                <div key={i} className="uxui-h-card">
                  <Image src={src} alt="Custom Shopify app dashboard interface" width={620} height={440} className="block h-auto w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8 — See It Click It (soft blue, checks left, woman+laptop right) */}
      <section className="uxui-proto" style={{ background: C_SOFT_BLUE }} aria-label="Clickable prototypes">
        <div
          className="uxui-proto-grid mx-auto grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "90px 20px" }}
        >
          <div>
            <h2 style={{ color: C_DARK, fontSize: 36, fontWeight: 700, lineHeight: 1.25, margin: 0 }}>
              See It, Click It, Approve It Before We Build It
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              We do not hand you a flat mockup and call it done. Every project starts with interactive Figma prototypes
              that let you experience your store exactly the way your customers will. Click through every page. Test
              every flow. Find every friction point before a single line of code is written. This is how our Shopify UI UX
              design process eliminates costly revisions and keeps your launch on schedule.
            </p>
            <ul className="uxui-check-list" style={{ marginTop: 24 }}>
              {PROTOTYPE_CHECKS.map((c) => (
                <li key={c}>
                  <span style={{ color: C_DARK }}><CheckCircle /></span>
                  <strong>{c}</strong>
                </li>
              ))}
            </ul>
            <Link href="/book-shopify-consultation" className="uxui-cta-dark mt-9 inline-flex items-center gap-3">
              <span>Start With a Prototype</span>
              <Arrow />
            </Link>
          </div>

          <div>
            <Image
              src="/images/get_started.webp"
              alt="Designer reviewing clickable Figma prototype on a laptop with headphones"
              width={760}
              height={520}
              className="block h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* 9 — Why Work with Ecomm Wizards (soft blue, single row) */}
      <section className="uxui-why" style={{ background: C_SOFT_BLUE }} aria-label="Why work with Ecomm Wizards">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "18px 20px 32px" }}>
          <div className="uxui-why-row">
            <h3 style={{ color: C_DARK, fontSize: 22, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
              Why Work with <br className="uxui-why-br" />Ecomm Wizards
            </h3>
            <span className="uxui-why-dot" aria-hidden>•</span>
            <span className="uxui-why-item">Growth-Obsessed Team</span>
            <span className="uxui-why-dot" aria-hidden>•</span>
            <span className="uxui-why-item">100% Client Satisfaction</span>
            <span className="uxui-why-dot" aria-hidden>•</span>
            <span className="uxui-why-item">Transparent Communication</span>
            <span className="uxui-why-dot" aria-hidden>•</span>
          </div>
        </div>
      </section>

      {/* 10 — Build a Brand (white, text+checks, then horizontal marquee rows) */}
      <section className="uxui-brand" style={{ background: "#FFFFFF" }} aria-label="Brand identity design">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "90px 20px 30px" }}>
          <div className="uxui-brand-grid grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <h2 style={{ color: C_DARK, fontSize: 36, fontWeight: 700, lineHeight: 1.25, margin: 0 }}>
                Build a Brand That Looks as Good as It Sells
              </h2>
              <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
                Your logo, your colors, your fonts, the way your store feels the moment someone lands on it. That is your
                brand. And if it looks generic, your customers will treat you like a generic store. We build complete brand
                identity systems tailored to ecommerce, so every piece of your Shopify UI UX design tells the same story
                and builds the same trust, whether a customer finds you through an ad, an email, or a Google search.
              </p>
              <Link href="/book-shopify-consultation" className="uxui-cta-dark mt-8 inline-flex items-center gap-3">
                <span>Build My Brand Identity</span>
                <Arrow />
              </Link>
            </div>

            <ul className="uxui-check-list">
              {BRAND_CHECKS.map((c) => (
                <li key={c}>
                  <span style={{ color: C_DARK }}><CheckCircle /></span>
                  <strong>{c}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto slider-wrapper" style={{ maxWidth: "1320px", padding: "40px 20px 90px" }}>
          <div className="uxui-h-marquee" style={{ marginBottom: 24 }}>
            <div className="uxui-h-track uxui-h-left">
              {[...BRAND_ROW_A, ...BRAND_ROW_A].map((src, i) => (
                <div key={i} className="uxui-h-card uxui-brand-card">
                  <Image src={src} alt="Brand identity sample — typography and logo system" width={460} height={340} className="block h-auto w-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="uxui-h-marquee">
            <div className="uxui-h-track uxui-h-right">
              {[...BRAND_ROW_B, ...BRAND_ROW_B].map((src, i) => (
                <div key={i} className="uxui-h-card uxui-brand-card">
                  <Image src={src} alt="Brand identity sample — color palette and brand guidelines" width={460} height={340} className="block h-auto w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Page CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hero CTA — dark fill with gradient border. Hover: invert to white + black text. */
        .uxui-hero-cta {
          color: #FFFFFF;
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 600;
          background:
            linear-gradient(#000, #000) padding-box,
            var(--brand-gradient) border-box;
          transition: background .3s ease, color .3s ease, transform .25s ease, box-shadow .25s ease;
        }
        .uxui-hero-cta:hover {
          color: #000000;
          background:
            linear-gradient(#FFFFFF, #FFFFFF) padding-box,
            var(--brand-gradient) border-box;
          transform: translateY(-1px);
          box-shadow: 0 10px 30px -10px rgba(168,240,180,.45);
        }
        .uxui-hero-cta:focus, .uxui-hero-cta:active, .uxui-hero-cta:visited { color: #FFFFFF; }
        .uxui-hero-cta:hover:focus, .uxui-hero-cta:hover:active { color: #000000; }

        /* Dark CTA — solid dark pill. Hover: keep dark fill, swap border to brand gradient. */
        .uxui-cta-dark {
          color: #FFFFFF;
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 16px 30px;
          font-size: 15px;
          font-weight: 600;
          background:
            linear-gradient(${C_DARK}, ${C_DARK}) padding-box,
            ${C_DARK} border-box;
          transition: background .3s ease, transform .25s ease, box-shadow .25s ease;
        }
        .uxui-cta-dark:hover {
          color: #FFFFFF;
          background:
            linear-gradient(${C_DARK}, ${C_DARK}) padding-box,
            var(--brand-gradient) border-box;
          transform: translateY(-1px);
          box-shadow: 0 10px 28px -10px rgba(0,0,0,.45);
        }
        .uxui-cta-dark:focus, .uxui-cta-dark:visited, .uxui-cta-dark:active { color: #FFFFFF; }

        /* Trust carousel — larger logos */
        .uxui-trust-track {
          display: flex; align-items: center; justify-content: flex-start;
          gap: 100px; width: max-content;
          animation: uxuiTrustScroll 32s linear infinite;
        }
        .uxui-trust-carousel:hover .uxui-trust-track { animation-play-state: paused; }
        .uxui-trust-slide { flex: 0 0 auto; display: flex; align-items: center; height: 90px; }
        .uxui-trust-logo {
          height: 80px; width: auto; max-width: 220px; object-fit: contain;
          opacity: .9; transition: opacity .25s ease;
        }
        .uxui-trust-slide:hover .uxui-trust-logo { opacity: 1; }
        @keyframes uxuiTrustScroll { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }

        /* Accordion */
        .uxui-acc-item { border-top: 1px solid rgba(17,17,17,.18); padding: 18px 0; }
        .uxui-acc-item:last-child { border-bottom: 1px solid rgba(17,17,17,.18); }
        .uxui-acc-item > summary {
          list-style: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          color: ${C_DARK}; font-size: 17px; font-weight: 700; line-height: 1.4;
        }
        .uxui-acc-item > summary::-webkit-details-marker { display: none; }
        .uxui-acc-item > summary > span { flex: 1; }
        .uxui-acc-icon { flex: 0 0 18px; color: ${C_DARK}; transition: transform .3s ease; }
        .uxui-acc-item[open] > summary .uxui-acc-icon { transform: rotate(180deg); }
        .uxui-acc-item > p { margin: 14px 0 4px; color: ${C_TEXT}; font-size: 15px; line-height: 26px; }

        /* Funnel tabs */
        .uxui-tabs > input[type="radio"] { position: absolute; opacity: 0; pointer-events: none; width: 0; height: 0; }
        .uxui-tab-labels {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; background: transparent;
        }
        .uxui-tab-label {
          display: flex; align-items: center; justify-content: center; text-align: center;
          padding: 22px 18px; background: rgba(255,255,255,.55); border-radius: 6px 6px 0 0;
          color: ${C_DARK}; font-size: 16px; font-weight: 700; line-height: 1.3;
          cursor: pointer; transition: background .25s ease, color .25s ease;
        }
        .uxui-tab-label:hover { background: rgba(255,255,255,.85); }
        .uxui-tab-panels { background: rgba(255,255,255,.55); border-radius: 0 0 12px 12px; }
        .uxui-tab-panel { display: none; }
        .uxui-tab-panel-inner {
          display: grid; grid-template-columns: 1fr 1.15fr; gap: 60px;
          padding: 64px 50px; align-items: center;
        }
        .uxui-tab-text { max-width: 540px; }

        /* Vertical marquee for funnel mockups */
        .uxui-tab-marquee {
          display: grid; grid-template-columns: 1fr 1fr; gap: 18px;
          height: 560px; overflow: hidden;
          mask-image: linear-gradient(180deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
        }
        .uxui-tab-mcol { overflow: hidden; }
        .uxui-tab-mtrack {
          display: flex; flex-direction: column; gap: 18px;
          animation-name: uxuiMarqueeUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .uxui-tab-marquee:hover .uxui-tab-mtrack { animation-play-state: paused; }
        @keyframes uxuiMarqueeUp { from { transform: translate3d(0,0,0); } to { transform: translate3d(0,-50%,0); } }

        /* Active tab styling */
        #fhome:checked ~ .uxui-tab-panels [data-panel="fhome"],
        #fcoll:checked ~ .uxui-tab-panels [data-panel="fcoll"],
        #fpdp:checked  ~ .uxui-tab-panels [data-panel="fpdp"],
        #fcart:checked ~ .uxui-tab-panels [data-panel="fcart"] { display: block; }
        #fhome:checked ~ .uxui-tab-labels label[for="fhome"],
        #fcoll:checked ~ .uxui-tab-labels label[for="fcoll"],
        #fpdp:checked  ~ .uxui-tab-labels label[for="fpdp"],
        #fcart:checked ~ .uxui-tab-labels label[for="fcart"] { background: ${C_DARK}; color: #FFFFFF; }

        /* Awards */
        .uxui-awards-row { display: grid; grid-template-columns: repeat(6, 1fr); gap: 30px; align-items: center; justify-items: center; }
        .uxui-award { width: 100%; max-width: 150px; }

        /* Check list */
        .uxui-check-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 18px; }
        .uxui-check-list li { display: flex; align-items: flex-start; gap: 14px; color: ${C_DARK}; font-size: 17px; line-height: 1.45; }
        .uxui-check-list li strong { font-weight: 700; }
        .uxui-check-list li > span:first-child { flex: 0 0 22px; padding-top: 2px; }

        /* Horizontal marquee (apps + brand) */
        .uxui-h-marquee { width: 100%; overflow: hidden; }
        .uxui-h-track {
          display: flex; gap: 28px; width: max-content;
          animation-name: uxuiHmLeft;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 42s;
          will-change: transform;
        }
        .uxui-h-marquee:hover .uxui-h-track { animation-play-state: paused; }
        .uxui-h-left  { animation-name: uxuiHmLeft; }
        .uxui-h-right { animation-name: uxuiHmRight; animation-duration: 48s; }
        .uxui-h-card {
          flex: 0 0 auto; width: 460px;
          background: #FFFFFF; border-radius: 12px;
          box-shadow: 0 14px 50px -22px rgba(0,0,0,.3);
          overflow: hidden;
        }
        .uxui-h-card img { border-radius: 12px; }
        .uxui-brand-card { width: 360px; }
        @keyframes uxuiHmLeft  { from { transform: translate3d(0,0,0); }    to { transform: translate3d(-50%,0,0); } }
        @keyframes uxuiHmRight { from { transform: translate3d(-50%,0,0); } to { transform: translate3d(0,0,0); } }

        /* Why work */
        .uxui-why-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 22px; }
        .uxui-why-item { color: ${C_TEXT}; font-size: 16px; font-weight: 500; }
        .uxui-why-dot { color: ${C_DARK}; font-size: 18px; line-height: 1; }
        .uxui-why-br { display: inline; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .uxui-hero-h1 { font-size: 44px !important; }
          .uxui-tab-panel-inner { grid-template-columns: 1fr !important; padding: 40px 28px !important; gap: 36px; }
          .uxui-tab-marquee { height: 480px; }
          .uxui-awards-row { grid-template-columns: repeat(3, 1fr); gap: 36px 24px; }
          .uxui-h-card { width: 380px; }
          .uxui-brand-card { width: 300px; }
        }

        /* Mobile (≤ 640px) — pulled together for a 430px viewport */
        @media (max-width: 640px) {
          /* Shared section paddings */
          .uxui-hero        > div { padding: 56px 18px !important; }
          .uxui-trust       > div { padding: 50px 18px 56px !important; }
          .uxui-wwd         > div { padding: 60px 18px !important; gap: 36px !important; }
          .uxui-funnel      > div { padding: 60px 18px !important; }
          .uxui-awards      > div { padding: 0 18px 60px !important; }
          .uxui-emails      > div { padding: 60px 18px !important; gap: 36px !important; }
          .uxui-apps        > div { padding: 60px 18px 20px !important; }
          .uxui-proto       > div { padding: 60px 18px !important; gap: 36px !important; }
          .uxui-why         > div { padding: 18px 18px 28px !important; }
          .uxui-brand       > div { padding: 60px 18px 20px !important; }
          .uxui-apps .slider-wrapper,
          .uxui-brand .slider-wrapper { padding: 28px 18px 60px !important; }

          /* Hero */
          .uxui-hero-h1 { font-size: 30px !important; line-height: 1.22 !important; }
          .uxui-hero-p  { font-size: 14px !important; line-height: 24px !important; margin-top: 22px !important; }
          .uxui-hero-cta { padding: 12px 22px !important; font-size: 14px !important; }

          /* Trust strip */
          .uxui-trust-h2 { font-size: 20px !important; line-height: 1.35 !important; }
          .uxui-trust-track { gap: 48px !important; }
          .uxui-trust-slide { height: 60px !important; }
          .uxui-trust-logo { height: 52px !important; max-width: 140px !important; }

          /* All section h2s + body */
          .uxui-wwd h2, .uxui-emails h2, .uxui-apps h2, .uxui-proto h2, .uxui-brand h2 {
            font-size: 24px !important; line-height: 1.28 !important;
          }
          .uxui-wwd p, .uxui-emails p, .uxui-apps p, .uxui-proto p, .uxui-brand p {
            font-size: 14px !important; line-height: 24px !important;
          }

          /* CTA dark */
          .uxui-cta-dark { padding: 13px 22px !important; font-size: 14px !important; }

          /* Accordion */
          .uxui-acc-item > summary { font-size: 15px !important; }
          .uxui-acc-item > p { font-size: 14px !important; line-height: 24px !important; }

          /* Funnel */
          .uxui-funnel h2 { font-size: 28px !important; }
          .uxui-funnel > div > p { font-size: 14px !important; line-height: 22px !important; }
          .uxui-tab-labels { grid-template-columns: 1fr 1fr !important; gap: 6px !important; }
          .uxui-tab-label { padding: 14px 12px !important; font-size: 13px !important; line-height: 1.3 !important; border-radius: 6px !important; }
          .uxui-tab-panels { border-radius: 10px !important; margin-top: 6px; }
          .uxui-tab-panel-inner { padding: 28px 18px !important; gap: 28px !important; }
          .uxui-tab-text h3 { font-size: 22px !important; line-height: 1.3 !important; margin: 14px 0 14px !important; }
          .uxui-tab-text p { font-size: 14px !important; line-height: 24px !important; }
          .uxui-tab-marquee { height: 360px !important; gap: 12px !important; }

          /* Awards */
          .uxui-awards h2 { font-size: 22px !important; }
          .uxui-awards-row { grid-template-columns: 1fr 1fr 1fr !important; gap: 22px 18px !important; }
          .uxui-award { max-width: 110px; }

          /* Why work */
          .uxui-why-row { flex-direction: column !important; gap: 10px !important; text-align: center; }
          .uxui-why-row > h3 { font-size: 18px !important; }
          .uxui-why-item { font-size: 14px !important; }
          .uxui-why-dot { display: none !important; }
          .uxui-why-br { display: none !important; }

          /* Horizontal marquees — smaller cards so 1-2 fit on screen */
          .uxui-h-card { width: 280px !important; border-radius: 10px !important; }
          .uxui-h-card img { border-radius: 10px !important; }
          .uxui-brand-card { width: 220px !important; }
          .uxui-h-track { gap: 20px !important; }

          /* Check lists */
          .uxui-check-list { gap: 14px !important; }
          .uxui-check-list li { font-size: 15px !important; line-height: 1.4 !important; }
        }
      `}} />
    </>
  );
}
