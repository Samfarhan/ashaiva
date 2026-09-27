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
          950: '#080808',
          900: '#101010',
          850: '#171717',
          800: '#1F1F1F',
          700: '#2A2A2A',
          border: 'rgba(245, 243, 238, 0.08)',
          line: 'rgba(245, 243, 238, 0.14)',
        },
        warm: {
          ivory: '#F5F3EE',
          stone: '#D6D3CC',
          muted: '#8E8B82',
          charcoal: '#24221E',
        },
        gold: {
          DEFAULT: '#C8A97E',
          light: '#E5D1B8',
          dark: '#A68558',
          dim: 'rgba(200, 169, 126, 0.12)',
          border: 'rgba(200, 169, 126, 0.28)',
        },
        olive: {
          DEFAULT: '#8C9274',
          dim: 'rgba(140, 146, 116, 0.15)',
        },
        // Legacy aliases mapped to luxury architectural palette
        obsidian: {
          950: '#080808',
          900: '#101010',
          850: '#171717',
          800: '#1F1F1F',
          750: '#262626',
          700: '#303030',
        },
        accent: {
          DEFAULT: '#C8A97E',
          hover: '#E5D1B8',
          muted: '#A68558',
          dim: 'rgba(200, 169, 126, 0.12)',
          border: 'rgba(200, 169, 126, 0.28)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-slow': 'fadeIn 2.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
