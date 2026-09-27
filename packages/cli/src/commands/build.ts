import { buildCommand } from '@stricli/core'
import type { AshContext } from '../context.ts'
import { notImplemented } from '../not-implemented.ts'

interface BuildFlags {
  readonly isolated?: boolean
}

// Spec B1, B2.
export const buildBlocksCommand = buildCommand({
  func(this: AshContext, _flags: BuildFlags) {
    return notImplemented('build')
  },
  parameters: {
    flags: {
      isolated: {
        kind: 'boolean',
        brief: 'Install only declared dependencies and build in isolation',
        optional: true,
        withNegated: false,
      },
    },
  },
  docs: { brief: 'Build blocks in the workspace' },
})
