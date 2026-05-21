import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#060F35",
          DEFAULT: "#0A1F6E",
          light: "#1A3A8F"
        },
        secondary: "#F5C400",
        surface: "#F8F9FC"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      borderRadius: {
        card: "12px",
        cta: "10px"
      },
      boxShadow: {
        card: "0 4px 20px rgba(6, 15, 53, 0.10)",
        hover: "0 8px 40px rgba(6, 15, 53, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
