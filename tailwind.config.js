/** @type {import('tailwindcss').Config} */

// Colors come from CSS variables so the light and dark themes share one set of class names
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        "bg-alt": token("bg-alt"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        fg: token("fg"),
        muted: token("muted"),
        subtle: token("subtle"),
        line: token("line"),
        accent: token("accent"),
        "accent-2": token("accent-2"),
        "accent-soft": token("accent-soft"),
        "on-accent": token("on-accent"),
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
