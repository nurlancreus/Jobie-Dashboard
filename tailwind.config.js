/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#292929",
        body: "#F2F2F2",
        "gray-100": "#E3E3E3",
        "gray-200": "#BFBFBF",
        "gray-300": "#8F8F8F",
        "gray-400": "#797979",
        "gray-500": "#757575",
        "gray-600": "#616161",
        "gray-700": "#5C5C5C",
        "gray-800": "#3D3D3D",
        //"gray-850": "#0C0C0CB2",
        "gray-900": "#000000B2",

        "primary-300": "#E3D7FF",
        "primary-500": "#BEA1FF",
        "primary-600": "#9B70FF",
        "primary-700": "#7649E0",
        "primary-800": "#4E36E2",
        primary: "#40189D",
        "primary-hover": "#2e1171",

        secondary: "#FFBE17",
        accent: "#FF424D",
      },
      // backgroundImage: () => ({
      //   "gradient-yellowred":
      //     "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      //   "mobile-home": "url('./assets/images/HomePageGraphic.png')",
      // }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // content: {
      //   evolvetext: "url('./assets/images/EvolveText.png')",
      //   abstractwaves: "url('./assets/images/AbstractWaves.png')",
      //   sparkles: "url('./assets/images/Sparkles.png')",
      //   circles: "url('./assets/images/Circles.png')",
      // },
      fontSize: {
        heading: ["24px", "42px"],
        // sm: ["14px", "20px"],
        // base: ["16px", "24px"],
        // lg: ["20px", "28px"],
        // xl: ["24px", "32px"],
        "5xl": ["48px", "72px"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1500px",
      xl: "1800px",
    },
  },
  plugins: [],
};
