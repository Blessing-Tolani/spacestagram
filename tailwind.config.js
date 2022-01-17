module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shopifyGreen: "#004C3F",
        shopifyGreenlight: "#00604f",
      },
      width: {
        30: "30%",
      },
      fontFamily: {
        sourcesans: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
