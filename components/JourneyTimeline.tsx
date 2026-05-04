"use client";

import { useEffect, useRef } from "react";

type Milestone = {
  year: string;
  title: string;
  desc: string;
  position: "above" | "below";
};

const MILESTONES: Milestone[] = [
  {
    year: "2017",
    title: "Where It All Began",
    desc: "Started with a laptop, a vision, and zero clients. A small crew of Shopify-obsessed builders hungry to prove themselves. First store shipped. First win earned.",
    position: "below",
  },
  {
    year: "2018",
    title: "First Million Generated",
    desc: "Hit $1M in revenue generated for merchants. Referrals started rolling in. Team grew to 10. The grind was real - and it was working.",
    position: "above",
  },
  {
    year: "2019",
    title: "Shopify Partner Status",
    desc: "Officially became a Shopify Partner. Crossed 50+ stores built. Expanded into full-service - design, dev, and strategy under one roof.",
    position: "below",
  },
  {
    year: "2020",
    title: "Ecommerce Boom",
    desc: "COVID hit. Ecommerce exploded. We helped brands pivot overnight and scale fast. $50M+ in client revenue. Team doubled to 25+.",
    position: "above",
  },
  {
    year: "2021",
    title: "$150M+ & Shopify Plus",
    desc: "Earned Shopify Plus Partner status. Crossed 200+ stores. Hit $150M in merchant revenue. Started working with 7 and 8-figure DTC brands.",
    position: "below",
  },
  {
    year: "2022",
    title: "Partnerships & Growth",
    desc: "Became Klaviyo Partner and Meta Business Partner. 350+ stores shipped. $300M+ revenue generated. Team scaled to 50+.",
    position: "above",
  },
  {
    year: "2023",
    title: "AI-Powered Operations",
    desc: "Integrated ChatGPT, Cursor AI, and automation into our workflows. Faster builds. Smarter strategies. 500+ stores crossed. $550M+ in client revenue.",
    position: "below",
  },
  {
    year: "2024",
    title: "Global Expansion",
    desc: "Expanded across North America and Europe. 80+ team members. 650+ stores shipped. $750M+ revenue milestone unlocked.",
    position: "above",
  },
  {
    year: "2025",
    title: "$900M+ and Counting",
    desc: "700+ stores built. $900M+ in revenue generated for merchants. Full-stack Shopify Plus agency - and we're just getting started.",
    position: "below",
  },
  {
    year: "2026",
    title: "Chasing the Billion",
    desc: "$1B+ in client revenue - that's the target. New markets. New partnerships. Same obsession with results. This is the year we cement our legacy.",
    position: "above",
  },
];

export default function JourneyTimeline() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.classList.add("is-dragging");
      startX = e.pageX - el.offsetLeft;
      startScroll = el.scrollLeft;
    };
    const onMouseLeave = () => {
      isDown = false;
      el.classList.remove("is-dragging");
    };
    const onMouseUp = () => {
      isDown = false;
      el.classList.remove("is-dragging");
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = x - startX;
      el.scrollLeft = startScroll - walk;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section className="journey-section" style={{ background: "#FBF7ED" }}>
      <h2
        className="journey-title elementor-heading-title elementor-size-default"
        role="heading"
        aria-level={2}
      >
        Our Journey as a Shopify Agency
      </h2>

      <div
        id="timelineContainer"
        className="timelineContainer timeline-container"
        ref={scrollerRef}
        aria-label="Timeline of milestones"
      >
        <div className="timeline-track">
          <div className="timeline-line" aria-hidden="true" />
          {MILESTONES.map((m) => (
            <div className="timeline-cell" key={m.year}>
              <div className="timeline-dot" aria-hidden="true" />
              {m.position === "above" ? (
                <div className="timeline-stack timeline-stack--above">
                  <div className="timeline-content">
                    <p className="timeline-text">{m.desc}</p>
                  </div>
                  <div className="timeline-tail timeline-tail--down" aria-hidden="true" />
                  <div className="timeline-item">
                    <span className="timeline-year">{m.year}</span>
                    <span className="timeline-sep" aria-hidden="true" />
                    <span className="timeline-title">{m.title}</span>
                  </div>
                </div>
              ) : (
                <div className="timeline-stack timeline-stack--below">
                  <div className="timeline-item">
                    <span className="timeline-year">{m.year}</span>
                    <span className="timeline-sep" aria-hidden="true" />
                    <span className="timeline-title">{m.title}</span>
                  </div>
                  <div className="timeline-tail timeline-tail--up" aria-hidden="true" />
                  <div className="timeline-content">
                    <p className="timeline-text">{m.desc}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .journey-section {
          padding: 0 20px;
          color: #334155;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          overflow: hidden;
        }
        .journey-title {
          font-family: 'Poppins', sans-serif;
          font-size: 42px;
          font-weight: 700;
          color: #000000;
          line-height: 52.01px;
          width: 1055.99px;
          max-width: 100%;
          height: 52.01px;
          text-align: center;
          margin: 0 auto 48px;
          padding: 0;
          white-space: nowrap;
        }
        .timelineContainer {
          width: 1320px;
          max-width: 100%;
          height: 618px;
          padding: 300px 20px;
          box-sizing: border-box;
          margin: 0 auto;
          color: #334155;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          overflow-x: auto;
          overflow-y: visible;
          cursor: grab;
          user-select: none;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .timelineContainer::-webkit-scrollbar { display: none; }
        .timelineContainer.is-dragging { cursor: grabbing; }
        .timelineContainer.is-dragging * {
          pointer-events: none;
          user-select: none;
        }
        .timeline-track {
          position: relative;
          height: 18px;
          display: grid;
          grid-template-columns: repeat(${MILESTONES.length}, 360px);
          align-items: center;
          width: max-content;
          min-width: 100%;
        }
        .timeline-line {
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 2px;
          background: #DFD7C5;
          transform: translateY(-50%);
          z-index: 0;
        }
        .timeline-cell {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 18px;
        }
        .timeline-dot {
          width: 14px;
          height: 14px;
          background: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%);
          border: 4px solid #FBF7ED;
          border-radius: 9999px;
          box-shadow: 0 0 0 1px rgba(61, 199, 122, 0.55);
          position: relative;
          z-index: 2;
        }
        .timeline-stack {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1;
        }
        .timeline-stack--above {
          bottom: calc(100% + 14px);
        }
        .timeline-stack--below {
          top: calc(100% + 14px);
        }
        .timeline-content {
          width: 320px;
          min-height: 215.99px;
          background: #FFFFFF;
          padding: 30px;
          color: #334155;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          border-radius: 14px;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.07);
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .timeline-text {
          width: 260px;
          max-width: 100%;
          margin: 0 0 28px 0;
          color: #333333;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          text-align: center;
        }
        .timeline-tail {
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
        }
        .timeline-tail--down {
          border-top: 14px solid #FFFFFF;
          filter: drop-shadow(0 8px 4px rgba(0, 0, 0, 0.04));
        }
        .timeline-tail--up {
          border-bottom: 14px solid #FFFFFF;
          filter: drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.04));
        }
        .timeline-stack--above .timeline-content {
          margin-bottom: 0;
        }
        .timeline-stack--above .timeline-tail--down {
          margin-top: 0;
          margin-bottom: 12px;
        }
        .timeline-stack--below .timeline-tail--up {
          margin-top: 12px;
          margin-bottom: 0;
        }
        .timeline-item {
          width: 350px;
          max-width: 100%;
          height: 17.99px;
          color: #334155;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 8px;
          white-space: nowrap;
          text-align: center;
        }
        .timeline-year {
          color: #000000;
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 32px;
          line-height: 1;
        }
        .timeline-title {
          color: #000000;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 16px;
          line-height: 1;
        }
        @media (max-width: 768px) {
          .journey-section { padding: 0 15px; }
          .journey-title {
            font-size: 30px !important;
            line-height: 40px !important;
            height: auto !important;
            width: 100% !important;
            max-width: 400px !important;
            white-space: normal !important;
            margin: 0 auto 32px !important;
            padding: 0 15px !important;
          }
          .timelineContainer {
            width: 100%;
            height: 540px;
            padding: 260px 16px;
          }
          .timeline-track {
            grid-template-columns: repeat(${MILESTONES.length}, 280px);
          }
          .timeline-content {
            width: 240px;
            min-height: 180px;
            padding: 20px;
          }
          .timeline-text {
            width: 200px;
            font-size: 14px;
            line-height: 1.55;
            margin: 0 0 16px 0;
          }
          .timeline-item {
            width: 260px;
            font-size: 14px;
          }
          .timeline-year { font-size: 26px; }
          .timeline-title { font-size: 14px; }
        }
      ` }} />
    </section>
  );
}
