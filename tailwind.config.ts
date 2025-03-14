import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      tablet: "1024px", // Tambahkan ukuran kustom "tablet"
      lg: "1280px", // Kembalikan default lg
      xl: "1536px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        theme: {
          ascent: "#389ED9",
          green: "#B1CF1F",
          dark: "#28292B",
          secondary: "#636363",
          gray: "#9B9B9B",
          gray_lg: "#E9E9E9",
          form: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
