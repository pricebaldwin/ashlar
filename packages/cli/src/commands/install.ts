import { buildCommand } from '@stricli/core'
import type { AshContext } from '../context.ts'
import { notImplemented } from '../not-implemented.ts'

// Spec D1, D2.
export const installCommand = buildCommand({
  func(this: AshContext, _flags: {}, _npmModule: string, _block: string) {
    return notImplemented('install')
  },
  parameters: {
    positional: {
      kind: 'tuple',
      parameters: [
        {
          placeholder: 'npm-module',
          brief: 'npm package to install',
          parse: String,
        },
        {
          placeholder: 'block',
          brief: 'Block that depends on it',
          parse: String,
        },
      ],
    },
  },
  docs: { brief: 'Install an npm package into one block' },
})
