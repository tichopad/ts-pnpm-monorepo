const path = require('path')

/** @type {import("eslint/lib/shared/types").ConfigData} */
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: [
      '{apps,packages}/*/tsconfig.json',
      '{apps,packages}/*/tsconfig.{eslint,node}.json',
    ],
    sourceType: 'module',
    tsconfigRootDir: path.resolve(__dirname, '../..'),
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', '**/vite.config.ts'],
      },
    ],
  },
}