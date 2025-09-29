/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1B44',
        sky: '#EEF5FF',
        accent: '#0E2A66',
        brand: '#0C2A6B',
      },
      boxShadow: {
        card: '0 8px 20px rgba(14, 42, 102, 0.08)',
        cardYellow: '0 18px 48px rgba(250, 204, 21, 0.5)'
      }
    },
  },
  plugins: [],
}


