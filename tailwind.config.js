// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textprimary: "#606060",
        black: "#000000",
        white: "#ffffff",
        desctext: "#595B61",
        textred1: "#FFC6B0",
        textred2: "#784828",
        bgcolor: "#C5C5C1",
      },
    },
  },
  plugins: [],
}