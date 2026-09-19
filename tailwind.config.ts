import type { Config } from "tailwindcss";

/**
 * Palette is SAMPLED from Josh's reference image (refs/sms-02ba8b2e.png), not
 * eyeballed. The brief approximated the accent as #9FE870; the actual dominant
 * saturated green in the artwork is #d3fa03 — a far more acid, yellow-leaning
 * chartreuse. Using the brief's value would have read as "minty" next to the
 * client's own wordmark.
 *
 * BANNED (USER.md hard no): purple, pink, blue gradients. There is deliberately
 * no cool hue anywhere in this file — even the "night" tones are warm-shifted
 * charcoals, because the reference's desert sky is warm, never blue.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warm near-blacks — the desert-night base
        void: "#0a0a08",
        char: "#14120e",
        smoke: "#221e18",
        grit: "#3a342a",

        // Signature acid lime — sampled #d3fa03
        acid: {
          DEFAULT: "#d3fa03",
          light: "#e4ff5c",
          dim: "#a8c802",
          dark: "#6d8201",
        },

        // Alarm red — stamps, NDA slash, TUNE IN
        alarm: {
          DEFAULT: "#f51d1d",
          light: "#ff4a4a",
          dark: "#a80f0f",
        },

        // Desert sunset
        sunset: {
          DEFAULT: "#f5842c",
          light: "#efb375",
          deep: "#c2481a",
        },

        bone: "#f2ece0",
        sand: "#d8cbb2",
        ink: "#14120e",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        stamp: ["var(--font-stamp)", "monospace"],
      },
      backgroundImage: {
        grain: "url('/images/grain.png')",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "94%": { opacity: "0.55" },
          "96%": { opacity: "1" },
          "97%": { opacity: "0.7" },
        },
      },
      animation: {
        flicker: "flicker 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
