/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            },
            colors: {
                dark: "#04151f",
                secondary: "#0d1b2a",
            }
      },
    },
    plugins: [
        
    ],
}