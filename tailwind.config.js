const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}', // Scan all files in the app directory (including MDX if used)
    './components/**/*.{js,jsx,ts,tsx}', // Your reusable components
    './pages/**/*.{js,jsx,ts,tsx}' // In case you have some pages folder files
  ],
  theme: {
    extend: {
      colors: {
        darkText: colors.zinc['900'],
        lightText: colors.zinc['600']
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'Inter', 'system-ui', 'sans-serif'],
        monon: ['var(--font-noto-mono)', 'mono', 'var(--font-noto-sans)', 'Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
