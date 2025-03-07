import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        veneer: ['Veneer', 'serif'], // Matches your body font-family
        ramaGothicM: ['Rama Gothic M', 'sans-serif'], // For titles
        lulo: ['Lulo', 'sans-serif'], // For descriptions
      },
      colors: {
        background: "var(--background-color)",
        foreground: "var(--foreground)",
        primary: 'var(--primary-color)', // #F5F5DC
        secondary: 'var(--secondary-color)', // #5C4033
        text: 'var(--text-color)', // #1c1c1c
      },
    },
  },
  plugins: [],
} satisfies Config;
