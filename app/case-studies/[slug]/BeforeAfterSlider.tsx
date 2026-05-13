"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Props {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
}

export default function BeforeAfterSlider({ beforeSrc, beforeAlt, afterSrc, afterAlt }: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98);
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = () => { dragging.current = false; };

  return (
    <section style={{ background: "#000000" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "40px 20px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <span style={{ display: "inline-block", padding: "4px 16px", fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 600, color: "#61ce70", background: "rgba(97,206,112,0.12)", border: "1px solid rgba(97,206,112,0.2)", borderRadius: "9999px", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>
            The Transformation
          </span>
          <h2 className="ba-slider-h2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "42px", fontWeight: 800, color: "#ffffff", margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Before &amp; After
          </h2>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            aspectRatio: "16 / 9",
            cursor: "col-resize",
            userSelect: "none",
            WebkitUserSelect: "none",
            touchAction: "none",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          }}
        >
          {/* AFTER image — full width base layer */}
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            className="object-cover object-top"
            draggable={false}
            priority
          />

          {/* BEFORE image — clipped to the left of the handle */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              clipPath: `inset(0 ${100 - position}% 0 0)`,
              transition: dragging.current ? "none" : "clip-path 0.05s",
            }}
          >
            <Image
              src={beforeSrc}
              alt={beforeAlt}
              fill
              className="object-cover object-top"
              draggable={false}
              priority
            />
          </div>

          {/* Divider line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${position}%`,
              transform: "translateX(-50%)",
              width: "2px",
              background: "rgba(255,255,255,0.9)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            {/* Handle */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
              cursor: "col-resize",
            }}>
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <path d="M7 1L1 8L7 15" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 1L21 8L15 15" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .ba-slider-h2 { font-size: 32px !important; }
        }
        @media (max-width: 639px) {
          .ba-slider-h2 { font-size: 26px !important; }
        }
      ` }} />
    </section>
  );
}
