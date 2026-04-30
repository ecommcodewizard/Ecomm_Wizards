"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// ─── Nav structure ────────────────────────────────────────────────────────────

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

const NAV: NavItem[] = [
  {
    label: "Build",
    children: [
      { label: "New Shopify Store",     href: "/shopify-store-development",     description: "Launch a high-converting store from scratch" },
      { label: "Theme Development",     href: "/shopify-theme-development",     description: "Custom Liquid themes built to your brand" },
      { label: "Shopify 2.0",           href: "/shopify-2-0-development",       description: "Leverage the latest Shopify architecture" },
      { label: "Shopify Plus",          href: "/shopify-plus-development",      description: "Enterprise-grade builds on Plus" },
      { label: "Headless Shopify",      href: "/headless-shopify-agency",       description: "Next.js / Hydrogen storefronts" },
      { label: "Figma to Shopify",      href: "/figma-to-shopify-conversion",   description: "Pixel-perfect design → production" },
      { label: "UX & UI Design",        href: "/shopify-ux-and-ui-design",      description: "Design that converts" },
      { label: "Landing Page Design",   href: "/shopify-landing-page-design",   description: "Campaign pages that drive sales" },
    ],
  },
  {
    label: "Migrate",
    children: [
      { label: "Migration Overview",    href: "/migration",                     description: "Zero data loss, zero downtime migration" },
      { label: "WooCommerce → Shopify", href: "/woocommerce-to-shopify",        description: "Move your WooCommerce store" },
      { label: "BigCommerce → Shopify", href: "/bigcommerce-to-shopify",        description: "Seamless BigCommerce migration" },
      { label: "Magento → Shopify",     href: "/magento-to-shopify",            description: "Escape Magento complexity" },
      { label: "Amazon → Shopify",      href: "/amazon-to-shopify",             description: "Own your storefront & customer data" },
      { label: "Prestashop → Shopify",  href: "/prestashop-to-shopify",         description: "Full catalog & order migration" },
      { label: "Salesforce → Shopify",  href: "/salesforce-to-shopify",         description: "Commerce Cloud exit strategy" },
      { label: "Liquid → Hydrogen",     href: "/liquid-to-shopify-hydrogen",    description: "Modernise with headless architecture" },
    ],
  },
  {
    label: "Optimize",
    children: [
      { label: "Speed Optimization",    href: "/shopify-speed-optimization",                      description: "Sub-2s load times that lift revenue" },
      { label: "Store Audit",           href: "/shopify-store-audit",                             description: "Expert review of your entire store" },
      { label: "CRO Agency",            href: "/shopify-conversion-rate-optimization-cro-agency", description: "Turn more visitors into buyers" },
      { label: "A/B Testing",           href: "/a-b-testing",                                    description: "Data-driven experimentation" },
      { label: "Analytics & Tracking",  href: "/shopify-analytics-and-tracking-setup",            description: "GA4, GTM, pixels — done right" },
      { label: "SEO Agency",            href: "/shopify-seo-agency",                              description: "Organic growth for Shopify stores" },
      { label: "Maintenance & Support", href: "/shopify-maintenance-and-support",                 description: "Ongoing care for your store" },
    ],
  },
  {
    label: "Apps",
    children: [
      { label: "Custom App Development",   href: "/shopify-app-development",               description: "Private & public Shopify apps" },
      { label: "Mobile App Development",   href: "/shopify-mobile-app-development",        description: "iOS & Android shopping apps" },
      { label: "App Setup & Optimisation", href: "/shopify-app-setup-and-app-optimization",description: "Get the most from your app stack" },
      { label: "Shopify Integrations",     href: "/shopify-integrations-erp-crm-3pl-etc",  description: "ERP, CRM, 3PL & more" },
    ],
  },
  { label: "B2B",  href: "/shopify-b2b-store-setup" },
  { label: "POS",  href: "/shopify-pos-setup" },
  {
    label: "Marketing",
    children: [
      { label: "Shopify SEO",           href: "/shopify-seo-agency",                              description: "Rank higher, earn more organic traffic" },
      { label: "CRO Agency",            href: "/shopify-conversion-rate-optimization-cro-agency", description: "Systematic conversion improvements" },
      { label: "Landing Page Design",   href: "/shopify-landing-page-design",                    description: "Campaign pages built to convert" },
      { label: "Analytics & Tracking",  href: "/shopify-analytics-and-tracking-setup",            description: "Full-funnel measurement setup" },
    ],
  },
];

// ─── Chevron ──────────────────────────────────────────────────────────────────

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      style={{ color: "var(--color-gold)" }}
      fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

// ─── Desktop dropdown ─────────────────────────────────────────────────────────

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href ?? "/"}
        className="group flex h-full flex-col items-center justify-center font-medium text-white transition-colors hover:text-[var(--color-gold)] header-nav-item"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <span>{item.label}</span>
        <span className="mt-1 block h-[2px] w-0 rounded-full bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
      </Link>
    );
  }

  const cols = item.children.length > 5 ? 2 : 1;

  return (
    <div ref={ref} className="relative flex h-full items-stretch">
      <a
        role="link"
        tabIndex={0}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => e.key === "Enter" && setOpen((o) => !o)}
        className="group flex cursor-pointer flex-col items-center justify-center font-medium text-white transition-colors hover:text-[var(--color-gold)] focus:outline-none header-nav-item"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        aria-expanded={open}
      >
        <span>{item.label}</span>
        <span className="mt-1 block h-[2px] w-0 rounded-full bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
      </a>

      {open && (
        <div
          className={`absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 rounded-xl border border-white/10 bg-[#111111] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)] ${
            cols === 2 ? "w-[520px]" : "w-60"
          }`}
        >
          <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-white/10 bg-[#111111]" />
          <div className={cols === 2 ? "grid grid-cols-2 gap-x-2" : ""}>
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-[var(--color-gold)]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/5 text-white/50">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span>
                  <span className="block font-medium text-white/90">{child.label}</span>
                  {child.description && (
                    <span className="block text-xs text-white/40">{child.description}</span>
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

// ─── Mobile accordion item ────────────────────────────────────────────────────

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href ?? "/"}
        onClick={onClose}
        className="block rounded-lg px-4 py-3.5 text-base font-semibold text-white/80
          hover:bg-white/5 hover:text-[var(--color-gold)] transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-base
          font-semibold text-white/80 hover:bg-white/5 hover:text-[var(--color-gold)] transition-colors"
      >
        {item.label}
        <ChevronDown open={open} />
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px]" : "max-h-0"}`}>
        <div className="ml-4 mt-1 border-l-2 border-[var(--color-gold)]/30 pl-4 pb-2 space-y-0.5">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block rounded-md px-3 py-2.5 text-sm text-white/60
                hover:bg-white/5 hover:text-[var(--color-gold)] transition-colors"
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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 bg-[#000000] transition-all duration-300 ${
          scrolled ? "border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.6)]" : "border-b border-white/5"
        }`}
      >
        <div
          className="mx-auto flex w-full items-center"
          style={{ maxWidth: "1320px", fontFamily: "'Poppins', sans-serif" }}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            {/* Desktop logo */}
            <div className="hidden lg:flex items-center header-desktop-logo">
              <Image
                src="/images/cropped-cropped-ecomm-golden.png"
                alt="Ecomm Wizards"
                width={227}
                height={60}
                className="object-contain"
                style={{ width: "227px", height: "60px" }}
                priority
              />
            </div>
            {/* Mobile / tablet logo */}
            <div className="flex lg:hidden items-center header-mobile-logo">
              <Image
                src="/images/cropped-cropped-ecomm-golden.png"
                alt="Ecomm Wizards"
                width={150}
                height={40}
                className="object-contain"
                style={{ height: "38px", width: "auto" }}
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex flex-1 items-stretch justify-start header-desktop-nav">
            {NAV.map((item) => (
              <DesktopDropdown key={item.label} item={item} />
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex shrink-0 items-center gap-2 xl:gap-3" style={{ padding: "8px 0px 8px 8px" }}>
            <Link
              href="/free-shopify-store-audit"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-gold)] text-white transition-all hover:bg-white hover:text-[#000000] whitespace-nowrap"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", padding: "10px 18px", height: "42px" }}
            >
              Get Started
            </Link>
            <Link
              href="/book-shopify-consultation"
              className="inline-flex items-center justify-center rounded-full border-2 border-transparent bg-white text-[#000000] transition-all hover:border-[var(--color-gold)] whitespace-nowrap"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", padding: "10px 18px", height: "42px" }}
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="lg:hidden flex items-center gap-2 ml-auto pr-4">
            <Link
              href="/book-shopify-consultation"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] text-black font-semibold whitespace-nowrap transition-all hover:opacity-90 header-mobile-cta"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Book a Call
            </Link>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
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
      />

      {/* Drawer — full width on phones, 340px on tablets */}
      <div
        className={`fixed inset-y-0 right-0 z-40 flex flex-col bg-[#0f0f0f] shadow-2xl lg:hidden
          w-full sm:w-[340px] transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex h-[70px] items-center justify-between border-b border-white/10 px-5">
          <Image
            src="/images/cropped-cropped-ecomm-golden.png"
            alt="Ecomm Wizards"
            width={140}
            height={37}
            className="object-contain"
            style={{ height: "34px", width: "auto" }}
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60
              hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
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
        <div className="border-t border-white/10 p-5 space-y-3">
          <Link
            href="/free-shopify-store-audit"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center rounded-full border-2 border-[var(--color-gold)] text-white font-semibold transition-all hover:bg-[var(--color-gold)] hover:text-black"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", height: "48px" }}
          >
            Get Started
          </Link>
          <Link
            href="/book-shopify-consultation"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-[var(--color-gold)] text-black font-semibold transition-all hover:opacity-90"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", height: "48px" }}
          >
            Book a Call
          </Link>
        </div>
      </div>
    </>
  );
}
