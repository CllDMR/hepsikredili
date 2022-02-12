// const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(join(__dirname, 'apps/web-customer')),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
