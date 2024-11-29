/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,tsx,ts}", "./index.html"],
  theme: {
    fontFamily : {
      sans : ["Poppins", "sans-serif"]
    },
    extend: {
      colors : {
        primary : {
          blue : "#0801A6",
          purple : "#937AFA"
        },
        complementary: { 
          white : "#EFEFEF",
          black : "#1E1E1E"
        }
      },
      backgroundImage : {
        atvGradient : "linear-gradient(149deg, #2272b5 -10.8%, #005195 37.95%, #004582 100%)"
      }
    },
  },
  plugins: [],
}
