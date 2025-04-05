import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'
import plugin from 'tailwindcss/plugin'


//** @type {import("tailwindcss").config} */

module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      //** !! Might remove  */
      keyFrames: {
        fadeIn: {
          from:{ opacity: 0},
          to: {opacity: 1}
        }
      },
      blink: {
        "0%" : {opacity: 0.2},
        "20%" : {opacity: 1},
        "100%" : {opacity: 0.2},
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        blink: "blink 1.4s both infinite"
      }
    },
    future: {
      hoverOnlyWhenSupported: true
    }
  },
  plugins: [
    typography, 
    containerQueries,
  plugin(({matchUtilities, theme}) =>{
    matchUtilities(
      {
      "animation-delay" : (value) =>{
        return{
          "animation-delay": value
        }
      }
    },
  {
    values: theme("transitionDelay")
  })
  })],

}