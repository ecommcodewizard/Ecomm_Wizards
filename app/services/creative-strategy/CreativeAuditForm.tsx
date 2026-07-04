"use client";

import { useState } from "react";

// Free creative audit form for the Creative Strategy lander. Posts to the shared
// /api/lead pipeline as a "creative-audit" lead (mapped onto existing columns).
const FORM_ENDPOINT = "/api/lead";

const SPEND_OPTIONS = ["Under $5k / mo", "$5k - $25k / mo", "$25k - $100k / mo", "$100k+ / mo"];
const PLATFORM_OPTIONS = ["Meta (Facebook / Instagram)", "Google", "Meta and Google", "TikTok", "Other"];
const CHALLENGE_OPTIONS = [
  "My ads have fatigued or plateaued",
  "We can't produce enough creative",
  "The creative just isn't converting",
  "We have no video or UGC",
  "Scaling spend, need fresh angles",
];

type Status = "idle" | "submitting" | "success" | "error";
type Errors = { name?: string; email?: string; budget?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const Req = () => <span style={{ color: "#ff6b6b" }}> *</span>;

export default function CreativeAuditForm() {
  const [values, setValues] = useState({
    name: "", email: "", company: "", url: "", budget: "", services: "", situation: "", _gotcha: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  function validate() {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email.trim())) next.email = "Please enter a valid email.";
    if (!values.budget) next.budget = "Please select your monthly ad spend.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    if (values._gotcha) { setStatus("success"); return; } // bot trap
    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          type: "creative-audit",
          name: values.name,
          email: values.email,
          company: values.company,
          url: values.url,
          budget: values.budget,
          services: values.services,
          situation: values.situation ? [values.situation] : [],
          source: "Creative Strategy Lander",
          _gotcha: values._gotcha,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="csf-card csf-card--success">
        <div className="csf-success-check">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12l4.5 4.5L19 7" stroke="#2A9555" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h3 className="csf-success-h">Your creative audit is on its way.</h3>
        <p className="csf-success-p">Check your inbox. A senior creative strategist reviews your ads by hand, then sends a teardown and a prioritized action plan within 48 hours.</p>
        <div className="csf-success-steps">
          {[
            "We confirm your request within a few hours.",
            "A strategist reviews your ads and account, not a tool.",
            "Your creative teardown and action plan arrive within 48 hours.",
          ].map((s, i) => (
            <div key={s} className="csf-success-step">
              <span className="csf-success-num">{i + 1}</span>
              <p>{s}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form className="csf-card" onSubmit={onSubmit} noValidate>
      <div className="csf-row">
        <div className="csf-field">
          <label htmlFor="csf-name" className="csf-label">Full Name<Req /></label>
          <input id="csf-name" name="name" type="text" value={values.name} onChange={set("name")} placeholder="Jane Smith"
            className={`csf-input${errors.name ? " csf-input--err" : ""}`} aria-invalid={!!errors.name} />
          {errors.name && <span className="csf-err">{errors.name}</span>}
        </div>
        <div className="csf-field">
          <label htmlFor="csf-email" className="csf-label">Work Email<Req /></label>
          <input id="csf-email" name="email" type="email" value={values.email} onChange={set("email")} placeholder="jane@brand.com"
            className={`csf-input${errors.email ? " csf-input--err" : ""}`} aria-invalid={!!errors.email} />
          {errors.email && <span className="csf-err">{errors.email}</span>}
        </div>
      </div>

      <div className="csf-row">
        <div className="csf-field">
          <label htmlFor="csf-company" className="csf-label">Brand / Store</label>
          <input id="csf-company" name="company" type="text" value={values.company} onChange={set("company")} placeholder="Your brand"
            className="csf-input" />
        </div>
        <div className="csf-field">
          <label htmlFor="csf-url" className="csf-label">Store or Product URL</label>
          <input id="csf-url" name="url" type="text" inputMode="url" value={values.url} onChange={set("url")} placeholder="yourstore.com"
            className="csf-input" />
        </div>
      </div>

      <div className="csf-row">
        <div className="csf-field">
          <label htmlFor="csf-budget" className="csf-label">Monthly Ad Spend<Req /></label>
          <select id="csf-budget" name="budget" value={values.budget} onChange={set("budget")}
            className={`csf-input${errors.budget ? " csf-input--err" : ""}`} aria-invalid={!!errors.budget}>
            <option value="">Please select</option>
            {SPEND_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
          {errors.budget && <span className="csf-err">{errors.budget}</span>}
        </div>
        <div className="csf-field">
          <label htmlFor="csf-services" className="csf-label">Primary Ad Platform</label>
          <select id="csf-services" name="services" value={values.services} onChange={set("services")} className="csf-input">
            <option value="">Please select</option>
            {PLATFORM_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div className="csf-field">
        <label htmlFor="csf-situation" className="csf-label">Biggest Creative Challenge</label>
        <select id="csf-situation" name="situation" value={values.situation} onChange={set("situation")} className="csf-input">
          <option value="">Please select</option>
          {CHALLENGE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>

      {/* honeypot */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={values._gotcha} onChange={set("_gotcha")}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden />

      {status === "error" && <p className="csf-err csf-err--form">Something went wrong. Please try again, or email us directly.</p>}

      <button type="submit" className="csf-submit" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <span className="csf-submit-inner"><span className="csf-spinner" aria-hidden /> Sending...</span>
        ) : (
          <span className="csf-submit-inner">Get my free creative audit
            <svg width="16" height="12" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        )}
      </button>
      <p className="csf-fineprint">No spam. A real human replies within 24 hours.</p>
    </form>
  );
}
