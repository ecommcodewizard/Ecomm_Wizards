"use client";

import { useState } from "react";

// Branded admin sign-in. Single password field (no username) — posts to
// /api/admin/login, which sets the session cookie. The `ew-admin` class triggers
// the scoped CSS that hides the public site chrome (see globals.css).
export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!password || status === "submitting") return;
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        window.location.href = "/admin/leads";
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(data?.error || "Incorrect password.");
      setStatus("error");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div
      className="ew-admin"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F4F6F9",
        padding: 24,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 380 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <span style={{ width: 9, height: 9, borderRadius: 3, background: "#2A9555", display: "inline-block" }} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#64748b" }}>
            Ecomm Wizards Admin
          </span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0f172a", margin: "0 0 22px" }}>Sign in to continue.</h1>

        <form
          onSubmit={onSubmit}
          noValidate
          style={{ background: "#fff", border: "1px solid #e8ecf1", borderRadius: 16, padding: 24, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
        >
          <label
            htmlFor="ew-pw"
            style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#64748b", marginBottom: 8 }}
          >
            Password
          </label>
          <input
            id="ew-pw"
            type="password"
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            autoComplete="current-password"
            style={{
              width: "100%",
              boxSizing: "border-box",
              height: 46,
              padding: "0 14px",
              borderRadius: 10,
              border: `1px solid ${status === "error" ? "#fca5a5" : "#d6dbe2"}`,
              fontSize: 15,
              fontFamily: "inherit",
              color: "#0f172a",
              outline: "none",
            }}
          />
          {error && <p style={{ color: "#dc2626", fontSize: 13, margin: "10px 0 0" }}>{error}</p>}
          <button
            type="submit"
            disabled={status === "submitting"}
            style={{
              width: "100%",
              marginTop: 16,
              height: 46,
              borderRadius: 99,
              border: "none",
              cursor: status === "submitting" ? "default" : "pointer",
              background: "#2A9555",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "inherit",
              opacity: status === "submitting" ? 0.7 : 1,
            }}
          >
            {status === "submitting" ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p style={{ fontSize: 12, color: "#94a3b8", margin: "16px 0 0", textAlign: "center" }}>
          This area is restricted. Unauthorized access is logged.
        </p>
      </div>
    </div>
  );
}
