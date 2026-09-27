import { buildCommand } from '@stricli/core'
import type { AshContext } from '../context.ts'
import { notImplemented } from '../not-implemented.ts'

// Spec U1.
export const testCommand = buildCommand({
  func(this: AshContext) {
    return notImplemented('test')
  },
  parameters: {},
  docs: { brief: 'Test blocks in the workspace' },
})
