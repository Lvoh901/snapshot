/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
        accent: '#ecc94b',
        neutral: '#cbd5e0',
        background: '#f7fafc',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
