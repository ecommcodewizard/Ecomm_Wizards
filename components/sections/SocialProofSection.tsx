"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const GOLD = "#C4A862";
const FADE_MS = 280;
const FOREST = "#0E2318";
const FOREST_MID = "#163020";
const SITE_GRADIENT = "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";

// Real client testimonials, taken verbatim from the case studies (all name
// Ecomm Wizards). No invented endorsements.
const TESTIMONIALS = [
  {
    company: "Candy Kittens",
    stat: "182%",
    statLabel: "Increase in Conversion Rate",
    quote: "The brand we'd built deserved a store to match it. Ecomm Wizards rebuilt the gifting experience from scratch and gave us the infrastructure to execute seasonal campaigns properly. The Christmas numbers spoke for themselves.",
    initials: "JL",
    name: "Jamie Laing",
    title: "Co-Founder, Candy Kittens",
  },
  {
    company: "Wild",
    stat: "218%",
    statLabel: "Subscription Revenue Growth",
    quote: "We had the brand and the product. We just didn't have a store. Ecomm Wizards built the whole subscription infrastructure from scratch and 80,000 subscribers in year one was beyond anything we had projected. The scent-swap portal changed our churn numbers entirely.",
    initials: "CB",
    name: "Charlie Bowes-Lyon",
    title: "Co-Founder, Wild",
  },
  {
    company: "Ronaldo Jewelry",
    stat: "250%",
    statLabel: "Total Sales Growth",
    quote: "Our pieces had always been special. The store just was not showing that. Ecomm Wizards gave us a digital experience that finally reflects the craft behind every piece. The configurator changed how customers engage with us entirely.",
    initials: "RN",
    name: "Ronnie E. Needham",
    title: "Founder, Ronaldo Designer Jewelry",
  },
  {
    company: "111SKIN",
    stat: "46%",
    statLabel: "Increase in Conversion Rate",
    quote: "Working with Ecomm Wizards gave us a clear roadmap for growth. The skin finder quiz alone transformed how our customers discover the right products, and the results across conversion rate and revenue speak for themselves.",
    initials: "EA",
    name: "Eva Alexandridis",
    title: "Co-Founder, 111SKIN",
  },
  {
    company: "Happy Mammoth",
    stat: "134%",
    statLabel: "Subscription Revenue Growth",
    quote: "We had the traffic and we had the product. What we didn't have was a store engineered for retention. Ecomm Wizards rebuilt the quiz, launched subscriptions properly, and the LTV numbers tell the rest of the story.",
    initials: "MM",
    name: "Matthew Murphy",
    title: "CEO & Founder, Happy Mammoth",
  },
];

type Logo = { src: string; alt: string };
type GridRow = { left: Logo; center: Logo; right: Logo };

// Real client logos — the actual case-study brands, using the logo files the
// owner supplied in /images/Case studies/logos. The fabricated AI logos
// (the AI-generated set) and famous-brand/IP logos presented as clients
// (Harvard, Smurfs, Peanuts, Sesame Street, Nike, Puma, Calvin Klein, LVMH…)
// were removed.
const L = "/images/Case%20studies/logos";
const GRID_ROWS: GridRow[] = [
  {
    left:   { src: `${L}/111skin%20logo.png`,           alt: "111SKIN"        },
    center: { src: `${L}/Candy%20Kittens.webp`,          alt: "Candy Kittens"  },
    right:  { src: `${L}/VITHIT.webp`,                    alt: "VITHIT"         },
  },
  {
    left:   { src: `${L}/NEOM%20Wellbeing.png`,          alt: "NEOM Wellbeing" },
    center: { src: `${L}/Ronaldo%20Jewelry.avif`,        alt: "Ronaldo Jewelry"},
    right:  { src: `${L}/Wild.svg`,                       alt: "Wild"           },
  },
  {
    left:   { src: `${L}/Happy-Mammoth.png`,             alt: "Happy Mammoth"  },
    center: { src: `${L}/Saddleback.svg`,                alt: "Saddleback"     },
    right:  { src: `${L}/Twillory.png`,                  alt: "Twillory"       },
  },
  {
    left:   { src: `${L}/Dryrobe.svg`,                   alt: "Dryrobe"        },
    center: { src: `${L}/John_Hardy.svg`,               alt: "John Hardy"     },
    right:  { src: `${L}/Loop_Earplugs.svg`,            alt: "Loop Earplugs"  },
  },
  {
    left:   { src: `${L}/ChloBo.svg`,                    alt: "ChloBo"         },
    center: { src: `${L}/SNEAK%20Energy.svg`,           alt: "Sneak Energy"   },
    right:  { src: `${L}/this-works-logo.png`,          alt: "This Works"     },
  },
  {
    left:   { src: `${L}/Capelli-Sport-Plus-Logo.webp`, alt: "Capelli Sports" },
    center: { src: `${L}/feetures.svg`,                 alt: "Feetures"       },
    right:  { src: `${L}/evielou_logo.svg`,             alt: "Evie Lou"       },
  },
];

const BORDER = "1px solid rgba(0,0,0,0.09)";
const CELL_H = 120; // px — logo cell height

function LogoCell({ logo, borderRight }: { logo: Logo; borderRight?: boolean }) {
  return (
    <div className="logo-grid-cell" style={{
      height: `${CELL_H}px`,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      borderBottom: BORDER,
      borderRight: borderRight ? BORDER : undefined,
    }}>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={191}
        height={79}
        className="object-contain logo-grid-img"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

const COL_LOGOS = [
  GRID_ROWS.map(r => r.left),
  GRID_ROWS.map(r => r.center),
  GRID_ROWS.map(r => r.right),
];

export default function SocialProofSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading]   = useState(false);
  const currentRef            = useRef(0);
  const fadingRef             = useRef(false);

  const goTo = useCallback((idx: number) => {
    if (fadingRef.current) return;
    fadingRef.current = true;
    setFading(true);
    setTimeout(() => {
      currentRef.current = idx;
      setCurrent(idx);
      setFading(false);
      fadingRef.current = false;
    }, FADE_MS);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (fadingRef.current) return;
      const next = (currentRef.current + 1) % TESTIMONIALS.length;
      fadingRef.current = true;
      setFading(true);
      setTimeout(() => {
        currentRef.current = next;
        setCurrent(next);
        setFading(false);
        fadingRef.current = false;
      }, FADE_MS);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[current];

  return (
    <section style={{ background: "#FBF7ED", padding: "60px 20px" }}>
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "flex",
          gap: "40px",
          alignItems: "stretch",
          flexWrap: "wrap",
        }}
      >
        {/* ── Left: Review Slider ── */}
        <div style={{ flex: "1 1 360px", minWidth: 0, display: "flex", flexDirection: "column" }}>

          <div style={{
            borderRadius: "28px",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}>

            {/* ── Forest green top: company identity ── */}
            <div style={{
              background: "linear-gradient(135deg, #0E0E0E 0%, #1A1810 55%, #221F14 100%)",
              padding: "28px 32px 48px",
              position: "relative",
              overflow: "hidden",
              minHeight: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              {/* Soft green glow circles */}
              <div style={{ position: "absolute", top: "-50px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(60,200,100,0.07)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: "10px", left: "35%", width: "130px", height: "130px", borderRadius: "50%", background: "rgba(80,210,110,0.05)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "-20px", left: "-10px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(42,149,85,0.10)", pointerEvents: "none" }} />

              {/* Gradient corner accents (top-right) */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "3px", height: "70px",
                background: `linear-gradient(to bottom, #4FB872, transparent)`,
              }} />
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "70px", height: "3px",
                background: `linear-gradient(to left, #4FB872, transparent)`,
              }} />

              {/* Gradient stripe at very bottom edge of dark area */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: "3px",
                background: SITE_GRADIENT,
                opacity: 0.7,
              }} />

              {/* Top row: label + slide counter */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "10px", fontWeight: 700,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "rgba(168,240,180,0.7)",
                }}>Featured Client</span>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "11px", fontWeight: 600,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.05em",
                }}>
                  {String(current + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
                </span>
              </div>

              {/* Company name — fades with slide */}
              <div style={{
                opacity: fading ? 0 : 1,
                transition: `opacity ${FADE_MS}ms ease`,
                position: "relative", zIndex: 1,
              }}>
                <span style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: "italic", fontWeight: 700,
                  fontSize: "52px", lineHeight: 1,
                  background: SITE_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                  filter: "drop-shadow(0 2px 12px rgba(60,200,100,0.25))",
                }}>{t.company}</span>
              </div>
            </div>

            {/* ── White card — overlaps dark section ── */}
            <div style={{
              background: "#FFFFFF",
              borderRadius: "22px 22px 0 0",
              marginTop: "-26px",
              padding: "28px 32px 32px",
              position: "relative",
              zIndex: 2,
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}>

              {/* Fading content */}
              <div style={{
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(-5px)" : "translateY(0)",
                transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}>

                {/* Inline stat row */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 20px",
                  background: "linear-gradient(to right, #F0FAF3, #F8FFF9)",
                  border: "1px solid rgba(60,200,100,0.18)",
                  borderLeft: "4px solid #3DC77A",
                  borderRadius: "0 14px 14px 0",
                  marginBottom: "22px",
                }}>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800, fontSize: "30px",
                    color: "#111111", lineHeight: 1,
                  }}>{t.stat}</span>
                  <svg width="13" height="17" viewBox="0 0 18 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M9 22V3M9 3L3 9M9 3L15 9" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "13px", fontWeight: 500,
                    color: "rgba(0,0,0,0.5)", lineHeight: 1.3,
                  }}>{t.statLabel}</span>
                </div>

                {/* Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={GOLD}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px", fontWeight: 400,
                  color: "#2A2A2A",
                  lineHeight: "1.85",
                  margin: "0 0 24px",
                }}>&ldquo;{t.quote}&rdquo;</p>

                {/* Flexible spacer — limited so gap stays reasonable */}
                <div style={{ flex: 1, maxHeight: "40px" }} />

                {/* Divider */}
                <div style={{
                  height: "1px",
                  background: "linear-gradient(to right, rgba(60,200,100,0.25), rgba(0,0,0,0.06), transparent)",
                  marginBottom: "20px",
                }} />

                {/* Author + dots */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1, minWidth: 0 }}>
                    {/* Avatar */}
                    <div style={{
                      width: "42px", height: "42px", borderRadius: "50%",
                      background: `linear-gradient(135deg, ${GOLD} 0%, #E8D08A 100%)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 3px 10px ${GOLD}44`,
                    }}>
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "13px", color: "#fff" }}>{t.initials}</span>
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700, fontSize: "14px",
                        color: "#111111", margin: 0, lineHeight: 1.3,
                      }}>{t.name}</p>
                      <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "12px", fontStyle: "italic",
                        color: "rgba(0,0,0,0.42)",
                        margin: "3px 0 0", lineHeight: 1.3,
                      }}>{t.title}</p>
                    </div>
                  </div>

                  {/* Dots */}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Show testimonial ${i + 1}`}
                        style={{
                          height: "8px",
                          width: i === current ? "24px" : "8px",
                          borderRadius: "4px",
                          background: i === current ? "#2A9555" : "rgba(0,0,0,0.15)",
                          border: "none", cursor: "pointer",
                          transition: "all 0.3s ease",
                          padding: 0, flexShrink: 0,
                        }}
                      />
                    ))}
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Trusted Brands — 3-column scrolling grid ── */}
        <div style={{ flex: "1 1 360px", minWidth: 0, background: "#FFFFFF", borderRadius: "20px", padding: "40px 30px 30px", display: "flex", flexDirection: "column" }}>
          <h2
            className="text-[28px] sm:text-[34px] lg:text-[40px]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "1.2",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Trusted by the World&apos;s Most Ambitious Brands
          </h2>

          {/* Scrolling grid container */}
          <div
            style={{
              height: "360px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Fade at top */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "80px",
                background: "linear-gradient(to bottom, #FFFFFF, transparent)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            {/* Fade at bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "80px",
                background: "linear-gradient(to top, #FFFFFF, transparent)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />

            {/* 3 independent columns — each at a different speed/direction */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", height: "100%" }}>
              {COL_LOGOS.map((logos, colIdx) => (
                <div
                  key={colIdx}
                  className={colIdx === 1 ? "logo-col-down" : "logo-col-up"}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    animationDuration: colIdx === 0 ? "22s" : colIdx === 1 ? "17s" : "28s",
                    borderRight: colIdx < 2 ? BORDER : undefined,
                  }}
                >
                  {[...logos, ...logos].map((logo, i) => (
                    <LogoCell key={i} logo={logo} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
