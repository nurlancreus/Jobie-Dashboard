/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark-clr)",
        body: "var(--body-bg)",
        card: "var(--card-bg)",
        loader: "var(--loader-clr)",
        range: "var(--range-clr)",
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        "gray-300": "var(--gray-300)",
        "gray-400": "var(--gray-400)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "gray-700": "var(--gray-700)",
        "gray-800": "var(--gray-800)",
        //"gray-850": "var(--gray-100)",
        "gray-900": "var(--gray-900)",

        "primary-300": "var(--primary-300)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",
        primary: "var(--primary-clr)",
        "primary-hover": "var(--primary-hover)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        heading: ["24px", "42px"],
        // sm: ["14px", "20px"],
        xs: ["clamp(10px,2vw,12px)", "clamp(14px,2vw,16px)"],
        base: ["clamp(14px,2vw,16px)", "clamp(20px,2vw,24px)"],
        lg: ["clamp(16px,2vw,18px)", "clamp(24px,2vw,28px)"],
        xl: ["clamp(18px,2vw,20px)", "clamp(24px,2vw,28px)"],
        "2xl": ["clamp(22px,2vw,24px)", "clamp(28ypx,2vw,32px)"],
        // xl: ["24px", "32px"],
        "4xl": ["clamp(32px,2vw + 1px,36px)", "clamp(36px,2vw + 1px,40px)"],
        "5xl": ["clamp(40px,2vw + 1px,48px)", "clamp(64px,2vw + 1px,72px)"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1600px",
      xxl: "1800px",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit")],
};
