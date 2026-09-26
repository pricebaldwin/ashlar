import type { Command } from 'commander'
import { notImplemented } from '../not-implemented.ts'

// Spec D1, D2.
export function registerInstall(program: Command): void {
  program
    .command('install <npm-module> <block>')
    .description('Install an npm package into one block')
    .action(() => notImplemented('install'))
}
