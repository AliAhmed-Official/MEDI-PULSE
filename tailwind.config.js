/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'full': '0 0 25px -5px rgba(0, 0, 0, 0.5)',
        '[#0CC1E0]': '0 0 25px -5px #0CC1E0',
      },
    },
  },
  plugins: [],
}

