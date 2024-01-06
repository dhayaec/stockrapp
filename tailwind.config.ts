import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      blue: '#1d4ed8',
      red: '#b91c1c',
      purple: '#7e5bef',
      green: '#4d7c0f',
      zinc: '#71717a',
      slate: '#64748b',
      white: '#ffffff',
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
