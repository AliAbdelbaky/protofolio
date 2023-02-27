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
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
        },
        text: {
          DEFAULT: 'var(--primary)',
        },
        bg: {
          DEFAULT: 'var(--bg)',
          primary:'var(--primary)'
        },
        border: {
          DEFAULT: 'var(--primary)',
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