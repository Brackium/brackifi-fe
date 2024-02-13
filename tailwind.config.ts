import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      dmsans: ['var(--font-dmSans'],
      nunito: ['var(--font-nunito)'],
    },
    colors: {
      'color-curentColor': 'currentColor',
      'color-transparent': 'transparent',
      'color-white': '#fff',
      'color-black': 'rgba(0, 0, 0, 1)',
      'color-primary': 'rgba(121, 118, 75, 1)',
      'color-secondary': 'rgba(203, 194, 189, 1)',
      'color-secondary-2': '#555335',
      'color-tertiary': 'rgba(210, 183, 116, 1)',
    },
    extend: {
      backgroundImage: {
        'home-bg': 'url(../assets/home-bg.png)',
      },
    },
  },
  plugins: [],
};
export default config;
