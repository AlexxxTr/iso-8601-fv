import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      all: true,
    },
    typecheck: {
      tsconfig: './tsconfig.json',
      checker: 'tsc',
    },
  },
});
