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
      },
      textColor: {
        secondary: "#B6B6B6"
      },
      backgroundColor: {
        modal: "rgba(21, 21, 21, 1)",
        blackFrame: "#2D2D2D"
      },
      boxShadow: {
        modal: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
      },
      screens: {
        "small": "480px",
      }
    },
  },
  plugins: [],
};
export default config;
