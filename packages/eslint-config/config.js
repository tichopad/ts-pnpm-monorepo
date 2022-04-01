const path = require('path')

/** @type {import("eslint/lib/shared/types").ConfigData} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: path.resolve(__dirname, '../..'),
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': 'off',
  },
}
