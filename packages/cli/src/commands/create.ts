import { buildCommand } from '@stricli/core'
import type { AshContext } from '../context.ts'
import { notImplemented } from '../not-implemented.ts'

// Spec section 6 (Create).
export const createCommand = buildCommand({
  func(this: AshContext, _flags: {}, _template: string, _name: string) {
    return notImplemented('create')
  },
  parameters: {
    positional: {
      kind: 'tuple',
      parameters: [
        {
          placeholder: 'template',
          brief: 'Template in the library env',
          parse: String,
        },
        { placeholder: 'name', brief: 'Name of the new block', parse: String },
      ],
    },
  },
  docs: { brief: 'Create a new block from a template in the library env' },
})
