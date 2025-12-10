/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#0D0D0D',
        'dark-charcoal': '#111315',
        'luxury-gold': '#BFA45B',
        'soft-white': '#F5F5F5',
        'champagne-gold': '#C9A86A',
        'bg-elements': '#272727',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shine': 'shine 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}