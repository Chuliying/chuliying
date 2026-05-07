import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: '#3a4f67',
        sub: '#d87e57',
        copy: '#333333',
        muted: '#707070',
        faint: '#595959',
        canvas: '#c2c5bc',
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
