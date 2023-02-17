/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          dark: 'var(--secondary-dark)',
          light: 'var(--secondary-light)',
        },
        text: {
          DEFAULT: 'var(--text)',
          dark: 'var(--text-dark)',
          light: 'var(--text-light)',
        },
        bg: {
          DEFAULT: 'var(--bg)',
          dark: 'var(--bg-dark)',
          light: 'var(--bg-light)',
        },
        border: {
          DEFAULT: 'var(--border)',
        }

      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '820px',
        lg: '1000px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
}