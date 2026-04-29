import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Build",     href: "/build" },
    { label: "Migrate",   href: "/migrate" },
    { label: "Optimize",  href: "/optimize" },
    { label: "Apps",      href: "/apps" },
  ],
  Solutions: [
    { label: "B2B",       href: "/b2b" },
    { label: "POS",       href: "/pos" },
    { label: "Marketing", href: "/marketing" },
  ],
  Company: [
    { label: "About Us",     href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog",         href: "/blog" },
    { label: "Contact",      href: "/contact" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(rgb(0,0,0) 0%, rgb(18,18,18) 60%)", color: "#d1d5db" }}>
      {/* CTA band */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="mx-auto px-5 py-12" style={{ maxWidth: "var(--container-max)" }}>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Ready to transform your ecommerce?
              </h2>
              <p className="mt-1 text-sm" style={{ color: "#7a7a7a" }}>
                Let&apos;s talk about your project — no commitment required.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold transition-all"
                style={{
                  border: "2px solid rgba(255,255,255,0.3)",
                  borderRadius: "var(--radius-full)",
                  color: "#d1d5db",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#d1d5db";
                }}
              >
                Get Started
              </Link>
              <Link
                href="/book-a-call"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all"
                style={{
                  backgroundColor: "var(--color-secondary)",
                  borderRadius: "var(--radius-full)",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-secondary-dark)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-secondary)")}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto px-5 py-14" style={{ maxWidth: "var(--container-max)" }}>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <span
                className="flex h-8 w-8 items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: "var(--color-secondary)", borderRadius: "var(--radius-md)" }}
              >
                EW
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                Ecom<span style={{ color: "var(--color-accent)" }}>Wiz</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: "#7a7a7a" }}>
              Expert ecommerce development — we build, migrate, and scale
              high-performance online stores that drive real revenue.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="transition-colors"
                  style={{ color: "#69727d" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#ffffff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#69727d")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3
                className="mb-4 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-gold)" }}
              >
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: "#7a7a7a" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#ffffff")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#7a7a7a")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div
          className="mx-auto flex flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row"
          style={{ maxWidth: "var(--container-max)" }}
        >
          <p className="text-xs" style={{ color: "#69727d" }}>
            &copy; {new Date().getFullYear()} EcomWiz. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs transition-colors"
              style={{ color: "#69727d" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#d1d5db")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#69727d")}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs transition-colors"
              style={{ color: "#69727d" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#d1d5db")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#69727d")}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
