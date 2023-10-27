import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'min': '1535px'},
        'xl': {'min': '1279px'},
        'lg': {'min': '1023px'},
        'md': {'min': '767px'},
        'sm': {'min': '639px'},
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'translateX(300px)'},
          '100%': {transform: 'translateX(0px)'}
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
}
export default config