"use client";

export default function LogoutButton() {
  async function logout() {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch {
      // ignore — redirect regardless
    }
    window.location.href = "/admin/login";
  }

  return (
    <button type="button" onClick={logout} className="ewa-logout">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M15 12H3m0 0l4-4m-4 4l4 4M13 4h6a1 1 0 011 1v14a1 1 0 01-1 1h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Log out
    </button>
  );
}
