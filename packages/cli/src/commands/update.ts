import { buildCommand } from '@stricli/core'
import type { AshContext } from '../context.ts'
import { notImplemented } from '../not-implemented.ts'

// Spec section 7 (update).
export const updateCommand = buildCommand({
  func(this: AshContext, _flags: {}, _block?: string) {
    return notImplemented('update')
  },
  parameters: {
    positional: {
      kind: 'tuple',
      parameters: [
        {
          placeholder: 'block',
          brief: 'Block to update, all by default',
          parse: String,
          optional: true,
        },
      ],
    },
  },
  docs: { brief: 'Pull newer library or scratch versions into the workspace' },
})
