import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        architectural: {
          950: '#07090d',
          900: '#0c0f15',
          850: '#121620',
          800: '#181d2a',
          750: '#222838',
          border: 'rgba(245, 243, 238, 0.12)',
          line: 'rgba(245, 243, 238, 0.18)',
        },
        warm: {
          ivory: '#F5F3EE',
          stone: '#D6D3CC',
          muted: '#9E9A90',
          charcoal: '#1A1C22',
        },
        gold: {
          DEFAULT: '#C8A97E',
          light: '#E5D1B8',
          dark: '#A68558',
          dim: 'rgba(200, 169, 126, 0.15)',
          border: 'rgba(200, 169, 126, 0.35)',
        },
        // Fallbacks for legacy references
        obsidian: {
          950: '#07090d',
          900: '#0c0f15',
          850: '#121620',
          800: '#181d2a',
        },
        accent: {
          DEFAULT: '#C8A97E',
          hover: '#E5D1B8',
          muted: '#A68558',
          dim: 'rgba(200, 169, 126, 0.15)',
          border: 'rgba(200, 169, 126, 0.35)',
        },
      },
      fontFamily: {
        serif: ['Italiana', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Italiana', 'Cinzel', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-slow': 'fadeIn 1.8s ease-out forwards',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
