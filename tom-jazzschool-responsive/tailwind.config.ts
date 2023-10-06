import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: "#ffe9d5",
        pri: "#ec4d1b",
        sec: "#ff9a3c",
      },
      width: {
        btn: "164px",
        div: "272px",
      },
      height: {
        btn: "40px",
        div: "306px",
      },
      fontSize: {
        16: "16px",
        20: "20px",
        24: "24px",
        logo: "40px",
        64: "64px",
      }
    },
  },
  plugins: [],
}
export default config
