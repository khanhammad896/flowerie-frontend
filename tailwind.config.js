module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        hero: "47rem",
      },
      backgroundImage: {
        hero: "url('/src/assets/images/heroBackground.png')",
      },
    },
    colors: {
      blue: "#1fb6ff",
      white: "#ffffff",
    },
    fontFamily: {
      regular: ["regular"],
      light: ["light"],
      semibold: ["semibold"],
    },
  },

  plugins: [],
};
