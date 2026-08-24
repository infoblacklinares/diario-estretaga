import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Marca El Estratega — azul editorial + magenta
        navy: {
          DEFAULT: "#071A35",
          light: "#0D294E",
          lighter: "#123763"
        },
        pink: {
          DEFAULT: "#E90069",
          light: "#FF2B87"
        },
        bg: "#F4F5F7",
        paper: "#FFFFFF",
        ink: "#101828",
        muted: "#667085",
        line: "#E5E7EB"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      keyframes: {
        // Franja de última hora
        tickerScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        ticker: "tickerScroll 28s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
