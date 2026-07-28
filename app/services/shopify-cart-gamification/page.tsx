import type { Metadata } from "next";
import Link from "next/link";
import { ogImage } from "@/lib/og";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/ui/CTASection";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import ServiceSchema from "@/components/seo/ServiceSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RelatedServices from "@/components/sections/RelatedServices";
import CartGamificationAccordion from "./CartGamificationAccordion";
import CartDemo from "./CartDemo";
import AOVCalculator from "./AOVCalculator";
import GamifiedCartDemo from "./GamifiedCartDemo";
import AutoScrollRow from "@/components/ui/AutoScrollRow";

const META_DESCRIPTION =
  "Increase your Shopify average order value with cart gamification: free-shipping bars, tiered rewards, and gift-with-purchase. Book a free AOV audit.";
const CANONICAL_URL = "https://ecommwizards.com/services/shopify-cart-gamification";
const TITLE = "Shopify Cart Gamification: Increase Average Order Value";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "increase average order value shopify",
    "increase aov shopify",
    "ecommerce gamification",
    "shopify cart gamification",
    "cart gamification",
    "shopify average order value",
    "free shipping bar shopify",
    "tiered rewards shopify",
    "gift with purchase shopify",
    "gamify cart drawer",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: TITLE,
    description: META_DESCRIPTION,
    images: [{ url: ogImage("Shopify Cart Gamification"), width: 1200, height: 630, alt: "Shopify Cart Gamification by Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: META_DESCRIPTION,
    images: [ogImage("Shopify Cart Gamification")],
  },
};

const GRADIENT =
  "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";
const GRADIENT_TEXT = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const HERO_STATS = [
  { value: "70%", label: "Carts abandoned" },
  { value: "81%", label: "Chase free shipping" },
  { value: "+15-20%", label: "AOV from free shipping" },
  { value: "700+", label: "Shopify stores built" },
];

// Brand logos for the trust strip (same set used across the service pages)
const TRUST_LOGOS = [
  { src: "/images/Case%20studies/logos/111skin%20logo.png", alt: "111SKIN" },
  { src: "/images/Case%20studies/logos/Candy%20Kittens.webp", alt: "Candy Kittens" },
  { src: "/images/Case%20studies/logos/VITHIT.webp", alt: "VITHIT" },
  { src: "/images/Case%20studies/logos/NEOM%20Wellbeing.png", alt: "NEOM Wellbeing" },
  { src: "/images/Case%20studies/logos/Ronaldo%20Jewelry.avif", alt: "Ronaldo Jewelry" },
  { src: "/images/Case%20studies/logos/Wild.svg", alt: "Wild" },
  { src: "/images/everlast-icon.svg", alt: "Everlast" },
  { src: "/images/Case%20studies/logos/Happy-Mammoth.png", alt: "Happy Mammoth" },
  { src: "/images/Case%20studies/logos/Saddleback.svg", alt: "Saddleback" },
  { src: "/images/Case%20studies/logos/Twillory.png", alt: "Twillory" },
];

// Reused case-study slides (agency credibility), same set used on other service pages
const AC_SLIDES: CaseStudySlide[] = [
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    alt: "A Shopify Plus store built for scale for BARK",
    href: "/case-studies",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A Shopify Plus store <strong>built for scale</strong> for <strong>BARK</strong></>),
    quote: (<>&ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong>, made Ecomm Wizards a fantastic partner.&rdquo;</>),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
  {
    key: "everlast",
    image: "/images/Case%20studies/Everlast-banner.webp",
    alt: "A Shopify Plus rebuild that delivered a 152 percent conversion rate for Everlast",
    href: "/case-studies/everlast-shopify-plus-sports-redesign",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A Shopify Plus rebuild that delivered <strong>+152% conversion rate</strong> for <strong>Everlast</strong></>),
    quote: (<>&ldquo;We needed a store that could handle serious athletes, casual fitness buyers, and trade accounts in one place. Ecomm Wizards built exactly that. The <strong>conversion numbers and trade portal revenue</strong> both exceeded what we projected.&rdquo;</>),
    avatar: "/images/Case%20studies/Daniel%20Summerson.jpg",
    name: "Daniel Summerson",
    role: "Managing Director, Everlast Gyms",
  },
];

const MECHANICS = [
  { title: "Free-shipping progress bar", body: "A live bar shows how close the shopper is to free shipping and fills as they add items. It turns the top reason for cart abandonment, surprise shipping costs, into a goal worth reaching, and it costs you nothing extra on orders that were already over the threshold." },
  { title: "Tiered reward ladder", body: "Two to four thresholds stack rewards, for example free shipping at $70, a free gift at $90, and a discount at $120. Each tier gives the shopper a fresh reason to keep adding, so the cart does not stop at the first reward." },
  { title: "Gift with purchase", body: "A free gift earned at a set spend level feels more generous than the same value in money off, and it protects your margin. It gives shoppers a concrete reason to add one more item, and it moves slow stock when you choose the gift well." },
  { title: "Spend-more incentive bar", body: "A dynamic 'spend $12 more to save 10%' message meets the shopper at the moment intent is highest, inside the cart. The number updates as they shop, so the nudge always reflects what they have in the cart right now." },
  { title: "Build-a-bundle and Buy X Get Y", body: "You choose which products pair, then reward shoppers for buying the set. Bundles raise units per order and guide people toward larger, curated carts, while you keep control of the margin on every combination." },
  { title: "In-cart upsells and cross-sells", body: "Relevant add-ons appear in the cart at the point of purchase, when the shopper has already decided to buy. Matched to what is in the cart, these recommendations capture extra units without feeling pushy." },
  { title: "Spin-to-win and scratch-to-reveal", body: "A quick game trades a small reward for an email or SMS opt-in, and it converts far better than a static discount popup. You grow your list and seed an in-cart incentive at the same time, then retarget the shoppers who do not buy today." },
  { title: "Cart urgency and stock cues", body: "A reserved-cart timer or a low-stock note gives shoppers a clear reason to decide now rather than later. Used honestly, it shortens the gap between adding to cart and checking out, so fewer sessions drift away." },
  { title: "Loyalty and points progress", body: "Points earned on each order, shown as progress toward the next tier, bring shoppers back and lift order size as they buy to reach the next level. It turns a single purchase into a reason to return." },
  { title: "Reward reveal animations", body: "A short celebration when a shopper reaches a reward makes the win feel real and reinforces the add-more loop. Small touches of motion keep the cart engaging without getting in the way of checkout." },
];

const TIERS = [
  { tier: "Tier 1", spend: "$70", reward: "Free shipping", why: "Just above your average order" },
  { tier: "Tier 2", spend: "$90", reward: "Free gift", why: "Within easy reach" },
  { tier: "Tier 3", spend: "$120", reward: "10% off", why: "Aspirational, for bigger carts" },
];

const STATS = [
  { v: "70%", l: "Average cart abandonment rate (Baymard Institute)", measures: "Documented average online cart-abandonment rate" },
  { v: "48%", l: "Abandon over extra costs, the top reason (Baymard Institute)", measures: "Shoppers who abandon because shipping, tax, or fees were too high" },
  { v: "81%", l: "Will spend more to earn free shipping (FedEx)", measures: "Shoppers willing to add items to hit a free-shipping threshold" },
  { v: "+15-20%", l: "AOV lift from free shipping (Capital One Shopping)", measures: "Typical average-order-value increase when free shipping is offered" },
  { v: "~$64", l: "Average free-shipping threshold (Capital One Shopping)", measures: "Common minimum spend to earn free shipping" },
  { v: "+47%", l: "Engagement lift from gamification (OpenLoyalty)", measures: "Reported increase in customer engagement from gamification" },
];

const COMPARE_STANDARD = [
  "Shows the subtotal and a checkout button, and little else",
  "Most shoppers stop at the item they came for",
  "No reason to add one more product before checkout",
  "Average order value stays flat while ad costs climb",
];
const COMPARE_GAMIFIED = [
  "Shows a live goal and the reward waiting at the next tier",
  "Nudges shoppers to add one more item to reach it",
  "Makes free shipping a reward to earn, not a cost to you",
  "Lifts average order value from traffic you already paid for",
];

const PROCESS = [
  { step: "01.", title: "Audit", desc: "We review your cart, average order value, and where shoppers drop off, then model the AOV upside. You get a written plan before any build starts." },
  { step: "02.", title: "Build & Configure", desc: "We add the mechanics that fit your store, from free-shipping bars to tiered rewards and gift-with-purchase, matched to your margins and your brand." },
  { step: "03.", title: "A/B Test", desc: "We test each mechanic against your current cart so every change is backed by your own data, not an industry average." },
  { step: "04.", title: "Optimize", desc: "We track AOV, conversion, and reward redemption, then tune thresholds and offers so the lift holds as your catalog changes." },
];

const FIT_BEST = [
  "You get steady traffic but your average order value is flat",
  "You already offer free shipping over a threshold",
  "Your margins leave room for a reward or a gift",
  "You sell products that pair well or bundle",
];
const FIT_NOT = [
  { k: "traffic", t: (<>You get very little traffic yet (start with <Link href="/services/shopify-cro-agency">CRO</Link> or <Link href="/services/shopify-seo-agency">SEO</Link> first)</>) },
  { k: "single", t: "You sell one high-ticket product with no add-ons or bundle" },
  { k: "margin", t: "Your margins are too thin to fund any reward" },
];

const FAQS = [
  { question: "What is Shopify cart gamification?", answer: "Cart gamification adds game mechanics to your Shopify cart, such as free-shipping progress bars, tiered rewards, and gift-with-purchase. Shoppers see a clear goal and add one more item to reach the next reward. It lifts average order value from the traffic you already have, without cutting your prices." },
  { question: "What is ecommerce gamification?", answer: "Ecommerce gamification adds game mechanics like progress bars, tiered rewards, points, and spin-to-win to an online store to lift engagement and sales. Cart gamification is the highest-return type because it works at the moment of purchase, turning the cart into a goal shoppers want to reach." },
  { question: "How does cart gamification increase average order value?", answer: "It gives shoppers a reason to spend a little more. A bar that reads 'you're $15 away from free shipping' turns a threshold into a goal, and most shoppers would rather add a product than pay for shipping. Tiered rewards keep that momentum going past the first threshold, so carts grow." },
  { question: "How do I increase average order value on Shopify?", answer: "The fastest levers live in the cart: a free-shipping progress bar, tiered rewards, gift-with-purchase, and relevant in-cart upsells. Together they give shoppers a reason to add one more item on every order. We build these into your Shopify cart and A/B test each one, so the lift is proven, not assumed." },
  { question: "What is a free shipping progress bar?", answer: "A free shipping progress bar shows how close a shopper is to earning free shipping, and it fills as they add items. Since surprise shipping costs are the top reason people abandon carts, the bar reframes shipping as a reward to earn. It is the highest-impact cart mechanic for most stores." },
  { question: "What reward thresholds should I set?", answer: "Set your first reward just above your current average order value, usually 10 to 20 percent higher, so most shoppers can reach it with one more item. Keep the second tier within easy reach and make the third aspirational. We model your thresholds against your real order data before we launch." },
  { question: "Will cart gamification cheapen my brand?", answer: "Done well, it reads as a helpful nudge, not a carnival. We match the design to your brand and use restrained rewards like free shipping or a gift, rather than flashing discounts everywhere. Premium brands use progress bars and gift-with-purchase every day because the mechanic feels generous, not gimmicky." },
  { question: "Do I need custom development or Shopify Plus?", answer: "No. We add cart gamification to your existing Shopify cart or cart drawer on standard plans, using a mix of trusted apps and custom code where it earns its place. Shopify Plus gives you more checkout control, but it is not required to lift AOV with these mechanics." },
  { question: "Which cart gamification mechanics lift AOV the most?", answer: "The free-shipping progress bar and tiered reward ladder move average order value the most for the widest range of stores. Gift-with-purchase and in-cart upsells add more where your margins and catalog allow. We pick the mix that fits your store, then test it against your current cart." },
  { question: "How do you measure the AOV lift?", answer: "We compare average order value, conversion rate, and reward redemption before and after launch, and we A/B test each mechanic against your current cart. That way every change is backed by your own numbers, not an industry average, so you know exactly what the gamified cart added." },
  { question: "Do rewards and discounts hurt my margins?", answer: "They should not, as long as each reward is funded by the larger order it creates. A free gift at $90 only triggers once a shopper spends $90, so the bigger order pays for the gift. We set every threshold and reward against your margins so the math stays positive." },
  { question: "How long does it take to launch?", answer: "Most builds go live in two to four weeks. We start with an audit of your cart and order data, agree on the mechanics and thresholds, build and configure them on your store, then A/B test before rollout. Ongoing optimization continues after launch as your catalog changes." },
];

// Real client cart drawers (WebP, 680px tall; widths for CLS-safe layout).
const CLIENT_CARTS = [
  { src: "/images/gamify-cart/client-cart-1.webp", w: 382, alt: "Free-shipping progress bar filling inside a Shopify cart drawer as items are added" },
  { src: "/images/gamify-cart/client-cart-2.webp", w: 382, alt: "Tiered reward ladder in a cart drawer: free shipping, then a free gift, then a discount" },
  { src: "/images/gamify-cart/client-cart-3.webp", w: 341, alt: "Gift-with-purchase earned at a spend threshold in a Shopify cart" },
  { src: "/images/gamify-cart/client-cart-4.webp", w: 379, alt: "Spend-more incentive bar nudging a shopper toward the next reward in the cart" },
  { src: "/images/gamify-cart/client-cart-5.webp", w: 333, alt: "In-cart upsell recommending a matching add-on before checkout" },
  { src: "/images/gamify-cart/client-cart-6.webp", w: 390, alt: "Loyalty points progress toward the next tier shown in a Shopify cart drawer" },
  { src: "/images/gamify-cart/client-cart-7.webp", w: 381, alt: "Build-a-bundle offer pairing products for a reward inside the cart" },
  { src: "/images/gamify-cart/client-cart-8.webp", w: 617, alt: "Cross-sell recommendations shown in the cart at the point of purchase" },
  { src: "/images/gamify-cart/client-cart-9.webp", w: 331, alt: "Low-stock and reserved-cart urgency cues in a gamified Shopify cart" },
  { src: "/images/gamify-cart/client-cart-10.webp", w: 287, alt: "Reward-reveal animation celebrating a shopper reaching the free-shipping goal" },
];

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Shopify Cart Gamification", item: CANONICAL_URL },
  ],
};
const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

function Check() {
  return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="11" fill="rgba(61,199,122,0.15)" /><path d="M7 12.5l3.2 3.2L17 9" stroke="#2A9555" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
}
function Cross() {
  return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.08)" /><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="rgba(255,255,255,0.55)" strokeWidth="2.2" strokeLinecap="round" /></svg>);
}
function Arrow() {
  return (<svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>);
}

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <ServiceSchema url={CANONICAL_URL} name="Shopify Cart Gamification" serviceType="Cart gamification and average order value (AOV) optimization" description={META_DESCRIPTION} />
      <Breadcrumbs current="/services/shopify-cart-gamification" />

      {/* 1. Hero (dark, 2-col) */}
      <section className="std-hero" style={{ background: "#000000" }} aria-label="Shopify cart gamification hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Shopify Cart Gamification</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: "#fff", fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Gamify Your Shopify Cart to{" "}
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Increase Average Order Value
              </span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              Most shoppers stop at the item they came for. Cart gamification gives them a reason to add one more, with free-shipping bars, tiered rewards, and gift-with-purchase built into your Shopify cart. You increase average order value from traffic you already have, without cutting prices.
            </p>
            <div className="std-hero-stats">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="std-hero-stat-item">
                  <span className="std-hero-stat-num">{s.value}</span>
                  <span className="std-hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <span className="group inline-flex p-[2px] rounded-full mt-8" style={{ background: GRADIENT }}>
              <Link
                href="/free-shopify-store-audit"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Get a Free Cart Audit</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>

          <div className="sat-hero-img-wrap">
            <CartDemo />
          </div>
        </div>
      </section>

      {/* 2. Trust strip - logo marquee */}
      <section className="std-trust" style={{ background: "#fff" }} aria-label="Brands that trust Ecomm Wizards">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: "#000", fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            700+ Shopify Stores Built. Here&apos;s Who Trusts Us.
          </h2>
          <p className="text-center" style={{ color: "#334155", fontSize: 16, lineHeight: "26px", margin: "10px 0 0" }}>
            From DTC startups to global brands. The same team that ships award-winning Shopify stores builds carts that lift average order value.
          </p>
          <div className="std-trust-carousel" style={{ marginTop: 20, width: "100%", overflow: "hidden" }}>
            <div className="sat-trust-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
                <div key={i} className="std-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src} alt={i < TRUST_LOGOS.length ? l.alt : ""} className="std-trust-logo" width={200} height={80} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. What is cart gamification */}
      <section className="ac-sec ac-white">
        <div className="ac-wrap ac-two">
          <div>
            <span className="ac-eyebrow">What it is</span>
            <h2 className="ac-h2">What is Shopify cart gamification?</h2>
            <p className="ac-p"><strong>Cart gamification adds game mechanics to your Shopify cart, such as free-shipping progress bars, tiered rewards, and gift-with-purchase, so shoppers add one more item to reach the next reward.</strong> It turns the cart into a game with a clear goal, live feedback, and a reason to spend a little more. It is a focused form of ecommerce gamification, applied where it converts hardest: the cart.</p>
            <p className="ac-p">Picture a shopper with $55 in the cart. A bar reads &ldquo;you&apos;re $15 away from free shipping.&rdquo; Adding one more product costs less than the shipping would, so they do it. That single nudge is a gamified cart at work, and it repeats on every order.</p>
            <p className="ac-p">Unlike a blanket discount, shoppers earn each reward by spending more, so the bigger order pays for it, not your margin.</p>
            <p className="ac-p">It is one of the highest-return conversion tactics on Shopify, because it lifts revenue from visitors you have already paid to acquire. Pair it with <Link href="/services/shopify-cro-agency">CRO</Link> and <Link href="/services/a-b-testing">A/B testing</Link> and every gain is measured, not assumed.</p>
            <div style={{ marginTop: 28 }}>
              <span className="group inline-flex p-[2px] rounded-full" style={{ background: GRADIENT }}>
                <Link href="/free-shopify-store-audit" className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}>
                  <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Get a Free Cart Audit</span>
                  <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
                </Link>
              </span>
            </div>
          </div>
          <div>
            <GamifiedCartDemo />
          </div>
        </div>
      </section>

      {/* 4. How it lifts AOV - the math */}
      <section className="ac-sec ac-cream">
        <div className="ac-wrap">
          <div className="ac-head ac-head-wide">
            <span className="ac-eyebrow">The math</span>
            <h2 className="ac-h2">How Cart Gamification Increases Average Order Value</h2>
            <p className="ac-lead">Shoppers spend more when the next reward feels close and worth reaching. Here is what that looks like for one shopper, and what it adds up to across your store.</p>
          </div>
          <div className="ac-two">
            <div className="ac-card-box">
              <p className="ac-box-title">What the shopper sees</p>
              <p className="ac-vs-text" style={{ fontSize: 15 }}>There is $55 in the cart. The bar reads &ldquo;you&apos;re $15 from free shipping.&rdquo; Adding a $22 item beats paying $8 for shipping, so the shopper adds it. The order grows from $55 to $77, and they feel like they won.</p>
            </div>
            <div className="ac-card-box">
              <p className="ac-box-title">What it means for you</p>
              <p className="ac-vs-text" style={{ fontSize: 15 }}>Say your average order is $60 and free shipping starts at $70. If a gamified cart lifts your average order value by 15 percent, that is $9 more on every order. On 1,000 orders a month, that is about $9,000 in extra revenue, with no added ad spend.</p>
            </div>
          </div>
          <div className="cg-table-wrap">
            <table className="cg-table">
              <caption>A sample reward ladder for a $60 average order</caption>
              <thead>
                <tr><th scope="col">Tier</th><th scope="col">Spend</th><th scope="col">Reward</th><th scope="col">Why it sits here</th></tr>
              </thead>
              <tbody>
                {TIERS.map((t) => (
                  <tr key={t.tier}><th scope="row">{t.tier}</th><td>{t.spend}</td><td>{t.reward}</td><td>{t.why}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. What we build into your cart (services accordion) */}
      <section className="std-solutions" style={{ background: "#fff" }} aria-label="Shopify cart gamification services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label">What&apos;s Included</span>
            <h2 style={{ color: "#000", fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              What We Build Into Your Cart
            </h2>
            <p className="mt-5" style={{ color: "#334155", fontSize: 16, lineHeight: "28px" }}>
              We add the mechanics that fit your store and your margins, from free-shipping bars to tiered rewards, gift-with-purchase, and in-cart upsells. We test each one against your current cart, so you ship changes that pay for themselves.
            </p>
            <Link href="/book-shopify-consultation" className="std-cta-sol mt-8">
              Book a Free Consultation
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gamify-cart/services-composite.webp"
              alt="Real gamified Shopify cart drawers built by Ecomm Wizards: free-shipping progress bars, tiered gift rewards, subscription upsells, and product recommendations"
              width={1100}
              height={1099}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "auto", display: "block", marginTop: 32 }}
            />
          </div>

          <CartGamificationAccordion items={MECHANICS} />
        </div>
      </section>

      {/* 5c. Gamified carts we've built (gallery) */}
      <section className="ac-sec ac-cream">
        <div className="ac-wrap" style={{ textAlign: "center", marginBottom: 28 }}>
          <span className="ac-eyebrow">Our work</span>
          <h2 className="ac-h2">Gamified Carts We&apos;ve Built</h2>
          <p className="ac-lead" style={{ marginLeft: "auto", marginRight: "auto" }}>Real cart drawers we&apos;ve shipped for Shopify brands.</p>
        </div>
        <AutoScrollRow
          items={CLIENT_CARTS.map((c, i) => (
            <div key={i} style={{ height: 320, borderRadius: 14, overflow: "hidden", border: "1px solid #ece3d0", background: "#fff", boxShadow: "0 10px 30px rgba(15,23,42,0.08)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.alt} width={c.w} height={680} loading="lazy" decoding="async" style={{ height: "100%", width: "auto", display: "block" }} />
            </div>
          ))}
          direction="left"
          speedSec={45}
          gap={16}
          ariaLabel="Gamified cart drawers we have built for clients"
        />
      </section>

      {/* 6. The data (sourced stats) */}
      <section className="ac-sec ac-dark">
        <div className="ac-wrap">
          <div className="ac-head ac-head-wide">
            <span className="ac-eyebrow ac-eyebrow-dark">The data</span>
            <h2 className="ac-h2 ac-h2-dark">The Data Behind Cart Gamification and AOV</h2>
            <p className="ac-lead ac-lead-dark">The numbers behind why a gamified cart works. Every figure is attributed to its source.</p>
          </div>
          <div className="ac-grid-3">
            {STATS.map((s) => (
              <div key={s.l} className="ac-stat-card">
                <span className="ac-stat-card-val" style={GRADIENT_TEXT}>{s.v}</span>
                <span className="ac-stat-card-label">{s.l}</span>
              </div>
            ))}
          </div>
          <div className="sr-only">
            <table>
              <caption>Cart gamification and average order value statistics with sources</caption>
              <thead>
                <tr><th scope="col">Figure</th><th scope="col">What it measures</th><th scope="col">Source</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">70%</th><td>Documented average online cart-abandonment rate</td><td>Baymard Institute</td></tr>
                <tr><th scope="row">48%</th><td>Shoppers who abandon because shipping, tax, or fees were too high</td><td>Baymard Institute</td></tr>
                <tr><th scope="row">81%</th><td>Shoppers willing to add items to hit a free-shipping threshold</td><td>FedEx</td></tr>
                <tr><th scope="row">15 to 20%</th><td>Typical average-order-value increase when free shipping is offered</td><td>Capital One Shopping</td></tr>
                <tr><th scope="row">~$64</th><td>Common minimum spend to earn free shipping</td><td>Capital One Shopping</td></tr>
                <tr><th scope="row">47%</th><td>Reported increase in customer engagement from gamification</td><td>OpenLoyalty</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. AOV calculator */}
      <section className="ac-sec ac-cream">
        <div className="ac-wrap">
          <div className="ac-head ac-head-wide">
            <span className="ac-eyebrow">Your numbers</span>
            <h2 className="ac-h2">Estimate Your Average Order Value Lift</h2>
            <p className="ac-lead">Enter your average order value and monthly orders to see what a modest AOV lift could add to your revenue.</p>
          </div>
          <AOVCalculator />
        </div>
      </section>

      {/* 8. Gamified vs standard cart */}
      <section className="ac-sec ac-white">
        <div className="ac-wrap">
          <div className="ac-head ac-head-wide">
            <span className="ac-eyebrow">Side by side</span>
            <h2 className="ac-h2">A Gamified Cart vs a Standard Shopify Cart</h2>
            <p className="ac-lead">Same traffic, same products. The difference is whether the cart gives shoppers a reason to add one more item.</p>
          </div>
          <div className="ac-two ac-compare">
            <div className="ac-compare-col">
              <p className="ac-compare-h">Standard Shopify cart</p>
              <ul className="ac-compare-list">
                {COMPARE_STANDARD.map((c) => (<li key={c}>{c}</li>))}
              </ul>
            </div>
            <div className="ac-compare-col ac-compare-col-geo">
              <p className="ac-compare-h ac-compare-h-geo">Gamified cart</p>
              <ul className="ac-compare-list">
                {COMPARE_GAMIFIED.map((c) => (<li key={c}>{c}</li>))}
              </ul>
            </div>
          </div>
          <div className="sr-only">
            <table>
              <caption>A gamified Shopify cart compared with a standard Shopify cart</caption>
              <thead>
                <tr><th scope="col">Standard Shopify cart</th><th scope="col">Gamified cart</th></tr>
              </thead>
              <tbody>
                {COMPARE_STANDARD.map((c, i) => (
                  <tr key={c}><td>{c}</td><td>{COMPARE_GAMIFIED[i]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Proven results (CaseStudySlider) */}
      <section className="ssd-results-section" style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif", padding: "60px 20px" }}>
        <div className="ssd-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="ssd-results-heading">Proven Shopify results from our team</h2>
          <p className="ssd-results-desc">We have built <Link href="/case-studies">700+ Shopify stores</Link> and generated $900M+ in revenue across 8+ years and 9+ industry awards. The same team builds carts that lift average order value.</p>
          <CaseStudySlider slides={AC_SLIDES} intervalMs={6000} showDots />
        </div>
      </section>

      {/* 10. Process */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: "#fff", padding: "53px 20px" }} aria-label="Our Shopify cart gamification process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] md:max-lg:py-[20px] lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: "#FBF7ED", borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            How We Add Gamification to Your Cart
          </h2>
          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            Four steps from audit to a cart that lifts AOV. Most builds go live in 2 to 4 weeks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {PROCESS.map(({ step, title, desc }) => (
              <div key={step} className="p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]" style={{ background: "#FFFFFF", borderRadius: "16px", boxSizing: "border-box" }}>
                <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{step}</p>
                <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Is this right for you */}
      <section className="ac-sec ac-dark">
        <div className="ac-wrap">
          <div className="ac-head">
            <span className="ac-eyebrow ac-eyebrow-dark">Fit</span>
            <h2 className="ac-h2 ac-h2-dark">Is cart gamification right for your store?</h2>
          </div>
          <div className="ac-two">
            <div className="ac-fit ac-fit-yes">
              <p className="ac-fit-h">A strong fit if</p>
              <ul className="ac-fit-list">
                {FIT_BEST.map((b) => (<li key={b}><Check /><span>{b}</span></li>))}
              </ul>
            </div>
            <div className="ac-fit ac-fit-no">
              <p className="ac-fit-h">Not yet if</p>
              <ul className="ac-fit-list">
                {FIT_NOT.map((b) => (<li key={b.k}><Cross /><span>{b.t}</span></li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <FAQSection title="Shopify Cart Gamification FAQs" faqs={FAQS} />

      {/* 13. CTA */}
      <CTASection
        heading="See how much more each cart could be worth"
        subheading="Get a free cart and AOV audit. We'll show you which mechanics fit your store and the revenue they could add, with no obligation."
        primaryLabel="Get a Free Cart Audit"
        background="#000"
        primaryWhite
        secondaryGradient
      />

      <RelatedServices current="/services/shopify-cart-gamification" />
    </>
  );
}

const CSS = `
.ac-wrap{max-width:1200px;margin:0 auto;padding:0 20px}
.ac-h1{font-family:'Poppins',sans-serif;font-weight:700;color:#fff;line-height:1.1;letter-spacing:-0.02em;font-size:clamp(34px,5vw,56px);margin:0 0 20px}
.ac-h2{font-family:'Poppins',sans-serif;font-weight:700;color:#0f172a;line-height:1.18;font-size:clamp(26px,3.4vw,38px);margin:0 0 14px}
.ac-h2-dark{color:#fff}
.ac-p{font-family:'Poppins',sans-serif;font-size:16px;line-height:1.7;color:#475569;margin:0 0 16px;max-width:620px}
.ac-p a,.ac-lead a{color:#1F7A45;text-decoration:underline;text-underline-offset:2px;font-weight:600}
.ac-eyebrow{display:inline-block;font-family:'Poppins',sans-serif;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#1F7A45;margin-bottom:12px}
.ac-eyebrow-dark{color:#61ce70}
.ac-lead{font-family:'Poppins',sans-serif;font-size:17px;line-height:1.6;color:#64748b;margin:0;max-width:680px}
.ac-lead-dark{color:rgba(255,255,255,0.7)}
.ac-sec{padding:60px 0}
.ac-white{background:#fff}
.ac-cream{background:#FBF7ED}
.ac-dark{background:#000}
.ac-head{margin-bottom:40px;max-width:760px}
.ac-head.ac-head-wide{max-width:none}

/* Hero */
.std-badge{display:inline-block;padding:6px 16px;background:rgba(97,206,112,0.12);border:1px solid rgba(97,206,112,0.3);border-radius:999px;color:#61ce70;font-size:13px;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
.std-hero-stats{display:flex;flex-wrap:nowrap;gap:0;margin-top:32px;border-top:1px solid rgba(255,255,255,0.12);padding-top:24px}
.std-hero-stat-item{display:flex;flex-direction:column;gap:4px;padding:0 22px 0 0;margin-right:22px;border-right:1px solid rgba(255,255,255,0.12);white-space:nowrap}
.std-hero-stat-item:last-child{border-right:none;padding-right:0;margin-right:0}
.std-hero-stat-num{font-size:28px;font-weight:800;line-height:1;background:var(--brand-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.std-hero-stat-label{font-size:13px;font-weight:500;color:#fff;letter-spacing:.02em}
.sat-hero-img-wrap{display:flex;align-items:center;justify-content:center;position:relative}
@media (min-width:1025px) and (max-width:1307px){.std-hero-stats{flex-wrap:nowrap!important}.std-hero-stat-item{padding-right:18px!important;margin-right:18px!important}.std-hero-stat-num{font-size:24px!important}.std-hero-stat-label{font-size:12px!important}}
@media (max-width:1024px){.std-hero-h1{font-size:40px!important}.std-hero-inner{padding:60px 20px!important}.std-hero-p{margin-top:16px!important}.std-hero-stats{flex-wrap:nowrap!important;margin-top:16px!important;padding-top:16px!important}.std-hero-stat-item{padding-right:16px!important;margin-right:16px!important}.sat-hero-img-wrap{margin-top:8px}}
@media (max-width:640px){.std-hero-h1{font-size:28px!important;line-height:1.22!important}.std-hero-p{font-size:14px!important;line-height:24px!important}.std-hero-stats{display:grid!important;grid-template-columns:1fr 1fr;gap:18px 0!important;margin-top:24px;padding-top:18px}.std-hero-stat-item{width:auto!important;padding:0 16px 0 0!important;margin:0!important;border-right:1px solid rgba(255,255,255,0.12)}.std-hero-stat-item:nth-child(even){border-right:none;padding:0 0 0 16px!important}}

/* Trust strip - logo marquee */
.std-trust-carousel{overflow:hidden;position:relative}
.sat-trust-track{display:flex;align-items:center;gap:80px;width:max-content;animation:satTrustScroll 32s linear infinite}
.std-trust-carousel:hover .sat-trust-track{animation-play-state:paused}
@keyframes satTrustScroll{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
.std-trust-slide{flex-shrink:0;display:flex;align-items:center;justify-content:center}
.std-trust-logo{height:46px;width:auto;max-width:170px;object-fit:contain;opacity:.85}
@media (max-width:640px){.sat-trust-track{gap:48px!important}.std-trust-logo{height:38px}.std-trust-h2{font-size:22px!important}}

/* Services / solutions section */
.std-label{font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#334155}
.std-cta-sol{position:relative;display:inline-flex;align-items:center;gap:12px;background:#000;color:#fff;font-family:'Poppins',sans-serif;font-weight:600;font-size:16px;border-radius:50px;padding:20px 45px;text-decoration:none;line-height:1;transition:color .25s ease}
.std-cta-sol::before{content:'';position:absolute;inset:0;border-radius:50px;padding:2px;background:linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%);-webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);-webkit-mask-composite:destination-out;mask-composite:exclude;opacity:0;transition:opacity .25s ease;pointer-events:none}
.std-cta-sol:hover::before{opacity:1}
.std-cta-sol:visited,.std-cta-sol:focus,.std-cta-sol:active{color:#fff;text-decoration:none}
.std-acc-item{border-top:1px solid rgba(17,17,17,.14)}
.std-acc-item:last-child{border-bottom:1px solid rgba(17,17,17,.14)}
.std-acc-icon{flex:0 0 18px;color:#000;transition:transform .3s ease}
.std-acc-icon--open{transform:rotate(180deg)}
@media (max-width:1024px){.std-solutions h2{font-size:38px!important}.std-solutions-grid{grid-template-columns:1fr 1.1fr!important;gap:40px!important}}
@media (max-width:768px){.std-solutions h2{font-size:36px!important}.std-solutions-grid{gap:24px!important}}
@media (max-width:640px){.std-solutions>div{padding:40px 18px!important}.std-solutions-grid{grid-template-columns:1fr!important}.std-solutions-left{position:static!important}.std-solutions h2{font-size:26px!important;line-height:1.28!important}.std-cta-sol{margin-top:16px!important}}

/* Two-col */
.ac-two{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:40px;align-items:start}
.ac-card-box{background:#fff;border:1px solid #e8ecf1;border-radius:18px;padding:28px;box-shadow:0 10px 40px rgba(0,0,0,0.05)}
.ac-box-title{font-family:'Poppins',sans-serif;font-weight:700;font-size:16px;color:#0f172a;margin:0 0 16px}
.ac-card-col{display:flex;flex-direction:column;gap:20px}
.ac-vs{display:flex;flex-direction:column;gap:16px}
.ac-vs-text{font-family:'Poppins',sans-serif;font-size:14px;color:#475569;line-height:1.5;margin:0}
.ac-checklist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px}
.ac-checklist li{display:flex;gap:12px;align-items:flex-start;font-family:'Poppins',sans-serif;font-size:15px;color:#334155;line-height:1.5}

/* Stat cards */
.ac-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.ac-stat-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:30px 26px;text-align:center}
.ac-stat-card-val{display:block;font-family:'Poppins',sans-serif;font-weight:800;font-size:44px;line-height:1;margin-bottom:12px}
.ac-stat-card-label{font-family:'Poppins',sans-serif;font-size:14px;color:rgba(255,255,255,0.7);line-height:1.5}

/* Compare */
.ac-compare-col{border:1px solid #e8ecf1;border-radius:16px;padding:28px;background:#fff}
.ac-compare-col-geo{border-color:#2A9555;box-shadow:0 10px 40px rgba(42,149,85,0.08)}
.ac-compare-h{font-family:'Poppins',sans-serif;font-weight:700;font-size:18px;color:#0f172a;margin:0 0 16px}
.ac-compare-h-geo{color:#1F7A45}
.ac-compare-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px}
.ac-compare-list li{font-family:'Poppins',sans-serif;font-size:15px;color:#475569;line-height:1.55;padding-left:18px;position:relative}
.ac-compare-list li:before{content:"";position:absolute;left:0;top:9px;width:7px;height:7px;border-radius:50%;background:#cbd5e1}
.ac-compare-col-geo .ac-compare-list li:before{background:#2A9555}

/* Tag pills (reused in card 2) */
.ac-list-tag{display:inline-block;font-family:'Poppins',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;padding:4px 12px;border-radius:9999px;margin-bottom:14px}
.ac-tag-bad{background:#f1f0ec;color:#94a3b8}
.ac-tag-good{background:#E8F5EC;color:#1F7A45}

/* Tables (tier ladder) */
.cg-table-wrap{overflow-x:auto;margin-top:28px;border:1px solid #e8ecf1;border-radius:14px;background:#fff}
.cg-table{width:100%;border-collapse:collapse;min-width:560px;font-family:'Poppins',sans-serif}
.cg-table caption{caption-side:top;text-align:left;font-size:14px;font-weight:600;color:#334155;padding:16px 18px 4px}
.cg-table th,.cg-table td{padding:14px 18px;text-align:left;font-size:14px;border-bottom:1px solid #eef1f5;line-height:1.5}
.cg-table thead th{font-weight:600;color:#0f172a;background:#f8fafc}
.cg-table tbody th{font-weight:600;color:#0f172a}
.cg-table tbody td{color:#475569}
.cg-table tbody tr:last-child th,.cg-table tbody tr:last-child td{border-bottom:none}

/* Fit */
.ac-fit{border-radius:16px;padding:28px}
.ac-fit-yes{background:rgba(61,199,122,0.08);border:1px solid rgba(61,199,122,0.25)}
.ac-fit-no{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)}
.ac-fit-h{font-family:'Poppins',sans-serif;font-weight:700;font-size:17px;color:#fff;margin:0 0 18px}
.ac-fit-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px}
.ac-fit-list li{display:flex;gap:12px;align-items:flex-start;font-family:'Poppins',sans-serif;font-size:15px;color:rgba(255,255,255,0.82);line-height:1.5}
.ac-fit-list li a{color:#61ce70;text-decoration:underline;text-underline-offset:2px}

@media (max-width:760px){
  .ac-two{grid-template-columns:minmax(0,1fr)}
  .ac-grid-3{grid-template-columns:1fr}
  .ac-head{margin-bottom:30px}
}
/* responsive section padding */
@media (max-width:1024px){.ac-sec{padding:55px 0}}
@media (max-width:768px){.ac-sec{padding:50px 0}}
@media (max-width:449px){.ac-sec{padding:45px 0}}
@media (prefers-reduced-motion: reduce){.sat-trust-track{animation:none!important}}
`;
