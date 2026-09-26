import { defineConfig } from 'vitest/config'

// One `pnpm test` for the whole repo. Each workspace package is its own vitest
// project, run with vitest defaults (node environment).
export default defineConfig({
  test: {
    projects: ['packages/*'],
  },
})
