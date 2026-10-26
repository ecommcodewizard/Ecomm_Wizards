"use client";

import { usePathname } from "next/navigation";

// Sidebar nav for the admin area. Client component so the active item can be
// derived from the current path (the layout is a server component).
const ITEMS = [
  {
    href: "/admin/leads",
    label: "Leads",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/admin/bookings",
    label: "Call Bookings",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M8 3v3m8-3v3M4 8h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1zM9 13l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/admin/tasks",
    label: "Tasks",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 5h5v14H4zM10.5 5h5v9h-5zM17 5h3v11h-3z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="ewa-nav">
      {ITEMS.map((it) => {
        const active = pathname === it.href || (pathname?.startsWith(`${it.href}/`) ?? false);
        return (
          <a
            key={it.href}
            href={it.href}
            className={`ewa-navitem${active ? " ewa-navitem--active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {it.icon}
            {it.label}
          </a>
        );
      })}
    </nav>
  );
}
