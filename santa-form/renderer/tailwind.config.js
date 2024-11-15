const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      blue: colors.blue,
      emerald: colors.emerald,
    },
    extend: {
      animation: {
        "text-focus-in": "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        "vibrate": "vibrate .4s ease 8s 15, gogo .2s ease 14s 40, santamove 22s linear 0s 1 forwards",  // keyframe-name | duration | easing-function | delay | iteration-count
        "modal-fade-in": "modal-fade-in .5s ease 0s 1",
        "roll": "roll 5s linear infinite",
        "roll2": "roll 5s linear 2s infinite",
        "roll3": "roll 5s linear 4s infinite",
        "roll4": "roll 5s linear 6s infinite",
        "fubuki": "fubuki 1s linear infinite",
        "fubuki2": "fubuki 1s linear 0.3s infinite",
        "fubuki3": "fubuki 1s linear 0.6s infinite",
        "fubuki4": "fubuki 1s linear 1s infinite",
      },
      keyframes: {
        "text-focus-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0"
          },
          to: {
            filter: "blur(0)",
            opacity: "1"
          }
        },
        "vibrate": {
          "0%": {
            transform: "translate(0px, 0px) rotateZ(0deg) scale(1, 1)",
          },
          "25%": {
            transform: "translate(2px, 2px) rotateZ(1deg) scale(0, 1)",
          },
          "50%": {
            transform: "translate(0px, 2px) rotateZ(0deg) scale(-1, 1)",
          },
          "75%": {
            transform: "translate(2px, 0px) rotateZ(-1deg) scale(0, 1)",
          },
          "100%": {
            transform: "translate(0px, 0px) rotateZ(0deg) scale(1, 1)",
          },
        },
        "gogo": {
          "0%": {
            transform: "translate(0px, 0px) rotateZ(0deg) scale(-1, 1)",
          },
          "25%": {
            transform: "translate(4px, 4px) rotateZ(2deg) scale(-1, 1)",
          },
          "50%": {
            transform: "translate(0px, 4px) rotateZ(0deg) scale(-1, 1)",
          },
          "75%": {
            transform: "translate(4px, 0px) rotateZ(-2deg) scale(-1, 1)",
          },
          "100%": {
            transform: "translate(0px, 0px) rotateZ(0deg) scale(-1, 1)",
          },
        },
        "santamove": {
          "0%": {
            margin: "0 0 0 0%",
          },
          "36.364%": {
            margin: "0 0 0 40%",
          },
          "63.636%": {
            margin: "0 0 0 10%",
          },
          "100%": {
            margin: "0 0 0 80%",
          }
        },
        "modal-fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          }
        },
        "roll": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(20deg)",
            top: "100%",
            opacity: "0",
          }
        },
        "fubuki": {
          "0%": {
            transform: "rotate(0deg) translate(0px, 800px)",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(40deg) translate(-1500px, 800px)",
            top: "100%",
            opacity: "0",
          },
        }
      }
    },
  },
  plugins: [],
}
