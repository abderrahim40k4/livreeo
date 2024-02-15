/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
    "./node_modules/flowbite/**/*.js",
    './vueform.config.js', // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1064px",
        xl: "1320px",
        "2xl": "1576px",
      },
    },
    colors: {
      "dark-blue": "#004079",
      "soft-dark-blue": "#3273BA",
      "light-blue": "#6192BF",
      "white-blue": "#DEEFF9",
      "white-color": "#fff",
      "accent-color": "#3476B9",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
    require("flowbite/plugin"),
    require('@vueform/vueform/tailwind'),
  ],
};
