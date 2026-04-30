import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0A0A0F',
        'cyber-dark': '#0D0D18',
        'cyber-cyan': '#00D4FF',
        'cyber-blue': '#0066FF',
        'cyber-cyan-dim': 'rgba(0,212,255,0.2)',
        'cyber-blue-dim': 'rgba(0,102,255,0.2)',
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        space: ['var(--font-space)', 'sans-serif'],
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'flicker': 'flicker 4s linear infinite',
      },
      keyframes: {
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        scanline: {
          '0%': { top: '-2px' },
          '100%': { top: '100%' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,102,255,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.8' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.6' },
          '99%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
