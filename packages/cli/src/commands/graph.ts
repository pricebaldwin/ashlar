import type { Command } from 'commander'
import { notImplemented } from '../not-implemented.ts'

// Spec G1-G4, D4.
export function registerGraph(program: Command): void {
  program
    .command('graph <query>')
    .description('Query the dependency graph across libraries')
    .action(() => notImplemented('graph'))
}
