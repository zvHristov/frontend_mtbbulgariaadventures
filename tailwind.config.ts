import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'h1': '3.1rem', 
        'h2': '1.8rem',   
        'h3': '1.75rem', 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
