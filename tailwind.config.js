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
          50: '#FAF6F0',
          100: '#F4EDE1',
          200: '#E8D8C3',
          300: '#DCC3A4',
          400: '#D0B087', // Brand exact base color
          500: '#BE9A6B',
          600: '#A68051',
          700: '#84623B',
          800: '#634729',
          900: '#46301A',
        },
        cometoBlue: {
          light: '#EAF0FB',
          DEFAULT: '#7298D7', // Bird blue
          hover: '#5B84C8',
          dark: '#355FA8',
          navy: '#1B3766',
        },
        cometoYellow: {
          light: '#FEF8E7',
          DEFAULT: '#F6CE6E', // Bird yellow
          amber: '#F3B33D',
          dark: '#D8961E',
        },
        cometoRed: {
          light: '#FDECE8',
          DEFAULT: '#D94A26', // Wood-fired pizza sauce & ember
          dark: '#AC3114',
        },
        charcoal: {
          light: '#2C2824',
          DEFAULT: '#191715',
          black: '#100E0D',
        },
        flour: {
          DEFAULT: '#FDFBF7',
          pure: '#FFFFFF',
          cream: '#F7F3EB',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
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
