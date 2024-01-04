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
      blue: '#0ea5e9',
      red: '#ef4444',
      purple: '#7e5bef',
      green: '#84cc16',
      zinc: '#71717a',
      slate: '#64748b',
      white: '#ffffff',
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
