import { buildCommand } from '@stricli/core'
import type { AshContext } from '../context.ts'
import { notImplemented } from '../not-implemented.ts'

// Spec G1-G4, D4.
export const graphCommand = buildCommand({
  func(this: AshContext, _flags: {}, _query: string) {
    return notImplemented('graph')
  },
  parameters: {
    positional: {
      kind: 'tuple',
      parameters: [
        { placeholder: 'query', brief: 'Graph query', parse: String },
      ],
    },
  },
  docs: { brief: 'Query the dependency graph across libraries' },
})
