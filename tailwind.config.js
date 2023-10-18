/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "480px",
        lg: "976px",
        xl: "1300px",
      },
      colors: {
        accent: "#C47344",
        gray: "#322F2E",
        silver: "#E1DED9",
        darkSilve: "#D3D3D3",
        crem: "#FFFAF2",
        accentPer: "#F9A38F",
      },
    },
  },
  plugins: [],
};
