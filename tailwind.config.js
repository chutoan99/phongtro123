/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        1100: "1100px",
      },
      backgroundColor: {
        primary: "#f5f5f5",
        secondary1: "#1266dd",
        secondary2: "#f73859",
      },
      width: {
        modal: "700px",
      },
      height: {
        modal: "500px",
      },
      textColor: {
        yellow: "#ffd454",
        title: "#E13427",
        green: "#16c784",
      },
    },
  },
  plugins: [],
};
