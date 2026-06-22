import type { Config } from "tailwindcss"
import tailwindAnimated from "tailwindcss-animate"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      gridTemplateColumns: {
        "5": "repeat(5, minmax(0, 1fr))",
        "6": "repeat(6, minmax(0, 1fr))",
      },

      colors: {
        primary: "#1C1C1C",
        accent: "#B08D57",
        background: "#FAF7F2",
        background2: "#F3EEE7",
        card: "#FFFFFF",
        text: "#2A2520",

        success: "#2E7D5B",
        danger: "#B42318",
        warning: "#C58A1A",
        info: "#2563A8",
      },

      fontFamily: {
        sans: [
          "var(--font-cairo)",
          "sans-serif",
        ],

        heading: [
          "var(--font-ibm-plex-arabic)",
          "sans-serif",
        ],

        luxury: [
          "var(--font-kufi)",
          "sans-serif",
        ],
      },
    },
  },

  darkMode: "class",

  plugins: [tailwindAnimated],
}

export default config