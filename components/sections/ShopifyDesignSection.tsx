"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";

const GRADIENT_BORDER = "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";

interface ServiceItem {
  title: string;
  icon: ReactNode;
}

interface Props {
  showHeading?: boolean;
  h3Content?: ReactNode;
  description?: string;
  services?: ServiceItem[];
  buttonText?: string;
  buttonHref?: string;
  videoSrc?: string;
  imageSrc?: string;
  paddingTop?: string;
  paddingBottom?: string;
  reverseLayout?: boolean;
  mobileYPadding?: string;
  dark?: boolean;
  bgImage?: string;
  wrapHeading?: boolean;
  imagePanel?: ReactNode;
  bgImageOpacity?: number;
  bgImageTransform?: string;
  mdAutoHeight?: boolean;
  imageFit?: "cover" | "contain";
  imageBg?: string;
  imageMaxWidth?: string;
  imageAspectRatio?: string;
}

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    title: "Custom Shopify Features for higher conversions",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 2L27 8L15 14L3 8L15 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M3 15L15 21L27 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 21L15 27L27 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Shopify Plus Development & Enterprise Solutions",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="21" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="12" y="14" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="22" y="7" width="6" height="21" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M5 14 L24 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M24 5 L27 0 L21 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Custom Shopify Theme Design",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="26" height="17" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="5" y="7" width="20" height="11" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M5 11H25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M7 9.5H13M7 13H17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M11 21H19M15 21V25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M9 25H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const MIGRATION_SERVICES: ServiceItem[] = [
  {
    title: "Platform Migration to Shopify",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="14" height="24" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M9 15H28M28 15L23 10M28 15L23 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="22" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Data & Product Transfer",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="15" cy="7" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M5 7v7c0 1.93 4.48 3.5 10 3.5s10-1.57 10-3.5V7" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M5 14v7c0 1.93 4.48 3.5 10 3.5s10-1.57 10-3.5v-7" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    title: "Zero Downtime Shopify Launch",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M15 2v3M15 25v3M2 15h3M25 15h3M6.05 6.05l2.12 2.12M21.83 21.83l2.12 2.12M6.05 23.95l2.12-2.12M21.83 8.17l2.12-2.12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const CUSTOM_DEV_SERVICES: ServiceItem[] = [
  {
    title: "Custom Theme and Store Development",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 8L3 15L9 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 8L27 15L21 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 5L12.5 25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Private Shopify App Development",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="2" width="16" height="26" rx="2.5" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="13" y1="5.5" x2="17" y2="5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="15" cy="24" r="1.2" fill="currentColor"/>
        <rect x="10" y="9" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M10 19h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Third-Party Shopify Integrations",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="6" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M13 10.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="22" cy="10.5" r="5.5" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="22" cy="10.5" r="1.5" fill="currentColor"/>
        <path d="M7 15v5M22 16v3M7 20h15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="22" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

const UX_SERVICES: ServiceItem[] = [
  {
    title: "Conversion-Focused Shopify Redesign",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="5" y="7" width="9" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M17 8h7M17 11h5M17 14h7M17 17h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M11 22H19M15 22V26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M9 26H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Mobile-First Optimization",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="2" width="14" height="26" rx="2.5" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="13" y1="5.5" x2="17" y2="5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="15" cy="24.5" r="1.2" fill="currentColor"/>
        <rect x="11" y="9" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M11 16h8M11 19h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Checkout & Cart UX Fixes",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3h3.5l3 14h14l2.5-9H8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="25" r="2" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="22" cy="25" r="2" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
];

export default function ShopifyDesignSection({
  showHeading = true,
  h3Content,
  description,
  services,
  buttonText = "Book a Call",
  buttonHref = "/book-shopify-consultation",
  videoSrc = "/images/d7f14fb290a1484cbb32e6037b39d7f1.mp4",
  imageSrc,
  paddingTop = "53px",
  paddingBottom = "5px",
  reverseLayout = false,
  mobileYPadding = "max-sm:!py-[40px]",
  dark = false,
  bgImage,
  wrapHeading = false,
  imagePanel,
  bgImageOpacity = 1,
  bgImageTransform,
  mdAutoHeight = false,
  imageFit = "cover",
  imageBg,
  imageMaxWidth,
  imageAspectRatio,
}: Props) {
  const [btnHovered, setBtnHovered] = useState(false);

  const containerBg    = dark ? "#000000" : "#FBF7ED";
  const headingColor   = dark ? "#FFFFFF" : "#000000";
  const descColor      = dark ? "#FFFFFF" : "rgba(0,0,0,0.8)";
  const servicesBg     = dark ? "#1a1a1a" : "#FFFFFF";
  const servicesBorder = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const dividerColor   = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const servicesText   = dark ? "#FFFFFF" : "#000000";
  const iconColor      = dark ? "#FFFFFF" : "#000000";
  const btnBg          = dark ? "#FFFFFF" : "#000000";
  const btnTextColor   = dark ? "#000000" : "#FFFFFF";

  const activeServices = services ?? DEFAULT_SERVICES;
  const activeH3 = h3Content ?? (
    <>Shopify{" "}<strong style={{ fontWeight: 600 }}>Design &amp; Development</strong>{" "}Services</>
  );
  const activeDescription = description ?? "Shopify stores built for performance, conversion, and long-term scale. Whether you're launching fresh or upgrading to Shopify Plus, our Shopify development services make it seamless.";

  return (
    <>
      {/* Heading section */}
      {showHeading && <section style={{ background: "#FFFFFF", padding: "0 20px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[38px] font-bold max-sm:font-semibold md:font-semibold"
            style={{
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
              color: headingColor,
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
      </section>}

      {/* Container section */}
      <section
        className={mobileYPadding}
        style={{ background: "#FFFFFF", padding: `${paddingTop} 20px ${paddingBottom}` }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>

        {/* Inner container */}
        <div
          className={`p-[48px] max-sm:p-[20px] md:max-lg:py-[28px] md:max-lg:px-[20px] lg:max-xl:p-[40px] ${mdAutoHeight ? "md:max-lg:h-auto" : "md:max-lg:h-[490px] md:max-lg:overflow-hidden"}`}
          style={{
            background: containerBg,
            borderRadius: "28px",
            boxSizing: "border-box" as const,
            position: "relative" as const,
            overflow: "hidden",
          }}
        >
          {bgImage && (
            <>
              <img
                src={bgImage}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "40%",
                  height: "100%",
                  width: "auto",
                  opacity: bgImageOpacity,
                  transform: bgImageTransform,
                  pointerEvents: "none",
                  userSelect: "none",
                  display: "block",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to left, transparent 0%, black 15%, black 100%)",
                  maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to left, transparent 0%, black 15%, black 100%)",
                  WebkitMaskComposite: "destination-in",
                  maskComposite: "intersect",
                }}
              />
            </>
          )}
          <div className={`relative flex flex-col gap-[40px] md:gap-[20px] lg:gap-[50px] items-center ${reverseLayout ? "md:flex-row-reverse" : "md:flex-row"}`}>

            {/* Left: content */}
            <div className="w-full md:max-lg:w-[365px] lg:w-[50%] max-sm:order-2">
              <h3
                className={`text-[30px] max-sm:text-[22px] md:max-lg:text-[22px] lg:max-xl:text-[28px] max-sm:!mb-[12px] md:max-lg:!mb-[12px] lg:max-xl:!mb-[16px] ${wrapHeading ? "whitespace-normal" : "whitespace-nowrap max-sm:whitespace-normal md:max-lg:whitespace-normal lg:max-xl:whitespace-normal"}`}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: headingColor,
                  lineHeight: 1.35,
                  margin: "0 0 24px",
                  fontWeight: 400,
                }}
              >
                {activeH3}
              </h3>

              <p
                className="text-[16px] max-sm:text-[14px] md:max-lg:text-[14px] lg:max-xl:text-[14px] max-sm:!mb-[12px] md:max-lg:!mb-[12px] lg:max-xl:!mb-[16px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: descColor,
                  lineHeight: 1.7,
                  margin: "0 0 24px",
                }}
              >
                {activeDescription}
              </p>

              {/* Service items */}
              <div
                className="max-sm:!mb-[12px] md:max-lg:!mb-[12px] lg:max-xl:!mb-[16px]"
                style={{
                  border: `1px solid ${servicesBorder}`,
                  borderRadius: "12px",
                  background: servicesBg,
                  overflow: "hidden",
                  marginBottom: "24px",
                }}
              >
                {activeServices.map((service, i) => (
                  <div key={i}>
                    {i > 0 && (
                      <div style={{ height: "1px", background: dividerColor, margin: "0 20px" }} />
                    )}
                    <div
                      className="flex items-center justify-between gap-4 px-[20px] py-[15px] max-sm:py-[12px] max-sm:px-[16px]"
                    >
                      <span
                        className="text-[16px] max-sm:text-[14px] md:max-lg:text-[14px] lg:max-xl:text-[15px]"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          color: servicesText,
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        {service.title}
                      </span>
                      <span className="shrink-0" style={{ color: iconColor }}>{service.icon}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              {dark ? (
                <span className="group inline-flex p-[2px] rounded-full max-sm:w-full" style={{ background: GRADIENT_BORDER }}>
                  <Link
                    href={buttonHref}
                    className="inline-flex items-center gap-3 rounded-full bg-black group-hover:bg-white transition-all duration-300 max-sm:!text-[14px] max-sm:!px-[20px] md:max-lg:!text-[12px] max-sm:w-full max-sm:justify-center"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      padding: "20px 45px",
                      textDecoration: "none",
                      lineHeight: 1,
                    }}
                  >
                    <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">{buttonText}</span>
                    <span className="text-white group-hover:text-black transition-colors duration-300">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </Link>
                </span>
              ) : (
                <Link
                  href={buttonHref}
                  className="inline-flex items-center gap-3 max-sm:!text-[14px] max-sm:!px-[20px] md:max-lg:!text-[12px] max-sm:w-full max-sm:justify-center"
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
                  {buttonText}
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              )}
            </div>

            {/* Right: video / image / custom panel */}
            <div className="w-full md:flex-1 lg:w-[50%] flex justify-center lg:justify-start max-sm:order-1">
              {imagePanel ? (
                <div className="w-full max-w-[640px] md:max-lg:max-w-[365px] lg:max-xl:max-w-[492px]">
                  {imagePanel}
                </div>
              ) : (
                <div
                  className="max-w-[640px] md:max-lg:max-w-[365px] lg:max-xl:max-w-[492px]"
                  style={{
                    width: "100%",
                    maxWidth: imageMaxWidth,
                    aspectRatio: imageAspectRatio ?? "1 / 1",
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                    background: imageBg,
                  }}
                >
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt=""
                      fill
                      style={{ objectFit: imageFit }}
                    />
                  ) : (
                    <video
                      src={videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
        </div>
      </section>
    </>
  );
}

const SEO_SERVICES: ServiceItem[] = [
  {
    title: "Technical SEO Audit & Fixes",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="9" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M20 20L27 27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M10 13h6M13 10v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Content & Blog Strategy",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 9h14M8 14h14M8 19h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Organic Revenue Growth",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 24L10 16L16 20L24 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 10h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const BRAND_SERVICES: ServiceItem[] = [
  {
    title: "Brand Voice & Messaging",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8a2 2 0 012-2h4l3 4-3 4H6a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M13 12h10M13 8h7M13 16h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="22" cy="22" r="5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M20 22l1.5 1.5L24 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Conversion Copywriting",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4l6 6-14 14H6v-6L20 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M17 7l6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Visual & Content Positioning",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M10 22v4M20 22v4M7 26h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M7 14l4-4 4 4 4-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const B2B_SERVICES: ServiceItem[] = [
  {
    title: "Custom B2B Catalogs & Wholesale Pricing",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="15" r="4" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="23" cy="15" r="4" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M11 15h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M7 11V7a2 2 0 012-2h12a2 2 0 012 2v4M7 19v4a2 2 0 002 2h12a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Shopify Plus Wholesale Portal Setup",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="3" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 9h10M8 13h10M8 17h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M19 20l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="19" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: "B2B Automation & Net Terms Integration",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 4v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M10 9l5-5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 20c0-2 1.5-4 4-5l5 3 5-3c2.5 1 4 3 4 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 26h22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const CRO_SERVICES: ServiceItem[] = [
  {
    title: "Heatmaps & Behavior Analytics",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="26" height="20" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="5" y="7" width="7" height="14" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M15 14h8M15 18h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M15 9l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="5" cy="7" r="1.5" fill="currentColor"/>
        <circle cx="9" cy="13" r="1.5" fill="currentColor"/>
        <circle cx="7" cy="18" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "A/B Testing & Experimentation",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="26" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="2" y="12" width="26" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="2" y="22" width="26" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7 5.5h5M7 15.5h9M7 25h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Checkout & Funnel Optimization",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 3C10 3 7 7 7 11c0 3 1.5 5.5 4 7l1 9h6l1-9c2.5-1.5 4-4 4-7 0-4-3-8-8-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M11 18h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M12 21h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M15 3v8M12 8l3-5 3 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const COPYWRITING_SERVICES: ServiceItem[] = [
  {
    title: "Shopify Landing Page Copy",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 9h14M8 14h14M8 19h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Product Page & VSL Scripts",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6h3.5l3 14h14l2.5-9H8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="25" r="2" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="22" cy="25" r="2" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    title: "SEO Blog Content",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7 10h5M7 14h10M7 18h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <rect x="16" y="9" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
];

const PERSONALIZATION_SERVICES: ServiceItem[] = [
  {
    title: "Dynamic Product Recommendations",
    icon: <img src="/images/web.png" alt="" width={38} height={38} style={{ width: 38, height: 38, objectFit: "contain", filter: "brightness(0) contrast(1.2)" }} />,
  },
  {
    title: "Personalized Landing Pages",
    icon: <img src="/images/landing-pages.png" alt="" width={38} height={38} style={{ width: 38, height: 38, objectFit: "contain", filter: "brightness(0) contrast(1.2)" }} />,
  },
  {
    title: "Behavior-Based Content Blocks",
    icon: <img src="/images/ad-blocker.png" alt="" width={38} height={38} style={{ width: 38, height: 38, objectFit: "contain", filter: "brightness(0) contrast(1.2)" }} />,
  },
];

const SEO_AI_SERVICES: ServiceItem[] = [
  {
    title: "On-Page & Technical SEO",
    icon: (
      <svg width="34" height="34" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="3" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="15" y1="23" x2="15" y2="27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <line x1="10" y1="27" x2="20" y2="27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="17" cy="13" r="6" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="21.5" y1="17.5" x2="25" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M14 11h3M14 13h4M14 15h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "AI Search Optimization (GPT, Gemini)",
    icon: (
      <svg width="34" height="34" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="10" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="20.5" y1="20.5" x2="27" y2="27" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 9v3M6.5 10.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 7l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Content & Keyword Strategy",
    icon: (
      <svg width="34" height="34" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="1" y1="9" x2="29" y2="9" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="5" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="10" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="4" y="12" width="7" height="3" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="14" y="12" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="4" y1="19" x2="26" y2="19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="8" cy="25" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="8" cy="25" r="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M11 25h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M18 25v-2M21 25v-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const RETENTION_SERVICES: ServiceItem[] = [
  {
    title: "Email Flows & Campaigns (Klaviyo)",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="26" height="20" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M2 8l11 8a3 3 0 004 0l11-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Klaviyo Integrations for Shopify",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4,12.0 L17.5,12.2 L17.5,13.8 L15.4,14.0 L13.5,17.2 L14.4,19.1 L13.1,19.9 L11.9,18.2 L8.1,18.2 L6.9,19.9 L5.6,19.1 L6.5,17.2 L4.6,14.0 L2.5,13.8 L2.5,12.2 L4.6,12.0 L6.5,8.8 L5.6,6.9 L6.9,6.1 L8.1,7.8 L11.9,7.8 L13.1,6.1 L14.4,6.9 L13.5,8.8 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <circle cx="10" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M25.9,20.4 L27.0,20.4 L27.0,21.6 L25.9,21.6 L23.6,23.9 L23.6,25.0 L22.4,25.0 L22.4,23.9 L20.1,21.6 L19.0,21.6 L19.0,20.4 L20.1,20.4 L22.4,18.1 L22.4,17.0 L23.6,17.0 L23.6,18.1 Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <circle cx="23" cy="21" r="1.4" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    title: "Customer Retention",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="9" r="4" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7 26c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="5" cy="11" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M1 26c0-3.314 2-6 5-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="25" cy="11" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M29 26c0-3.314-2-6-5-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const WHY_B2B_SERVICES: ServiceItem[] = [
  {
    title: "Shopify B2B Portal & Company Accounts",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="26" height="20" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="10" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M3 25c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M19 11h7M19 15h5M19 19h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Volume Pricing & Net Payment Terms",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="20" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="11" y="14" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="20" y="8" width="6" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 2v6M20 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Wholesale Automation via Shopify Flow",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="15" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="23" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 13L20 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M10 17L20 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const AI_AUTOMATION_SERVICES: ServiceItem[] = [
  {
    title: "Automated Shopify Customer Support",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 6h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10l-6 4v-4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M10 12h10M10 16h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Inventory & Order Automation",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4h3.5l3.5 13h14l2.5-9H9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="24" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="22" cy="24" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "AI-Powered Shopify Analytics",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="8" y="17" width="4" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="14" y="12" width="4" height="10" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="20" y="8" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

const POS_SERVICES: ServiceItem[] = [
  {
    title: "POS Hardware Setup for Shopify",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="11" y="6" width="8" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="15" cy="18" r="1" fill="currentColor"/>
        <path d="M11 24h8M15 21v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 27h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Inventory Sync Across Channels",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12a9 9 0 0 1 16-3M24 9l2 3-3 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 18a9 9 0 0 1-16 3M6 21l-2-3 3-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Unified Shopify Reporting & Analytics",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="20" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="13" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="21" y="6" width="6" height="21" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export { MIGRATION_SERVICES, CUSTOM_DEV_SERVICES, UX_SERVICES, CRO_SERVICES, SEO_SERVICES, BRAND_SERVICES, B2B_SERVICES, COPYWRITING_SERVICES, PERSONALIZATION_SERVICES, SEO_AI_SERVICES, RETENTION_SERVICES, WHY_B2B_SERVICES, POS_SERVICES, AI_AUTOMATION_SERVICES };
