/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#2848FF",
        primaryDark: "#071B3A",
        accent: "#FFB22C",
        secondary: "#F7F9FC",
        text: "#111827",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ['Poppins', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'zoom-in': 'zoomIn 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'ken-burns': 'kenBurns 20s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'zoom-in': 'zoomIn 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'ken-burns': 'kenBurns 20s ease-out forwards',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
