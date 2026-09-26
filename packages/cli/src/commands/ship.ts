import type { Command } from 'commander'
import { notImplemented } from '../not-implemented.ts'

// Spec S1-S5, X1, section 6 (Ship).
export function registerShip(program: Command): void {
  program
    .command('ship [blocks...]')
    .description(
      'Verify changed blocks, assign versions, and commit them to the library',
    )
    .option('--major', 'bump the major version')
    .option('--minor', 'bump the minor version')
    .option('--patch', 'bump the patch version (default)')
    .option('--scratch', 'ship to the library scratch area, unverified')
    .action(() => notImplemented('ship'))
}
