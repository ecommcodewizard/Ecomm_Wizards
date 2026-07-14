"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Per-row delete control for the bookings table. Confirms first, calls the
// protected DELETE route, then refreshes the server-rendered list on success.
export default function DeleteBookingButton({ id, name }: { id: number; name: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function onDelete() {
    if (busy) return;
    const who = name ? `the booking with ${name}` : "this booking";
    if (!window.confirm(`Delete ${who}? This cannot be undone.`)) return;

    setBusy(true);
    try {
      const res = await fetch(`/api/admin/bookings/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Delete failed");
      }
      router.refresh();
    } catch (e) {
      window.alert(e instanceof Error ? e.message : "Could not delete this booking.");
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      className="ewa-del"
      onClick={onDelete}
      disabled={busy}
      aria-label={name ? `Delete booking with ${name}` : "Delete booking"}
    >
      {busy ? (
        "Deleting…"
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-7 0v12a1 1 0 001 1h6a1 1 0 001-1V7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Delete
        </>
      )}
    </button>
  );
}
