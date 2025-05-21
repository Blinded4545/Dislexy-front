module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'dyslexia': ['OpenDyslexic', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#5D5FEF',
        secondary: '#6C63FF',
        accent: '#FF6584',
        dyslexic: {
          light: '#F7FAFC',
          dark: '#2D3748',
        }
      }
    },
  },
  plugins: [],
}