const path = require('path')

/** @type {import("eslint/lib/shared/types").ConfigData} */
module.exports = {
  env: {
    browser: true,
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
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports',
      }
    ],
    // Sometimes "any" is useful
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: false,
        vars: 'all',
      },
    ],
  },
  overrides: [
    {
      // React
      files: '**/*.tsx',
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      rules: {
        // Using automatic JSX transform
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
}
