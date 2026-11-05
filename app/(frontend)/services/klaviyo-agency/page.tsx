import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import KvAccordion from "./KvAccordion";
import KvFaqAccordion from "./KvFaqAccordion";
import KvCalEmbed from "./KvCalEmbed";
import ServiceSchema from "@/components/seo/ServiceSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RelatedServices from "@/components/sections/RelatedServices";
import { KLAVIYO_CASE_STUDIES } from "@/lib/klaviyo-studies";
import { og } from "@/lib/og";

// v5.0 §6c hub. Primary "klaviyo agency"; title carries "Email & SMS Marketing"
// for the email-agency variants. SERP teardown (5 Nov 2026, 18 pages rendered):
// competitors lead with partner tier and scale, which this page cannot and does
// not claim. The gap it fills is the buyer guides' vetting checklist, answered
// on the page (§5), plus measured deliverability from our own accounts (§4) and
// the Shopify-side data work an email-only agency cannot do (§6).
// Owner facts, 5 Nov 2026: in-house team; three accounts per strategist at most;
// first flows live within two weeks; retainer or fixed project; month-to-month
// or fixed term; weekly and monthly reporting by dashboard or Slack; client owns
// everything (we can hold it for them); SMS is an add-on. No Klaviyo partner
// claim, no prices, case-study figures exactly as published.

const PATH = "/services/klaviyo-agency";
const CANONICAL_URL = `https://ecommwizards.com${PATH}`;
const TITLE = "Klaviyo Agency for Shopify Brands | Email & SMS Marketing";
const META_DESCRIPTION =
  "Klaviyo agency for Shopify brands. We run your flows, campaigns, segments and deliverability, and fix the store data Klaviyo runs on. Get a free Klaviyo audit.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  openGraph: { ...og(PATH, "Klaviyo Agency for Shopify Brands"), title: TITLE, description: META_DESCRIPTION },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: META_DESCRIPTION,
    images: og(PATH, "Klaviyo Agency for Shopify Brands").images,
  },
};

const C_DARK  = "#000000";
const C_TEXT  = "#334155";
const C_WHITE = "#FFFFFF";
const C_CREAM = "#FBF7ED";
const GRADIENT_TEXT = { background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } as const;

/* ── Case studies: figures come straight from lib/klaviyo-studies.ts ── */
const STUDY_ORDER = ["living-in-sunshine-klaviyo-email", "cecraft-klaviyo-email", "andrea-maack-klaviyo-email"];
const STUDIES = STUDY_ORDER.map((slug) => {
  const s = KLAVIYO_CASE_STUDIES.find((k) => k.slug === slug);
  if (!s) throw new Error(`Klaviyo case study missing: ${slug}`);
  const spam = s.benchmarks?.find((b) => b.metric === "Spam Complaint Rate");
  return {
    slug: s.slug,
    brand: s.brandName,
    industry: s.industry,
    image: s.heroImage,
    revenue: s.stats[0],
    spam: spam?.value,
    quote: s.quote,
    person: s.quotePerson,
    role: s.quoteRole,
    avatar: s.quoteAvatar,
  };
});

/* ── Hero slider: emails we built, cropped from the three case-study mockups.
   Each column holds exactly four, rendered twice, so one loop is -50%. ── */
const EMAIL_COLS = [
  ["andrea-maack-cart-reminder", "cande-cart-waiting", "living-in-sunshine-vip-welcome", "andrea-maack-fragrance-day"],
  ["cande-last-call", "living-in-sunshine-rack-guide", "andrea-maack-expiring-code", "cande-restock"],
  ["living-in-sunshine-social-proof", "andrea-maack-mothers-day", "cande-reviews", "living-in-sunshine-black-friday"],
].map((col) => col.map((name) => `/images/klaviyo-emails/${name}.webp`));

/* ── §2 Checks the reader can run on their own account ── */
const CHECKS = [
  {
    title: "Your flows stop at welcome and abandoned cart.",
    body: "Browse abandonment, post-purchase, win-back and VIP flows are missing. A buyer hears from you once, then nothing until the next campaign.",
  },
  {
    title: "Every campaign goes to your whole list.",
    body: "Mailing people who stopped opening months ago hurts your inbox placement with the people who still read you.",
  },
  {
    title: "Klaviyo and Shopify disagree about revenue.",
    body: "Klaviyo counts a sale its email touched. Shopify counts the last click. If nobody has explained the gap, nobody can tell you what email really earns.",
  },
  {
    title: "Spam complaints and bounces are creeping up.",
    body: "Inbox providers watch both. Let them rise and more of your emails land in spam, including the good ones.",
  },
  {
    title: "Nobody owns the account week to week.",
    body: "Campaigns go out when someone has time. Flows written two years ago still send copy you would not write today.",
  },
  {
    title: "Your store sends Klaviyo thin data.",
    body: "Signup forms, back-in-stock alerts and the product feed were set up once and never checked. A flow is only as good as the data behind it.",
  },
];

/* ── §3 Services ── */
const SERVICES = [
  {
    title: "Klaviyo Setup and Migration",
    body: "Starting fresh, or moving from Mailchimp, Omnisend or another platform? We set up your account, connect it to Shopify, and move your lists, consent records and templates across. Your sending domain is authenticated before the first email goes out.",
  },
  {
    title: "Automated Flows",
    body: "Welcome, browse abandonment, abandoned cart and checkout, post-purchase, win-back and VIP. Each one is written for your product and your customer, not pulled from a template, then tested until it earns its place.",
  },
  {
    title: "Campaigns and a Calendar",
    body: "A campaign calendar planned around your launches, restocks and seasonal moments, with Black Friday planned weeks ahead. You approve every send before it goes out.",
  },
  {
    title: "Segmentation and List Health",
    body: "Segments built on what people buy and how recently they engage. Lapsed subscribers get a sunset flow instead of every campaign, which keeps your list clean and your sender reputation healthy.",
  },
  {
    title: "Deliverability",
    body: "SPF, DKIM and DMARC set up properly. Bounces and spam complaints checked every week, and sending adjusted before a problem reaches your revenue.",
  },
  {
    title: "Email Design and Copy",
    body: "Emails that look and sound like your brand, designed for the phone first. Built as reusable templates, so your team can send a good email without starting from a blank page.",
  },
  {
    title: "Reporting You Can Check",
    body: "Weekly and monthly reports, in a dashboard or your Slack channel, whichever you use. Revenue by flow and campaign, list growth and deliverability, with full access to your own Klaviyo account so you can check any number yourself.",
  },
  {
    title: "Klaviyo Consulting",
    body: "Have an in-house marketer already? We can work as Klaviyo consultants beside them: a strategy, a flow map and a regular review, while your team does the sending.",
  },
  {
    title: "Klaviyo SMS, as an Add-On",
    body: "Add SMS once email is working. We set up consent capture and quiet hours, then add texts only to the flows where they earn their place, so your customers never get the same message twice.",
  },
];

/* ── §5 The buyer guides' vetting questions, answered ── */
const QUESTIONS = [
  { q: "Who will actually run my account?", a: "Our own Klaviyo experts, not a contractor. You talk to your strategist on an online call before any work starts.", check: "Ask for their name when you book." },
  { q: "How many brands does that person run?", a: "Three at most.", check: "Ask them directly, then again in month three." },
  { q: "What do you look at before touching Klaviyo?", a: "Your flows, campaigns, segments, deliverability and the store data feeding them. That is the free audit.", check: "You get the findings before you sign anything." },
  { q: "When is the first flow live?", a: "Within two weeks of signing.", check: "The date goes in the written plan." },
  { q: "How do you price?", a: "A monthly retainer or a fixed project, whichever fits the work. The number is in writing before anything starts.", check: "Ask what is out of scope." },
  { q: "Which revenue do you report?", a: "Klaviyo's figure next to your Shopify total, so you can see email's real share.", check: "Compare it with your Shopify analytics." },
  { q: "Who owns the account and the work?", a: "You do: the account, flows, templates and data. We can hold the account for you if you prefer, and hand it all back when you ask.", check: "Your login stays an owner login." },
  { q: "What are the exit terms?", a: "Month-to-month or a fixed term. You choose.", check: "It is written into the agreement." },
  { q: "How do we work week to week?", a: "Weekly and monthly reports, in a dashboard or Slack. You approve campaigns before they send.", check: "Ask to see a sample report." },
  { q: "What is your deliverability plan?", a: "Authentication, list cleaning and sunset rules from week one. Spam complaints fell on all three accounts in our case studies.", check: "Check the deliverability tab in Klaviyo." },
];

/* ── §6 The Shopify side ── */
const STORE_SIDE = [
  { title: "Signup forms that suit your theme", body: "Forms and pop-ups built into your theme, so they load fast and collect the fields your segments need." },
  { title: "A product feed Klaviyo can trust", body: "Correct images, prices and variants in the catalog Klaviyo reads, so a browse or cart email shows what the shopper looked at." },
  { title: "Back-in-stock events that fire", body: "Wired up from your store, so a restock turns into a sale instead of a missed one." },
  { title: "Clean checkout and order data", body: "The order details your post-purchase and win-back flows need, passed through from Shopify correctly." },
];

/* ── §7 How it starts ── */
const STEPS = [
  { step: "01.", title: "Free Klaviyo audit", desc: "We review your flows, campaigns, segments, deliverability and the store data behind them. You get the findings on a 30-minute call and keep them, whether you hire us or not." },
  { step: "02.", title: "A written plan", desc: "Scope, price and dates in writing, with the flows to build first ranked by what they should earn. Nothing starts until you approve it." },
  { step: "03.", title: "First flows live", desc: "Within two weeks of signing. The flows closest to revenue go first, usually welcome and abandoned cart." },
  { step: "04.", title: "A weekly rhythm", desc: "Your strategist reports weekly and monthly, in a dashboard or Slack. Campaigns are planned ahead, and you approve each one before it sends." },
];

/* ── §8 In-house vs freelancer vs agency ── */
const COMPARE_ROWS = [
  { label: "Who sets the strategy", inHouse: "Your hire, if they are senior", freelancer: "Usually the person doing the build", agency: "A strategist on three accounts at most" },
  { label: "Copy, design and deliverability", inHouse: "One person, or more hires", freelancer: "Depends on the freelancer", agency: "Covered by the team" },
  { label: "When someone is away", inHouse: "Work pauses", freelancer: "Work pauses", agency: "The team covers" },
  { label: "Time to first flows", inHouse: "After hiring and onboarding", freelancer: "Fast, if they have room", agency: "Within two weeks" },
  { label: "How you pay", inHouse: "Salary, benefits and tools", freelancer: "Hourly or per project", agency: "Retainer or fixed project" },
  { label: "Fixing the store side", inHouse: "Needs a developer", freelancer: "Needs a developer", agency: "We build Shopify stores too" },
  { label: "Knowing your brand", inHouse: "Strongest of the three", freelancer: "Grows over time", agency: "Grows over time" },
];

/* ── §9 FAQs ── */
const FAQS = [
  {
    q: "What does a Klaviyo agency do?",
    a: "A Klaviyo agency runs your email and SMS inside Klaviyo for you: the flows, the campaign calendar, segments, deliverability and reporting. With us, it also covers the Shopify store data that Klaviyo depends on, because we build Shopify stores as well.",
  },
  {
    q: "How much does a Klaviyo agency cost?",
    a: "It depends on the work, so there is no price list. The number moves with how many flows you need built or rebuilt, how many campaigns you send each month, whether SMS is included, and how much design you need. You get a fixed number in writing before anything starts, as a monthly retainer or a one-off project.",
  },
  {
    q: "How soon will we see results?",
    a: "Your first flows go live within two weeks of signing. How fast revenue moves depends on your traffic, your list and where you are starting from, so we will not promise a percentage before the audit. You see revenue by flow in your weekly report from the first month.",
  },
  {
    q: "Why doesn't Klaviyo's revenue match what Shopify reports?",
    a: "They count differently. Klaviyo credits a sale to an email if the buyer opened or clicked it within its attribution window, five days by default. Shopify credits the last click before the sale. So one order can be counted by both. We show Klaviyo's figure next to your Shopify total, so you can see email's real share.",
  },
  {
    q: "Can you take over our existing Klaviyo account?",
    a: "Yes. We audit what is there first, keep what works, and rebuild what does not. Nothing you have running is switched off until its replacement is live.",
  },
  {
    q: "Who owns the Klaviyo account if we stop working together?",
    a: "You do. The account, flows, templates and data are yours from day one. If you would rather we hold the account for you, we can, and we hand everything back the day you ask.",
  },
  {
    q: "Do you do Klaviyo SMS?",
    a: "Yes, as an add-on. We suggest getting email right first, then adding SMS to the flows where a text earns its place, such as abandoned checkout and back-in-stock.",
  },
  {
    q: "Which Klaviyo agency gets the highest ROI for Shopify stores?",
    a: "The one whose results you can check. Ours, as published: Living in Sunshine's flows revenue rose 219.8%, C&E Craft Co's attributed revenue rose 195.9%, and Andrea Maack's flows revenue rose 144.3%. Each case study names the brand and shows the work.",
  },
  {
    q: "How do I evaluate a Klaviyo agency?",
    a: "Whichever Klaviyo email agency you are weighing, ask who runs your account and how many others they run, when your first flow goes live, who owns the account, and how you can check their numbers yourself. Our answers to all ten of those questions are on this page.",
  },
];

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Klaviyo Agency", item: CANONICAL_URL },
  ],
};

const Arrow = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
    <path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden style={{ flexShrink: 0, marginTop: 2 }}>
    <circle cx="9" cy="9" r="9" fill="rgba(97,206,112,0.15)" />
    <path d="M5 9l3 3 5-5" stroke="#2A9555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function PrimaryCta({ label, href }: { label: string; href: string }) {
  return (
    <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
        style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
      >
        <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">{label}</span>
        <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
      </Link>
    </span>
  );
}

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <ServiceSchema url={CANONICAL_URL} name="Klaviyo Agency" serviceType="Klaviyo email and SMS marketing" description={META_DESCRIPTION} />
      <Breadcrumbs current={PATH} />

      {/* ── §1 Hero (DARK) ── */}
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Klaviyo agency for Shopify brands">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Klaviyo Email &amp; SMS</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              <span style={GRADIENT_TEXT}>Klaviyo Agency</span>{" "}
              for Shopify Brands Whose Email Should Be Earning More
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              Klaviyo is set up on your store, but email still brings in less than it should. We are the Klaviyo email marketing agency Shopify brands bring in to change that. We run your flows, campaigns, segments and deliverability, and we fix the store data Klaviyo runs on.
            </p>

            <div className="std-hero-stats">
              {/* Owner's figures, 5 Nov 2026: Living in Sunshine's published
                  +461.2% / +219.8% / -56.6%, rounded, brand not named. */}
              {[
                { number: "+461%", label: "Attributed revenue" },
                { number: "+220%", label: "Flows revenue" },
                { number: "−57%", label: "Spam complaints" },
                { number: "2 weeks", label: "To first flows live" },
              ].map((s) => (
                <div key={s.label} className="std-hero-stat-item">
                  <span className="std-hero-stat-num">{s.number}</span>
                  <span className="std-hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginTop: "32px" }}>
              <PrimaryCta label="Get a Free Klaviyo Audit" href="#book" />
              <a href="#results" className="kv-hero-secondary-cta" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.7)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", padding: "14px 0" }}>
                See the Results
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                  <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="kv-emails-wrap" aria-hidden="true">
            <div className="kv-emails">
              {EMAIL_COLS.map((col, ci) => (
                <div key={ci} className={`kv-emails-col kv-emails-col--${ci + 1}`}>
                  {[...col, ...col].map((src, i) => (
                    <div key={i} className="kv-email-frame">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="" width={160} height={337} loading={i < col.length ? "eager" : "lazy"} decoding="async" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── §2 Checks on your own account (WHITE) ── */}
      <section style={{ background: C_WHITE, padding: "60px 20px" }} aria-label="Checks to run on your Klaviyo account">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <span className="std-label" style={{ color: C_TEXT }}>Start With Your Own Account</span>
            <h2 className="kv-h2" style={{ margin: "12px 0 0" }}>Klaviyo Is Live on Your Store. Is It Earning?</h2>
            <p className="kv-lead" style={{ margin: "16px auto 0" }}>
              Open your Klaviyo account and check these six things. Each one holds email revenue back. If two or more sound familiar, that is where a Klaviyo marketing agency should start, and it is where our audit starts.
            </p>
          </div>
          <div className="kv-checks">
            {CHECKS.map((c) => (
              <div key={c.title} className="kv-check">
                <CheckIcon />
                <div>
                  <h3 className="kv-check-title">{c.title}</h3>
                  <p className="kv-check-body">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §3 Services (CREAM) ── */}
      <section className="std-solutions" style={{ background: C_CREAM }} aria-label="Klaviyo email marketing services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>What We Run for You</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              Klaviyo Email Marketing Services, Run for You
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              You get one team running Klaviyo end to end: the setup, the flows, the campaign calendar and the reporting. Take all of it on a monthly retainer, or one piece as a fixed project.
            </p>
            <Link href="#book" className="std-cta-sol mt-8">
              Talk to a Klaviyo Strategist
              <Arrow />
            </Link>
          </div>
          <KvAccordion items={SERVICES} />
        </div>
      </section>

      {/* ── §4 Proof (WHITE) ── */}
      <section id="results" style={{ background: C_WHITE, padding: "60px 20px", scrollMarginTop: 90 }} aria-label="Klaviyo case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <span className="std-label" style={{ color: C_TEXT }}>Klaviyo Case Studies</span>
            <h2 className="kv-h2" style={{ margin: "12px 0 0" }}>Have We Done This for a Store Like Yours?</h2>
            <p className="kv-lead" style={{ margin: "16px auto 0" }}>
              Three Shopify brands, three Klaviyo builds. The figures are as published in each case study, next to the founder&apos;s own words.
            </p>
          </div>

          <div className="kv-cases">
            {STUDIES.map((s) => (
              <Link key={s.slug} href={`/case-studies/${s.slug}`} className="kv-case">
                <div className="kv-case-img">
                  <Image src={s.image} overrideSrc={s.image} alt={`${s.brand} Klaviyo case study`} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  <span className="kv-case-pill">{s.industry}</span>
                </div>
                <div className="kv-case-body">
                  <p className="kv-case-brand">{s.brand}</p>
                  <div className="kv-case-metrics">
                    <div>
                      <span className="kv-case-num">{s.revenue.value}</span>
                      <span className="kv-case-label">{s.revenue.label}</span>
                    </div>
                    {s.spam && (
                      <div>
                        <span className="kv-case-num">{s.spam}</span>
                        <span className="kv-case-label">Spam complaint rate</span>
                      </div>
                    )}
                  </div>
                  <blockquote className="kv-case-quote">&ldquo;{s.quote}&rdquo;</blockquote>
                  <div className="kv-case-person">
                    {s.avatar && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.avatar} alt={s.person ?? ""} width={40} height={40} loading="lazy" />
                    )}
                    <span><strong>{s.person}</strong><br />{s.role}</span>
                  </div>
                  <span className="kv-case-link">See how it was done <Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <PrimaryCta label="Get the Same Audit for Your Store" href="#book" />
          </div>
        </div>
      </section>

      {/* ── §5 The ten questions (DARK) ── */}
      <section style={{ background: C_DARK, padding: "64px 20px" }} aria-label="Ten questions to ask a Klaviyo agency">
        <div className="mx-auto" style={{ maxWidth: "1180px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <span className="std-badge">Before You Hire Anyone</span>
            <h2 className="kv-h2" style={{ color: C_WHITE, margin: "16px 0 0" }}>
              Ten Questions to Ask Any <span style={GRADIENT_TEXT}>Klaviyo Agency</span>, Answered
            </h2>
            <p className="kv-lead" style={{ color: "rgba(255,255,255,0.8)", margin: "16px auto 0" }}>
              Buyer guides tell you to put these to every agency on the first call. Here are our answers in writing, so you can hold us to them.
            </p>
          </div>
          <div className="kv-qtable" role="table" aria-label="Our answers to the ten questions">
            <div className="kv-qrow kv-qhead" role="row">
              <span role="columnheader">The question</span>
              <span role="columnheader">Our answer</span>
              <span role="columnheader">How you check</span>
            </div>
            {QUESTIONS.map((row, i) => (
              <div key={row.q} className="kv-qrow" role="row">
                <span role="cell" className="kv-q"><em>{String(i + 1).padStart(2, "0")}</em>{row.q}</span>
                <span role="cell" className="kv-a">{row.a}</span>
                <span role="cell" className="kv-c">{row.check}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §6 The Shopify side (CREAM) ── */}
      <section style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Shopify store data for Klaviyo">
        <div className="mx-auto kv-store" style={{ maxWidth: "1320px" }}>
          <div>
            <span className="std-label" style={{ color: C_TEXT }}>The Shopify Side</span>
            <h2 className="kv-h2" style={{ textAlign: "left", margin: "12px 0 0" }}>Klaviyo Runs on Your Store&apos;s Data. We Fix That Too.</h2>
            <p className="kv-lead" style={{ textAlign: "left", margin: "16px 0 0" }}>
              If a flow on your store underperforms, check the store before you blame the email. We build Shopify stores, so we fix that side too.
            </p>
            <p className="kv-lead" style={{ textAlign: "left", margin: "16px 0 0" }}>
              Comparing agencies that specialize in Klaviyo for Shopify brands? Ask each one who fixes the store when a flow breaks there. With us, it is the same company.
            </p>
          </div>
          <div className="kv-store-grid">
            {STORE_SIDE.map((s) => (
              <div key={s.title} className="kv-store-card">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §7 How it starts (WHITE) ── */}
      <section style={{ background: C_WHITE, padding: "60px 20px" }} aria-label="How working with our Klaviyo agency starts">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <span className="std-label" style={{ color: C_TEXT }}>How It Starts</span>
            <h2 className="kv-h2" style={{ margin: "12px 0 0" }}>How Working With Our Klaviyo Agency Starts</h2>
            <p className="kv-lead" style={{ margin: "16px auto 0" }}>
              You see what we would change before you pay for anything. Then it moves fast.
            </p>
          </div>
          <ol className="kv-steps">
            {STEPS.map((s) => (
              <li key={s.step} className="kv-step">
                <span className="kv-step-num">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <PrimaryCta label="Get a Free Klaviyo Audit" href="#book" />
          </div>
        </div>
      </section>

      {/* ── §8 In-house vs freelancer vs agency (CREAM) ── */}
      <section style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="In-house, freelancer or Klaviyo agency">
        <div className="mx-auto" style={{ maxWidth: "1180px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <span className="std-label" style={{ color: C_TEXT }}>Still Deciding?</span>
            <h2 className="kv-h2" style={{ margin: "12px 0 0" }}>In-House, Freelancer or Klaviyo Agency?</h2>
            <p className="kv-lead" style={{ margin: "16px auto 0" }}>
              Each one is the right answer for some brands. Here is how they compare on the things that decide it for yours.
            </p>
          </div>
          <div className="kv-compare-wrap">
            <table className="kv-compare">
              <thead>
                <tr>
                  <th scope="col"><span className="sr-only">What matters</span></th>
                  <th scope="col">In-house hire</th>
                  <th scope="col">Freelancer</th>
                  <th scope="col" className="kv-us">Ecomm Wizards</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    <td>{r.inHouse}</td>
                    <td>{r.freelancer}</td>
                    <td className="kv-us">{r.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── §9 FAQ (WHITE) ── */}
      <section style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }} aria-label="Klaviyo agency FAQs">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "60px 20px" }}>
          <h2 className="kv-h2" style={{ margin: "0 auto 40px", maxWidth: 800 }}>Klaviyo Agency FAQs</h2>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <KvFaqAccordion faqs={FAQS} />
          </div>
        </div>
      </section>

      {/* ── §10 Book the audit (DARK) ── */}
      <section id="book" className="kv-book" style={{ background: C_DARK, padding: "64px 20px", scrollMarginTop: 90 }} aria-label="Book a free Klaviyo audit">
        <div className="mx-auto kv-book-grid" style={{ maxWidth: "1320px" }}>
          <div>
            <span className="std-badge">Free Klaviyo Audit</span>
            <h2 className="kv-h2" style={{ color: C_WHITE, textAlign: "left", margin: "16px 0 0" }}>
              See What Your <span style={GRADIENT_TEXT}>Klaviyo Account</span> Could Be Earning
            </h2>
            <p className="kv-lead" style={{ color: "rgba(255,255,255,0.8)", textAlign: "left", margin: "16px 0 0" }}>
              Pick a time that suits you. Before the call we review your flows, campaigns, segments, deliverability and store data. On the call we walk you through what we found.
            </p>
            <ul className="kv-book-list">
              <li><CheckIcon /><span>A 30-minute online call with the strategist who would run your account</span></li>
              <li><CheckIcon /><span>Your findings, ranked by what each fix should earn</span></li>
              <li><CheckIcon /><span>No contract, no card. You keep the findings either way</span></li>
            </ul>
          </div>
          <div className="kv-book-cal">
            <KvCalEmbed />
          </div>
        </div>
      </section>

      {/* ── Page-level CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .kv-hero-secondary-cta:hover { color: rgba(255,255,255,1) !important; }

        /* Hero email slider. Frames carry margin, not gap, so a column of
           4 emails shown twice loops at exactly -50%. */
        .kv-emails-wrap { position: relative; height: 620px; overflow: hidden; border-radius: 16px; }
        .kv-emails-wrap::before, .kv-emails-wrap::after { content: ''; position: absolute; left: 0; right: 0; height: 110px; z-index: 2; pointer-events: none; }
        .kv-emails-wrap::before { top: 0; background: linear-gradient(to bottom, #000 0%, transparent 100%); }
        .kv-emails-wrap::after  { bottom: 0; background: linear-gradient(to top, #000 0%, transparent 100%); }
        .kv-emails { display: flex; gap: 12px; height: 100%; justify-content: center; }
        .kv-emails-col { display: flex; flex-direction: column; flex-shrink: 0; will-change: transform; }
        .kv-email-frame { width: 160px; height: 337px; margin-bottom: 12px; border-radius: 22px; overflow: hidden; flex-shrink: 0; background: #fff; border: 2px solid rgba(255,255,255,0.12); box-shadow: 0 6px 28px rgba(0,0,0,0.6); }
        .kv-email-frame img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
        .kv-emails-col--1 { animation: kvUp 30s linear infinite; }
        .kv-emails-col--2 { margin-top: -150px; animation: kvDown 26s linear infinite; }
        .kv-emails-col--3 { margin-top: -75px; animation: kvUp 34s linear infinite; }
        @keyframes kvUp   { from { transform: translateY(0); }    to { transform: translateY(-50%); } }
        @keyframes kvDown { from { transform: translateY(-50%); } to { transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .kv-emails-col { animation: none !important; } }


        .kv-book-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 48px; align-items: start; }
        .kv-book-list { list-style: none; padding: 0; margin: 28px 0 0; display: flex; flex-direction: column; gap: 14px; }
        .kv-book-list li { display: flex; gap: 12px; font-family: 'Poppins', sans-serif; font-size: 16px; line-height: 1.55; color: #fff; }
        .kvag-cal-wrap { position: relative; min-height: 600px; border-radius: 16px; overflow: hidden; background: #FFFFFF; }
        .kvag-cal-loading { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #94a3b8; font-family: 'Poppins', sans-serif; font-size: 14px; }
        .kvag-cal-inline { position: relative; width: 100%; min-height: 600px; }
        .kvag-cal-inline iframe { width: 100% !important; }
        .kv-h2 { color: #000; font-family: 'Poppins', sans-serif; font-size: clamp(28px, 3.5vw, 42px); font-weight: 700; line-height: 1.2; text-align: center; }
        .kv-lead { color: #334155; font-family: 'Poppins', sans-serif; font-size: 17px; line-height: 28px; max-width: 760px; }

        .kv-checks { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 40px; }
        .kv-check { display: flex; gap: 14px; padding: 24px; border: 1px solid rgba(0,0,0,0.08); border-radius: 16px; background: #fff; }
        .kv-check-title { font-family: 'Poppins', sans-serif; font-size: 17px; font-weight: 600; color: #000; line-height: 1.35; margin: 0; }
        .kv-check-body { font-family: 'Poppins', sans-serif; font-size: 15px; color: #334155; line-height: 1.65; margin: 8px 0 0; }

        .kv-cases { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 40px; }
        .kv-case { display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 20px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .22s ease, box-shadow .22s ease; }
        .kv-case:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
        .kv-case-img { position: relative; aspect-ratio: 16/10; margin: 8px 8px 0; border-radius: 14px; overflow: hidden; background: #e0ddd5; }
        .kv-case-pill { position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.72); color: #fff; border-radius: 999px; padding: 4px 12px; font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 500; }
        .kv-case-body { display: flex; flex-direction: column; gap: 14px; padding: 20px 20px 24px; flex: 1; }
        .kv-case-brand { font-family: 'Poppins', sans-serif; font-size: 22px; font-weight: 700; color: #000; margin: 0; }
        .kv-case-metrics { display: flex; gap: 24px; padding: 14px 0; border-top: 1px solid rgba(0,0,0,0.08); border-bottom: 1px solid rgba(0,0,0,0.08); }
        .kv-case-metrics > div { display: flex; flex-direction: column; gap: 2px; }
        .kv-case-num { font-family: 'Poppins', sans-serif; font-size: 26px; font-weight: 800; color: #2A9555; line-height: 1.1; }
        .kv-case-label { font-family: 'Poppins', sans-serif; font-size: 12px; color: #334155; }
        .kv-case-quote { font-family: 'Poppins', sans-serif; font-size: 15px; font-style: italic; color: #000; line-height: 1.6; margin: 0; flex: 1; }
        .kv-case-person { display: flex; align-items: center; gap: 10px; font-family: 'Poppins', sans-serif; font-size: 13px; color: #334155; line-height: 1.4; }
        .kv-case-person img { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; }
        .kv-case-person strong { color: #000; }
        .kv-case-link { display: inline-flex; align-items: center; gap: 8px; font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; color: #000; }

        .kv-qtable { margin-top: 40px; border: 1px solid rgba(255,255,255,0.14); border-radius: 18px; overflow: hidden; }
        .kv-qrow { display: grid; grid-template-columns: 1.1fr 1.5fr 1fr; gap: 24px; padding: 18px 24px; border-top: 1px solid rgba(255,255,255,0.10); font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 1.6; }
        .kv-qrow:first-child { border-top: none; }
        .kv-qhead { background: rgba(255,255,255,0.06); font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: rgba(255,255,255,0.6); }
        .kv-q { color: #fff; font-weight: 600; }
        .kv-q em { font-style: normal; color: #61ce70; margin-right: 10px; font-weight: 700; }
        .kv-a { color: rgba(255,255,255,0.9); }
        .kv-c { color: rgba(255,255,255,0.6); font-size: 14px; }

        .kv-store { display: grid; grid-template-columns: 1fr 1.2fr; gap: 48px; align-items: start; }
        .kv-store-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .kv-store-card { background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 16px; padding: 24px; }
        .kv-store-card h3 { font-family: 'Poppins', sans-serif; font-size: 17px; font-weight: 600; color: #000; margin: 0; line-height: 1.35; }
        .kv-store-card p { font-family: 'Poppins', sans-serif; font-size: 15px; color: #334155; line-height: 1.65; margin: 8px 0 0; }

        .kv-steps { list-style: none; padding: 0; margin: 40px 0 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .kv-step { background: #FBF7ED; border-radius: 16px; padding: 24px; }
        .kv-step-num { font-family: 'Poppins', sans-serif; font-size: 28px; font-weight: 800; background: var(--brand-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .kv-step h3 { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 600; color: #000; margin: 10px 0 0; }
        .kv-step p { font-family: 'Poppins', sans-serif; font-size: 15px; color: #334155; line-height: 1.65; margin: 8px 0 0; }

        .kv-compare-wrap { margin-top: 40px; overflow-x: auto; border-radius: 18px; border: 1px solid rgba(0,0,0,0.08); background: #fff; }
        .kv-compare { width: 100%; border-collapse: collapse; font-family: 'Poppins', sans-serif; font-size: 15px; min-width: 680px; }
        .kv-compare th, .kv-compare td { text-align: left; padding: 16px 20px; border-top: 1px solid rgba(0,0,0,0.07); color: #334155; line-height: 1.5; vertical-align: top; }
        .kv-compare thead th { border-top: none; font-size: 13px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; color: #000; }
        .kv-compare tbody th { color: #000; font-weight: 600; }
        .kv-compare .kv-us { background: rgba(97,206,112,0.08); color: #000; font-weight: 600; }

        .kv-faq__list { list-style: none; margin: 0; padding: 0; }
        .kv-faq__item { border-bottom: 1px solid rgba(0,0,0,0.10); }
        .kv-faq__q { font-family: 'Poppins', sans-serif; font-size: 17px; font-weight: 600; color: #000000; line-height: 1.4; flex: 1; }
        .kv-faq__chev { color: #000000; flex-shrink: 0; }
        .kv-faq__a-text { font-family: 'Poppins', sans-serif; font-size: 15px; color: #334155; line-height: 1.75; margin: 0 0 20px; }

        .std-badge { display: inline-block; padding: 6px 16px; background: rgba(97,206,112,0.12); border: 1px solid rgba(97,206,112,0.3); border-radius: 999px; color: #61ce70; font-size: 13px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; }
        .std-label { font-size: 13px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #334155; }
        .std-hero-stats { display: flex; flex-wrap: wrap; gap: 0; margin-top: 32px; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 24px; }
        .std-hero-stat-item { display: flex; flex-direction: column; gap: 4px; padding: 0 28px 0 0; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.12); }
        .std-hero-stat-item:last-child { border-right: none; padding-right: 0; margin-right: 0; }
        .std-hero-stat-num { font-size: 28px; font-weight: 800; line-height: 1; background: var(--brand-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .std-hero-stat-label { font-size: 13px; font-weight: 500; color: #ffffff; letter-spacing: .02em; }
        .std-cta-sol { position: relative; display: inline-flex; align-items: center; gap: 12px; background: #000000; color: #ffffff; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; border-radius: 50px; padding: 20px 45px; text-decoration: none; line-height: 1; transition: color .25s ease; }
        .std-cta-sol::before { content: ''; position: absolute; inset: 0; border-radius: 50px; padding: 2px; background: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude; opacity: 0; transition: opacity .25s ease; pointer-events: none; }
        .std-cta-sol:hover::before { opacity: 1; }
        .std-cta-sol:visited, .std-cta-sol:focus, .std-cta-sol:active { color: #ffffff; text-decoration: none; }
        .std-acc-item { border-top: 1px solid rgba(17,17,17,.14); }
        .std-acc-item:last-child { border-bottom: 1px solid rgba(17,17,17,.14); }
        .std-acc-icon { flex: 0 0 18px; color: #000000; transition: transform .3s ease; }
        .std-acc-icon--open { transform: rotate(180deg); }

        @media (max-width: 1280px) {
          .std-hero-stat-item { padding-right: 20px !important; margin-right: 20px !important; }
        }
        @media (max-width: 1024px) {
          .std-hero-h1 { font-size: 40px !important; }
          .std-solutions h2 { font-size: 38px !important; }
          .std-solutions-grid { grid-template-columns: 1fr 1.1fr !important; gap: 40px !important; }
          .std-hero-stat-num { font-size: 22px !important; }
          .std-hero-stat-label { font-size: 12px !important; }
          .kv-checks, .kv-cases { grid-template-columns: repeat(2, 1fr); }
          .kv-steps { grid-template-columns: repeat(2, 1fr); }
          .kv-store { grid-template-columns: 1fr; gap: 32px; }
          .kv-qrow { grid-template-columns: 1fr 1.3fr; }
          .kv-c { grid-column: 2; }
          .kv-qhead span:last-child { display: none; }
          .kv-emails-wrap { height: 440px; }
          .kv-email-frame { width: 128px; height: 270px; border-radius: 18px; margin-bottom: 10px; }
          .kv-emails { gap: 10px; }
          .kv-emails-col--2 { margin-top: -120px; } .kv-emails-col--3 { margin-top: -60px; }
          .kv-book-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 767px) {
          .kv-emails-wrap { height: 300px; border-radius: 12px; }
          .kv-emails-wrap::before, .kv-emails-wrap::after { height: 70px; }
          .kv-email-frame { width: 116px; height: 244px; border-radius: 16px; }
          .kv-emails-col--3 { display: none; }
        }
        @media (max-width: 640px) {
          .std-hero > div { padding: 56px 18px !important; }
          .std-solutions > div { padding: 40px 18px !important; gap: 36px !important; }
          .std-solutions-grid { grid-template-columns: 1fr !important; }
          .std-solutions-left { position: static !important; }
          .std-solutions h2 { font-size: 26px !important; }
          .std-cta-sol { margin-top: 16px !important; }
          .std-hero-h1 { font-size: 28px !important; line-height: 1.22 !important; }
          .std-hero-p { font-size: 14px !important; line-height: 24px !important; }
          .std-hero-stats { display: grid !important; grid-template-columns: 1fr 1fr; gap: 16px 20px; }
          .std-hero-stat-item { border-right: none !important; padding-right: 0 !important; margin-right: 0 !important; }
          .std-hero-stat-num { font-size: 22px !important; }
          .std-hero-stat-label { font-size: 11px !important; }
          .kv-lead { font-size: 15px; line-height: 25px; }
          .kv-checks, .kv-cases, .kv-steps, .kv-store-grid { grid-template-columns: 1fr; }
          .kv-qhead { display: none; }
          .kv-qrow { grid-template-columns: 1fr; gap: 6px; padding: 18px; }
          .kv-c { grid-column: auto; }
          .kv-faq__q { font-size: 15px !important; }
          .kv-faq__a-text { font-size: 14px !important; }
        }
      `}} />

      <RelatedServices current={PATH} />
    </>
  );
}
