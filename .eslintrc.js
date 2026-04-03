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
  overrides: [
    {
      files: ['app/tests/**/*.js'],
      env: {
        mocha: true,
      },
      rules: {
        'max-classes-per-file': 'off',
      },
    },
    {
      files: ['gulpfile.js'],
      rules: {
        'global-require': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
  rules: {
    'no-undef': 'warn',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'no-new': 'off',
    'max-len': ['warn', { code: 100, comments: 100 }],
    'no-plusplus': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
  globals: {
    requestAnimationFrame: 'readonly',
    cancelAnimationFrame: 'readonly',
    Pacman: 'readonly',
    Ghost: 'readonly',
    Pickup: 'readonly',
    CharacterUtil: 'readonly',
    Timer: 'readonly',
    SoundManager: 'readonly',
    GameEngine: 'readonly',
    GameCoordinator: 'readonly',
  },
};
