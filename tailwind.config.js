/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        craft: {
          50: '#FBF8F1',
          100: '#F4EBDD',
          200: '#E8D9C2',
          300: '#D7BE9B',
          400: '#C7A477',
          500: '#AE8357',
          600: '#8F6841',
          700: '#705034',
          800: '#503A28',
          900: '#33271F',
        },
        cometoOlive: {
          light: '#EEF0E3',
          DEFAULT: '#73764C',
          hover: '#62663E',
          dark: '#4E5437',
          navy: '#343A2C',
        },
        cometoYellow: {
          light: '#FBF2DB',
          DEFAULT: '#E9BC62',
          amber: '#D99A3B',
          dark: '#99631F',
        },
        cometoRed: {
          light: '#F8E9E1',
          DEFAULT: '#C65A3B',
          dark: '#9F3E29',
        },
        charcoal: {
          light: '#3A312A',
          DEFAULT: '#28221D',
          black: '#191512',
        },
        flour: {
          DEFAULT: '#FCF8F0',
          pure: '#FFFFFF',
          cream: '#F6F0E5',
        }
      },
      fontFamily: {
        serif: ['"Lora"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(70, 48, 26, 0.08)',
        'warm': '0 8px 30px rgba(70, 48, 26, 0.12)',
        'warm-lg': '0 16px 40px rgba(70, 48, 26, 0.18)',
        'glow-yellow': '0 0 25px rgba(246, 206, 110, 0.4)',
        'glow-blue': '0 0 25px rgba(114, 152, 215, 0.4)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spinSlow 40s linear infinite',
      }
    },
  },
  plugins: [],
}
