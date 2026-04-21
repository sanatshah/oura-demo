import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07070a",
          900: "#0b0b10",
          850: "#0f1016",
          800: "#14151d",
          700: "#1b1d27",
          600: "#252834",
          500: "#3a3e4c",
          400: "#585c6c",
          300: "#8b90a2",
          200: "#c4c7d1",
          100: "#e8e9ee",
        },
        oura: {
          readiness: "#7fdcbe",
          sleep: "#9b8cff",
          activity: "#ff9f6b",
          heart: "#ff6b9d",
          temp: "#ffd36b",
          hrv: "#6bc4ff",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(127, 220, 190, 0.25)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
