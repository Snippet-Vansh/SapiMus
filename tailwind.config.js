/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#08080A',
        surface: {
          DEFAULT: '#111116',
          card: '#14141A',
          hover: '#1B1B24',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(255, 255, 255, 0.15)',
        },
        accent: {
          DEFAULT: '#C7FF3D',
          hover: '#B5F228',
          dark: '#93C41A',
          glow: 'rgba(199, 255, 61, 0.25)',
          muted: 'rgba(199, 255, 61, 0.1)',
        },
        orange: {
          athletic: '#FF5E1E',
          warm: '#FF7A30',
          glow: 'rgba(255, 94, 30, 0.3)',
          subtle: 'rgba(255, 94, 30, 0.12)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#9A9AA6',
          muted: '#656572',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        tech: ['Space Grotesk', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(199, 255, 61, 0.18)',
        'glow': '0 0 25px rgba(199, 255, 61, 0.3)',
        'glow-orange': '0 0 25px rgba(255, 94, 30, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.55)',
        'glass-hover': '0 16px 48px 0 rgba(0, 0, 0, 0.75)',
        'card': '0 4px 24px -2px rgba(0, 0, 0, 0.65)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
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
}
