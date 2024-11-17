/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import preline from "preline/plugin.js"

export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}", "./src/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    preline
  ],
}

