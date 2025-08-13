/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#6C63FF',
        sidebar: '#FFF',
        surface: '#F7F7FA',
        accent: '#F2F4F7',
        todo: '#A1A1AA',
        progress: '#F6C927',
        done: '#47C87B',
      },
      boxShadow: {
        sidebar: '2px 0 8px rgba(0,0,0,0.04)',
        card: '0 2px 8px rgba(99, 102, 241, 0.07)',
      },
    },
  },
  plugins: [],
};
