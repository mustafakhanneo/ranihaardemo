import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
       primary: "#F5F5DC",
       secondary: "#800000",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        adelia: ['var(--font-adelia)'],
        nature: ['var(--font-nature)'],
        rubik: ['var(--font-rubik)'],
        archivo: ['var(--font-archivo)'],
        pilcrow: ['var(--font-pilcrow)'],
        tanker: ['var(--font-tanker)'],
        nunito: ['var(--font-nunito)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
export default config;
