const STEPS = [
  {
    step: "01.",
    title: "Discover & Strategy",
    desc: "We analyze your store, data, and goals to build a tailored Shopify growth roadmap.",
  },
  {
    step: "02.",
    title: "Design & UX",
    desc: "Conversion-focused Shopify design and UX built to improve store experience and drive more sales.",
  },
  {
    step: "03.",
    title: "Development",
    desc: "Clean, optimised, mobile-first Shopify development with every app and integration fully tested.",
  },
  {
    step: "04.",
    title: "Launch & QA",
    desc: "We rigorously test, refine, and launch your Shopify store with zero downtime and full QA.",
  },
  {
    step: "05.",
    title: "Growth & Scale",
    desc: "Ongoing CRO, email marketing, paid ads, and retention strategies to keep scaling revenue after launch.",
  },
];

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div
      className="p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]"
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        height: "100%",
        boxSizing: "border-box" as const,
      }}
    >
      <p
        className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          color: "rgba(0,0,0,0.12)",
          lineHeight: 1,
          margin: "0 0 10px",
        }}
      >
        {step}
      </p>
      <h3
        className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          color: "#000000",
          lineHeight: 1.3,
          margin: "0 0 10px",
        }}
      >
        {title}
      </h3>
      <p
        className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]"
        style={{
          fontFamily: "'Poppins', sans-serif",
          color: "rgba(0,0,0,0.65)",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className="max-sm:!py-[40px]" style={{ background: "#FFFFFF", padding: "53px 20px" }}>
      <div
        className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          background: "#FBF7ED",
          borderRadius: "28px",
          height: "680px",
          overflow: "hidden",
          boxSizing: "border-box" as const,
        }}
      >

        {/* Title */}
        <h2
          className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
          style={{
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
            color: "#000000",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Our Proven Shopify Development Process
        </h2>

        {/* Subtitle */}
        <p
          className="text-[16px] max-sm:text-[14px]"
          style={{
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
            color: "rgba(0,0,0,0.55)",
            marginTop: "16px",
            lineHeight: 1.65,
          }}
        >
          From the first call with us to hitting your goal, here&apos;s how we work.
          <br className="hidden sm:block" />{" "}
          You can join us at any stage.
        </p>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px] md:max-lg:mt-[16px]">
          {STEPS.slice(0, 3).map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>

        {/* Row 2 — 2 cards centred */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[20px] max-sm:!max-w-full md:max-lg:mt-[16px] md:max-lg:!max-w-[428px]"
          style={{ maxWidth: "calc(66.667% - 7px)", marginLeft: "auto", marginRight: "auto", width: "100%" }}
        >
          {STEPS.slice(3).map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>

      </div>
    </section>
  );
}
