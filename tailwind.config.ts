/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        signika: ["var(--font-signika)", ...fontFamily.sans],
      },
      fontSize: {
        sm: ["0.75rem", "1.25rem"],
        xs: ["0.625rem", "1rem"],
        "4xl": ["2rem", "2.5rem"],
        "5xl": ["3rem", "3.12rem"],
        "6xl": ["3.625rem", "3.75rem"],
        "7xl": ["5rem", "6.27rem"],
        "8xl": ["5.625rem", "7.054rem"],
      },
     
      colors: {
        background: "var(--background)",
        foreground: "var(--text-primary)",
       "secondary-bg": "var(--secondary-background)",  
        secondary: "var(--text-secondary)",  
      },
      boxShadow: {
        "image-box": "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px", // Add the image-box shadow
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
export default config;

