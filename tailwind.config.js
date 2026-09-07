/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#111827',
        brand: {
          red: '#E31837',
          'red-hover': '#c4122d',
          'red-light': '#fdf2f4',
          dark: '#111827',
          charcoal: '#1f2937',
          muted: '#4b5563',
          light: '#f8f9fa',
          border: '#e5e7eb',
        },
        lak: {
          red: '#E31837',
          'red-hover': '#c4122d',
          'red-subtle': '#fff1f2',
          black: '#111827',
          dark: '#1f2937',
          surface: '#ffffff',
          card: '#ffffff',
          elevated: '#f8f9fa',
          border: '#e5e7eb',
          'border-red': 'rgba(227, 24, 55, 0.25)',
          slate: {
            DEFAULT: '#4b5563',
            dark: '#1f2937',
            light: '#9ca3af',
          },
        },
      },
      fontFamily: {
        display: ['"Clash Display"', 'var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
    },
  },
  plugins: [],
};

