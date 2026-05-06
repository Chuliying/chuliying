import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: '#3a4f67',
        sub: '#d87e57',
        'text-base': '#333333',
        'text-muted': '#707070',
        bg: '#c2c5bc',
        surface: '#f4f4f4',
      },
      fontFamily: {
        inter: ['Inter', 'Noto Sans TC', 'sans-serif'],
        sans: ['Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
