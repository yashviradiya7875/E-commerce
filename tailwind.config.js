/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // other plugins...
    require('@tailwindcss/aspect-ratio'),
  ],
  
}

