import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        ink: {
          DEFAULT: "#15130F",
          soft: "#1C1914",
          softer: "#242019",
        },
        ivory: {
          DEFAULT: "#F2ECDD",
          dim: "#E8E0CC",
        },
        cream: "#F5F1E6",
        graphite: "#1C1912",
        clay: "#9A3F2C",
        muted: {
          light: "#A79E8C",
          dark: "#6B6455",
        },
        gold: {
          DEFAULT: "#C9A24B",
          soft: "#D9BC78",
          deep: "#8A6F2E",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(201,162,75,0.35)",
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--tilt, 0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--tilt, 0deg))" },
        },
      },
      animation: {
        floatSlow: "floatSlow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
