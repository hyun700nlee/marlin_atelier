/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2930",
        sumi: "#111827",
        rice: "#f8f5ef",
        washi: "#ede7dc",
        indigo: "#36557a",
        hydrangea: "#6f92bd",
        lavender: "#9f8fb7",
        moss: "#748264",
        plum: "#7c5265"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(31, 41, 48, 0.12)"
      }
    }
  },
  plugins: []
};
