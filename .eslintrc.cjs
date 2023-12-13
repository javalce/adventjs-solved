/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [require.resolve('ts-standard/eslintrc.json'), 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  overrides: [
    {
      files: ['*.test.{ts,js}', '*.spec.{ts,js}'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended'],
    },
  ],
  rules: {
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
  },
};
