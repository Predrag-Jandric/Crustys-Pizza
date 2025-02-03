/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      fontFamily: {
        logo: "Yellowtail",
      },
      colors: {
        primary: "#4dccb7 ",
        primaryHover: "#81DACB ",
        // gray0: "", // stone 100 facc15
        gray1: "#e7e5e4", // stone 200
        gray2: "#d6d3d1", // stone 300
        // gray3: "", // stone 400
        gray4: "#78716c", // stone 500
        gray5: "#57534e", // stone 600
        // gray6: "#", // stone 700
        gray7: "#292524", // stone 800
        alert1: "#fee2e2", // red 100
        alert2: "#f97316", // red 500
        alert3: "#9a3412", // red 800
      },
      backgroundImage: {
        'hero': "url('./src/assets/pizza.jpg')", // Path to your image
      },
    },
  },
  plugins: [],
};
