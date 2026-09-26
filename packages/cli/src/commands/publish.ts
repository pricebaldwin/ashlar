import type { Command } from 'commander'
import { notImplemented } from '../not-implemented.ts'

// Spec P1-P5.
export function registerPublish(program: Command): void {
  program
    .command('publish [library]')
    .description('Push library versions the registry does not have yet')
    .action(() => notImplemented('publish'))
}
