import { buildCommand } from '@stricli/core'
import type { AshContext } from '../context.ts'
import { notImplemented } from '../not-implemented.ts'

interface InitFlags {
  readonly library?: string
}

// Spec W1-W3.
export const initCommand = buildCommand({
  func(this: AshContext, _flags: InitFlags) {
    return notImplemented('init')
  },
  parameters: {
    flags: {
      library: {
        kind: 'parsed',
        parse: String,
        placeholder: 'path-or-remote',
        brief: 'Library the workspace uses',
        optional: true,
      },
    },
  },
  docs: { brief: 'Set up the current directory as a workspace' },
})
