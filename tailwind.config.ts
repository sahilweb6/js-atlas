import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5B5BD6",
          50: "#EEF0FC",
          100: "#D8DCF9",
          200: "#B2B8F3",
          300: "#8B94ED",
          400: "#5B5BD6",
          500: "#3F3FB8",
          600: "#2E2E96",
          700: "#1F1F74",
          800: "#131352",
          900: "#0A0A30",
        },
        secondary: {
          DEFAULT: "#0F172A",
        },
        accent: {
          DEFAULT: "#22D3EE",
        },
        background: {
          light: "#F8FAFC",
          dark: "#020617",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;