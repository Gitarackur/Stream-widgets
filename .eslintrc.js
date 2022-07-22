module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  // rules: {
  //   'prettier/prettier': ['error', { endOfLine: 'auto' }],
  //   // we only want single quotes
  //   quotes: ['error', 'single'],
  //   // we use 2 spaces to indent our code
  //   indent: ['error', 2],
  //   // we want to avoid useless spaces
  //   'no-multi-spaces': ['error'],
  // },
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
