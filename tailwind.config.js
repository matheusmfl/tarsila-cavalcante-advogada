/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-bg': 'url(../assets/hero-bg.webp)',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        roboto: 'var(--font-roboto)',
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 400ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 400ms cubic-bezier(0.87, 0, 0.13, 1)',
      },

      blur: {
        full: '43px',
      },
    },
  },
  plugins: [],
}
