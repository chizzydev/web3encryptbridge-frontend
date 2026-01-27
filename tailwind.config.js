// tailwind.config.js

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#15647e',
        'primary-dark': '#0f4a5c',
        'primary-light': '#1a7a96',
        secondary: '#da3ca1',
        accent: {
          1: '#007184',
          2: '#0e1d26',
          3: '#152b35',
          4: '#1a3a47',
          5: '#1f4a59',
          6: '#eaf2f6',
        },
        neutral: {
          1: '#ffffff',
          2: '#f5f5f5',
          3: '#e0e0e0',
          4: '#999999',
        },
      },
      spacing: {
        120: '30rem',
      },
      fontSize: {
        'display-4': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-3': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '700' }],
        'h5': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      animation: {
        'slow-rotate': 'rotate 20s linear infinite',
        'slow-rotate-reverse': 'rotate-reverse 20s linear infinite',
        'updown': 'updown 3s ease-in-out infinite',
        'skew': 'skew 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        'slow-rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'rotate-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'updown': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'skew': {
          '0%, 100%': { transform: 'skewY(0deg)' },
          '50%': { transform: 'skewY(2deg)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(21, 100, 126, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #15647e 0%, #1a7a96 100%)',
      },
    },
  },
  plugins: [],
};