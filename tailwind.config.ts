import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Core brand palette (ecommwizards.com) ──
        brand: {
          DEFAULT: "#046bd2",   // secondary blue — dominant (370 uses)
          dark:    "#045cb4",   // darker blue
          50:      "#f0f5fa",
          100:     "#d1e4f7",
          200:     "#a3c9ef",
          300:     "#6ec1e4",   // accent light-blue
          400:     "#046bd2",
          500:     "#046bd2",
          600:     "#045cb4",
          700:     "#1e293b",
          800:     "#1e293b",
          900:     "#1e293b",
        },
        primary:   "#61ce70",   // green — CTAs
        secondary: "#046bd2",   // blue
        accent:    "#6ec1e4",   // light blue
        gold:      "#b18945",   // warm gold (1070 uses)

        // ── Neutrals ──
        dark: {
          DEFAULT: "#334155",   // main text (4567 uses)
          50:      "#f8fafc",
          100:     "#f1f5f9",
          200:     "#e2e8f0",
          300:     "#d1d5db",
          400:     "#69727d",
          500:     "#7a7a7a",
          600:     "#334155",
          700:     "#1e293b",
          800:     "#101010",
          900:     "#000000",
        },

        // ── Backgrounds ──
        canvas: "#ffffff",
        cream:  "#fbf7ed",
        muted:  "#f0f5fa",
      },

      fontFamily: {
        sans:    ["Poppins", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
        body:    ["Poppins", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Site-extracted type scale
        "xs":  ["11px", { lineHeight: "25px" }],
        "sm":  ["13px", { lineHeight: "23px" }],
        "sm2": ["14px", { lineHeight: "22px" }],
        "base":["16px", { lineHeight: "1.6" }],
        "md":  ["15px", { lineHeight: "25px" }],
        "lg":  ["18px", { lineHeight: "28px" }],
        "xl":  ["20px", { lineHeight: "30px" }],
        "2xl": ["24px", { lineHeight: "31.2px" }],
        "3xl": ["30px", { lineHeight: "30px" }],
        "4xl": ["40px", { lineHeight: "50px" }],
        "5xl": ["42px", { lineHeight: "52px" }],
        "6xl": ["52px", { lineHeight: "62px" }],
      },

      spacing: {
        // Site-extracted spacing scale (base: 2px)
        "0.5": "2px",
        "2.5": "10px",
        "5":   "10px",
        "6":   "24px",
        "10":  "20px",
        "12":  "24px",
        "20":  "40px",
        "22":  "45px",
        "30":  "60px",
      },

      borderRadius: {
        none:  "0",
        sm:    "3px",
        DEFAULT:"10px",
        md:    "10px",
        lg:    "10px",
        xl:    "20px",
        "2xl": "20px",
        full:  "100px",
        pill:  "50px",
      },

      boxShadow: {
        xs:   "rgba(0,0,0,0.05) 0px 1px 2px 0px",
        sm:   "rgba(0,0,0,0.08) 0px 2px 8px 0px",
        md:   "rgba(4,107,210,0.12) 0px 4px 16px 0px",
        lg:   "rgba(4,107,210,0.16) 0px 8px 32px 0px",
        nav:  "0 4px 24px -2px rgba(51,65,85,0.10)",
        card: "rgba(0,0,0,0.05) 0px 1px 2px 0px",
      },

      maxWidth: {
        container: "1200px",
      },

      screens: {
        xs:   "480px",
        sm:   "640px",
        md:   "769px",
        lg:   "1025px",
        xl:   "1280px",
        "2xl":"1536px",
      },

      transitionDuration: {
        "200": "200ms",
        "250": "250ms",
        "300": "300ms",
        "400": "400ms",
      },

      backgroundImage: {
        "gradient-dark": "linear-gradient(rgb(0,0,0) 0%, rgb(18,18,18) 60%)",
        "gradient-dark-angled": "linear-gradient(280deg, rgb(0,0,0) 0%, rgb(18,18,18) 100%)",
        "gradient-primary": "linear-gradient(135deg, #046bd2 0%, #045cb4 100%)",
        "gradient-green":  "linear-gradient(135deg, #61ce70 0%, #4ab85a 100%)",
      },

      zIndex: {
        "1":   "1",
        "10":  "10",
        "20":  "20",
        "30":  "30",
        "40":  "40",
        "50":  "50",
        "modal": "100",
      },
    },
  },
  plugins: [],
};

export default config;
