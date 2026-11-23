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
        primary: {
          DEFAULT: '#329B38',
          dark: '#247A32',
          hover: '#3CA647',
          light: '#3CA647',
          subtle: 'rgba(50, 155, 56, 0.12)',
        },
        accent: {
          DEFAULT: '#D97706',
          hover: '#B85C00',
          light: '#F59E0B',
        },
        brand: {
          green: '#329B38',
          'green-light': '#3CA647',
          'green-dark': '#247A32',
          'green-hover': '#3CA647',
          'green-subtle': 'rgba(50, 155, 56, 0.12)',
          olive: '#329B38',
          'olive-dark': '#247A32',
          orange: '#D97706',
          'orange-hover': '#B85C00',
          ivory: '#F6F3E9',
          charcoal: '#202820',
          neon: '#329B38',
          'neon-alt': '#329B38',
          'neon-hover': '#3CA647',
          'neon-light': '#3CA647',
          blue: '#0023DD',
          'blue-light': '#3B82F6',
          navy: '#02071B',
          ocean: '#061638',
          emerald: '#247A32',
          forest: '#247A32',
          cyan: '#D97706',
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
        'neon': '0 4px 14px rgba(50, 155, 56, 0.25)',
        'neon-sm': '0 2px 8px rgba(50, 155, 56, 0.18)',
        'orange-glow': '0 0 25px rgba(217, 119, 6, 0.45)',
        'blue-glow': '0 0 30px rgba(0, 35, 221, 0.35)',
        'card-hover': '0 10px 30px rgba(50, 155, 56, 0.12)',
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
