import type { Command } from 'commander'
import { notImplemented } from '../not-implemented.ts'

// Spec section 6 (Create).
export function registerCreate(program: Command): void {
  program
    .command('create <template> <name>')
    .description('Create a new block from a template in the library env')
    .action(() => notImplemented('create'))
}
