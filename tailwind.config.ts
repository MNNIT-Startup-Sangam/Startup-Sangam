import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom": "linear-gradient(to right, #002e3b, #a21caf)", // Custom gradient from cyan-900 to cyan-800
      }, 
      fontFamily: {
        custom1: ['Roboto', 'sans-serif'], // Adding 'Roboto' as the default sans font
      },
      colors: {
        'body-color': '#f8f9fa', 
      },
    },
  },
  plugins: [],
};
export default config;
