/** @type {import('postcss').default} */
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'autoprefixer': {},
    ...( process.env.NODE_ENV === 'development' ? {} : { 'cssnano': { preset: 'default' } }),
  },
};
