import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Color Hunt Palette
        palette: {
          1: "#F3EEEA",
          2: "#EBE3D5",
          3: "#B0A695",
          4: "#776B5D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
