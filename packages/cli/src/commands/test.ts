import type { Command } from 'commander'
import { notImplemented } from '../not-implemented.ts'

// Spec U1.
export function registerTest(program: Command): void {
  program
    .command('test')
    .description('Test blocks in the workspace')
    .action(() => notImplemented('test'))
}
