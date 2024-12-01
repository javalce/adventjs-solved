import { defineConfig } from '@javalce/eslint-config';

export default defineConfig({
  testing: 'vitest',
  type: 'lib',
  overrides: [
    {
      rules: {
        'no-param-reassign': 'off',
        'no-console': 'off',
      },
    },
  ],
});
