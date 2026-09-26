import type { Command } from 'commander'
import { notImplemented } from '../not-implemented.ts'

// Spec B1, B2.
export function registerBuild(program: Command): void {
  program
    .command('build')
    .description('Build blocks in the workspace')
    .option(
      '--isolated',
      'install only declared dependencies and build in isolation',
    )
    .action(() => notImplemented('build'))
}
