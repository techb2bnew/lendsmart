import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/header-footer-component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/pages-component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
