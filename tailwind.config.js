/** @type {import('tailwindcss').Config} */
import { colors } from './types/tailwindcss'

module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                ...colors,
            },
        },
    },
    plugins: [],
}
