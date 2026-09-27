import { defineConfig } from 'tsdown'

// Bundles the workspace packages into the CLI, since they export raw .ts
// source. Third-party dependencies (@stricli/core, @clack/prompts) stay external.
export default defineConfig({
  entry: ['src/bin.ts'],
  platform: 'node',
  noExternal: [/^@ashlar\//],
})
