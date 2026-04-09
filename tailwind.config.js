/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0b0e14',
        section: '#0f121a',
        'section-alt': '#090c12',
        card: '#141923',
        'card-hover': '#1a2030',
        primary: '#4d84e2',
        'primary-dim': 'rgba(77, 132, 226, 0.15)',
        'primary-glow': 'rgba(77, 132, 226, 0.4)',
        gray: '#8b92a5',
        'light-gray': '#c0c5d0',
        white: '#ffffff',
        subtle: 'rgba(255, 255, 255, 0.06)',
        hover: 'rgba(255, 255, 255, 0.12)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
