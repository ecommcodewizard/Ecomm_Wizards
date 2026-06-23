"use client";

import { useState } from "react";

/**
 * Where audit form submissions are sent.
 * Leave empty to run in "UI-ready" mode (the form validates and shows the
 * success state without sending anywhere). To go live, paste a Formspree
 * endpoint (https://formspree.io/f/xxxx) or your own /api route here. That is
 * the only change needed to start capturing leads.
 */
const FORM_ENDPOINT = "/api/lead";

const SITUATION_OPTIONS = [
  "I want to redo everything, and need help!",
  "Love my tech, hate my layout. The design feels...meh",
  "Our site is slow, nothing talks to each other!",
  "I need a partner who gets it done.",
  "Other",
];

const SOURCE_OPTIONS = [
  "Google Search",
  "Facebook / Instagram",
  "Referred",
  "LinkedIn",
  "Chat GPT / AI",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";
type Errors = { name?: string; email?: string; phone?: string; company?: string; url?: string; source?: string; situation?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function looksLikeUrl(v: string) {
  const s = v.trim();
  if (/\s/.test(s)) return false;
  return /\.[a-z]{2,}/i.test(s);
}

const Req = () => <span style={{ color: "#ef4444" }}> *</span>;

export default function AuditForm({ formId = "audit" }: { formId?: string }) {
  const [values, setValues] = useState({
    name: "", email: "", phone: "", company: "", url: "", situation: [] as string[], source: "", _gotcha: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const toggleSituation = (opt: string) =>
    setValues((v) => ({ ...v, situation: v.situation.includes(opt) ? v.situation.filter((s) => s !== opt) : [...v.situation, opt] }));

  function validate() {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email.trim())) next.email = "Please enter a valid email.";
    if (!values.phone.trim()) next.phone = "Please enter your phone number.";
    else if (values.phone.replace(/[^0-9]/g, "").length < 7) next.phone = "Please enter a valid phone number.";
    if (!values.company.trim()) next.company = "Please enter your company name.";
    if (!values.url.trim()) next.url = "Please enter your store URL.";
    else if (!looksLikeUrl(values.url)) next.url = "Please enter a valid store URL.";
    if (values.situation.length === 0) next.situation = "Please select at least one option.";
    if (!values.source) next.source = "Please select an option.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    if (values._gotcha) { setStatus("success"); return; } // bot trap
    setStatus("submitting");
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        await new Promise((r) => setTimeout(r, 900)); // UI-ready mode
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="aud-form-card" style={{ textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(97,206,112,0.15)", display: "inline-flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12l4.5 4.5L19 7" stroke="#2A9555" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: "#000", margin: "0 0 8px" }}>Your request is in.</h3>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#334155", lineHeight: 1.6, margin: "0 0 20px" }}>
          Check your inbox. Your personalized audit video and prioritized action plan land within 48 hours.
        </p>
        <div style={{ textAlign: "left", borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 18 }}>
          {[
            "We confirm your request within a few hours.",
            "A Shopify expert reviews your store by hand, not a tool.",
            "Your video walkthrough and action plan arrive within 48 hours.",
          ].map((s, i) => (
            <div key={s} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: i < 2 ? 12 : 0 }}>
              <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: "#000", color: "#fff", fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>{i + 1}</span>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "#334155", lineHeight: 1.5, margin: 0 }}>{s}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form className="aud-form-card" onSubmit={onSubmit} noValidate>
      <div className="aud-field-row">
        <div className="aud-field">
          <label htmlFor={`${formId}-name`} className="aud-label">Full Name<Req /></label>
          <input id={`${formId}-name`} name="name" type="text" value={values.name} onChange={set("name")} placeholder="Jane Smith"
            className={`aud-input${errors.name ? " aud-input--err" : ""}`} aria-invalid={!!errors.name} />
          {errors.name && <span className="aud-err">{errors.name}</span>}
        </div>
        <div className="aud-field">
          <label htmlFor={`${formId}-email`} className="aud-label">Email<Req /></label>
          <input id={`${formId}-email`} name="email" type="email" value={values.email} onChange={set("email")} placeholder="jane@store.com"
            className={`aud-input${errors.email ? " aud-input--err" : ""}`} aria-invalid={!!errors.email} />
          {errors.email && <span className="aud-err">{errors.email}</span>}
        </div>
      </div>

      <div className="aud-field-row">
        <div className="aud-field">
          <label htmlFor={`${formId}-phone`} className="aud-label">Phone Number<Req /></label>
          <input id={`${formId}-phone`} name="phone" type="tel" inputMode="tel" value={values.phone} onChange={set("phone")} placeholder="+1 555 123 4567"
            className={`aud-input${errors.phone ? " aud-input--err" : ""}`} aria-invalid={!!errors.phone} />
          {errors.phone && <span className="aud-err">{errors.phone}</span>}
        </div>
        <div className="aud-field">
          <label htmlFor={`${formId}-company`} className="aud-label">Company Name<Req /></label>
          <input id={`${formId}-company`} name="company" type="text" value={values.company} onChange={set("company")} placeholder="Your company"
            className={`aud-input${errors.company ? " aud-input--err" : ""}`} aria-invalid={!!errors.company} />
          {errors.company && <span className="aud-err">{errors.company}</span>}
        </div>
      </div>

      <div className="aud-field">
        <label htmlFor={`${formId}-url`} className="aud-label">Shopify Store URL<Req /></label>
        <input id={`${formId}-url`} name="url" type="text" inputMode="url" value={values.url} onChange={set("url")} placeholder="yourstore.com"
          className={`aud-input${errors.url ? " aud-input--err" : ""}`} aria-invalid={!!errors.url} />
        {errors.url && <span className="aud-err">{errors.url}</span>}
      </div>

      <div className="aud-field">
        <span className="aud-label">Which of the following best describes your situation?<Req /></span>
        <div className="aud-checks">
          {SITUATION_OPTIONS.map((opt) => (
            <label key={opt} className="aud-check">
              <input type="checkbox" checked={values.situation.includes(opt)} onChange={() => toggleSituation(opt)} />
              <span>{opt}</span>
            </label>
          ))}
        </div>
        {errors.situation && <span className="aud-err">{errors.situation}</span>}
      </div>

      <div className="aud-field">
        <label htmlFor={`${formId}-source`} className="aud-label">How Did You Find Us?<Req /></label>
        <select id={`${formId}-source`} name="source" value={values.source} onChange={set("source")}
          className={`aud-input${errors.source ? " aud-input--err" : ""}`} aria-invalid={!!errors.source}>
          <option value="">Please Select</option>
          {SOURCE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
        {errors.source && <span className="aud-err">{errors.source}</span>}
      </div>

      {/* honeypot */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={values._gotcha} onChange={set("_gotcha")}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden />

      {status === "error" && (
        <p className="aud-err" style={{ marginBottom: 12 }}>Something went wrong. Please try again, or email us directly.</p>
      )}

      <button type="submit" className="aud-submit" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span className="aud-spinner" aria-hidden /> Sending...
          </span>
        ) : (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>Get My Free Audit
            <svg width="16" height="12" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        )}
      </button>
    </form>
  );
}
