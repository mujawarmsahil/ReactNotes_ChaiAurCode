/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class", // this configuration is not present in vite installation steps of tailwind but we have to use  these  configuration while we are working with dark mode and light mode theme
  theme: {
    extend: {},
  },
  plugins: [],
}