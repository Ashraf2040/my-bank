/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    screens:{
     'xs' :'340px'
    },
    extend: {
      backgroundImage: {
        'main-background2': 'url(/BAC.png)',
        
      },
    },
  },
  plugins: [],
})
