/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      colors:{
        "darkBlue" : "hsl(218, 23%, 16%)",
        "darkGrayishBlue" : "hsl(217, 19%, 24%)",
        "grayishBlue" : "hsl(217, 19%, 38%)",
        "neonGreen" : "hsl(150, 100%, 66%)",
        "lightCyan" : "hsl(193, 38%, 86%)"
      }
    },
  },
  plugins: [],
}