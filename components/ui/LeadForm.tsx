"use client";

import { useEffect, useState } from "react";

// Embedded lead form for the geo programme conversion block. Posts to the shared
// /api/lead pipeline as a "contact" lead with the landing page path attached
// for attribution. Six fields: name, work email, company, website URL (the
// qualifying field), budget range, and the bottleneck question (see below).
//
// Anti-spam: a hidden honeypot (_gotcha) plus a mount timestamp (ts). The API
// drops submissions where ts is missing or under 3s old.

const FORM_ENDPOINT = "/api/lead";

const DEFAULT_BUDGETS = ["Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000 - $100,000", "$100,000+"];

type Status = "idle" | "submitting" | "success" | "error";
type Errors = { name?: string; email?: string; company?: string; url?: string; budget?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const Req = () => <span className="glf-req" aria-hidden> *</span>;

export interface LeadFormProps {
  /** Path of the page the form is rendered on, e.g. "/services/ecommerce-agency". */
  landingPage: string;
  budgetBands?: string[];
  idPrefix?: string;
  submitLabel?: string;
}

export default function LeadForm({ landingPage, budgetBands, idPrefix = "glf", submitLabel = "Get in touch" }: LeadFormProps) {
  const bands = budgetBands ?? DEFAULT_BUDGETS;
  const [values, setValues] = useState({
    name: "", email: "", company: "", url: "", budget: "", details: "", _gotcha: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [ts, setTs] = useState<number | null>(null);

  useEffect(() => {
    setTs(Date.now());
  }, []);

  const id = (k: string) => `${idPrefix}-${k}`;
  const set = (k: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [k]: e.target.value }));

  function validate() {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email.trim())) next.email = "Please enter a valid email.";
    if (!values.company.trim()) next.company = "Please enter your company.";
    if (!values.url.trim()) next.url = "Please enter your website URL.";
    if (!values.budget) next.budget = "Please select a budget range.";
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
          type: "contact",
          name: values.name,
          email: values.email,
          company: values.company,
          url: values.url,
          budget: values.budget,
          project_details: values.details,
          landing_page: landingPage,
          ts: ts ?? Date.now(),
          _gotcha: values._gotcha,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "lead_submit", landing_page: landingPage });
    } catch {
      setStatus("error");
    }
  }

  const styles = (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .glf-card { font-family: 'Poppins', sans-serif; background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 20px; padding: 28px; color: #0f172a; }
        .glf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .glf-field { display: flex; flex-direction: column; margin-bottom: 14px; }
        .glf-label { font-size: 13px; font-weight: 600; color: #0f172a; margin-bottom: 6px; }
        .glf-req { color: #e23b3b; }
        .glf-input { font-family: 'Poppins', sans-serif; font-size: 15px; color: #0f172a; background: #fff; border: 1px solid #d7dee7; border-radius: 12px; padding: 14px; outline: none; width: 100%; transition: border-color .15s ease, box-shadow .15s ease; }
        .glf-input:focus, .glf-input:focus-visible { border-color: #2A9555; box-shadow: 0 0 0 3px rgba(42,149,85,0.18); }
        .glf-input--err { border-color: #e23b3b; }
        textarea.glf-input { min-height: 96px; resize: vertical; }
        .glf-err { font-size: 12px; color: #e23b3b; margin-top: 5px; }
        .glf-err--form { margin: 0 0 12px; }
        /* Self-sufficient copy of the gp-btn gp-btn--dark look so the form also renders correctly outside a geo page. */
        .glf-submit { display: inline-flex; align-items: center; justify-content: center; gap: 10px; width: 100%; margin-top: 4px; border-radius: 999px; padding: 15px 30px; font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 600; line-height: 1; color: #fff; border: 1px solid transparent; background: linear-gradient(#000, #000) padding-box, #000 border-box; cursor: pointer; transition: background .3s ease, transform .25s ease, box-shadow .25s ease; }
        .glf-submit:hover:not(:disabled) { background: linear-gradient(#000, #000) padding-box, var(--brand-gradient) border-box; transform: translateY(-1px); box-shadow: 0 10px 28px -10px rgba(0,0,0,.45); }
        .glf-submit:focus-visible { outline: 3px solid #3DC77A; outline-offset: 3px; }
        .glf-submit:disabled { opacity: .7; cursor: default; transform: none; box-shadow: none; }
        .glf-spinner { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.35); border-top-color: #fff; border-radius: 50%; animation: glfSpin .7s linear infinite; }
        @keyframes glfSpin { to { transform: rotate(360deg); } }
        .glf-card--success { text-align: center; }
        .glf-check { width: 56px; height: 56px; border-radius: 50%; background: rgba(97,206,112,0.15); display: inline-flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
        .glf-success-h { font-size: 22px; font-weight: 700; color: #000; margin: 0 0 8px; }
        .glf-success-p { font-size: 15px; color: #334155; line-height: 1.6; margin: 0; }
        @media (max-width: 640px) {
          .glf-card { padding: 20px; }
          .glf-row { grid-template-columns: 1fr; gap: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .glf-input, .glf-submit { transition: none; }
          .glf-spinner { animation: none; }
        }
      `,
      }}
    />
  );

  if (status === "success") {
    return (
      <div className="glf-card glf-card--success" role="status" aria-live="polite">
        {styles}
        <div className="glf-check">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12l4.5 4.5L19 7" stroke="#2A9555" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h3 className="glf-success-h">Received.</h3>
        <p className="glf-success-p">We reply from a real inbox. Check your email.</p>
      </div>
    );
  }

  return (
    <form id={`${idPrefix}-form`} className="glf-card" onSubmit={onSubmit} noValidate>
      {styles}
      <div className="glf-row">
        <div className="glf-field">
          <label htmlFor={id("name")} className="glf-label">Name<Req /></label>
          <input id={id("name")} name="name" type="text" autoComplete="name" required value={values.name} onChange={set("name")}
            className={`glf-input${errors.name ? " glf-input--err" : ""}`} aria-invalid={!!errors.name}
            aria-describedby={errors.name ? id("name-err") : undefined} />
          {errors.name && <span id={id("name-err")} className="glf-err">{errors.name}</span>}
        </div>
        <div className="glf-field">
          <label htmlFor={id("email")} className="glf-label">Work email<Req /></label>
          <input id={id("email")} name="email" type="email" autoComplete="email" required value={values.email} onChange={set("email")}
            className={`glf-input${errors.email ? " glf-input--err" : ""}`} aria-invalid={!!errors.email}
            aria-describedby={errors.email ? id("email-err") : undefined} />
          {errors.email && <span id={id("email-err")} className="glf-err">{errors.email}</span>}
        </div>
      </div>

      <div className="glf-row">
        <div className="glf-field">
          <label htmlFor={id("company")} className="glf-label">Company<Req /></label>
          <input id={id("company")} name="company" type="text" autoComplete="organization" required value={values.company} onChange={set("company")}
            className={`glf-input${errors.company ? " glf-input--err" : ""}`} aria-invalid={!!errors.company}
            aria-describedby={errors.company ? id("company-err") : undefined} />
          {errors.company && <span id={id("company-err")} className="glf-err">{errors.company}</span>}
        </div>
        <div className="glf-field">
          <label htmlFor={id("url")} className="glf-label">Website URL<Req /></label>
          <input id={id("url")} name="url" type="text" inputMode="url" autoComplete="url" required value={values.url} onChange={set("url")}
            className={`glf-input${errors.url ? " glf-input--err" : ""}`} aria-invalid={!!errors.url}
            aria-describedby={errors.url ? id("url-err") : undefined} />
          {errors.url && <span id={id("url-err")} className="glf-err">{errors.url}</span>}
        </div>
      </div>

      <div className="glf-field">
        <label htmlFor={id("budget")} className="glf-label">Budget range<Req /></label>
        <select id={id("budget")} name="budget" required value={values.budget} onChange={set("budget")}
          className={`glf-input${errors.budget ? " glf-input--err" : ""}`} aria-invalid={!!errors.budget}
          aria-describedby={errors.budget ? id("budget-err") : undefined}>
          <option value="">Please select</option>
          {bands.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        {errors.budget && <span id={id("budget-err")} className="glf-err">{errors.budget}</span>}
      </div>

      {/* The bottleneck question (Copy Standard v2.0 section 8.4). It is the
          highest-value field in the form: the answer names the service, the
          urgency and usually the budget before the call starts, and it is what
          the conversion copy promises to audit. Still OPTIONAL and still posting
          to the existing project_details column, because making it required and
          giving it its own column is a validation + schema change the owner
          deferred. Wiring that up is the follow-up. */}
      <div className="glf-field">
        <label htmlFor={id("details")} className="glf-label">What is the one thing hurting your store most?</label>
        <textarea id={id("details")} name="project_details" rows={4} value={values.details} onChange={set("details")}
          placeholder="e.g. our checkout converts at half what it should" className="glf-input" />
      </div>

      {/* honeypot */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={values._gotcha} onChange={set("_gotcha")}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden />

      {status === "error" && (
        <p className="glf-err glf-err--form" role="alert">Something went wrong. Please try again, or email us directly.</p>
      )}

      <button type="submit" className="gp-btn gp-btn--dark glf-submit" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <><span className="glf-spinner" aria-hidden /> Sending...</>
        ) : (
          <>{submitLabel}
            <svg width="16" height="12" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </>
        )}
      </button>
    </form>
  );
}
