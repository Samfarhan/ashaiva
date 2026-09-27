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
        obsidian: {
          950: '#030609',
          900: '#060a0f',
          850: '#0a1017',
          800: '#0f1722',
          750: '#15202e',
          700: '#1c2b3e',
        },
        graphite: {
          600: '#29394b',
          500: '#41556b',
          400: '#657e98',
          300: '#94a9bf',
          200: '#c5d3e2',
        },
        accent: {
          DEFAULT: '#2dd4bf',
          hover: '#5eead4',
          muted: '#14b8a6',
          dim: 'rgba(45, 212, 191, 0.12)',
          border: 'rgba(45, 212, 191, 0.24)',
        },
        steel: {
          light: '#cbd5e1',
          DEFAULT: '#94a3b8',
          dark: '#475569',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
