/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#830606",
        "primary-hover": "#600000",
        "brand": "#800000",
        "brand-dark": "#333333",
        "secondary": "#333333",
        "background-light": "#F2F2F7",
        "background-dark": "#121212",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1C1C1E",
        "card-light": "#ffffff",
        "card-dark": "#27272a",
        "text-main": "#1d0c0c",
        "text-secondary": "#6b7280",
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "full": "9999px"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
