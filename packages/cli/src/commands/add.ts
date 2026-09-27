import { buildCommand } from '@stricli/core'
import type { AshContext } from '../context.ts'
import { notImplemented } from '../not-implemented.ts'

// Spec W6, section 6 (Add).
export const addCommand = buildCommand({
  func(this: AshContext, _flags: {}, _block: string) {
    return notImplemented('add')
  },
  parameters: {
    positional: {
      kind: 'tuple',
      parameters: [
        {
          placeholder: 'block[@version]',
          brief: 'Block to add, latest version by default',
          parse: String,
        },
      ],
    },
  },
  docs: {
    brief: 'Pull a block version into the workspace and record it as the base',
  },
})
