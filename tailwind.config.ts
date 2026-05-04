import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0d',
        panel: '#111114',
        line: 'rgba(255,255,255,0.08)',
        text: '#f2f1ec',
        muted: 'rgba(242,241,236,0.72)',
        accent: '#7c96ff'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,150,255,0.22), 0 18px 60px rgba(0,0,0,0.45)'
      }
    }
  },
  plugins: []
} satisfies Config;
