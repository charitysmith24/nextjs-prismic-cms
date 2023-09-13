import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gi400: ['var(--font-giFont400)'],
        gi530: ['var(--font-giFont530)'],
        gi750: ['var(--font-giFont750)']
      }
    },
  },
  plugins: [],
}
export default config
