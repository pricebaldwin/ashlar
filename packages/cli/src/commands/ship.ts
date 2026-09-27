import { buildCommand } from '@stricli/core'
import type { AshContext } from '../context.ts'
import { notImplemented } from '../not-implemented.ts'

interface ShipFlags {
  readonly major?: boolean
  readonly minor?: boolean
  readonly patch?: boolean
  readonly scratch?: boolean
}

function flag(brief: string) {
  return { kind: 'boolean', brief, optional: true, withNegated: false } as const
}

// Spec S1-S5, X1, section 6 (Ship).
export const shipCommand = buildCommand({
  func(this: AshContext, _flags: ShipFlags, ..._blocks: string[]) {
    return notImplemented('ship')
  },
  parameters: {
    flags: {
      major: flag('Bump the major version'),
      minor: flag('Bump the minor version'),
      patch: flag('Bump the patch version (default)'),
      scratch: flag('Ship to the library scratch area, unverified'),
    },
    positional: {
      kind: 'array',
      parameter: {
        placeholder: 'block',
        brief: 'Blocks to ship, every changed block by default',
        parse: String,
      },
    },
  },
  docs: {
    brief:
      'Verify changed blocks, assign versions, and commit them to the library',
  },
})
