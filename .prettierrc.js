/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,

  plugins: [require.resolve('prettier-plugin-astro'), require.resolve('prettier-plugin-tailwindcss')],
  pluginSearchDirs: false,

  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
