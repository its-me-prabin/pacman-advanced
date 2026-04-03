module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'script',
  },
  rules: {
    'no-undef': 'warn',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'no-new': 'off',
    'max-len': ['error', { code: 100, comments: 100 }],
    'no-plusplus': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
  globals: {
    requestAnimationFrame: 'readonly',
    cancelAnimationFrame: 'readonly',
  },
};
