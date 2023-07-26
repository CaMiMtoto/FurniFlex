/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'primary': '#1E1E1E',
                'secondary': '#2F2F2F',
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    important: true,
    prefix: 'tw-',
    plugins: [],
}