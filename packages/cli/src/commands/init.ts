import type { Command } from 'commander'
import { notImplemented } from '../not-implemented.ts'

// Spec W1-W3.
export function registerInit(program: Command): void {
  program
    .command('init')
    .description('Set up the current directory as a workspace')
    .option('--library <path-or-remote>', 'library the workspace uses')
    .action(() => notImplemented('init'))
}
