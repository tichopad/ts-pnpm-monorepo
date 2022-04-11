const base = require('./base')

/** @type {import("eslint/lib/shared/types").ConfigData} */
module.exports = {
  ...base,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  rules: {
    ...base.rules,
    // Using automatic JSX transform
    'react/react-in-jsx-scope': 'off',
  },
}
