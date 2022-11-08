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
        },
        secondary: {
          100: "#252525",
          200: "#656565",
          300: "#C8C8C8",
          400: "#EEEBEB",
        },
        info: {
          100: "#2D3F58",
          200: "#54758B",
        },
        danger: {
          100: "#FEA996",
        },
      },
      backgroundImage: {
        logo: "url('/assets/images/Logo/logo.svg')",
        "m-logo": "url('/assets/images/m-logo.svg')",
      },
      spacing: {
        12.5: "52px",
      },
    },
  },
  plugins: [],
};
