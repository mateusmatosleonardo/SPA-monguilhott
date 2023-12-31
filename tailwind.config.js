/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#509d87",
        "custon-green-light": "#03ca97",
      },
      width: {
        TwoPx: 2,
      },
      height: {
        TwoPx: 2,
      },
    },
  },
  plugins: [],
};
