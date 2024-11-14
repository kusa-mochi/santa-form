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
    },
    extend: {
      animation: {
        "text-focus-in": "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        "vibrate": "vibrate .1s ease 8s 60, running .5s linear 0s 6",  // keyframe-name | duration | easing-function | delay | iteration-count
        // "running": "running .5s linear 14s 6" // keyframe-name | duration | easing-function | delay | iteration-count
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
            transform: "translate(0px, 0px) rotateZ(0deg)",
          },
          "25%": {
            transform: "translate(2px, 2px) rotateZ(1deg)",
          },
          "50%": {
            transform: "translate(0px, 2px) rotateZ(0deg)",
          },
          "75%": {
            transform: "translate(2px, 0px) rotateZ(-1deg)",
          },
          "100%": {
            transform: "translate(0px, 0px) rotateZ(0deg)",
          },
        },
        "running": {
          "0%": {
            transform: "translate(0px, 0px) rotateZ(0deg)",
          },
          "25%": {
            transform: "translate(4px, 4px) rotateZ(2deg)",
          },
          "50%": {
            transform: "translate(0px, 4px) rotateZ(0deg)",
          },
          "75%": {
            transform: "translate(4px, 0px) rotateZ(-2deg)",
          },
          "100%": {
            transform: "translate(0px, 0px) rotateZ(0deg)",
          },
        },
      }
    },
  },
  plugins: [],
}
