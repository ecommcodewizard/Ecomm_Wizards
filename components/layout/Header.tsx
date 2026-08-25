"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavChild {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

// ─── Nav data ─────────────────────────────────────────────────────────────────

const NAV: NavItem[] = [
  {
    label: "Build",
    children: [
      { label: "Custom Shopify Theme Design", href: "/services/shopify-theme-development",   description: "Setup and customization for new or existing stores, including custom theme development" },
      { label: "New Store Development",        href: "/services/shopify-store-development",    description: "Launch a high-converting Shopify store, built from scratch" },
      { label: "Convert any Figma to Shopify", href: "/services/figma-to-shopify-conversion", description: "Submit your Figma files, get a free quote, and we build it pixel for pixel" },
      { label: "Free Shopify Concept Design",  href: "/services/shopify-ux-and-ui-design",    description: "Interfaces and experiences designed around how your customers shop" },
      { label: "Ecommerce Agency",             href: "/services/ecommerce-agency",            description: "One team that builds the store and brings people to it" },
      { label: "Shopify Development Agency",   href: "/services/shopify-development-agency",   description: "Custom builds, Shopify Plus, and migrations from a senior team" },
      { label: "Shopify 2.0 Development",      href: "/services/shopify-2-0-development",      description: "Modern Online Store 2.0 sections and architecture" },
      { label: "Shopify Plus Development",     href: "/services/shopify-plus-development",     description: "Enterprise Shopify Plus builds and custom features" },
      { label: "Headless Shopify Agency",      href: "/services/headless-shopify-agency",     description: "Hydrogen and headless commerce builds" },
      { label: "ERP Integrations",             href: "/services/erp-connections-to-shopify",  description: "Connect NetSuite, Microsoft Dynamics, SAP, and more with real-time sync" },
    ],
  },
  {
    label: "Migrate",
    children: [
      { label: "Migration Overview",    href: "/services/migration",                                description: "Zero data loss, zero downtime migration" },
      { label: "WooCommerce → Shopify", href: "/services/migration/woocommerce-to-shopify",         description: "Move your WooCommerce store" },
      { label: "BigCommerce → Shopify", href: "/services/migration/bigcommerce-to-shopify",         description: "Seamless BigCommerce migration" },
      { label: "Magento → Shopify",     href: "/services/migration/magento-to-shopify",             description: "Escape Magento complexity" },
      { label: "Amazon → Shopify",      href: "/services/migration/amazon-to-shopify",              description: "Own your storefront & customer data" },
      { label: "Prestashop → Shopify",  href: "/services/migration/prestashop-to-shopify",          description: "Full catalog & order migration" },
      { label: "Salesforce → Shopify",  href: "/services/migration/salesforce-to-shopify",          description: "Commerce Cloud exit strategy" },
      { label: "Liquid → Hydrogen",     href: "/services/migration/liquid-to-shopify-hydrogen",     description: "Modernise with headless architecture" },
    ],
  },
  {
    label: "Optimize",
    children: [
      { label: "Speed Optimization",    href: "/services/shopify-speed-optimization",             description: "Sub-2s load times that lift revenue" },
      { label: "Store Audit",           href: "/services/shopify-store-audit",                    description: "Expert review of your entire store" },
      { label: "CRO Agency",            href: "/services/shopify-cro-agency", description: "Turn more visitors into buyers" },
      { label: "A/B Testing",           href: "/services/a-b-testing",                           description: "Data-driven experimentation" },
      { label: "Cart Gamification",     href: "/services/shopify-cart-gamification",             description: "Lift average order value in the cart" },
      { label: "Analytics & Tracking",  href: "/services/shopify-analytics-and-tracking-setup",  description: "GA4, GTM, pixels — done right" },
      { label: "SEO Agency",            href: "/services/shopify-seo-agency",                     description: "Organic growth for Shopify stores" },
      { label: "Ecommerce SEO Agency",  href: "/services/ecommerce-seo-agency",                   description: "Find what is costing you rankings, on any platform" },
      { label: "Agentic Commerce",      href: "/services/shopify-agentic-commerce",               description: "Get found & bought by AI assistants" },
      { label: "Maintenance & Support", href: "/services/shopify-maintenance-and-support",                 description: "Ongoing care for your store" },
    ],
  },
  {
    label: "Apps",
    children: [
      { label: "Custom App Development",   href: "/services/shopify-app-development",       description: "Private & public Shopify apps" },
      { label: "App Setup & Optimisation", href: "/services/shopify-app-setup-and-app-optimization", description: "Get the most from your app stack" },
      { label: "Shopify Integrations",     href: "/services/shopify-integration-services",   description: "ERP, CRM, 3PL & more" },
    ],
  },
  { label: "B2B", href: "/services/shopify-b2b-store-setup" },
  { label: "POS", href: "/services/shopify-pos-setup" },
  {
    label: "Marketing",
    children: [
      { label: "Ecommerce Marketing Agency", href: "/services/ecommerce-marketing-agency",       description: "Which channel to fix first, and which ones will not help" },
      { label: "Shopify SEO",          href: "/services/shopify-seo-agency",                     description: "Rank higher, earn more organic traffic" },
      { label: "Ecommerce SEO",        href: "/services/ecommerce-seo-agency",                   description: "Catalog SEO on Shopify, Magento, Woo, or BigCommerce" },
      { label: "CRO Agency",           href: "/services/shopify-cro-agency", description: "Systematic conversion improvements" },
      { label: "Landing Page Design",  href: "/services/shopify-landing-page-design",                    description: "Campaign pages built to convert" },
      { label: "Analytics & Tracking", href: "/services/shopify-analytics-and-tracking-setup",  description: "Full-funnel measurement setup" },
      { label: "Creative Strategy",    href: "/services/creative-strategy",                      description: "Performance ad creative for Meta & Google" },
      { label: "Klaviyo Audit",        href: "/services/klaviyo-audit",                          description: "Flows, deliverability & email revenue review" },
    ],
  },
];

// ─── ChevronDown ──────────────────────────────────────────────────────────────

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 text-gold transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

// ─── DesktopDropdown — opens on hover ────────────────────────────────────────

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  function onEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function onLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }

  if (!item.children) {
    return (
      <Link
        href={item.href ?? "/"}
        className="group flex h-full flex-col items-center justify-center px-[10px] xl:px-4 text-sm xl:text-md font-medium transition-colors"
      >
        <span className="text-white bg-clip-text group-hover:text-transparent" style={{ backgroundImage: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>{item.label}</span>
        <span className="mt-1 block h-[2px] w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-full" />
      </Link>
    );
  }

  const cols = item.children.length > 5 ? 2 : 1;

  return (
    <div
      className="relative flex h-full items-stretch"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button
        type="button"
        className="group flex h-full cursor-default flex-col items-center justify-center px-[10px] xl:px-4 text-sm xl:text-md font-medium transition-colors focus:outline-none"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="text-white bg-clip-text group-hover:text-transparent" style={{ backgroundImage: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>{item.label}</span>
        <span className="mt-1 block h-[2px] w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-full" />
      </button>

      {open && (
        <div
          className={`absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 rounded-xl border border-white/10 bg-[#111111] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)] ${
            cols === 2 ? "w-[640px]" : "w-60"
          }`}
        >
          <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-white/10 bg-[#111111]" />
          <div className={cols === 2 ? "grid grid-cols-2 gap-x-2" : ""}>
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="group flex items-start gap-3 rounded-md pt-[18px] pr-[24px] pb-[20px] pl-[24px] text-[16px] text-white/70 transition-colors hover:bg-white/5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-white/50 mr-[-2px]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span>
                  <span className="block font-medium text-white/90 text-[14px] mb-[4px] bg-clip-text group-hover:text-transparent" style={{ backgroundImage: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>{child.label}</span>
                  {child.description && (
                    <span className="block text-[13px] text-white/40">{child.description}</span>
                  )}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MobileNavItem — accordion on tap ────────────────────────────────────────

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href ?? "/"}
        onClick={onClose}
        className="block rounded-lg px-4 py-3.5 text-base font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-base font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
      >
        {item.label}
        <ChevronDown open={open} />
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px]" : "max-h-0"}`}>
        <div className="ml-4 mt-1 border-l-2 border-gold/30 pl-4 pb-2 space-y-0.5">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block rounded-md px-3 py-2.5 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-gold"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // On the ads landing page, Book a Call scrolls to the on-page booking
  // section instead of navigating away (the anchor only exists there).
  const pathname = usePathname();
  const bookCallHref = pathname === "/services/shopify-development-agency" ? "#book-a-call" : "/book-shopify-consultation";
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ── Bar ── */}
      <header
        className={`fixed inset-x-0 top-0 z-40 bg-black transition-all duration-300 ${
          scrolled ? "border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.6)]" : "border-b border-white/5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1320px] items-center px-4 lg:px-6 h-[100px] sm:h-[70px] md:h-[100px] lg:h-[86px] xl:h-[96px]">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/images/ecomm-green.svg"
              unoptimized
              alt="Ecomm Wizards"
              width={227}
              height={60}
              className="h-[89px] w-[284px] object-cover object-[0%_58%] sm:h-[65px] sm:w-[263px] sm:object-cover sm:object-[0%_65%] md:h-[69px] md:w-[263px] md:object-cover md:object-[0%_58%] lg:h-[62px] lg:w-[236px] lg:object-cover lg:object-[0%_58%] xl:h-[70px] xl:w-[267px]"
            />
          </Link>

          {/* Desktop nav — lg+ */}
          <nav className="hidden lg:flex flex-1 items-stretch h-full justify-center xl:justify-end xl:pr-8">
            {NAV.map((item) => (
              <DesktopDropdown key={item.label} item={item} />
            ))}
          </nav>

          {/* Desktop CTAs — lg+ */}
          <div className="hidden lg:flex shrink-0 items-center gap-2 xl:gap-3 pl-3">
            <span className="inline-flex p-[2px] rounded-full shrink-0" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/free-shopify-store-audit"
                className="inline-flex items-center justify-center rounded-full bg-black text-white transition-all hover:bg-white hover:text-black whitespace-nowrap text-sm xl:text-sm2 px-4 xl:px-6 h-[44px] xl:h-[50px]"
              >
                Get Started
              </Link>
            </span>
            <Link
              href={bookCallHref}
              className="group inline-flex items-center justify-center rounded-full border-2 border-transparent bg-white text-black transition-all hover:border-gold whitespace-nowrap text-sm xl:text-sm2 px-4 xl:px-6 h-[44px] xl:h-[50px]"
            >
              <span className="bg-clip-text group-hover:text-transparent" style={{ backgroundImage: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>Book a Call</span>
            </Link>
          </div>

          {/* Mobile / tablet right side — hidden at lg+ */}
          <div className="flex lg:hidden items-center gap-3 ml-auto pr-2">

            {/* Both CTAs — md and up only */}
            <span className="hidden md:inline-flex p-[2px] rounded-full shrink-0" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/free-shopify-store-audit"
                className="inline-flex items-center justify-center rounded-full bg-black text-white whitespace-nowrap transition-all hover:bg-white hover:text-black font-semibold text-sm px-4 h-[42px]"
              >
                Get Started
              </Link>
            </span>
            <Link
              href={bookCallHref}
              className="group hidden md:inline-flex items-center justify-center rounded-full bg-white text-black border-2 border-transparent whitespace-nowrap transition-all hover:border-gold font-semibold text-sm px-4 h-[42px]"
            >
              <span className="bg-clip-text group-hover:text-transparent" style={{ backgroundImage: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>Book a Call</span>
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              className="flex h-[27px] w-[45px] sm:h-[29px] sm:w-[29px] items-center justify-center rounded text-white transition-colors hover:bg-white/10 focus:outline-none"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <span className="flex flex-col gap-y-[4px]" aria-hidden="true">
                  <span className="block h-[1px] w-[29px] bg-white" />
                  <span className="block h-[1px] w-[29px] bg-white" />
                  <span className="block h-[1px] w-[29px] bg-white" />
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile menu ── */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer — full-width on mobile, 340 px on sm+ */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        inert={!mobileOpen}
        className={`fixed inset-y-0 right-0 z-40 flex flex-col bg-[#0f0f0f] shadow-2xl lg:hidden w-full sm:w-[340px] transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex h-[100px] sm:h-[70px] md:h-[100px] items-center justify-between border-b border-white/10 px-4 sm:px-[20px]">
          <Image
            src="/images/ecomm-green.svg"
            unoptimized
            alt="Ecomm Wizards"
            width={140}
            height={37}
            className="h-[64px] w-[245px] object-cover object-[0%_58%]"
          />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {NAV.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              onClose={() => setMobileOpen(false)}
            />
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div className="border-t border-white/10 p-4 sm:p-[20px] space-y-3">
          <Link
            href="/free-shopify-store-audit"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center rounded-full border-2 border-gold text-white font-semibold transition-all hover:bg-gold hover:text-black text-sm2 h-[48px]"
          >
            Get Started
          </Link>
          <Link
            href={bookCallHref}
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-gold text-black font-semibold transition-all hover:opacity-90 text-sm2 h-[48px]"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </>
  );
}
