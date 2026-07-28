"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CITIES = [
  "Los Angeles", "New York", "Chicago", "Seattle",
  "Toronto", "Boston", "London", "Washington DC",
];

const SERVICE_TAGS = [
  { label: "Build a New Shopify Store",        href: "/services/shopify-store-development" },
  { label: "Shopify Theme Customizations",     href: "/services/shopify-theme-development" },
  { label: "Shopify Audit",                    href: "/services/shopify-store-audit" },
  { label: "Convert Figma to Shopify",         href: "/services/figma-to-shopify-conversion" },
  { label: "Shopify Development Agency",        href: "/services/shopify-development-agency" },
  { label: "ERP Connections to Shopify",       href: "/services/erp-connections-to-shopify" },
  { label: "Shopify App Development",          href: "/services/shopify-app-development" },
  { label: "On Demand Dev with Bulk Hours",    href: "/bulk-hours" },
  { label: "Site Speed Optimizations",         href: "/services/shopify-speed-optimization" },
  { label: "Point of Sale (POS) for Business", href: "/services/shopify-pos-setup" },
  { label: "A/B Testing for CRO, AOV & CLV",  href: "/services/a-b-testing" },
  { label: "Cart Gamification for AOV",        href: "/services/shopify-cart-gamification" },
  { label: "B2B Solutions",                    href: "/services/shopify-b2b-store-setup" },
  { label: "Shopify SEO Agency",               href: "/services/shopify-seo-agency" },
  { label: "Shopify Agentic Commerce",         href: "/services/shopify-agentic-commerce" },
  { label: "Book a Demo",                      href: "/book-shopify-consultation" },
  { label: "Shopify Landing Page Design",      href: "/services/shopify-landing-page-design" },
  { label: "Shopify 2.0 Development",          href: "/services/shopify-2-0-development" },
  { label: "Shopify Plus Development",         href: "/services/shopify-plus-development" },
  { label: "Headless Shopify Agency",          href: "/services/headless-shopify-agency" },
  { label: "Creative Strategy",                href: "/services/creative-strategy" },
  { label: "Klaviyo Email Audit",              href: "/services/klaviyo-audit" },
];

const COMPANY = [
  { label: "About Ecomm Wizards", href: "/about-shopify-agency" },
  { label: "Case Studies",        href: "/case-studies" },
  { label: "Contact Us",          href: "/contact-shopify-agency" },
  { label: "Reviews",             href: "/reviews" },
  { label: "FAQ's",               href: "/faqs" },
  { label: "Partners",            href: "/partners" },
  { label: "Partner Program",     href: "/partner-program" },
];

// Mobile-only service columns (hidden md+, where the "Select a Service" strip covers services)
const DESIGN_BUILD = [
  { label: "Shopify Development Agency",  href: "/services/shopify-development-agency" },
  { label: "Convert Figma to Shopify",    href: "/services/figma-to-shopify-conversion" },
  { label: "Shopify Theme Development",   href: "/services/shopify-theme-development" },
  { label: "Shopify 2.0 Development",     href: "/services/shopify-2-0-development" },
  { label: "Shopify Plus Development",    href: "/services/shopify-plus-development" },
  { label: "Headless Shopify Agency",     href: "/services/headless-shopify-agency" },
  { label: "Shopify Landing Page Design", href: "/services/shopify-landing-page-design" },
];

const OPTIMIZE_GROW = [
  { label: "Shopify CRO Agency",                   href: "/services/shopify-cro-agency" },
  { label: "Shopify SEO Agency",                   href: "/services/shopify-seo-agency" },
  { label: "Agentic Commerce",                     href: "/services/shopify-agentic-commerce" },
  { label: "A/B Testing",                          href: "/services/a-b-testing" },
  { label: "Cart Gamification",                    href: "/services/shopify-cart-gamification" },
  { label: "Site Speed Optimizations",             href: "/services/shopify-speed-optimization" },
  { label: "Shopify Store Audit",                  href: "/services/shopify-store-audit" },
  { label: "Shopify Analytics and Tracking Setup", href: "/services/shopify-analytics-and-tracking-setup" },
  { label: "Shopify Maintenance and Support",      href: "/services/shopify-maintenance-and-support" },
  { label: "Creative Strategy",                    href: "/services/creative-strategy" },
];

const MIGRATE = [
  { label: "Migrate from Magento",            href: "/services/migration/magento-to-shopify" },
  { label: "Migrate from BigCommerce",        href: "/services/migration/bigcommerce-to-shopify" },
  { label: "Migrate from WooCommerce",        href: "/services/migration/woocommerce-to-shopify" },
  { label: "Migrate from Amazon",             href: "/services/migration/amazon-to-shopify" },
  { label: "Migrate from Salesforce",         href: "/services/migration/salesforce-to-shopify" },
  { label: "Migrate from Prestashop",         href: "/services/migration/prestashop-to-shopify" },
  { label: "Migrate from Liquid to Hydrogen", href: "/services/migration/liquid-to-shopify-hydrogen" },
];

const GET_STARTED = [
  { label: "Build a New Shopify Store", href: "/services/shopify-store-development" },
  { label: "Free Store Audit",          href: "/free-shopify-store-audit" },
  { label: "Book a Consultation",       href: "/book-shopify-consultation" },
  { label: "UX & UI Audit",             href: "/services/shopify-ux-and-ui-design" },
  { label: "Klaviyo Audit",             href: "/services/klaviyo-audit" },
];

// Desktop + tablet-only columns (hidden on mobile, where the service columns take over)
const OTHERS = [
  { label: "On Demand Dev (Bulk Hours)", href: "/bulk-hours" },
  { label: "Q4 Breakthrough Journey",    href: "/q4-breakthrough-journey" },
];

const SOCIALS = [
  { label: "Facebook",    href: "https://www.facebook.com/profile.php?id=61591725146049" },
  { label: "X / Twitter", href: "https://x.com/theecommwizards" },
  { label: "Instagram",   href: "https://www.instagram.com/theecommwizards/" },
  { label: "LinkedIn",    href: "https://www.linkedin.com/company/ecomm-wizards" },
];

// ─── Social icons ─────────────────────────────────────────────────────────────

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591725146049",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/theecommwizards",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/theecommwizards/",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ecomm-wizards",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
];

// ─── Shared social row ────────────────────────────────────────────────────────

function SocialIcons({ center, twoCol }: { center?: boolean; twoCol?: boolean }) {
  return (
    <div className={
      twoCol
        ? "grid grid-cols-2 gap-2"
        : `flex items-center gap-2 ${center ? "justify-center" : "justify-start"}`
    }>
      {SOCIAL.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-opacity hover:opacity-75"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

// ─── Accordion nav column ─────────────────────────────────────────────────────

function FooterCol({ title, links, className = "" }: { title: string; links: { label: string; href: string }[]; className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-white/10 sm:border-b-0 lg:border-l lg:border-white/10 lg:first:border-l-0 lg:p-[10px] lg:first:pl-0 lg:h-full ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-[25px] py-[20px] text-left sm:cursor-default sm:pointer-events-none sm:px-0 sm:pb-3 sm:pt-0"
      >
        <span className="text-[20px] font-semibold text-white sm:text-[19px]">{title}</span>
        {/* + rotates to × on open — hidden sm+ */}
        <span
          className={`text-2xl font-extralight text-white/70 leading-none transition-transform duration-200 sm:hidden ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <ul
        className={`overflow-hidden transition-all duration-300 sm:max-h-none sm:overflow-visible sm:pb-6 ${
          open ? "max-h-[600px] pb-5" : "max-h-0"
        }`}
      >
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="group block px-[25px] pb-[12px] text-[14px] transition-colors sm:px-0 sm:pb-[7.5px] sm:mt-[7.5px] sm:text-[16px]"
            >
              <span className="text-white bg-clip-text group-hover:text-transparent" style={{ backgroundImage: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>{l.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-black text-white/70">

      {/* ── Mobile header — logo + CTAs — < 640px only ── */}
      <div className="sm:hidden border-b border-white/10 px-4 py-4">
        <div className="flex justify-center mb-3">
          <Link href="/">
            <Image
              src="/images/ecomm-green.svg"
              alt="Ecomm Wizards"
              width={218}
              height={57}
              className="h-[65px] w-[248px] object-cover object-[0%_58%]"
            />
          </Link>
        </div>

        <SocialIcons center />
      </div>

      {/* ── Top strip: logo (lg+) · cities · social — hidden mobile ── */}
      <div className="hidden sm:block border-b border-white/10">
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-[1320px] px-4 lg:px-6 py-5 lg:h-[97px] lg:py-0">
          <Link href="/" className="hidden md:flex shrink-0 items-center">
            <Image
              src="/images/ecomm-green.svg"
              alt="Ecomm Wizards"
              width={218}
              height={57}
              className="h-[65px] w-[248px] lg:h-[57px] lg:w-[217px] object-cover object-[0%_58%]"
            />
          </Link>
          <p className="hidden lg:block flex-1 text-center text-[15px] text-white px-[10px]">
            {CITIES.map((city, i) => (
              <span key={city}>
                {city}
                {i < CITIES.length - 1 && <span className="mx-2 text-white/30">–</span>}
              </span>
            ))}
          </p>
          <div className="flex-1 lg:hidden" />
          <div className="shrink-0">
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* ── Select a Service — desktop + tablet only (md+), complements the mobile service columns ── */}
      <div className="hidden md:block relative overflow-hidden bg-black xl:h-[351px] xl:flex xl:flex-col xl:justify-start">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 55% 45% at 50% 40%, rgba(61,199,122,0.35) 0%, rgba(61,199,122,0.15) 40%, rgba(61,199,122,0.05) 65%, transparent 80%)"}} />
        <div className="relative z-10 mx-auto w-full max-w-[1320px] p-[24px]">
          <h3 className="mb-6 text-center text-[20px] leading-[30px] font-semibold text-white">
            <Link href="/services" className="hover:underline underline-offset-4">Select a Service</Link>
          </h3>
          <div className="flex flex-wrap justify-center text-[16px]">
            {SERVICE_TAGS.map((tag) => (
              <Link
                key={tag.href + tag.label}
                href={tag.href}
                className="group inline-flex items-center justify-center rounded-md bg-white/5 border border-[rgba(255,255,255,0.08)] m-[7.5px] px-[35px] py-[5px] text-[15px] transition-colors"
              >
                <span className="text-white bg-clip-text group-hover:text-transparent" style={{ backgroundImage: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>{tag.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="border-t border-white/10 bg-black relative overflow-hidden">
        <div className="absolute inset-0" style={{background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(61,199,122,0.35) 0%, rgba(61,199,122,0.15) 40%, rgba(61,199,122,0.05) 65%, transparent 80%)"}} />
        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-[24px]">
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">

{/* Nav columns — always visible, accordion on mobile */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-x-3 md:gap-x-4 lg:gap-x-0 border-t border-white/10 sm:border-t-0">
              <FooterCol title="Company"            links={COMPANY}       className="md:pt-[10px]" />
              <FooterCol title="Design & Build"     links={DESIGN_BUILD}  className="md:hidden" />
              <FooterCol title="Optimize & Grow"    links={OPTIMIZE_GROW} className="md:hidden" />
              <FooterCol title="Migrate to Shopify" links={MIGRATE}       className="md:pt-[10px]" />
              <FooterCol title="Get Started"        links={GET_STARTED}   className="md:pt-[10px]" />
              <FooterCol title="Others"             links={OTHERS}        className="hidden md:block" />
              <FooterCol title="Socials"            links={SOCIALS}       className="hidden md:block" />
            </div>


          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="border-t border-white/10">
        <div className="relative mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 w-full max-w-[1320px] px-4 lg:px-6 py-[15px] lg:h-[65px] lg:py-0">
          <p className="text-[15px] text-white text-center w-full">
            &copy; 2026 EcommWizards. All rights reserved.
          </p>
          <ScrollToTop />
        </div>
      </div>

    </footer>
  );
}
