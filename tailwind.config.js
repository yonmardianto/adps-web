/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-deep': '#0A1628',
        'blue-mid': '#1A3A6B',
        'blue-bright': '#1E6FD9',
        'blue-sky': '#3B9EFF',
        'adps-yellow': '#F5C518',
        'yellow-light': '#FFD85C',
        'gray-light': '#F4F7FC',
        'gray-mid': '#8899BB',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      animation: {
        'wa-pulse': 'waPulse 2s ease-in-out infinite',
        'wa-float': 'waFloat 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        waPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0' },
        },
        waFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
