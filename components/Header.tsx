"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Build",      href: "/build" },
  { label: "Migrate",    href: "/migrate" },
  { label: "Optimize",   href: "/optimize" },
  { label: "Apps",       href: "/apps" },
  { label: "B2B",        href: "/b2b" },
  { label: "POS",        href: "/pos" },
  { label: "Marketing",  href: "/marketing" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
      style={{ boxShadow: scrolled ? "var(--shadow-xs)" : "none" }}
    >
      <div
        className="mx-auto flex h-16 items-center justify-between px-5"
        style={{ maxWidth: "var(--container-max)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span
            className="flex h-8 w-8 items-center justify-center text-white font-bold text-sm"
            style={{
              backgroundColor: "var(--color-secondary)",
              borderRadius: "var(--radius-md)",
            }}
          >
            EW
          </span>
          <span className="text-lg font-bold tracking-tight" style={{ color: "var(--color-dark)" }}>
            Ecom<span style={{ color: "var(--color-secondary)" }}>Wiz</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link px-3 py-1.5 rounded-md hover:bg-[var(--color-subtle)]">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/get-started" className="btn-outline text-sm px-4 py-2">
            Get Started
          </Link>
          <Link href="/book-a-call" className="btn-primary text-sm px-4 py-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden inline-flex items-center justify-center p-2 transition-colors"
          style={{
            color: "var(--color-dark)",
            borderRadius: "var(--radius-md)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-subtle)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ borderTop: "1px solid var(--color-light)", backgroundColor: "var(--color-white)" }}
      >
        <nav className="flex flex-col px-5 pb-4 pt-2 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium transition-colors"
              style={{
                color: "var(--color-dark)",
                borderRadius: "var(--radius-md)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-subtle)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-secondary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-dark)";
              }}
            >
              {link.label}
            </Link>
          ))}
          <div
            className="mt-3 flex flex-col gap-2 pt-3"
            style={{ borderTop: "1px solid var(--color-light)" }}
          >
            <Link
              href="/get-started"
              onClick={() => setMenuOpen(false)}
              className="btn-outline w-full justify-center"
            >
              Get Started
            </Link>
            <Link
              href="/book-a-call"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              Book a Call
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
