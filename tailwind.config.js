/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: {
            DEFAULT: '#ea580c',
            light: '#f97316',
            dark: '#c2410c',
          },
          gold: {
            DEFAULT: '#d4a946',
            light: '#f0c56b',
            dark: '#a07830',
          },
          bg: {
            primary: '#212121',
            secondary: '#1a1a1a',
            card: '#2a2a2a',
            darker: '#161616',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(20,20,20,0.7) 40%, rgba(30,30,30,0.3) 70%, transparent 100%)',
        'gradient-orange': 'linear-gradient(135deg, #ea580c, #c2410c)',
        'gradient-gold': 'linear-gradient(135deg, #d4a946, #ea580c)',
        'gradient-section': 'linear-gradient(180deg, #212121 0%, #1a1a1a 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-down': 'fadeInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-left': 'fadeInLeft 0.7s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-right': 'fadeInRight 0.7s cubic-bezier(0.4, 0, 0.2, 1) both',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'glow': 'glow 2.5s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 3.5s linear infinite',
        'slide-menu': 'slideInMenu 0.3s cubic-bezier(0.4, 0, 0.2, 1) both',
        'border-flow': 'borderFlow 3s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.88)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(234, 88, 12, 0.4), 0 0 40px rgba(234, 88, 12, 0.2)' },
          '50%': { boxShadow: '0 0 35px rgba(234, 88, 12, 0.7), 0 0 70px rgba(234, 88, 12, 0.35)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(234, 88, 12, 0.5)' },
          '50%': { textShadow: '0 0 25px rgba(234, 88, 12, 0.9), 0 0 50px rgba(234, 88, 12, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideInMenu: {
          from: { opacity: '0', transform: 'translateY(-15px) scale(0.96)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'orange-glow': '0 0 30px rgba(234, 88, 12, 0.35), 0 0 60px rgba(234, 88, 12, 0.15)',
        'orange-glow-sm': '0 0 15px rgba(234, 88, 12, 0.3)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 20px 50px rgba(0, 0, 0, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
