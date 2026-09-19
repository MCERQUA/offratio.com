import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#0a0908",
        char: "#161210",
        smoke: "#241f1a",
        oxblood: {
          DEFAULT: "#6e1423",
          light: "#8f1c2e",
          dark: "#4a0e18",
        },
        brass: {
          DEFAULT: "#b08d57",
          light: "#c9a96a",
          dark: "#8a6a3d",
        },
        amber: {
          DEFAULT: "#e8a33d",
          light: "#f0b429",
        },
        bone: "#ede4d3",
        parchment: "#e4d8bf",
        ink: "#1c1712",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        stamp: ["var(--font-stamp)", "monospace"],
      },
      backgroundImage: {
        "grain": "url('/images/grain.png')",
      },
    },
  },
  plugins: [],
};

export default config;
