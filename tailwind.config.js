/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#32AA9D',
        'primary-soft': '#E8F5F3',
        secondary: '#F4C756',
        'secondary-soft': '#FEF6E3',
        accent: '#DB5D8E',
        'accent-soft': '#FDEEF3',
        beige: '#F9F8F6',
        heading: '#0F172A',
        text: '#475569',
        'bg-section': '#F8FAFC',
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'float': 'float 4s ease-in-out infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
