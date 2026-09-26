import type { Command } from 'commander'
import { notImplemented } from '../not-implemented.ts'

// Spec W6, section 6 (Add).
export function registerAdd(program: Command): void {
  program
    .command('add <block>')
    .description(
      'Pull a block version into the workspace and record it as the base',
    )
    .action(() => notImplemented('add'))
}
