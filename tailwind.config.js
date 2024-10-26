/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      colors: {
        primary: "#facc15",
        gray1: "#e7e5e4", // stone 200
        gray2: "#d6d3d1", // stone 300

      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
