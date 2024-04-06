/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      darkMode: ['class', '[data-mode="dark"]'],
      colors: {
        'dark-blue': '#011640',
        'darker-blue': '#011126',
        'deep-blue': '#00123A',
        'gold': '#F2B950',
        'orange': '#F2994B',
      },
    },
  },
  plugins: [],
};
