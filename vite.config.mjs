import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: ['src/use-cases/**/*.test.ts', 'src/use-cases/**/*.spec.ts'],
    coverage: {
      include: ['src/use-cases/**/*.{ts,js}'],
      exclude: [
        '**/node_modules/**',
        '**/build/**',
        'src/**/*.spec.{ts,js}',
        'src/**/*.test.{ts,js}',
      ],
      reporter: ['text', 'html', 'lcov'],
    },
  },
})
