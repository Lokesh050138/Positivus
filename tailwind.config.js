module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideY: {
          "0%": { transform: "translateY(0%)" },
          "45%": { transform: "translateY(-150%)" },
          "55%": { transform: "translateY(150%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        slideY: "slideY 3s linear infinite",
      },
    },
  },
  plugins: [],
};
