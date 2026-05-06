"use client";
import Link from "next/link";
import { useState } from "react";

const GRADIENT_BORDER = "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";

const SERVICES = [
  {
    title: "Custom Shopify Features for higher conversions",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 2L27 8L15 14L3 8L15 2Z" stroke="#000000" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M3 15L15 21L27 15" stroke="#000000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 21L15 27L27 21" stroke="#000000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Shopify Plus Development & Enterprise Solutions",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="21" width="6" height="7" rx="1" stroke="#000000" strokeWidth="1.6"/>
        <rect x="12" y="14" width="6" height="14" rx="1" stroke="#000000" strokeWidth="1.6"/>
        <rect x="22" y="7" width="6" height="21" rx="1" stroke="#000000" strokeWidth="1.6"/>
        <path d="M5 14 L24 2" stroke="#000000" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M24 5 L27 0 L21 0" stroke="#000000" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Custom Shopify Theme Design",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="26" height="17" rx="2" stroke="#000000" strokeWidth="1.6"/>
        <rect x="5" y="7" width="20" height="11" rx="1" stroke="#000000" strokeWidth="1.4"/>
        <path d="M5 11H25" stroke="#000000" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M7 9.5H13M7 13H17" stroke="#000000" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M11 21H19M15 21V25" stroke="#000000" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M9 25H21" stroke="#000000" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];


export default function ShopifyDesignSection() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <>
      {/* Heading section */}
      <section style={{ background: "#FFFFFF", padding: "0 20px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[38px] font-bold max-sm:font-semibold md:font-semibold"
            style={{
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
              color: "#000000",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            End to End Shopify Services to Build,{" "}
            <br className="hidden md:block lg:hidden" />
            Grow{" "}
            <br className="sm:hidden" />
            and Dominate
          </h2>
        </div>
      </section>

      {/* Cream container section */}
      <section
        className="max-sm:!py-[40px]"
        style={{ background: "#FFFFFF", padding: "53px 20px 5px" }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>

        {/* Cream container */}
        <div
          className="p-[48px] max-sm:p-[20px] md:max-lg:py-[28px] md:max-lg:px-[20px] md:max-lg:h-[490px] md:max-lg:overflow-hidden lg:max-xl:p-[40px]"
          style={{
            background: "#FBF7ED",
            borderRadius: "28px",
            boxSizing: "border-box" as const,
          }}
        >
          <div className="flex flex-col md:flex-row gap-[40px] md:gap-[20px] lg:gap-[50px] items-center">

            {/* Left: content */}
            <div className="w-full md:max-lg:w-[365px] lg:w-[50%] max-sm:order-2">
              <h3
                className="text-[30px] max-sm:text-[22px] md:max-lg:text-[22px] lg:max-xl:text-[28px] whitespace-nowrap max-sm:whitespace-normal md:max-lg:whitespace-normal lg:max-xl:whitespace-normal md:max-lg:!mb-[12px] lg:max-xl:!mb-[16px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#000000",
                  lineHeight: 1.35,
                  margin: "0 0 24px",
                  fontWeight: 400,
                }}
              >
                Shopify{" "}
                <strong style={{ fontWeight: 600 }}>Design &amp; Development</strong>{" "}
                Services
              </h3>

              <p
                className="text-[16px] max-sm:text-[14px] md:max-lg:text-[14px] lg:max-xl:text-[14px] md:max-lg:!mb-[12px] lg:max-xl:!mb-[16px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "rgba(0,0,0,0.8)",
                  lineHeight: 1.7,
                  margin: "0 0 24px",
                }}
              >
                Shopify stores built for performance, conversion, and long-term scale.
                Whether you&apos;re launching fresh or upgrading to Shopify Plus, our Shopify
                development services make it seamless.
              </p>

              {/* Service items */}
              <div
                className="md:max-lg:!mb-[12px] lg:max-xl:!mb-[16px]"
                style={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                  background: "#FFFFFF",
                  overflow: "hidden",
                  marginBottom: "24px",
                }}
              >
                {SERVICES.map((service, i) => (
                  <div key={i}>
                    {i > 0 && (
                      <div style={{ height: "1px", background: "rgba(0,0,0,0.08)", margin: "0 20px" }} />
                    )}
                    <div
                      className="flex items-center justify-between gap-4 px-[20px] py-[15px] max-sm:py-[12px] max-sm:px-[16px]"
                    >
                      <span
                        className="text-[16px] max-sm:text-[14px] md:max-lg:text-[14px] lg:max-xl:text-[15px]"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          color: "#000000",
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        {service.title}
                      </span>
                      <span className="shrink-0">{service.icon}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-3 md:max-lg:!text-[12px] max-sm:w-full max-sm:justify-center"
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                style={{
                  position: "relative",
                  background: "#000000",
                  color: "#FFFFFF",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  borderRadius: "50px",
                  padding: "20px 45px",
                  textDecoration: "none",
                  lineHeight: 1,
                }}
              >
                {/* Gradient border layer — opacity fade avoids the snap glitch */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50px",
                    padding: "2px",
                    background: GRADIENT_BORDER,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                    opacity: btnHovered ? 1 : 0,
                    transition: "opacity 0.25s ease",
                    pointerEvents: "none",
                  }}
                />
                Book a Call
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Right: video */}
            <div className="w-full md:flex-1 lg:w-[50%] flex justify-center lg:justify-start max-sm:order-1">
              <div
                className="max-w-[640px] md:max-lg:max-w-[365px] lg:max-xl:max-w-[492px]"
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <video
                  src="/images/d7f14fb290a1484cbb32e6037b39d7f1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

          </div>
        </div>
        </div>
      </section>
    </>
  );
}
