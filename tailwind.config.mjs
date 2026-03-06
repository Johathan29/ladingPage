/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#3c3cf6",
        "background-light": "#f5f5f8",
        "background-dark": "#0F172A",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Satoshi", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },

        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        fadeScale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },

      animation: {
        zoom: "zoom 15s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-scale": "fadeScale 1s ease-out forwards",
      },
    },
  },

  plugins: [],
};