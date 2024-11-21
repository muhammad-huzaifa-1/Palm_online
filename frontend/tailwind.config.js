/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        popup:"popup 0.5s ease-in-out forwards",
        tiltDown:"tiltDown 0.8s ease-in-out forwards",
        tiltUp:"tiltUp 0.8s ease-in-out forwards"
      },
       keyframes:{
        popup:{
          "0%":{
            transform:"translateX(200px)",
            opacity:0
          },
          "60%":{
            transform:"translateX(-40px)",
            opacity:1
          },
          "100%":{
            transform:"translateX(0px)",
            opacity:1
          }
        },

        tiltDown:{
          "0%":{
            transform:"rotate(-35deg)",
            left:"150%",
            top:"-100px"
          },
          "100%":{
            transform:"rotate(0deg)",
            left:"0px",
            top:"0px"
          }
        },

        tiltUp:{
          "0%":{
            transform:"rotate(0deg)",
            left:"0px",
            top:"0px"
          },
          "100%":{
            transform:"rotate(-35deg)",
            left:"150%",
            top:"-100px"
          }
        }
      }
    },
  },
  plugins: [],
}