module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/hero-image.jpg')",
        "about-image": "url('/src/assets/about-image.jpg')",
      },
      screens: {
        "mobile-sm": "320px",
        "mobile-md": "375px",
        "mobile-lg": "425px",
      },
    },
  },
  plugins: [],
};
