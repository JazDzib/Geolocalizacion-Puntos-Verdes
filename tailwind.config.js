const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", ".flowbite-react\\class-list.json", "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",],
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact ],
}