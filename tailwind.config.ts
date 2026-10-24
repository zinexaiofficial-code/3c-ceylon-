import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          neon: '#18F000',
          'neon-alt': '#0BFF01',
          'neon-hover': '#15D600',
          'neon-light': '#4CEB00',
          blue: '#0023DD',
          'blue-light': '#3B82F6',
          navy: '#02071B',
          ocean: '#061638',
          emerald: '#063B24',
          forest: '#095322',
          cyan: '#06D6A0',
          dark: '#000000',
          surface: '#050811',
          card: '#0A0F1D',
          muted: '#94A3B8',
          border: 'rgba(255, 255, 255, 0.10)',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'var(--font-manrope)', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'var(--font-manrope)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-jakarta)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 25px rgba(24, 240, 0, 0.45)',
        'neon-sm': '0 0 12px rgba(24, 240, 0, 0.35)',
        'blue-glow': '0 0 30px rgba(0, 35, 221, 0.35)',
        'card-hover': '0 10px 30px rgba(24, 240, 0, 0.20)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.85)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-quick': 'fadeIn 0.2s ease-out forwards',
        'float-slow': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
