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
        'accent-main': '#ffe98f',
        'text-emphasis': '#ff3131',
        'bg-secondary': '#f8f9fa',
        'bg-info': '#e3f2fd',
        'text-secondary': '#666666',
        'border-light': '#dddddd',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
      },
      fontSize: {
        'h1': ['24px', { lineHeight: '1.3', fontWeight: 'bold' }],
        'h2': ['20px', { lineHeight: '1.4', fontWeight: 'bold' }],
        'h3': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'number': ['28px', { lineHeight: '1.2', fontWeight: 'bold' }],
        'cta': ['18px', { lineHeight: '1.3', fontWeight: '600' }],
      },
      fontFamily: {
        'noto': ['Noto Sans JP', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}