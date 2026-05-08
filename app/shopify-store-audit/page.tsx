import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AuditRebuildSection from "@/components/sections/AuditRebuildSection";
import StatsCard from "@/components/sections/StatsCard";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import AuditUrgencySection from "@/components/sections/AuditUrgencySection";

const CASE_STUDY_SLIDES: CaseStudySlide[] = [
  {
    key: "eby",
    image: "/images/Frame_1000004320.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/klaviyo.svg", "/images/yotpo.svg"],
    headline: (
      <>
        An elegant <strong>Shopify Store</strong> designed and built for{" "}
        <strong>EBY</strong> by <strong>Sofia Vergara</strong>
      </>
    ),
    quote: (
      <>
        &ldquo;Working with EW was a truly <strong>top-notch experience</strong>. From start to finish, they made sure everything ran smoothly and professionally — we couldn&apos;t be happier!&rdquo;
      </>
    ),
    avatar: "/images/Sofia_Jimenez.webp",
    name: "EBY by Sofia Vergara",
    role: "Marketing Manager",
  },
  {
    key: "harvard",
    image: "/images/all-case-study-harvard.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/gorgias.svg"],
    headline: (
      <>
        A sophisticated <strong>Shopify Store</strong> designed and built for a{" "}
        <strong>Harvard University</strong>
      </>
    ),
    quote: (
      <>
        &ldquo;Our experience with EW was excellent, characterized by an{" "}
        <strong>efficient workflow</strong> and <strong>professional execution</strong>; we couldn&apos;t be more delighted&rdquo;
      </>
    ),
    avatar: "/images/harvardperson_medium.webp",
    name: "Daniyal S.",
    role: "Harvard University",
  },
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (
      <>
        A dynamically personalized <strong>Shopify Store</strong> developed &amp; maintained for{" "}
        <strong>Bark</strong>
      </>
    ),
    quote: (
      <>
        &ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong> made Ecomm Wizards a fantastic partner.&rdquo;
      </>
    ),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
];

export const metadata: Metadata = {
  title: "Free Shopify Store Audit | Conversion Experts",
  description:
    "Get a free Shopify store audit from conversion experts. We analyze CRO, SEO, speed, and UX to uncover hidden revenue leaks. Request yours today.",
  alternates: { canonical: "https://ecommwizards.com/services/shopify-store-audit/" },
};

const GRADIENT =
  "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";
const GRADIENT_TEXT = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

export default function Page() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative w-full"
        style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="mx-auto grid items-center gap-y-10 gap-x-[30px] py-[40px] sm:py-[50px] lg:py-[60px] px-[20px] lg:grid-cols-2"
          style={{ maxWidth: "1320px" }}
        >
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <h1
              className="text-[34px] sm:text-[44px] lg:text-[48px] min-[1440px]:text-[56px] leading-[1.15]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              <span style={GRADIENT_TEXT}>Free Shopify Store Audit</span>{" "}
              <span style={{ color: "#FFFFFF" }}>That Reveals Hidden Revenue Leaks</span>
            </h1>

            <p
              className="mt-[24px] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.5]"
              style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              Get a Professional Shopify Audit from experienced Shopify Experts that
              delivers a clear, actionable improvement plan designed to increase
              conversions, AOV, and customer lifetime value.
            </p>

            <p
              className="mt-[20px] text-[15px] sm:text-[16px] leading-[1.7]"
              style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            >
              Trusted by 700+ brands like Andrea Maack and RevGum, our Shopify
              conversion audit uses heat maps, session recordings, and real customer
              behavior data to uncover exactly what&rsquo;s killing your conversions.
              We deliver a comprehensive Shopify growth audit with fully functional
              prototypes designed to boost CRO by up to 30%, increase AOV, and
              improve CLV.
            </p>

            <div className="mt-[36px] inline-flex p-[2px] rounded-full" style={{ background: GRADIENT }}>
              <Link
                href="/free-shopify-store-audit"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-black hover:bg-white transition-all duration-300 px-[28px] py-[16px] sm:px-[40px] sm:py-[20px] text-[15px] sm:text-[16px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">
                  Get Your Shopify Store Audit Now
                </span>
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 15 10.55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white group-hover:text-black transition-colors duration-300"
                >
                  <path
                    d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <p
              className="mt-[24px] text-[16px] sm:text-[18px]"
              style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              Limited Spots Available This Month
            </p>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative w-full lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none aspect-[1628/1508]">
              <Image
                src="/images/Group-1000004281-green.png"
                alt="Shopify analytics dashboard preview"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 640px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Rebuild for Revenue ─────────────────────────────────── */}
      <AuditRebuildSection />

      {/* ── 3-Step Audit Process ────────────────────────────────── */}
      <section
        className="w-full"
        style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="mx-auto px-[15px] sm:px-[20px] py-[40px] sm:py-[50px] lg:py-[60px]"
          style={{ maxWidth: "1320px" }}
        >
          <h2
            className="mx-auto text-center text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.2]"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#FFFFFF", maxWidth: "880px" }}
          >
            Our 3-Step Shopify Audit Process
          </h2>

          <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "Discovery & Data Collection",
                desc: "We connect to your analytics stack and analyze heatmaps, scroll depth, checkout behavior, and session recordings. Our Shopify website audit identifies exactly where users hesitate, drop off, or lose trust.",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
                    <ellipse cx="24" cy="14" rx="14" ry="4.5" stroke="url(#step-grad)" strokeWidth="1.8" />
                    <path d="M10 14 V24 C10 26.485 16.268 28.5 24 28.5 C31.732 28.5 38 26.485 38 24 V14" stroke="url(#step-grad)" strokeWidth="1.8" />
                    <path d="M10 24 V34 C10 36.485 16.268 38.5 24 38.5 C31.732 38.5 38 36.485 38 34 V24" stroke="url(#step-grad)" strokeWidth="1.8" />
                  </svg>
                ),
              },
              {
                title: "The Revenue Blueprint",
                desc: "This isn't a PDF full of theories. Our professional Shopify audit delivers a complete Shopify store improvement plan with clickable prototypes that show you the before and after. We rebuild key pages, test new flows, and map out a data-driven Shopify audit tailored to your store's biggest conversion gaps.",
                icon: (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
                    {/* Stacked coins behind, right side */}
                    <ellipse cx="42" cy="28" rx="9" ry="2.4" stroke="url(#step-grad)" strokeWidth="1.6" />
                    <path d="M33 28 V32 C33 33.3 37 34.4 42 34.4 C47 34.4 51 33.3 51 32 V28" stroke="url(#step-grad)" strokeWidth="1.6" />
                    <path d="M33 32 V36 C33 37.3 37 38.4 42 38.4 C47 38.4 51 37.3 51 36 V32" stroke="url(#step-grad)" strokeWidth="1.6" />
                    <path d="M33 36 V40 C33 41.3 37 42.4 42 42.4 C47 42.4 51 41.3 51 40 V36" stroke="url(#step-grad)" strokeWidth="1.6" />

                    {/* Tied bag top — small bow knot */}
                    <path d="M22 8 L18 13 M22 8 L26 13 M19 11 Q22 13 25 11" stroke="url(#step-grad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                    {/* Bag body */}
                    <path d="M16 14 H30 C33 18 38 24 38 32 C38 39 32 44 23 44 C14 44 8 39 8 32 C8 24 13 18 16 14 Z" stroke="url(#step-grad)" strokeWidth="1.8" strokeLinejoin="round" fill="#000000" />

                    {/* Dollar sign on bag */}
                    <text x="23" y="35" textAnchor="middle" fill="url(#step-grad)" fontSize="14" fontFamily="Poppins, sans-serif" fontWeight="700">$</text>
                  </svg>
                ),
              },
              {
                title: "Launch & Optimize",
                desc: "We implement the changes, monitor performance, and refine as needed. Our Shopify growth audit doesn't stop at recommendations, we track CRO, AOV, and CLV improvements until you see real, measurable revenue growth.",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 32 32" fill="url(#step-grad)" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M21.6 14.4c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zM21.6 8c-1.323 0-2.4 1.077-2.4 2.4s1.077 2.4 2.4 2.4 2.4-1.077 2.4-2.4-1.077-2.4-2.4-2.4zM0.8 32c-0.209 0-0.413-0.082-0.566-0.234-0.22-0.22-0.292-0.547-0.186-0.839 2.462-6.77 5.050-10.203 7.694-10.203 0.871 0 1.687 0.374 2.424 1.111 1.165 1.165 1.207 2.325 1.036 3.093-0.535 2.412-3.943 4.776-10.129 7.025-0.089 0.032-0.182 0.048-0.273 0.048zM7.742 22.324c-0.792 0-1.725 0.694-2.696 2.007-0.956 1.292-1.915 3.131-2.86 5.484 2.136-0.859 3.853-1.731 5.119-2.6 1.708-1.173 2.213-2.080 2.336-2.634 0.123-0.556-0.075-1.084-0.606-1.615-0.432-0.432-0.855-0.642-1.293-0.642zM31.2 0c-4.152 0-7.852 0.704-10.998 2.093-2.594 1.145-4.815 2.752-6.602 4.778-0.334 0.378-0.642 0.76-0.928 1.143-1.379 0.092-2.79 0.64-4.199 1.632-1.192 0.839-2.389 2-3.56 3.452-1.968 2.439-3.178 4.843-3.229 4.945-0.175 0.35-0.070 0.775 0.247 1.005 0.141 0.102 0.305 0.152 0.469 0.152 0.205 0 0.41-0.079 0.564-0.232 0.008-0.008 0.772-0.759 2.077-1.498 1.075-0.609 2.733-1.323 4.738-1.45 0.507 1.298 1.958 2.849 2.655 3.546s2.248 2.148 3.546 2.655c-0.126 2.005-0.841 3.663-1.449 4.738-0.738 1.305-1.49 2.070-1.497 2.076-0.277 0.277-0.313 0.715-0.083 1.033 0.155 0.215 0.399 0.332 0.649 0.332 0.121 0 0.243-0.027 0.357-0.084 0.101-0.051 2.505-1.261 4.945-3.229 1.451-1.171 2.613-2.369 3.452-3.56 0.992-1.409 1.54-2.819 1.632-4.199 0.383-0.286 0.765-0.594 1.143-0.928 2.025-1.787 3.633-4.008 4.778-6.602 1.389-3.146 2.093-6.847 2.093-10.998v-0.8h-0.8zM4.972 15.693c1.525-2.213 3.856-4.956 6.483-5.82-1.038 1.819-1.576 3.49-1.769 4.549-1.854 0.113-3.452 0.653-4.714 1.271zM16.308 27.024c0.618-1.261 1.156-2.858 1.269-4.71 1.058-0.193 2.729-0.731 4.548-1.769-0.864 2.622-3.606 4.953-5.817 6.479zM24.071 17.2c-3.328 2.936-6.775 3.6-7.271 3.6-0.003 0-0.331-0.007-1.215-0.629-0.617-0.434-1.334-1.051-2.020-1.736s-1.303-1.403-1.736-2.020c-0.622-0.884-0.629-1.211-0.629-1.215 0-0.496 0.664-3.943 3.6-7.271 3.513-3.981 8.892-6.158 15.59-6.32-0.162 6.699-2.338 12.077-6.32 15.59z" />
                  </svg>
                ),
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-[16px] p-6 sm:p-8 lg:p-10 text-center"
                style={{
                  background: "#161616",
                  border: "1px solid rgba(255,255,255,0.06)",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
                  <defs>
                    <linearGradient id="step-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A8F0B4" />
                      <stop offset="50%" stopColor="#3DC77A" />
                      <stop offset="100%" stopColor="#2A9555" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="mx-auto mb-5 inline-flex">{c.icon}</div>
                <h3
                  className="text-[22px] sm:text-[24px] lg:text-[26px] leading-[1.25]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#FFFFFF" }}
                >
                  {c.title}
                </h3>
                <p
                  className="mt-4 text-[14px] sm:text-[15px] leading-[1.7]"
                  style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(255,255,255,0.72)" }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mx-auto mt-8 sm:mt-10 text-center text-[14px] sm:text-[16px] leading-[1.6]"
            style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(255,255,255,0.85)", maxWidth: "1080px" }}
          >
            <span style={{ fontWeight: 700, color: "#FFFFFF" }}>100% satisfaction guarantee.</span>{" "}
            If our Shopify conversion audit doesn&rsquo;t move the needle, we refund every dollar.
          </p>
        </div>
      </section>

      {/* ── Where's Your Revenue Actually Going? ─────────────────── */}
      <section
        className="w-full"
        style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="mx-auto px-[20px] py-[40px] sm:py-[50px] lg:py-[60px] grid items-start gap-x-[40px] gap-y-[32px] lg:grid-cols-2"
          style={{ maxWidth: "1320px" }}
        >
          {/* Left: heading + problems + paragraph */}
          <div>
            <h2
              className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000" }}
            >
              Where&rsquo;s Your Revenue Actually Going?
            </h2>

            <div className="mt-6 sm:mt-8 space-y-5">
              {[
                {
                  label: "Problem 1:",
                  title: "Checkout friction draining your AOV?",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M15.766 30.966l9.6-9.6c0.312-0.312 0.312-0.819 0-1.131s-0.819-0.312-1.131 0l-8.234 8.234v-26.069c0-0.442-0.358-0.8-0.8-0.8s-0.8 0.358-0.8 0.8v26.069l-8.234-8.234c-0.312-0.312-0.819-0.312-1.131 0-0.156 0.156-0.234 0.361-0.234 0.566s0.078 0.409 0.234 0.566l9.6 9.6c0.312 0.312 0.819 0.312 1.131 0z" />
                    </svg>
                  ),
                },
                {
                  label: "Problem 2:",
                  title: "Traffic converting like it's 2015?",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M13.6 32c-3.633 0-7.048-1.415-9.617-3.983s-3.983-5.984-3.983-9.617c0-3.633 1.415-7.048 3.983-9.617s5.984-3.983 9.617-3.983c0.442 0 0.8 0.358 0.8 0.8v12h12c0.442 0 0.8 0.358 0.8 0.8 0 3.633-1.415 7.048-3.983 9.617s-5.984 3.983-9.617 3.983zM12.8 6.426c-6.245 0.413-11.2 5.626-11.2 11.974 0 6.617 5.383 12 12 12 6.348 0 11.56-4.955 11.974-11.2h-11.974c-0.442 0-0.8-0.358-0.8-0.8v-11.974zM29.6 16h-12.8c-0.442 0-0.8-0.358-0.8-0.8v-12.8c0-0.442 0.358-0.8 0.8-0.8 3.633 0 7.048 1.415 9.617 3.983s3.983 5.984 3.983 9.617c0 0.442-0.358 0.8-0.8 0.8zM17.6 14.4h11.174c-0.396-5.98-5.193-10.778-11.174-11.174v11.174z" />
                    </svg>
                  ),
                },
                {
                  label: "Problem 3:",
                  title: "One-time buyers ghosting your brand (CLV not so good)?",
                  icon: (
                    <svg width="26" height="22" viewBox="0 0 640 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z" />
                    </svg>
                  ),
                },
              ].map((p) => (
                <div key={p.label} className="border-b border-[#E5E7EB] pb-5">
                  <div className="text-[16px] sm:text-[17px]" style={{ fontWeight: 600, color: "#000000" }}>
                    {p.label}
                  </div>
                  <div className="mt-2 flex items-start gap-3 flex-row-reverse justify-end md:flex-row md:items-center md:justify-between">
                    <h3
                      className="text-[15px] sm:text-[17px] leading-[1.5]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: "#000000" }}
                    >
                      {p.title}
                    </h3>
                    <span style={{ color: "#000000", flexShrink: 0 }}>{p.icon}</span>
                  </div>
                </div>
              ))}
            </div>

            <p
              className="mt-6 text-[14px] sm:text-[15px] leading-[1.7]"
              style={{ fontFamily: "'Poppins', sans-serif", color: "#334155" }}
            >
              The average Shopify store converts at 1-2%. Yours doesn&rsquo;t have
              to settle for average. Our Shopify conversion audit identifies the
              hidden leaks costing you thousands every month &mdash;confusing
              product pages, broken mobile experiences, checkout steps that kill
              urgency. We&rsquo;ve helped DTC brands double revenue by fixing
              issues most store owners don&rsquo;t even know exist. A
              professional Shopify audit finds them. Fast.
            </p>
          </div>

          {/* Right: image with stats card overlay */}
          <div
            className="relative w-full aspect-[800/752] overflow-hidden"
            style={{ borderRadius: "20px", background: "#F0F5FA" }}
          >
            <Image
              src="/images/Group_1000004345_1.webp"
              alt="Shopify audit revenue visualization"
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
            />
            <StatsCard />
          </div>
        </div>
      </section>

      {/* ── What's included in the Audit ─────────────────────────── */}
      <section
        className="w-full"
        style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="mx-auto px-[15px] sm:px-[20px] py-[40px] sm:py-[50px] lg:py-[60px] grid items-center gap-[30px] lg:grid-cols-2"
          style={{ maxWidth: "1320px" }}
        >
          {/* Left: image */}
          <div className="relative w-full aspect-[800/752] mx-auto max-w-[640px] lg:max-w-none">
            <Image
              src="/images/shopify-audit-unlock.webp"
              alt="What's included in the Shopify audit"
              fill
              sizes="(max-width: 1024px) 90vw, 640px"
              className="object-contain"
            />
          </div>

          {/* Right: heading + accordion */}
          <div>
            <h2
              className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] text-center lg:text-left"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#FFFFFF" }}
            >
              What&rsquo;s included in the Audit
            </h2>

            <div className="mt-6 sm:mt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
              {[
                {
                  q: "Behavioral Analytics That Tell the Truth",
                  a: "We track real user behavior: heat maps, scroll depth, session replays, so our data-driven Shopify audit is built on what customers actually do, not what you think they do.",
                },
                {
                  q: "Analytics-Backed Recommendations",
                  a: "Every change we recommend comes with the numbers to prove it. Our Shopify conversion audit ties every UX/UI tweak directly to CRO, AOV, and CLV improvements, so you know exactly what drives revenue.",
                },
                {
                  q: "Ready-to-Launch Prototypes",
                  a: "No vague mockups. Our professional Shopify audit includes interactive Figma prototypes you can click through, test with your team, and hand off to developers the same day. Zero guesswork.",
                },
                {
                  q: "Full-Funnel Store Analysis",
                  a: "We audit every critical touchpoint—homepage, collections, product pages, cart, checkout, and account pages. Our Shopify store improvement plan covers the entire customer journey, not just the homepage.",
                },
                {
                  q: "Proven Results from Shopify Experts",
                  a: "Stores that implement our Shopify growth audit see 15% higher conversions on average, with some brands outpacing competitors by 36%. That's what happens when you fix the right problems.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group border-b py-5 sm:py-6"
                  style={{ borderColor: "rgba(255,255,255,0.18)" }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                  >
                    <span
                      className="text-[16px] sm:text-[18px] leading-[1.4]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFFFFF" }}
                    >
                      {item.q}
                    </span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                      aria-hidden
                    >
                      <polyline points="6 12 16 22 26 12" />
                    </svg>
                  </summary>
                  <p
                    className="mt-3 text-[14px] sm:text-[15px] leading-[1.7]"
                    style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(255,255,255,0.75)" }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pick Your Path to Higher Conversions ─────────────────── */}
      <section
        className="w-full"
        style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="mx-auto px-[20px] py-[40px] sm:py-[50px] lg:py-[60px]"
          style={{ maxWidth: "1320px" }}
        >
          <h2
            className="text-center text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2]"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000" }}
          >
            Pick Your Path to Higher Conversions
          </h2>
          <p
            className="mt-3 text-center text-[15px] sm:text-[16px]"
            style={{ fontFamily: "'Poppins', sans-serif", color: "#334155" }}
          >
            Choose the Shopify store audit that fits your goals:
          </p>

          <div className="mt-8 sm:mt-10 grid gap-5 lg:grid-cols-2">
            {[
              {
                title: "Single Page Deep Dive",
                recommended: false,
                priceTop: "$1950",
                priceTopUnit: "Per Page",
                priceTopExtra: null as string | null,
                included: "1 Critical Page Audited",
                desc: "Pick the page that matters most – Homepage, Collection, Product, Cart, or Account Page. Our professional Shopify audit delivers actionable fixes for your biggest conversion bottleneck.",
                priceBig: "$1,950",
                cta: "Get Your Page Audit",
                href: "/free-shopify-store-audit",
              },
              {
                title: "Complete Store Transformation",
                recommended: true,
                priceTop: "$7495",
                priceTopUnit: "",
                priceTopExtra: "($1,499 Per Page)",
                included: "5 Pages Fully Optimized",
                desc: "The full customer journey – Homepage, Collection, Product, Cart, and Account Page. Our Shopify growth audit covers every touchpoint where you're losing revenue, delivered as a complete Shopify store improvement plan.",
                priceBig: "$7,495",
                cta: "Get the Full Audit",
                href: "/free-shopify-store-audit",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-[24px] p-3 sm:p-4 lg:p-5"
                style={{ border: "1px solid rgba(0,0,0,0.08)", background: "#FBF7ED" }}
              >
                <div
                  className="rounded-[18px] p-6 sm:p-8 lg:p-10 h-full flex flex-col"
                  style={{ background: "#FFFFFF" }}
                >
                  {/* Top row: title + price */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6 text-center sm:text-left">
                    <div>
                      <h3
                        className="text-[22px] sm:text-[26px] lg:text-[28px] leading-[1.2]"
                        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000" }}
                      >
                        {p.title}
                      </h3>
                      {p.recommended && (
                        <div
                          className="mt-1 text-[12px] sm:text-[13px]"
                          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", letterSpacing: "0.06em" }}
                        >
                          (RECOMMENDED)
                        </div>
                      )}
                    </div>
                    <div
                      className="text-[16px] sm:text-[17px] whitespace-nowrap"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <span style={{ ...GRADIENT_TEXT, fontWeight: 600 }}>{p.priceTop}</span>
                      {p.priceTopUnit && <span style={{ color: "#000000", marginLeft: 4 }}>{p.priceTopUnit}</span>}
                      {p.priceTopExtra && <span style={{ color: "#000000", marginLeft: 4 }}>{p.priceTopExtra}</span>}
                    </div>
                  </div>

                  {/* What's included + description */}
                  <div className="mt-6 sm:mt-8">
                    <p className="text-[13px] sm:text-[14px]" style={{ color: "#334155" }}>
                      <span style={{ fontWeight: 600 }}>What&rsquo;s Included:</span> {p.included}
                    </p>
                    <p
                      className="mt-3 text-[14px] sm:text-[15px] leading-[1.7]"
                      style={{ fontFamily: "'Poppins', sans-serif", color: "#334155" }}
                    >
                      {p.desc}
                    </p>
                  </div>

                  {/* Bottom: big price + CTA */}
                  <div className="mt-auto pt-8 sm:pt-10 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                    <div
                      className="text-[36px] sm:text-[40px] lg:text-[44px] leading-[1]"
                      style={{ ...GRADIENT_TEXT, fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                    >
                      {p.priceBig}
                    </div>
                    <Link
                      href={p.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-black hover:bg-[#1a1a1a] transition-colors duration-300 px-7 py-4 text-[14px] sm:text-[15px]"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, color: "#FFFFFF" }}
                    >
                      <span className="whitespace-nowrap">{p.cta}</span>
                      <svg width="16" height="12" viewBox="0 0 15 10.55" fill="none" aria-hidden>
                        <path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <div
              className="text-[15px] sm:text-[16px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000" }}
            >
              Deal Ends in 48 Hours
            </div>
            <p
              className="mt-2 text-[13px] sm:text-[14px]"
              style={{ fontFamily: "'Poppins', sans-serif", color: "#334155" }}
            >
              Lock in bundle pricing before it rises. Limited to 10 spots this month&mdash;first come, first served.
            </p>
          </div>
        </div>
      </section>

      {/* ── Join 700+ Brands Seeing Real Results ─────────────────── */}
      <section className="ssd-results-section">
        <div className="ssd-results-inner">
          <h2 className="ssd-results-heading">Join 700+ Brands Seeing Real Results</h2>

          <div className="ssd-results-cards">
            {[
              {
                quote: "Ecomm Grey transformed our UX—conversions up 25%!",
                logo: "/images/Frame_1000007615.webp",
                logoAlt: "EBY",
              },
              {
                quote: "Excellent experience; highly recommend.",
                logo: "/images/harvard-university-11.webp",
                logoAlt: "Harvard University",
              },
              {
                quote: "Fantastic partner; AOV jumped overnight.",
                logo: "/images/Frame_1000007615-2.avif",
                logoAlt: "BARK",
              },
            ].map((c) => (
              <div key={c.logoAlt} className="ssd-results-card ssd-results-card--audit">
                <p className="ssd-results-card-quote">{c.quote}</p>
                <div className="ssd-results-card-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.logo} alt={c.logoAlt} />
                </div>
              </div>
            ))}
          </div>

          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} />
        </div>
      </section>

      {/* ── Claim Your Free Audit (72h weekly countdown) ─────────── */}
      <AuditUrgencySection />

      {/* ── Why Our Shopify Audit Gets Different Results ─────────── */}
      <section
        className="w-full"
        style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="mx-auto px-[15px] sm:px-[20px] py-[40px] sm:py-[50px] lg:py-[60px] grid items-center gap-y-[30px] gap-x-[16px] lg:grid-cols-[1fr_231px_minmax(0,540px)]"
          style={{ maxWidth: "1320px" }}
        >
          {/* Col 1: heading + paragraph */}
          <div>
            <h2
              className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] text-center lg:text-left"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000" }}
            >
              Why Our Shopify Audit for DTC Brands Gets Different Results
            </h2>
            <p
              className="mt-4 text-[14px] sm:text-[15px] leading-[1.7] text-center lg:text-left"
              style={{ fontFamily: "'Poppins', sans-serif", color: "#334155" }}
            >
              Most agencies hand you a list of problems. We deliver tested solutions that make you money.
            </p>
          </div>

          {/* Col 2: vertical brand marquee */}
          <div className="relative mx-auto w-full max-w-[460px] lg:max-w-[231px] aspect-[460/680] lg:aspect-[231/450] overflow-hidden rounded-[18px]" style={{ background: "#0A0A0A" }}>
            {/* Brand-rotated confetti backdrop (gold → olive via hue-rotate) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/confity-back-image.webp"
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ filter: "hue-rotate(95deg) saturate(0.95) brightness(1)", opacity: 0.85 }}
            />

            {/* Olive-green radial glows (corners) */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background: [
                  "radial-gradient(circle at 88% 6%, rgba(79,184,114,0.55) 0%, rgba(79,184,114,0) 38%)",
                  "radial-gradient(circle at 8% 96%, rgba(168,240,180,0.42) 0%, rgba(168,240,180,0) 42%)",
                  "radial-gradient(circle at 50% 100%, rgba(42,149,85,0.40) 0%, rgba(42,149,85,0) 55%)",
                ].join(", "),
              }}
            />

            {/* Bottom fan rays — olive streaks coming up from the bottom edge */}
            <svg
              aria-hidden
              viewBox="0 0 231 450"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ mixBlendMode: "screen", opacity: 0.55 }}
            >
              <defs>
                <linearGradient id="ray-grad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#A8F0B4" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#3DC77A" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3DC77A" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="ray-grad-2" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#4FB872" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#2A9555" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#2A9555" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g transform="translate(115.5 450)">
                {Array.from({ length: 11 }).map((_, i) => {
                  const angle = -90 + (i - 5) * 12;
                  return (
                    <rect
                      key={i}
                      x="-1"
                      y="-260"
                      width="2"
                      height="260"
                      transform={`rotate(${angle})`}
                      fill={i % 2 === 0 ? "url(#ray-grad)" : "url(#ray-grad-2)"}
                    />
                  );
                })}
              </g>
            </svg>

            {/* Top edge soft olive line */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-0 pointer-events-none"
              style={{
                height: "2px",
                background:
                  "linear-gradient(90deg, rgba(79,184,114,0) 0%, rgba(168,240,180,0.7) 50%, rgba(79,184,114,0) 100%)",
              }}
            />

            <div
              className="logo-col-up relative flex flex-col items-center gap-3 py-3"
              style={{ width: "100%" }}
            >
              {(() => {
                const logos = [
                  { src: "/images/ai-cashmere.svg", alt: "The Cashmere Sale" },
                  { src: "/images/ai-smurfs.svg", alt: "The Smurfs" },
                  { src: "/images/ai-everlast.svg", alt: "Everlast" },
                  { src: "/images/ai-harward.svg", alt: "Harvard University" },
                  { src: "/images/ai-ipsy.svg", alt: "Ipsy" },
                ];
                return [...logos, ...logos].map((l, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <div
                    key={i}
                    className="flex items-center justify-center w-[180px] h-[100px] rounded-[8px]"
                    style={{ background: "#FFFFFF", flexShrink: 0 }}
                  >
                    <img src={l.src} alt={l.alt} className="max-w-[78%] max-h-[72%] object-contain" />
                  </div>
                ));
              })()}
            </div>
          </div>

          {/* Col 3: accordion */}
          <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            {[
              {
                q: "Metrics-Driven Recommendations",
                a: "Every fix in our Shopify audit for ecommerce stores comes with conversion data, heatmap evidence, and clickable prototypes – so you can test immediately without waiting for dev work.",
              },
              {
                q: "Results You Can Actually Track",
                a: "We don't give you vague suggestions. Our data-driven Shopify audit includes before/after projections for CRO, AOV, and CLV so you know exactly what success looks like before you implement a single change.",
              },
              {
                q: "ROI-Obsessed Approach",
                a: "We only recommend changes that move revenue. Our professional Shopify audit prioritizes the highest-impact fixes first – the ones proven to generate up to 5x returns in the first 30 days.",
              },
              {
                q: "Hands-On Partnership",
                a: "This isn't a “here's your report, good luck” situation. Our Shopify experts walk you through every recommendation, answer technical questions, and help your team execute flawlessly.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group border-b py-4 sm:py-5"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span
                    className="text-[15px] sm:text-[17px] leading-[1.4]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#000000" }}
                  >
                    {item.q}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden
                  >
                    <polyline points="6 12 16 22 26 12" />
                  </svg>
                </summary>
                <p
                  className="mt-3 text-[13px] sm:text-[14px] leading-[1.7]"
                  style={{ fontFamily: "'Poppins', sans-serif", color: "#334155" }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Questions About Our Shopify Store Audit + Final CTA ──── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Decorative bg image, brand-rotated to olive */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/background-scaled.webp"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ filter: "hue-rotate(95deg) saturate(0.9) brightness(0.9)", opacity: 0.5 }}
        />

        <div
          className="relative mx-auto px-[20px] py-[40px] sm:py-[50px] lg:py-[60px] grid items-start gap-[30px] lg:grid-cols-2"
          style={{ maxWidth: "1320px" }}
        >
          {/* Left: FAQ-style Q&A list */}
          <div>
            <h2
              className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] text-center lg:text-left"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#FFFFFF" }}
            >
              Questions About Our Shopify Store Audit?
            </h2>

            <div className="mt-6 sm:mt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
              {[
                {
                  q: "What do I need to get started?",
                  a: "Just admin access to your Shopify store. If you don't have heatmapping or analytics tools installed, our Shopify experts will set them up as part of your data-driven Shopify audit.",
                },
                {
                  q: "How fast will I get results?",
                  a: "3-5 business days. We deliver your complete Shopify conversion audit with prototypes, recommendations, and a 30-minute strategy session—faster than most agencies take to schedule a kickoff call.",
                },
                {
                  q: "What if the audit doesn't deliver?",
                  a: "100% money-back guarantee. If our professional Shopify audit doesn't uncover actionable revenue opportunities, we refund every dollar. Just email us for the refund. No Questions asked.",
                },
                {
                  q: "Can I start with just one page?",
                  a: "Absolutely. Our single-page Shopify store audit lets you test our process on your biggest bottleneck first. Once you see the results, scaling to the full-funnel audit is easy.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="border-b py-5 sm:py-6"
                  style={{ borderColor: "rgba(255,255,255,0.14)" }}
                >
                  <h3
                    className="text-[16px] sm:text-[18px] leading-[1.4]"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#FFFFFF" }}
                  >
                    {item.q}
                  </h3>
                  <p
                    className="mt-2 text-[14px] sm:text-[15px] leading-[1.7]"
                    style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(255,255,255,0.78)" }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: closing CTA card */}
          <div className="lg:sticky lg:top-8">
            <div
              className="rounded-[20px] p-8 sm:p-10 lg:p-12 text-center"
              style={{ background: "rgba(20,20,20,0.85)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h2
                className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15]"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#FFFFFF" }}
              >
                Ready to Fix What&rsquo;s Costing You Sales?
              </h2>
              <p
                className="mt-5 text-[14px] sm:text-[15px] leading-[1.7] mx-auto"
                style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(255,255,255,0.85)", maxWidth: "560px" }}
              >
                Brands using our Shopify growth audit are seeing up to 3.5x growth. Don&rsquo;t let
                another week of lost revenue slip by &ndash; get started today.
              </p>
              <div className="mt-7 flex justify-center">
                <Link
                  href="/free-shopify-store-audit"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 sm:px-8 py-3.5 sm:py-4 text-[14px] sm:text-[15px] transition-colors duration-300 hover:bg-[rgba(79,184,114,0.12)]"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    border: "1.5px solid #4FB872",
                    background: "transparent",
                  }}
                >
                  <span className="whitespace-nowrap">Claim Your Audit (Risk-Free)</span>
                  <svg width="16" height="12" viewBox="0 0 15 10.55" fill="none" aria-hidden>
                    <path
                      d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
