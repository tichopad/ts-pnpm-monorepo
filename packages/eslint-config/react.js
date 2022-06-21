/** @type {import("eslint/lib/shared/types").ConfigData} */
module.exports = {
  extends: '@tpm/eslint-config/base',
  overrides: [
    {
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
