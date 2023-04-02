/** @type {import("eslint/lib/shared/types").ConfigData} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  ignorePatterns: ['**/dist', '**/build'],
  rules: {
    'arrow-body-style': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': [
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
      files: '**/*.{ts,tsx}',
      extends: '@tpm/eslint-config/typescript',
    },
  ],
}
