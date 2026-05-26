/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B1020',
        card: '#151C32',
        neon: '#00D1FF',
        purple: '#7B61FF',
        success: '#00FFB2',
        danger: '#FF4D6D',
      },
      boxShadow: {
        neon: '0 0 0.5rem rgba(0, 209, 255, 0.55), 0 0 2rem rgba(0, 209, 255, 0.25)',
        purple: '0 0 0.5rem rgba(123, 97, 255, 0.5), 0 0 2rem rgba(123, 97, 255, 0.22)',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hud-grid': 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
