import type { CommandContext } from '@stricli/core'
import type { Prompter } from './prompt.ts'

// What every command receives as `this`. Commands reach the terminal only
// through this object, so tests can swap in captured streams and scripted
// answers without touching the real process.
export interface AshContext extends CommandContext {
  readonly prompt: Prompter
  // False when stdin or stdout is not a TTY (CI, pipes). A command that would
  // prompt must fail and name the missing flag instead, so nothing hangs.
  readonly interactive: boolean
}
