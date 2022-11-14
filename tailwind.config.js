/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#96F0FE",
          200: "#ABF3FE",
          300: "#B6F5FF",
          400: "#96F0FE80",
        },
        warning: {
          100: "#FFDC62",
          200: "#FFE381",
          300: "#FFE791",
          400: "#FFEDB0",
          500: "#FFCB66",
        },
        secondary: {
          100: "#252525",
          200: "#656565",
          300: "#C8C8C8",
          400: "#EEEBEB",
          500: "#98B7C4",
        },
        info: {
          100: "#2D3F58",
          200: "#54758B",
        },
        danger: {
          100: "#FEA996",
          200: "#FD756F",
        },
        success: {
          100: "#5FDD7A",
        },
      },
      backgroundImage: {
        logo: "url('/public/images/logo/logo.svg')",
        "m-logo": "url('/public/images/logo/m-logo.svg')",
      },
      spacing: {
        12.5: "52px",
        17: "72px",
        18: "74px",
        25: "98px",
        27: "100px",
      },
      fontSize: {
        "3.5xl": ["32px", "48px"],
      },
      borderRadius: {
        20: "20px",
        "4xl": "30px",
        "5xl": "32px",
        40: "40px",
      },
      letterSpacing: {
        king: ".15em",
      },
    },
  },
  plugins: [],
};
