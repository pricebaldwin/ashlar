import type { Command } from 'commander'
import { notImplemented } from '../not-implemented.ts'

// Spec section 7 (update).
export function registerUpdate(program: Command): void {
  program
    .command('update [block]')
    .description('Pull newer library or scratch versions into the workspace')
    .action(() => notImplemented('update'))
}
