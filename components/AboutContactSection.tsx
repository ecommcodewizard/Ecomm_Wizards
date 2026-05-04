"use client";

import Image from "next/image";
import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  heading: string;
  description: string;
  cta: string;
  image: { src: string; alt: string };
};

const TABS: Tab[] = [
  {
    id: "shopify-customizations",
    label: "Shopify Customizations",
    heading: "Get your Free UX + UI Shopify Audit",
    description:
      "If you'd like us to provide you with a very detailed free audit for one page of your site, please fill out the form below",
    cta: "Get a Free Shopify Store Audit",
    image: {
      src: "/images/ux_ui_image_1024x1024.webp",
      alt: "UX + UI Shopify Audit - Ecomm Wizards",
    },
  },
  {
    id: "new-shopify-store",
    label: "Build a New Shopify Store",
    heading: "Get a Free Concept Design",
    description:
      "We'll create a homepage concept tailored to your brand - on the house. See what's possible before you commit to anything.",
    cta: "Get a Free Shopify Concept Design",
    image: {
      src: "/images/video_cover_2048x.webp",
      alt: "Build a new Shopify store - Ecomm Wizards",
    },
  },
];

const FIELDS: { name: string; label: string; type: string; required?: boolean; full?: boolean }[] = [
  { name: "first_name", label: "First Name", type: "text", required: true },
  { name: "last_name", label: "Last Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "company", label: "Company Name", type: "text", required: true },
  { name: "website", label: "Website Address (URL)", type: "url", required: true },
];

export default function AboutContactSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = TABS[activeIdx];

  return (
    <section className="about-contact-section" style={{ background: "#FFFFFF", padding: "0 20px" }}>
      <div className="about-contact-wrap">
        <div className="about-contact-tabs" role="tablist">
          {TABS.map((tab, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`e-n-tab-title-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`e-n-tab-content-${tab.id}`}
                className={`e-n-tab-title about-contact-tab ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveIdx(idx)}
                style={{
                  width: "648.23px",
                  maxWidth: "50%",
                  height: "56px",
                  padding: "15px 35px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: isActive ? "#FFFFFF" : "#000000",
                  background: isActive ? "#000000" : "#F5F5F5",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s ease, color 0.2s ease",
                  flex: "0 0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="about-contact-tab-text">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div
          className="about-contact-body"
          id={`e-n-tab-content-${active.id}`}
          role="tabpanel"
          aria-labelledby={`e-n-tab-title-${active.id}`}
          style={{
            background: "#F5F5F5",
            width: "1320px",
            maxWidth: "100%",
            minHeight: "667.24px",
            padding: "30px",
            color: "#334155",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        >
          <div className="about-contact-inner">
          <div className="about-contact-left">
            <h2
              className="about-contact-heading elementor-heading-title elementor-size-default"
              role="heading"
              aria-level={2}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "30px",
                fontWeight: 700,
                color: "#000000",
                lineHeight: "40px",
                width: "600px",
                maxWidth: "100%",
                height: "40px",
                margin: "0 0 16px",
                padding: 0,
              }}
            >
              {active.heading}
            </h2>

            <div
              className="about-contact-desc elementor-element elementor-widget"
              style={{
                width: "600px",
                maxWidth: "100%",
                color: "#000000",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                lineHeight: "26px",
                margin: "0 0 28px",
              }}
            >
              {active.description}
            </div>

            <form
              className="about-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="about-contact-grid">
                {FIELDS.map((field) => (
                  <div
                    key={field.name}
                    className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-half"
                    style={{
                      width: "312.5px",
                      maxWidth: "100%",
                      margin: "0 0 20px",
                      padding: "0 12.5px",
                      color: "#334155",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "16px",
                      boxSizing: "border-box",
                    }}
                  >
                    <label
                      htmlFor={`field-${field.name}`}
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#000000",
                      }}
                    >
                      {field.label}
                      {field.required && (
                        <span style={{ color: "#D43A3A", marginLeft: "4px" }}>*</span>
                      )}
                    </label>
                    <input
                      id={`field-${field.name}`}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      style={{
                        width: "100%",
                        height: "40px",
                        padding: "0 12px",
                        border: "1px solid #D9D9D9",
                        background: "#FFFFFF",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "16px",
                        color: "#334155",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
              </div>

              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  margin: "8px 12.5px 14px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                  color: "#000000",
                  cursor: "pointer",
                }}
              >
                <input type="checkbox" name="quick_call" style={{ marginTop: "5px" }} />
                <span>I&rsquo;d like to hop on a quick call before we start.</span>
              </label>

              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  margin: "0 12.5px 28px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                  color: "#000000",
                  lineHeight: "24px",
                  cursor: "pointer",
                }}
              >
                <input type="checkbox" name="agree" required style={{ marginTop: "5px" }} />
                <span>
                  I agree to be contacted by Ecomm Wizards about my project. My information will
                  be handled per the Ecomm Wizards Privacy Policy.
                </span>
              </label>

              <div style={{ padding: "0 12.5px" }}>
                <button
                  type="submit"
                  className="elementor-button elementor-size-sm about-contact-submit"
                  style={{
                    width: "auto",
                    minWidth: "347.64px",
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
                  {active.cta}
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6h14M14 6L9 1M14 6L9 11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="about-contact-right">
            <Image
              src={active.image.src}
              alt={active.image.alt}
              width={1260}
              height={840}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-contact-submit {
          transition: box-shadow 0.2s ease;
        }
        .about-contact-submit:hover,
        .about-contact-submit:focus-visible {
          box-shadow: 0 0 0 2px #3DC77A;
          outline: none;
        }
        .about-contact-wrap {
          width: 1320px;
          max-width: 100%;
          margin: 0 auto;
        }
        .about-contact-tabs {
          display: flex;
          width: 100%;
          gap: 0;
        }
        .about-contact-inner {
          width: 100%;
          display: flex;
          gap: 40px;
          align-items: stretch;
        }
        .about-contact-left {
          flex: 1 1 600px;
          min-width: 0;
        }
        .about-contact-right {
          flex: 1 1 600px;
          min-width: 0;
        }
        .about-contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 0;
        }
        @media (max-width: 1024px) {
          .about-contact-inner {
            flex-direction: column;
          }
          .about-contact-left {
            order: 1;
          }
          .about-contact-right {
            order: 2;
            width: 100%;
            max-height: 360px;
            overflow: hidden;
          }
        }
        @media (max-width: 768px) {
          .about-contact-section { padding: 40px 15px 0 !important; }
          .about-contact-tabs {
            justify-content: center;
            gap: 0;
          }
          .about-contact-tab {
            width: 190.77px !important;
            max-width: 190.77px !important;
            height: 44px !important;
            padding: 12px 16px !important;
            font-size: 14px !important;
            line-height: 20px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            white-space: normal !important;
            text-align: center !important;
            box-sizing: border-box !important;
          }
          .about-contact-tab .about-contact-tab-text {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 118.82px;
            max-width: 118.82px;
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            white-space: normal;
            text-align: center;
          }
          .about-contact-section .about-contact-body {
            padding: 24px 16px !important;
            min-height: 0 !important;
          }
          .about-contact-section .about-contact-heading {
            font-size: 24px !important;
            line-height: 32px !important;
            height: auto !important;
          }
          .about-contact-grid {
            grid-template-columns: 1fr !important;
          }
          .about-contact-section .elementor-field-type-text {
            width: 100% !important;
            padding: 0 !important;
          }
          .about-contact-section .elementor-button {
            width: 100% !important;
            min-width: 0 !important;
          }
          .about-contact-right { max-height: 240px; }
        }
      ` }} />
    </section>
  );
}
