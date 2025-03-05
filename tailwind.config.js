/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        loud: "Cormorant",
        primary: "Open Sans",
      },
      colors: {
        primary: "#FEC834",
        primaryHover: "#FED35D",

        secondary: "transparent",
        secondaryHover: "#E0E0E0",
        // gray0: "", // stone 100 facc15
        gray1: "#e7e5e4", // stone 200
        gray2: "#C5C1BE", // stone 300
        // gray3: "", // stone 400
        gray4: "#78716c", // stone 500
        gray5: "#57534e", // stone 600
        // gray6: "#", // stone 700
        gray7: "#292524", // stone 800
        alert: "#FE0040",
      },
      backgroundImage: {
        hero: "url('./src/assets/pizza.jpg')", // Path to your image
      },
    },
  },
  plugins: [],
};
