import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire a Shopify Plus Agency | Contact Ecomm Wizards",
  description: "Ready to scale your store? Hire Ecomm Wizards, a certified Shopify Plus agency. Contact our experts today for a free audit and custom scaling roadmap.",
};

const HERO_STATS = [
  "Full-Stack Ecommerce Partner",
  "8+ Years of Experience",
  "$900M+ Revenue Generated",
  "700+ Stores Built",
];

function FormField({
  name,
  label,
  type,
  required,
  half,
}: {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  half?: boolean;
}) {
  return (
    <div
      className={`elementor-field-type-${type === "email" ? "email" : type === "tel" ? "tel" : "text"} elementor-field-group elementor-column ${half ? "elementor-field-group-half" : "elementor-field-group-full"}`}
      style={{
        width: half ? "auto" : "100%",
        margin: "0 0 20px",
        padding: "0 12.5px",
        boxSizing: "border-box",
      }}
    >
      <label
        htmlFor={`field-${name}`}
        style={{
          display: "block",
          marginBottom: "6px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
          fontWeight: 600,
          color: "#000000",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#D43A3A", marginLeft: "4px" }}>*</span>
        )}
      </label>
      <input
        id={`field-${name}`}
        name={name}
        type={type}
        required={required}
        style={{
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
        }}
      />
    </div>
  );
}

function FormSelect({
  name,
  label,
  options,
  required,
  half,
}: {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
  half?: boolean;
}) {
  return (
    <div
      className={`elementor-field-type-select elementor-field-group elementor-column ${half ? "elementor-field-group-half" : "elementor-field-group-full"}`}
      style={{
        width: half ? "auto" : "100%",
        margin: "0 0 20px",
        padding: "0 12.5px",
        boxSizing: "border-box",
      }}
    >
      <label
        htmlFor={`field-${name}`}
        style={{
          display: "block",
          marginBottom: "6px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
          fontWeight: 600,
          color: "#000000",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#D43A3A", marginLeft: "4px" }}>*</span>
        )}
      </label>
      <select
        id={`field-${name}`}
        name={name}
        required={required}
        defaultValue=""
        style={{
          width: "100%",
          height: "44px",
          padding: "0 12px",
          border: "1px solid #D9D9D9",
          background: "transparent",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
          color: "#000000",
          outline: "none",
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          backgroundImage:
            "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10' fill='none'%3e%3cpath d='M1 1l7 7 7-7' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
          backgroundSize: "12px 8px",
          boxSizing: "border-box",
        }}
      >
        <option value="" disabled>
          Please Select
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="contact-hero-section"
        style={{
          background: "#FBF7ED",
          padding: "0 20px",
          color: "#334155",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
        }}
      >
        <div
          className="contact-hero-inner"
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "100px 0 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            className="contact-hero-title elementor-heading-title elementor-size-default"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "42px",
              fontWeight: 700,
              color: "#000000",
              lineHeight: "52px",
              width: "932.2px",
              maxWidth: "100%",
              margin: 0,
              padding: 0,
            }}
          >
            Partner with a Certified Shopify Plus Agency
          </h1>

          <div
            className="contact-hero-desc"
            style={{
              width: "780px",
              maxWidth: "100%",
              margin: "24px 0 0",
              padding: 0,
              color: "#000000CC",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            Let&rsquo;s talk about your store. Ecom Wizards is a full-service Shopify Plus Agency
            delivering high-performance builds for growing DTC brands. Tell us about your project,
            whether it&rsquo;s custom Shopify theme development, Shopify migrations, or CRO audits,
            and our Shopify experts will map out your scaling roadmap.
          </div>

        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            .contact-hero-section { padding: 0 15px !important; }
            .contact-hero-section .contact-hero-inner {
              padding: 56px 0 40px !important;
            }
            .contact-hero-section .contact-hero-title {
              font-size: 30px !important;
              line-height: 40px !important;
              width: 380px !important;
              max-width: 100% !important;
              height: 80px !important;
            }
            .contact-hero-section .contact-hero-desc {
              font-size: 16px !important;
              line-height: 26px !important;
              margin-top: 18px !important;
              width: 380px !important;
              max-width: 100% !important;
              height: 182px !important;
            }
          }
        ` }} />
      </section>

      {/* Stats strip — infinite slider */}
      <section
        className="contact-stats-section"
        style={{
          background: "#FBF7ED",
        }}
        aria-label="Ecomm Wizards highlights"
      >
        <div
          className="contact-stats-divider"
          aria-hidden="true"
          style={{
            width: "1320px",
            maxWidth: "calc(100% - 40px)",
            height: "1px",
            margin: "0 auto",
            background: "rgba(0, 0, 0, 0.08)",
          }}
        />
        <div
          className="contact-stats-marquee text-marquee-section"
          style={{
            margin: "0 auto",
            padding: "20px 0",
            width: "1320px",
            maxWidth: "100%",
            height: "66.39px",
            display: "flex",
            alignItems: "center",
            color: "#334155",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          <ul className="contact-stats-track">
            {(() => {
              const items = HERO_STATS;
              return [...items, ...items].map((stat, i) => (
                <li
                  key={`${stat}-${i}`}
                  className="contact-stats-item"
                  aria-hidden={i >= items.length ? true : undefined}
                >
                  <span className="contact-stats-dot" aria-hidden="true" />
                  <span className="contact-stats-text">{stat}</span>
                </li>
              ));
            })()}
          </ul>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .contact-stats-track {
            display: flex;
            align-items: center;
            list-style: none;
            margin: 0;
            padding: 0;
            width: max-content;
            animation: contact-stats-scroll 30s linear infinite;
          }
          .contact-stats-marquee:hover .contact-stats-track {
            animation-play-state: paused;
          }
          .contact-stats-item {
            display: inline-flex;
            align-items: center;
            gap: 28px;
            padding-right: 28px;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            font-weight: 500;
            color: #000000;
            line-height: 24px;
            white-space: nowrap;
          }
          .contact-stats-dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 9999px;
            background: linear-gradient(135deg, #3DC77A 0%, #2A9555 50%, #1F6B3E 100%);
            flex-shrink: 0;
          }
          .contact-stats-text {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
          }
          @keyframes contact-stats-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .contact-stats-track { animation: none; }
          }
          @media (max-width: 768px) {
            .contact-stats-section .contact-stats-marquee {
              height: 66.39px !important;
              padding: 20px 0 !important;
            }
            .contact-stats-track {
              animation-duration: 22s;
            }
            .contact-stats-item {
              gap: 18px;
              padding-right: 18px;
              font-size: 14px;
              line-height: 22px;
            }
            .contact-stats-dot {
              width: 8px;
              height: 8px;
            }
            .contact-stats-text {
              font-size: 14px;
            }
          }
        ` }} />
      </section>

      {/* Contact form section */}
      <section
        className="contact-form-section"
        style={{ background: "#FFFFFF", padding: "0 20px" }}
      >
        <div
          className="contact-form-inner e-con-inner"
          style={{
            width: "1320px",
            maxWidth: "100%",
            minHeight: "832.01px",
            margin: "0 auto",
            padding: "60px 0",
            color: "#334155",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        >
          <h2
            className="contact-form-heading elementor-heading-title elementor-size-default"
            role="heading"
            aria-level={2}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "24px",
              fontWeight: 700,
              color: "#000000",
              lineHeight: "34px",
              width: "1300px",
              maxWidth: "100%",
              minHeight: "34px",
              margin: "0 auto 36px",
              padding: 0,
              textAlign: "center",
            }}
          >
            Have a project in mind? We&apos;d love to hear about it!
          </h2>

          <form
            className="contact-form"
            action="#"
            method="POST"
            encType="multipart/form-data"
          >
            <div
              className="elementor-form-fields-wrapper contact-form-fields"
              style={{
                width: "auto",
                maxWidth: "100%",
                margin: "0 -12.5px -20px",
                color: "#334155",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
              }}
            >
              {[
                { name: "name",     label: "What is Your Name?",  type: "text",  required: true, half: true },
                { name: "email",    label: "Your Email Address",  type: "email", required: true, half: true },
                { name: "company",  label: "Company Name",        type: "text",  required: true, half: true },
                { name: "phone",    label: "Phone",               type: "tel",   required: false, half: true },
              ].map((field) => (
                <FormField
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  required={field.required}
                  half={field.half}
                />
              ))}

              <FormSelect
                name="budget"
                label="Budget"
                half
                options={[
                  "Under $5,000",
                  "$5,000 - $15,000",
                  "$15,000 - $50,000",
                  "$50,000 - $100,000",
                  "$100,000+",
                ]}
              />

              <FormSelect
                name="services"
                label="Services Of Interest"
                half
                options={[
                  "Build a New Shopify Store",
                  "Migrate to Shopify",
                  "Shopify Plus Development",
                  "Speed Optimisation",
                  "CRO / Conversion Optimisation",
                  "Shopify App Development",
                  "B2B / Wholesale Setup",
                  "POS Setup",
                  "Shopify SEO",
                  "Other",
                ]}
              />

              <FormSelect
                name="referral"
                label="How Did You Find Us"
                options={[
                  "Google Search",
                  "Referral",
                  "Social Media",
                  "Shopify Partner Directory",
                  "Other",
                ]}
              />

              <div
                className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-full"
                style={{
                  width: "100%",
                  margin: "0 0 20px",
                  padding: "0 12.5px",
                  boxSizing: "border-box",
                }}
              >
                <label
                  htmlFor="field-project-details"
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000000",
                  }}
                >
                  Project Details
                  <span style={{ color: "#D43A3A", marginLeft: "4px" }}>*</span>
                </label>
                <textarea
                  id="field-project-details"
                  name="project_details"
                  required
                  rows={5}
                  style={{
                    width: "100%",
                    minHeight: "120px",
                    padding: "12px",
                    border: "1px solid #D9D9D9",
                    background: "transparent",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "16px",
                    color: "#000000",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div
                className="elementor-field-type-upload elementor-field-group elementor-column elementor-field-group-full"
                style={{
                  width: "100%",
                  margin: "0 0 28px",
                  padding: "0 12.5px",
                  boxSizing: "border-box",
                }}
              >
                <label
                  htmlFor="field-upload"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000000",
                  }}
                >
                  File / Image upload (Optional)
                </label>
                <input
                  id="field-upload"
                  name="upload"
                  type="file"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#000000",
                  }}
                />
              </div>

              <div style={{ padding: "0 12.5px" }}>
                <button
                  type="submit"
                  className="elementor-button elementor-size-sm contact-form-submit"
                  style={{
                    width: "167.03px",
                    height: "55.33px",
                    padding: "18px 40px",
                    background: "#000000",
                    color: "#FFFFFF",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    border: "none",
                    borderRadius: "9999px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxSizing: "border-box",
                  }}
                >
                  Submit
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6h14M14 6L9 1M14 6L9 11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .contact-form-section .contact-form-fields {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 0;
          }
          .contact-form-section .elementor-field-group-full {
            grid-column: span 2;
          }
          .contact-form-section input[type="text"],
          .contact-form-section input[type="email"],
          .contact-form-section input[type="tel"],
          .contact-form-section input[type="url"],
          .contact-form-section select,
          .contact-form-section textarea {
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          }
          .contact-form-section input:focus,
          .contact-form-section select:focus,
          .contact-form-section textarea:focus {
            border-color: #2A9555 !important;
            box-shadow: 0 0 0 2px rgba(61, 199, 122, 0.18);
          }
          .contact-form-submit {
            transition: box-shadow 0.2s ease;
          }
          .contact-form-submit:hover,
          .contact-form-submit:focus-visible {
            box-shadow: 0 0 0 2px #3DC77A;
            outline: none;
          }
          @media (max-width: 768px) {
            .contact-form-section { padding: 0 15px !important; }
            .contact-form-section .contact-form-inner {
              padding: 40px 0 !important;
              min-height: 0 !important;
            }
            .contact-form-section .contact-form-heading {
              font-size: 20px !important;
              line-height: 28px !important;
              margin: 0 0 24px !important;
              text-align: center !important;
              width: 100% !important;
              padding: 0 6px !important;
            }
            .contact-form-section .contact-form-fields {
              grid-template-columns: 1fr !important;
              margin: 0 0 -20px !important;
            }
            .contact-form-section .elementor-field-group {
              padding: 0 !important;
            }
            .contact-form-section .contact-form-submit {
              width: 100% !important;
            }
          }
        ` }} />
      </section>

      {/* Final CTA */}
      <section
        className="contact-final-cta-section"
        style={{ background: "#FFFFFF", padding: "0 20px" }}
      >
        <div
          className="contact-final-cta-inner"
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "60px 0",
            color: "#334155",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2
            className="contact-final-cta-title elementor-heading-title elementor-size-default"
            role="heading"
            aria-level={2}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "42px",
              fontWeight: 700,
              color: "#000000",
              lineHeight: "52px",
              maxWidth: "768px",
              margin: 0,
              padding: 0,
            }}
          >
            Not sure where to start?
          </h2>
          <p
            className="contact-final-cta-desc"
            style={{
              maxWidth: "640px",
              margin: "16px 0 0",
              padding: 0,
              color: "#000000CC",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            Get a free Shopify store audit and we&apos;ll show you exactly where you&apos;re
            losing revenue.
          </p>

          <Link
            href="/free-shopify-store-audit"
            className="contact-final-cta-btn elementor-button elementor-button-link elementor-size-sm"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              minWidth: "211.64px",
              height: "60px",
              padding: "20px 45px",
              marginTop: "32px",
              background: "#000000",
              color: "#FFFFFF",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              borderRadius: "9999px",
              textDecoration: "none",
              boxSizing: "border-box",
              border: "2px solid transparent",
              backgroundClip: "padding-box",
              position: "relative",
            }}
          >
            Claim Free Audit
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6h14M14 6L9 1M14 6L9 11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .contact-final-cta-btn {
            transition: background 0.25s ease, transform 0.2s ease, border-color 0.25s ease;
          }
          .contact-final-cta-btn:hover,
          .contact-final-cta-btn:focus-visible {
            outline: none;
            background:
              linear-gradient(#000000, #000000) padding-box,
              linear-gradient(135deg, #3DC77A 0%, #2A9555 50%, #1F6B3E 100%) border-box !important;
            border: 2px solid transparent !important;
            transform: translateY(-1px);
          }
          @media (max-width: 768px) {
            .contact-final-cta-section { padding: 0 15px !important; }
            .contact-final-cta-section .contact-final-cta-inner {
              padding: 44px 0 !important;
            }
            .contact-final-cta-section .contact-final-cta-title {
              font-size: 28px !important;
              line-height: 38px !important;
            }
            .contact-final-cta-section .contact-final-cta-desc {
              font-size: 15px !important;
              line-height: 24px !important;
            }
            .contact-final-cta-btn {
              width: 100% !important;
              max-width: 320px !important;
            }
          }
        ` }} />
      </section>
    </>
  );
}
