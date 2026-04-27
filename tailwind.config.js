import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        "on-error": "#ffffff",
        surface: "#fff8f5",
        "primary-fixed": "#d0e9d4",
        "on-tertiary-container": "#999282",
        "on-primary-fixed": "#0b2013",
        "on-secondary-container": "#6c1900",
        background: "#fff8f5",
        primary: "#061b0e",
        "surface-variant": "#e9e1dc",
        "inverse-surface": "#34302c",
        error: "#ba1a1a",
        "outline-variant": "#c3c8c1",
        "inverse-on-surface": "#f8efea",
        "tertiary-fixed-dim": "#cec6b5",
        "on-tertiary": "#ffffff",
        "primary-fixed-dim": "#b4cdb8",
        outline: "#737973",
        "surface-container-lowest": "#ffffff",
        "error-container": "#ffdad6",
        "on-primary": "#ffffff",
        "surface-container": "#f5ece7",
        "surface-container-low": "#fbf2ed",
        "on-surface-variant": "#434843",
        "on-secondary-fixed": "#3b0900",
        "on-surface": "#1e1b18",
        "on-secondary-fixed-variant": "#862201",
        "on-primary-container": "#819986",
        "on-tertiary-fixed": "#1f1b10",
        tertiary: "#1a170c",
        "secondary-fixed-dim": "#ffb5a0",
        "tertiary-fixed": "#eae2d0",
        "surface-dim": "#e1d8d4",
        secondary: "#a73918",
        "surface-tint": "#4d6453",
        "secondary-container": "#fe7952",
        "secondary-fixed": "#ffdbd1",
        "on-secondary": "#ffffff",
        "surface-container-highest": "#e9e1dc",
        "surface-bright": "#fff8f5",
        "on-tertiary-fixed-variant": "#4b4639",
        "on-primary-fixed-variant": "#364c3c",
        "on-error-container": "#93000a",
        "on-background": "#1e1b18",
        "surface-container-high": "#efe6e2",
        "inverse-primary": "#b4cdb8",
        "tertiary-container": "#2f2b1f",
        "primary-container": "#1b3022",
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
        unit: "4px",
      },

      fontFamily: {
        display: ["Epilogue", "sans-serif"],
        body: ["Be Vietnam Pro", "sans-serif"],
        "display-xl": ["Epilogue", "sans-serif"],
        "body-md": ["Be Vietnam Pro", "sans-serif"],
        "body-lg": ["Be Vietnam Pro", "sans-serif"],
        "label-sm": ["Be Vietnam Pro", "sans-serif"],
        "headline-md": ["Epilogue", "sans-serif"],
        "headline-lg": ["Epilogue", "sans-serif"],
        "price-label": ["Be Vietnam Pro", "sans-serif"],
      },

      fontSize: {
        "display-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
        "price-label": ["20px", { lineHeight: "1", letterSpacing: "0.01em", fontWeight: "700" }],
      },
    },
  },

  plugins: [
    forms,
    containerQueries,
  ],
};