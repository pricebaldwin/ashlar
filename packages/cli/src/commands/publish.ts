import { buildCommand } from '@stricli/core'
import type { AshContext } from '../context.ts'
import { notImplemented } from '../not-implemented.ts'

// Spec P1-P5.
export const publishCommand = buildCommand({
  func(this: AshContext, _flags: {}, _library?: string) {
    return notImplemented('publish')
  },
  parameters: {
    positional: {
      kind: 'tuple',
      parameters: [
        {
          placeholder: 'library',
          brief: 'Library to publish, all by default',
          parse: String,
          optional: true,
        },
      ],
    },
  },
  docs: { brief: 'Push library versions the registry does not have yet' },
})
