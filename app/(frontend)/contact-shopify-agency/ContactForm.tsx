"use client";

import { useState } from "react";

// Controlled port of the contact form. Keeps the exact classNames the page's
// <style> block targets (.contact-form-fields grid, .elementor-field-group*),
// so the design is unchanged. Submits to /api/lead with type:"contact".

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "6px",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "16px",
  fontWeight: 600,
  color: "#000000",
};
const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "44px",
  padding: "0 12px",
  border: "1px solid #D9D9D9",
  background: "transparent",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "16px",
  color: "#000000",
  outline: "none",
  boxSizing: "border-box",
};
const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  backgroundImage:
    "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10' fill='none'%3e%3cpath d='M1 1l7 7 7-7' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center",
  backgroundSize: "12px 8px",
};
const groupStyle = (half: boolean): React.CSSProperties => ({
  width: half ? "auto" : "100%",
  margin: "0 0 20px",
  boxSizing: "border-box",
});
const Req = () => <span style={{ color: "#D43A3A", marginLeft: "4px" }}>*</span>;

const BUDGETS = ["Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000 - $100,000", "$100,000+"];
const SERVICES = ["Build a New Shopify Store", "Migrate to Shopify", "Shopify Plus Development", "Speed Optimisation", "CRO / Conversion Optimisation", "Shopify App Development", "B2B / Wholesale Setup", "POS Setup", "Shopify SEO", "Other"];
const REFERRALS = ["Google Search", "Referral", "Social Media", "Shopify Partner Directory", "Other"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

const TEXT_FIELDS = [
  { name: "name", label: "What is Your Name?", type: "text", required: true },
  { name: "email", label: "Your Email Address", type: "email", required: true },
  { name: "company", label: "Company Name", type: "text", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
] as const;

const SELECT_FIELDS = [
  { name: "budget", label: "Budget", options: BUDGETS, required: true, half: true },
  { name: "services", label: "Services Of Interest", options: SERVICES, required: true, half: false },
  { name: "referral", label: "How Did You Find Us", options: REFERRALS, required: true, half: false },
] as const;

export default function ContactForm() {
  const [v, setV] = useState({
    name: "", email: "", company: "", phone: "", budget: "", services: "", referral: "", project_details: "", _gotcha: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [err, setErr] = useState("");

  const set = (k: keyof typeof v) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setV((s) => ({ ...s, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!v.name.trim() || !EMAIL_RE.test(v.email.trim())) {
      setErr("Please enter your name and a valid email.");
      setStatus("error");
      return;
    }
    if (v._gotcha) { setStatus("success"); return; } // bot trap
    setStatus("submitting");
    setErr("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ type: "contact", ...v }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setErr("Something went wrong. Please try again, or email us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "32px 0" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(97,206,112,0.15)", display: "inline-flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 12l4.5 4.5L19 7" stroke="#2A9555" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: "#000", margin: "0 0 8px" }}>Thanks, we&apos;ve got it.</h3>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#334155", lineHeight: 1.6, margin: 0 }}>
          A Shopify specialist will review your message and reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div
        className="elementor-form-fields-wrapper contact-form-fields"
        style={{ width: "auto", maxWidth: "100%", margin: "0 0 -20px", color: "#334155", fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}
      >
        {TEXT_FIELDS.map((f) => (
          <div key={f.name} className="elementor-field-group elementor-column elementor-field-group-half" style={groupStyle(true)}>
            <label htmlFor={`cf-${f.name}`} style={labelStyle}>{f.label}{f.required && <Req />}</label>
            <input id={`cf-${f.name}`} name={f.name} type={f.type} required={f.required} value={v[f.name as keyof typeof v]} onChange={set(f.name as keyof typeof v)} style={inputStyle} />
          </div>
        ))}

        {SELECT_FIELDS.map((f) => (
          <div key={f.name} className={`elementor-field-group elementor-column ${f.half ? "elementor-field-group-half" : "elementor-field-group-full"}`} style={groupStyle(f.half)}>
            <label htmlFor={`cf-${f.name}`} style={labelStyle}>{f.label}{f.required && <Req />}</label>
            <select id={`cf-${f.name}`} name={f.name} required={f.required} value={v[f.name as keyof typeof v]} onChange={set(f.name as keyof typeof v)} style={selectStyle}>
              <option value="" disabled>Please Select</option>
              {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        ))}

        <div className="elementor-field-group elementor-column elementor-field-group-full" style={{ width: "100%", margin: "0 0 20px", boxSizing: "border-box" }}>
          <label htmlFor="field-project-details" style={labelStyle}>Project Details<Req /></label>
          <textarea
            id="field-project-details"
            name="project_details"
            required
            rows={3}
            value={v.project_details}
            onChange={set("project_details")}
            style={{ width: "100%", minHeight: "90px", padding: "12px", border: "1px solid #D9D9D9", background: "transparent", fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#000000", outline: "none", resize: "vertical", boxSizing: "border-box" }}
          />
        </div>

        {/* honeypot */}
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden value={v._gotcha} onChange={set("_gotcha")} style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />

        {status === "error" && (
          <p className="elementor-field-group-full" style={{ color: "#D43A3A", fontFamily: "'Poppins', sans-serif", fontSize: 14, margin: "0 0 14px" }}>{err}</p>
        )}

        <div className="elementor-field-group-full" style={{ padding: 0 }}>
          <button
            type="submit"
            className="elementor-button elementor-size-sm contact-form-submit"
            disabled={status === "submitting"}
            style={{ minWidth: "167px", height: "55.33px", padding: "18px 40px", background: "#000000", color: "#FFFFFF", fontFamily: "'Poppins', sans-serif", fontSize: "16px", fontWeight: 600, border: "none", borderRadius: "9999px", cursor: status === "submitting" ? "default" : "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", boxSizing: "border-box", opacity: status === "submitting" ? 0.7 : 1 }}
          >
            {status === "submitting" ? "Sending..." : (
              <>
                Submit
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <path d="M0 6h14M14 6L9 1M14 6L9 11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
