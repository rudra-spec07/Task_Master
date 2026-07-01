/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {

    extend: {

      colors: {

        background: "var(--background)",

        surface: "var(--surface)",

        primary: "var(--primary)",

        "primary-hover": "var(--primary-hover)",

        border: "var(--border)",

        text: {

          primary: "var(--text-primary)",

          secondary: "var(--text-secondary)",

        },

      },

      borderRadius: {

        card: "20px",

      },

      boxShadow: {

        card: "0 10px 30px rgba(0,0,0,.06)",

      },

      fontFamily: {

        sans: ["Inter", "sans-serif"],

      },

    },

  },

  plugins: [],

};