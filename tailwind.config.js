/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jose': ['Josefin Sans', 'Arial', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'dark-image': "url('./public/lightmodeImage.png')",
        'light-image': "url('./public/darkmodeImage.png')"
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

