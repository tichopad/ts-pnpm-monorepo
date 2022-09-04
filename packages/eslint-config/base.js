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
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', '**/vite.config.ts'],
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
