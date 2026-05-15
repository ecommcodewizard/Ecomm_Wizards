import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import ABTestingFAQ from "@/components/sections/ABTestingFAQ";

export const metadata: Metadata = {
  title: "Shopify A/B Testing That Actually Moves the Needle | Ecomm Wizards",
  description:
    "Ecomm Wizards designs, launches, and runs high-impact A/B testing on Shopify Plus using Shoplift — every layout tweak, headline swap, and checkout change backed by real data.",
};

const GRADIENT_TEXT = {
  background: "var(--brand-gradient)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const PAIN_POINTS = [
  {
    title: "Conversion has plateaued (or slipped).",
    desc: "You are pouring money into ads and features but the numbers refuse to move. Without A/B testing on Shopify, you will never know which changes are helping and which ones are quietly killing your revenue.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 9 6 6M15 9l-6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Site fatigue is real.",
    desc: "Your pages look the same as they did six months ago. Promotions feel recycled. Shoppers scroll past because nothing feels fresh, and engagement drops every week you wait.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path d="M3 6v12h18" strokeLinecap="round" />
        <path d="m6 14 4-4 3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Debates stall decisions.",
    desc: "Your team argues over layouts, offers, and app blocks. Everyone has an opinion but no one has proof. Shopify A/B testing replaces boardroom guesses with real shopper behavior so the data picks the winner, not the loudest voice.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path d="M5 3h11l3 3v15H5z" strokeLinejoin="round" />
        <path d="M8 9h6M8 13h4" strokeLinecap="round" />
        <circle cx="16" cy="17" r="2.2" />
      </svg>
    ),
  },
  {
    title: "Dev time is scarce.",
    desc: "Your developers spend weeks engineering changes that may never convert. The best A/B testing tools for ecommerce personalization let you validate ideas before committing expensive dev hours, so your team only builds what is proven to work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const WHY_SHOPLIFT = [
  {
    title: "Lift Assist = Speed.",
    desc: "Auto generate branded sections like countdowns, sticky carts, inventory indicators, and urgency banners based on insights from billions of sessions. Then launch them as tests in minutes, not weeks. It is one of the reasons we consider Shoplift among the best A/B testing tools for ecommerce personalization available today.",
    image: "/images/pos-card-2.webp",
  },
  {
    title: "Serious Analytics.",
    desc: "612 analysis parameters with real time significance modeling using both Bayesian and frequentist methods so you can make confident calls earlier. No more waiting months for “maybe.” You get clean data, clear winners, and the conviction to scale what works.",
    image: "/images/pos-card-3.webp",
  },
  {
    title: "Theme Level Power.",
    desc: "Test global elements like navigation, mini cart, announcement bars, and app blocks alongside full template variations across PDPs, collections, and landing pages. No brittle workarounds. No code hacks. Just clean, native Shopify A/B testing at the theme level where it actually matters.",
    image: "/images/pos-card-4.webp",
  },
  {
    title: "No Flicker. No Slowdown",
    desc: "A lightweight snippet with built in anti flicker technology prevents the infamous “blink” that kills shopper trust. Your customers see the variant instantly, your page speed stays untouched, and your A/B testing on Shopify runs without compromising the experience you worked so hard to build.",
    image: "/images/pos-card-5.webp",
  },
];

const TESTIMONIAL_CARDS = [
  {
    text: "Elegant custom store with Recharge and Klaviyo— “Top-notch experience from start to finish!”",
    logo: "/images/Frame_1000007615.webp",
    logoAlt: "EBY",
    name: "Sofia Vergara, Marketing Manager",
  },
  {
    text: "Sophisticated site with AI and Swatch King— “Efficient workflow and professional execution.”",
    logo: "/images/Frame_1000007615-1.avif",
    logoAlt: "The Harvard Shop",
    name: "Daniyal S.",
  },
  {
    text: "Dynamic, personalized build with Rebuy and Subtract—resulting in exceptional communication and results.",
    logo: "/images/Frame_1000007615-2.avif",
    logoAlt: "BARK",
    name: "Nari Sitaraman, CTO",
  },
];

const TEST_DRIVE_STEPS = [
  {
    title: "Strategy Sprint:",
    desc: " Ecomm Wizards runs a focused strategy session to identify your single highest leverage test. We define the success metric, set guardrails, and align on what \"winning\" looks like before a single pixel moves. This is Shopify A/B testing done with intent, not random experiments thrown at the wall.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path d="M9 18h6M10 21h4" strokeLinecap="round" />
        <path d="M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Design & Build:",
    desc: " We produce the variant inside your existing theme or use Lift Assist to generate it. Either way, the test looks and feels native to your store. No awkward overlays. No brand mismatches. Just a clean variation ready to compete.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" />
        <path d="m3 13 9 5 9-5M3 18l9 5 9-5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Launch in Shoplift:",
    desc: " We configure proper traffic targeting, allocation splits, and analytics tracking inside Shoplift so your A/B testing on Shopify runs with statistical rigor from day one. No guesswork on sample sizes. No premature calls.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path d="M3 17h4l4-7 3 6 2-3h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Decision:",
    desc: " The moment data reaches significance, we call it. If the variant wins, we apply it with one click inside Shoplift. If it loses, we learn exactly why and feed that insight into your next test. Every round makes your store smarter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
        <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
  },
];

const GUARANTEES = [
  {
    title: "Guarantee 1: 100% Implementation Credit",
    desc: " If the variant does not beat control within the agreed testing window, we credit 100% of our implementation fee toward your next engagement. You only pay for Shopify A/B testing that delivers real, measurable results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <rect x="2.5" y="6" width="19" height="12" rx="1.5" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M6 12h.01M18 12h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Guarantee 2: Extended Shoplift Trial: 30 Days Free",
    desc: " Most brands get 14 days. Our clients get 30 days with priority onboarding directly through the Shopify App Store. That is double the runway to validate your first test and see A/B testing on Shopify working inside your own store before committing a cent.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <path d="M4 4h6M4 4v6M20 4h-6M20 4v6M4 20h6M4 20v-6M20 20h-6M20 20v-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Guarantee 3: Transparent Hours. Every Single Minute.",
    desc: " Ecomm Wizards documents every optimization minute so you see exactly what drives outcomes. No mystery retainers. No vague \"strategy hours.\" You get a clear breakdown of where the investment went and what it produced.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l3 2M9 2h6" strokeLinecap="round" />
      </svg>
    ),
  },
];

const TEST_FIRST = [
  {
    title: "Show More Product Angles",
    desc: "Add lifestyle shots and detail close ups versus a lean gallery to increase trust and purchase confidence on your PDPs. This is one of the most common early wins in Shopify A/B testing because most stores underinvest in gallery depth and leave conversion on the table without even knowing it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-9 w-9">
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <circle cx="8.5" cy="10.5" r="1.5" />
        <path d="m3 17 5-4 4 3 4-5 5 6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Bring Products to Life with Video",
    desc: "Embed a short product demo or UGC clip in the gallery and test it against static images only. Case studies consistently show double digit engagement gains within weeks. If you have never run A/B testing on Shopify for your product media, this is where you start.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-9 w-9">
        <rect x="3" y="6" width="14" height="12" rx="1.5" />
        <path d="m17 10 4-2v8l-4-2z" strokeLinejoin="round" />
        <path d="M9 10v4l3.5-2z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Optimize Your App Stack",
    desc: "Run a head to head test on your app blocks. Shipping protection app versus no protection. UGC widget versus no widget. Delivery promise app versus standard copy. The best A/B testing tools for ecommerce personalization like Shoplift let you quantify the exact revenue impact of every app so you keep the winners and cut the rest with confidence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-9 w-9">
        <path d="M12 2 14.5 7l5.5.8-4 3.9.9 5.5L12 14.6 7.1 17.2 8 11.7 4 7.8 9.5 7Z" strokeLinejoin="round" />
        <path d="m9.5 13 2 2 3.5-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const HOW_IT_WORKS = [
  {
    n: "1.",
    title: "Book",
    desc: "Book a free 30 minute discovery call. We review your traffic patterns, seasonality, and KPIs to make sure Shopify A/B testing is the right move for your store right now, not just a shiny object.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M4 5h16v15H4z" />
        <path d="M4 9h16M9 5v15" />
      </svg>
    ),
  },
  {
    n: "2.",
    title: "Choose",
    desc: "Together we choose one high impact test and lock in a single success metric, whether that is CVR, RPV, or AOV. Focus wins. Scattered testing wastes time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M5 3v18M5 4h10l-2 3 2 3H5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "3.",
    title: "Build",
    desc: "We build the variant using Lift Assist™ combined with Ecomm Wizards design so it matches your brand perfectly and feels native to your theme, not bolted on.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M3 7h6v4H3zM3 13h6v4H3zM11 7h10M11 11h10M11 15h10M11 19h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "4.",
    title: "Launch",
    desc: "We launch with correct audience targeting and traffic split so your A/B testing on Shopify runs clean from day one with zero data pollution.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M14 4c4 1 6 3 7 7l-7-1zM10 20c-4-1-6-3-7-7l7 1z" strokeLinejoin="round" />
        <path d="M14 4 10 20l-3-3 4-13z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "5.",
    title: "Analyze",
    desc: "Real time, hourly updated reports. We call significance using both Bayesian and frequentist models so the decision is backed by math, not impatience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l6 3" />
      </svg>
    ),
  },
  {
    n: "6.",
    title: "Apply Winner",
    desc: "The winner gets applied instantly inside Shopify with one click. Then we queue for the next test. Every round compounds your gains.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M4 19h4V11H4zM10 19h4V5h-4zM16 19h4v-6h-4z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const AB_FAQS = [
  {
    question: "Can we test global elements like navigation or mini cart?",
    answer:
      "Absolutely. Shoplift runs theme level tests so you can test headers, drawers, app placements, mega menus, or even entire themes. Most Shopify A/B testing tools are limited to page level changes. Shoplift is not.",
  },
  {
    question: "Do we need developers?",
    answer:
      "Not for most tests. Lift Assist generates branded sections without code, and our team handles anything custom. You get the lift without dedicating engineering hours.",
  },
  {
    question: "What about statistical rigor?",
    answer:
      "Every test uses pre-calculated sample sizes and both Bayesian and frequentist significance models. No peeking, no false winners — only deployments backed by real math.",
  },
  {
    question: "How deep is the reporting?",
    answer:
      "Real-time, hourly updated dashboards covering CVR, RPV, AOV, and 612 secondary analysis parameters. Every winner is scored on revenue per visitor, not vanity metrics.",
  },
  {
    question: "What is the standard trial?",
    answer:
      "Most brands get 14 days through the Shopify App Store. Our clients get 30 days with priority onboarding — double the runway to validate your first test before committing a cent.",
  },
];

const CASE_STUDIES: CaseStudySlide[] = [
  {
    key: "eby",
    image: "/images/Frame_1000004320.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/klaviyo.svg", "/images/yotpo.svg"],
    headline: (<>An elegant <strong>Shopify Store</strong> designed and built for <strong>EBY</strong> by <strong>Sofia Vergara</strong></>),
    quote: (<>&ldquo;Working with EW was a truly <strong>top-notch experience</strong>. From start to finish, they made sure everything ran smoothly and professionally — we couldn&apos;t be happier!&rdquo;</>),
    avatar: "/images/eby_dce31a54-eb36-409c-a8d7-e22fd8297de3_medium.webp",
    name: "EBY by Sofia Vergara",
    role: "Marketing Manager",
  },
  {
    key: "harvard",
    image: "/images/all-case-study-harvard.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/gorgias.svg"],
    headline: (<>A sophisticated <strong>Shopify Store</strong> designed and built for a <strong>Harvard University</strong></>),
    quote: (<>&ldquo;Our experience with EW was excellent, characterized by an <strong>efficient workflow</strong> and <strong>professional execution</strong>; we couldn&apos;t be more delighted&rdquo;</>),
    avatar: "/images/harvardperson_medium.webp",
    name: "Daniyal S.",
    role: "Harvard University",
  },
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
];

export default function ABTestingPage() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="relative overflow-hidden" style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto grid items-center gap-10 px-5 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-12" style={{ maxWidth: "var(--container-max)" }}>
          <div>
            <h1 className="font-bold text-white text-[34px] leading-[42px] sm:text-[44px] sm:leading-[54px] lg:text-[52px] lg:leading-[62px]">
              Shopify <span style={GRADIENT_TEXT}>A/B Testing</span> That Actually Moves the Needle.
            </h1>
            <p className="mt-6 max-w-2xl text-[14.5px] leading-[26px] text-white/75 sm:text-[15px]">
              Ecomm Wizards designs, launches, and runs high impact <strong className="font-semibold text-white">A/B testing on Shopify</strong> Plus using Shoplift, the only Shopify Plus Certified testing app, so every layout tweak, headline swap, and checkout change is backed by real data, not gut feelings. <strong className="font-semibold text-white">best A/B testing tools for ecommerce personalization</strong> with conversion expertise to lift your CVR, RPV, and AOV. No more hoping a new banner works. No more copying what your competitor did last month. Just clean, statistically valid tests that tell you exactly what your customers want and how to give it to them.
            </p>
            <div className="mt-8">
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white transition-all"
                style={{
                  border: "1.5px solid transparent",
                  borderRadius: "var(--radius-full)",
                  background:
                    "linear-gradient(#000000,#000000) padding-box, var(--brand-gradient) border-box",
                }}
              >
                Start the A/B Test Drive
                <svg width="16" height="12" viewBox="0 0 15 10.55" fill="none">
                  <path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/Group_1000004402.webp"
              alt="A/B testing Shopify variant with Shoplift integration"
              width={1200}
              height={950}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2 — WHY START NOW */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto grid items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16" style={{ maxWidth: "var(--container-max)" }}>
          <div className="order-2 lg:order-1">
            <Image
              src="/images/Group_1000004415.webp"
              alt="Shopify A/B testing theme editor"
              width={800}
              height={869}
              className="h-auto w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-bold text-[28px] leading-[36px] sm:text-[36px] sm:leading-[46px] lg:text-[42px] lg:leading-[52px]" style={{ color: "#000000" }}>
              Why Start Shopify A/B Testing Now?
            </h2>
            <div className="mt-8 space-y-7">
              {PAIN_POINTS.map((p) => (
                <div key={p.title} className="border-t border-slate-200 pt-6">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-[18px] font-bold leading-snug" style={{ color: "#000000" }}>{p.title}</h3>
                      <p className="mt-3 text-[14.5px] leading-[24px]" style={{ color: "#334155" }}>{p.desc}</p>
                    </div>
                    <span className="shrink-0" style={{ color: "#334155" }}>{p.icon}</span>
                  </div>
                </div>
              ))}
              <p className="border-t border-slate-200 pt-6 text-[14.5px] leading-[24px]" style={{ color: "#334155" }}>
                A/B testing replaces guesswork with decisions backed by real shopper behavior, so your roadmap compounds gains instead of risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — WHY SHOPLIFT */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto px-5" style={{ maxWidth: "var(--container-max)" }}>
          <h2 className="mx-auto max-w-3xl text-center font-bold text-white text-[28px] leading-[36px] sm:text-[36px] sm:leading-[46px] lg:text-[42px] lg:leading-[52px]">
            Why Shoplift, and Why with Ecomm Wizards?
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {WHY_SHOPLIFT.map((c) => (
              <div key={c.title} className="flex flex-col rounded-[14px] p-7" style={{ background: "#121212", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 className="text-[20px] font-semibold leading-snug text-white">{c.title}</h3>
                <p className="mt-4 text-[13.5px] leading-[22px] text-white/65">{c.desc}</p>
                <div className="mt-6">
                  <Image src={c.image} alt="" width={460} height={320} className="h-auto w-full rounded-[10px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — PROVEN RESULTS */}
      <section
        className="ssd-results-section"
        style={{
          background: "#FFFFFF",
          color: "#334155",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
          padding: "60px 20px",
        }}
      >
        <div className="ssd-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="ssd-results-heading">Proven Results from Brands We&apos;ve Built</h2>
          <p className="ssd-results-desc">
            With over 500 five-star reviews and recognition as a top Shopify Plus development agency, our clients trust us to deliver real growth, not empty promises.
          </p>
          <div className="ssd-results-cards">
            {TESTIMONIAL_CARDS.map((t) => (
              <div key={t.name} className="ssd-results-card">
                <p className="ssd-results-card-quote">{t.text}</p>
                <div className="ssd-results-card-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.logo} alt={t.logoAlt} />
                </div>
                <p className="ssd-results-card-person">{t.name}</p>
              </div>
            ))}
          </div>
          <CaseStudySlider slides={CASE_STUDIES} intervalMs={7000} showDots={false} />
        </div>
      </section>

      {/* 5 — THE A/B TEST DRIVE */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto px-5" style={{ maxWidth: "var(--container-max)" }}>
          <h2 className="text-center font-bold text-[28px] leading-[36px] sm:text-[36px] sm:leading-[46px] lg:text-[42px] lg:leading-[52px]" style={{ color: "#000000" }}>
            The A/B Test Drive
          </h2>
          <div className="mt-10 grid items-center gap-10 rounded-3xl p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14" style={{ background: "#FBF7ED" }}>
            <div>
              <h3 className="text-[22px] font-bold leading-snug sm:text-[26px]" style={{ color: "#000000" }}>
                What you get (60–90 minutes to kickoff)
              </h3>
              <div className="mt-7 space-y-6">
                {TEST_DRIVE_STEPS.map((s) => (
                  <div key={s.title} className="border-t pt-5" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    <div className="flex gap-4">
                      <span className="shrink-0" style={{ color: "#000000" }}>{s.icon}</span>
                      <p className="text-[14.5px] leading-[24px]" style={{ color: "#334155" }}>
                        <strong className="font-bold" style={{ color: "#000000" }}>{s.title}</strong>{s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/ab-what-you-get.webp"
                alt="A/B test drive: Shoplift, Figma, and analytics workflow"
                width={720}
                height={620}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 — OUR GUARANTEE */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto grid items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16" style={{ maxWidth: "var(--container-max)" }}>
          <div>
            <Image
              src="/images/ab-guarantee.webp"
              alt="A/B test insight dashboard"
              width={720}
              height={620}
              className="h-auto w-full"
            />
          </div>
          <div>
            <h2 className="font-bold text-[28px] leading-[36px] sm:text-[36px] sm:leading-[46px] lg:text-[42px] lg:leading-[52px]" style={{ color: "#000000" }}>
              Our Guarantee
            </h2>
            <div className="mt-8 space-y-7">
              {GUARANTEES.map((g) => (
                <div key={g.title} className="border-t pt-5" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                  <div className="flex gap-4">
                    <span className="shrink-0" style={{ color: "#000000" }}>{g.icon}</span>
                    <p className="text-[14.5px] leading-[24px]" style={{ color: "#334155" }}>
                      <strong className="font-bold" style={{ color: "#000000" }}>{g.title}</strong>{g.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — WHAT WE'LL TEST FIRST */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(78,183,113,0.22) 0%, rgba(0,0,0,0) 55%), #000000",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div className="relative mx-auto px-5" style={{ maxWidth: "var(--container-max)" }}>
          <h2 className="text-center font-bold text-white text-[28px] leading-[36px] sm:text-[36px] sm:leading-[46px] lg:text-[42px] lg:leading-[52px]">
            What we&rsquo;ll test first
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEST_FIRST.map((t) => (
              <div
                key={t.title}
                className="flex flex-col items-center rounded-[14px] p-8 text-center"
                style={{ background: "rgba(15,15,15,0.85)", border: "1px solid rgba(78,183,113,0.22)" }}
              >
                <span style={{ color: "#4EB771" }}>{t.icon}</span>
                <h3 className="mt-5 text-[20px] font-semibold leading-snug text-white">{t.title}</h3>
                <p className="mt-4 text-[13.5px] leading-[22px] text-white/65">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — HOW IT WORKS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto grid gap-10 px-5 lg:grid-cols-2 lg:gap-16" style={{ maxWidth: "var(--container-max)" }}>
          <div>
            <h2 className="font-bold text-[28px] leading-[36px] sm:text-[36px] sm:leading-[46px] lg:text-[42px] lg:leading-[52px]" style={{ color: "#000000" }}>
              How it works
            </h2>
            <p className="mt-5 text-[14.5px] leading-[26px]" style={{ color: "#334155" }}>
              <strong className="font-bold" style={{ color: "#000000" }}>Typical Timeline:</strong> Many brands see significant readouts within weeks, depending on traffic volume and effect size.
            </p>
            <div className="mt-10">
              <Image
                src="/images/Group_1000004421.webp"
                alt="A/B testing in action across Shopify stores"
                width={800}
                height={694}
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="space-y-7">
            {HOW_IT_WORKS.map((s) => (
              <div key={s.title} className="border-t pt-5" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold leading-snug" style={{ color: "#000000" }}>
                      <span className="mr-1.5">{s.n}</span>{s.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-[24px]" style={{ color: "#334155" }}>{s.desc}</p>
                  </div>
                  <span className="shrink-0" style={{ color: "#334155" }}>{s.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — FAQ + FINAL CTA (side-by-side) */}
      <ABTestingFAQ faqs={AB_FAQS} />
    </>
  );
}
