import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#FEA918",
      white: "#FFF",
      black: "#040404",
      semiBlack: "#111",
    },
    extend: {
      fontFamily: {
        sans: ["KalamehRegular"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-image": "url('/images/bg-main.webp')",
        "contact-us-image": "url('/images/contact-us.webp')",
        "about-us-image": "url('/images/about-us.webp')",
        "job-image": "url('/images/job.webp')",
        "honors-image": "url('/images/honors.webp')",
        "statistics-image": "url('/images/statistics.webp')",
        "work-plans-image": "url('/images/work-plans.webp')",
        "footer-image": "url('/images/footer-bg.svg')",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

export default config;
