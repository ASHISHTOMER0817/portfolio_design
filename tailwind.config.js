/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    animation: {
      'underline-grow': 'underlineGrow 0.3s ease-in-out forwards',
    },
    keyframes: {
      underlineGrow: {
        '0%': { width: '0' },
        '100%': { width: '100%' },
      },
    },
  },
};
export const plugins = [];

