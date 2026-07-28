import type { ReactNode } from "react";
import KnifeAccordion, { type KnifeAccordionItem } from "@/components/sections/KnifeAccordion";

const PHONE_LOGOS = [
  "/images/Case%20studies/logos/111skin%20logo.png",
  "/images/Case%20studies/logos/Candy%20Kittens.webp",
  "/images/Case%20studies/logos/NEOM%20Wellbeing.png",
  "/images/Case%20studies/logos/Ronaldo%20Jewelry.avif",
  "/images/Case%20studies/logos/Wild.svg",
  "/images/Case%20studies/logos/Happy-Mammoth.png",
  "/images/Case%20studies/logos/Saddleback.svg",
  "/images/Case%20studies/logos/Twillory.png",
  "/images/Case%20studies/logos/Dryrobe.svg",
  "/images/Case%20studies/logos/John_Hardy.svg",
  "/images/Case%20studies/logos/Loop_Earplugs.svg",
  "/images/Case%20studies/logos/ChloBo.svg",
  "/images/Case%20studies/logos/SNEAK%20Energy.svg",
  "/images/Case%20studies/logos/this-works-logo.png",
  "/images/Case%20studies/logos/Capelli-Sport-Plus-Logo.webp",
  "/images/Case%20studies/logos/evielou_logo.svg",
  "/images/everlast-icon.svg",
];

const DEFAULT_HEADING = (
  <>Why Partner with<br />{" "}<strong style={{ fontWeight: 700 }}>Ecomm Wizards?</strong></>
);
const DEFAULT_DESCRIPTION =
  "Partner with Ecomm Wizards to ensure your store evolves with AI, maintaining a competitive edge in the ever-changing eCommerce landscape.";

type WhyPartnerSectionProps = {
  heading?: ReactNode;
  description?: string;
  accordionItems?: KnifeAccordionItem[];
};

export default function WhyPartnerSection({
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  accordionItems,
}: WhyPartnerSectionProps = {}) {
  return (
    <section className="why-partner-section" style={{ background: "#ffffff", padding: "0 20px" }}>
      <div
        className="why-partner-inner"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "30px 0",
          display: "grid",
          gridTemplateColumns: "1fr 230px 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left: heading + description */}
        <div className="why-partner-text">
          <h2
            className="why-partner-heading"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(28px, 3.2vw, 44px)",
              fontWeight: 300,
              color: "#000000",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            {heading}
          </h2>
          <p
            className="why-partner-desc"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 16,
              lineHeight: 1.75,
              color: "#000000",
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>

        {/* Center: phone mockup with scrolling logos */}
        <div
          className="why-partner-phone"
          style={{
            backgroundImage: "linear-gradient(rgba(0,40,15,0.75), rgba(0,40,15,0.75)), url('/images/background-ai-custom-2.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 28,
            height: 450,
            overflow: "hidden",
            padding: "0 16px",
          }}
        >
          <div
            className="why-partner-logo-track"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {[...PHONE_LOGOS, ...PHONE_LOGOS].map((src, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 78,
                  marginBottom: 10,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ width: 148, height: 78, objectFit: "contain", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: accordion */}
        <div className="why-partner-accordion">
          <KnifeAccordion items={accordionItems} />
        </div>
      </div>
    </section>
  );
}
