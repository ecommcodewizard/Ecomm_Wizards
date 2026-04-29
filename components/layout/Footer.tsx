import Link from "next/link";
import Image from "next/image";
import ScrollToTop from "./ScrollToTop";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CITIES = [
  "Los Angeles", "Newyork", "Chicago", "Seattle",
  "Toronto", "Boston", "London", "Washington DC",
];

const SERVICE_TAGS = [
  { label: "Build a New Shopify Store",        href: "/shopify-store-development" },
  { label: "Shopify Theme Customizations",     href: "/shopify-theme-development" },
  { label: "Shopify Audit",                    href: "/shopify-store-audit" },
  { label: "Convert Figma to Shopify",         href: "/figma-to-shopify-conversion" },
  { label: "ERP Connections to Shopify",       href: "/shopify-integrations-erp-crm-3pl-etc" },
  { label: "Shopify App Development",          href: "/shopify-app-development" },
  { label: "Mobile App Development",           href: "/shopify-mobile-app-development" },
  { label: "On Demand Dev with Bulk Hours",    href: "/shopify-store-development" },
  { label: "Site Speed Optimizations",         href: "/shopify-speed-optimization" },
  { label: "Point of Sale (POS) for Business", href: "/shopify-pos-setup" },
  { label: "A/B Testing for CRO, AOV & CLV",  href: "/a-b-testing" },
  { label: "B2B Solutions",                   href: "/shopify-b2b-store-setup" },
  { label: "Shopify SEO Agency",              href: "/shopify-seo-agency" },
  { label: "Book a Demo",                     href: "/book-shopify-consultation" },
  { label: "Shopify Landing Page Design",     href: "/shopify-landing-page-design" },
];

const COMPANY = [
  { label: "About Ecomm Wizards",    href: "/about-shopify-agency" },
  { label: "Partners",               href: "/partners" },
  { label: "Partner Program",        href: "/partners" },
  { label: "FAQ's",                  href: "/faqs" },
  { label: "Q4 Breakthrough Journey",href: "/contact-shopify-agency" },
];

const AWARDS = [
  { label: "Write a Review",  href: "/reviews" },
  { label: "Reviews",         href: "/reviews" },
  { label: "UX & UI Audit",   href: "/shopify-ux-and-ui-design" },
  { label: "Case Studies",    href: "/case-studies" },
];

const MIGRATION = [
  { label: "Migrate to Shopify",           href: "/migration" },
  { label: "Migrate from Magento",         href: "/magento-to-shopify" },
  { label: "Migrate from BigCommerce",     href: "/bigcommerce-to-shopify" },
  { label: "Migrate from wooCommerce",     href: "/woocommerce-to-shopify" },
  { label: "Migrate from Amazon",          href: "/amazon-to-shopify" },
  { label: "Migrate from Salesforce",      href: "/salesforce-to-shopify" },
  { label: "Migrate from Prestashop",      href: "/prestashop-to-shopify" },
  { label: "Migrate from Liquid to Hydrogen", href: "/liquid-to-shopify-hydrogen" },
];

const GET_STARTED = [
  { label: "Shopify UX and UI Design",                         href: "/shopify-ux-and-ui-design" },
  { label: "Headless Shopify Agency",                          href: "/headless-shopify-agency" },
  { label: "Shopify Conversion Rate Optimization (CRO) Agency",href: "/shopify-conversion-rate-optimization-cro-agency" },
  { label: "Shopify Theme Development",                        href: "/shopify-theme-development" },
  { label: "Shopify Plus Development",                         href: "/shopify-plus-development" },
  { label: "Shopify SEO Agency",                               href: "/shopify-seo-agency" },
  { label: "Shopify Landing Page Design",                      href: "/shopify-landing-page-design" },
  { label: "Shopify Maintenance and Support",                  href: "/shopify-maintenance-and-support" },
  { label: "Shopify Integrations (ERP, CRM, 3PL, etc)",       href: "/shopify-integrations-erp-crm-3pl-etc" },
  { label: "Shopify App Setup and App Optimization",           href: "/shopify-app-setup-and-app-optimization" },
  { label: "Shopify 2.0 Development",                          href: "/shopify-2-0-development" },
  { label: "Shopify Analytics and Tracking Setup",             href: "/shopify-analytics-and-tracking-setup" },
  { label: "Klaviyo Audit",                                    href: "/klaviyo-audit" },
];

const RESOURCES = [
  { label: "Blog",               href: "/blog" },
  { label: "Case Studies",       href: "/case-studies" },
  { label: "Newsletter Signup",  href: "/newsletter" },
  { label: "CCPA Opt-Out",       href: "/ccpa-opt-out" },
  { label: "Contact",            href: "/contact-shopify-agency" },
];

// ─── Social icons ──────────────────────────────────────────────────────────────

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    color: "#000000",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.55 12 3.55 12 3.55s-7.54 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.84.5 9.38.5 9.38.5s7.54 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
      </svg>
    ),
  },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer style={{ background: "#000000", color: "#d1d5db" }}>

      {/* ── Top bar: logo / cities / socials ── */}
      <div style={{ background: "#000000", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
        <div
          className="mx-auto flex items-center justify-between w-full"
          style={{ maxWidth: "1320px", height: "97px", padding: "0px" }}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center" style={{ width: "237.59px", height: "77.06px", padding: "10px" }}>
            <Image
              src="/images/cropped-cropped-ecomm-golden.png"
              alt="Ecomm Wizards"
              width={218}
              height={57}
              style={{ width: "217.59px", height: "57.06px" }}
              className="object-contain"
            />
          </Link>

          {/* Cities */}
          <div style={{ flex: 1, height: "77.06px", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ color: "#FFFFFF", fontSize: "16px", fontFamily: "'Poppins', sans-serif" }} className="text-center">
              {CITIES.map((city, i) => (
                <span key={city}>
                  {city}
                  {i < CITIES.length - 1 && (
                    <span className="mx-2">–</span>
                  )}
                </span>
              ))}
            </p>
          </div>

          {/* Social icons */}
          <div className="flex shrink-0 items-center gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
                style={{ width: "32px", height: "32px", background: "#FFFFFF", color: "#000000" }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Select a Service ── */}
      <div style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(212,175,55,0.12) 0%, transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.10) 0%, transparent 50%), #000000", minHeight: "351px", display: "flex", alignItems: "center", position: "relative" }}>
        <div className="mx-auto px-5 py-10 w-full" style={{ maxWidth: "1485px" }}>
          <h3 className="mb-6 text-center font-normal" style={{ color: "#FFFFFF", fontSize: "20px", fontFamily: "'Poppins', sans-serif", width: "1320px", maxWidth: "100%", height: "30px", lineHeight: "30px", margin: "0 auto 24px" }}>
            Select a Service
          </h3>
          <div className="flex flex-wrap justify-center" style={{ width: "1335px", maxWidth: "100%", height: "260px", margin: "0 auto", fontFamily: "'Poppins', sans-serif", fontSize: "16px", overflow: "visible" }}>
            {SERVICE_TAGS.map((tag) => (
              <Link
                key={tag.href + tag.label}
                href={tag.href}
                className="inline-flex items-center justify-center rounded-md font-normal text-white transition-opacity hover:opacity-80"
                style={{ background: "#ffffff0d", padding: "5px 35px", height: "45px", margin: "7.5px", fontSize: "15px", fontFamily: "'Poppins', sans-serif", color: "#FFFFFF" }}
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main 5-column links ── */}
      <div style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.22) 0%, transparent 60%), #000000", minHeight: "700px", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
        <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" style={{ maxWidth: "1320px" }}>
          <FooterCol title="Company"             links={COMPANY}    borderRight />
          <FooterCol title="Awards & Reviews"    links={AWARDS}     borderRight />
          <FooterCol title="Migration Solutions" links={MIGRATION}  borderRight />
          <FooterCol title="Get Started"         links={GET_STARTED} borderRight />
          <FooterCol title="Resoures & Connect"  links={RESOURCES} />
        </div>
      </div>

      {/* ── Bottom copyright ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
        <div className="relative text-center" style={{ width: "100%", height: "65px", padding: "20px 0px", fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#334155", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ color: "#FFFFFF", fontSize: "15px", fontFamily: "'Poppins', sans-serif", width: "1320px", maxWidth: "100%", height: "25px", lineHeight: "25px" }}>
            &copy; 2026 EcommWizards. All rights reserved.
          </p>
          <ScrollToTop />
        </div>
      </div>

    </footer>
  );
}

// ─── Column helper ─────────────────────────────────────────────────────────────

function FooterCol({ title, links, borderRight }: { title: string; links: { label: string; href: string }[]; borderRight?: boolean }) {
  return (
    <div
      style={{ width: "256px", height: "698px", padding: "10px", fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#334155", borderRight: borderRight ? "1px solid rgba(255,255,255,0.15)" : undefined }}
    >
      <h4 className="font-semibold" style={{ marginBottom: "10px", color: "#FFFFFF", fontSize: "19px", fontFamily: "'Poppins', sans-serif", width: "235.97px", height: "28px", lineHeight: "28px" }}>
        {title}
      </h4>
      <ul>
        {links.map((l) => (
          <li key={l.label} style={{ margin: "7.5px 0px 0px", padding: "0px 0px 7.5px" }}>
            <Link
              href={l.href}
              className="leading-snug transition-colors hover:opacity-70"
              style={{ fontSize: "15px", color: "#FFFFFF" }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

