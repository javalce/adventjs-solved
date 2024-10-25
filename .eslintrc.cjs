const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project,
  },
  overrides: [
    {
      files: ['*.spec.{ts,js}'],
      extends: [require.resolve('@vercel/style-guide/eslint/vitest')],
    },
  ],
  ignorePatterns: ['index.mjs'],
  rules: {
    'no-param-reassign': 'off',
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'import/no-default-export': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
};
