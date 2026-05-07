import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AuditRebuildSection from "@/components/sections/AuditRebuildSection";

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
    </>
  );
}
