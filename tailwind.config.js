/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#0ea5e9", // A vibrant blue
                "background-light": "#f0f9ff", // Very light blue
                "background-dark": "#0c1425", // Dark navy blue
            },
            fontFamily: {
                display: ["Poppins", "sans-serif"],
                signature: ["Dancing Script", "cursive"],
            },
            borderRadius: {
                DEFAULT: "0.5rem", // 8px
            },
        },
    },
    plugins: [],
}
