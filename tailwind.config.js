module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        hero: "47rem",
        "city-w": 76,
        "city-h": 84,
        "venue-w": 350,
        "venue-h": 380,
      },
      backgroundImage: {
        hero: "url('/src/assets/images/heroBackground.png')",
      },
      transitionProperty: {
        width: "width",
      },
      borderRadius: {
        20: 20,
      },
      fontSize: {
        20: 20,
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        slate: "rgb(226 232 240)",
        maroon: "#6F3939",
        light: "#807979",
        "light-maroon": "#DF7E7E",
        "light-maroon-dark": "#CE6868",
        "maroon-300": "#6F393920",
      },
      fontFamily: {
        regular: ["regular"],
        light: ["light"],
        semibold: ["semibold"],
      },
      maxWidth: {
        header: "23rem",
      },
      lineHeight: {
        11: "58.51px",
      },
    },
  },

  plugins: [require("tailwindcss"), require("autoprefixer")],
};
