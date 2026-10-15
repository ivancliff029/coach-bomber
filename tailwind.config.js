/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#15120F",
          soft: "#1E1A15",
          line: "#3A342C",
        },
        clay: {
          DEFAULT: "#B8402E",
          dim: "#8F3225",
          bright: "#D24E39",
        },
        ochre: {
          DEFAULT: "#D9A441",
          soft: "#E7C077",
        },
        sand: {
          DEFAULT: "#F2E9D8",
          dim: "#C9BEA8",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        body: ["var(--font-worksans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
