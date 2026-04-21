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
          950: "#14100d",
          900: "#1a1612",
          850: "#221e1a",
          800: "#2a2520",
          700: "#20222c",
          600: "#2c2f3d",
          500: "#3d4254",
          400: "#5c6278",
          300: "#8b92a8",
          200: "#c5c9d4",
          100: "#e8eaf0",
        },
        oura: {
          readiness: "#f8b4c0",
          sleep: "#c9b6ff",
          activity: "#ffb088",
          heart: "#ff8aa8",
          temp: "#ffd36b",
          hrv: "#b8d4ff",
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
        glow: "0 0 60px -12px rgba(255, 170, 180, 0.14)",
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 0 0 1px rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
