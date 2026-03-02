import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: ['**/*.bun.spec.ts', 'node_modules']
  }
})
