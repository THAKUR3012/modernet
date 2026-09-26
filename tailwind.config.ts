import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d7caf",
          dark: "#166088",
          light: "#38bdf8",
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          500: "#1d7caf",
          600: "#166088",
          700: "#0e4d6e",
        },
        dark: {
          DEFAULT: "#0f172a",
          surface: "#1e293b",
          card: "#111c33",
        },
        accent: {
          DEFAULT: "#3b82f6",
          orange: "#f97316",
        }
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
