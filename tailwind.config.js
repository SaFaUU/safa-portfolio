/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#482dff",

          "secondary": "#343232",

          "accent": "#343232",

          "neutral": "#272626",

          "base-100": "#0f0f0f",

          "info": "#0000FF",

          "success": "#008000",

          "warning": "#FFFF00",

          "error": "#FF0000",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
