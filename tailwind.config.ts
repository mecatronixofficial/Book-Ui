import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 60% — page background / large surfaces
        sandal: {
          DEFAULT: "#F8F1E7",
          card: "#F3E5CF",
          line: "#E7D7BC",
        },
        // 30% — navbar, footer, headings, structural weight
        brown: {
          DEFAULT: "#4A3428",
          deep: "#3A2A1F",
          soft: "#5C4033",
        },
        // 10% — accent: buttons, icons, active states, highlights
        gold: {
          DEFAULT: "#C8894A",
          dark: "#B87333",
          light: "#E0AC77",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        card: "0 2px 10px rgba(74, 52, 40, 0.08)",
        "card-hover": "0 14px 32px rgba(74, 52, 40, 0.16)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pageTurn: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(-8deg)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
