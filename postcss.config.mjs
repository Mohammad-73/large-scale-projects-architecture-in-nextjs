/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-nested": {},
    "@tailwindcss/postcss": {
      optimize: false,
    },
  },
};

export default config;
