import { defineConfig } from 'tsdown'

// Bundles the workspace packages into the CLI, since they export raw .ts
// source. commander stays an external dependency.
export default defineConfig({
  entry: ['src/bin.ts'],
  platform: 'node',
  noExternal: [/^@ashlar\//],
})
