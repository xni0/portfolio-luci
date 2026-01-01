/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"VT323"', 'monospace'], 
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        // Paleta Retro
        'os-bg': '#0F0518', 
        'win-bg': '#191523', 
        'win-header': '#2D1B4E',
        'accent': '#56e39f', 
        'pink': '#e356a7', 
        'dim': '#6b7280',
        
        dark: {
          bg: '#020202',
          card: '#090909',
          border: '#1a1a1a',
        },
      },
      animation: {
        'boot-cursor': 'blink 1s step-end infinite',
        'float': 'float 3s ease-in-out infinite',
        'glitch': 'glitch 3s infinite',
        'type': 'typing 3.5s steps(40, end)',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scroll': 'scroll 20s linear infinite',
        'blob': 'blob 10s infinite',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
        },
        glitch: {
            '0%, 90%, 100%': { transform: 'translate(0)' },
            '92%': { transform: 'translate(-2px, 2px)' },
            '94%': { transform: 'translate(2px, -2px)' },
            '96%': { transform: 'translate(-2px, -2px)' },
            '98%': { transform: 'translate(2px, 2px)' },
        },
        typing: {
            '0%': { width: '0' },
            '100%': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}