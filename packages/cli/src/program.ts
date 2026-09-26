import { Command } from 'commander'
import { registerAdd } from './commands/add.ts'
import { registerBuild } from './commands/build.ts'
import { registerCreate } from './commands/create.ts'
import { registerGraph } from './commands/graph.ts'
import { registerInit } from './commands/init.ts'
import { registerInstall } from './commands/install.ts'
import { registerPublish } from './commands/publish.ts'
import { registerShip } from './commands/ship.ts'
import { registerTest } from './commands/test.ts'
import { registerUpdate } from './commands/update.ts'

// The command surface from spec section 7. Each command lives in its own
// module and delegates to @ashlar/core; this file only wires them together.
export function createProgram(): Command {
  const program = new Command('ash').description(
    'Compose, ship, and publish blocks from git libraries.',
  )

  for (const register of [
    registerInit,
    registerCreate,
    registerAdd,
    registerInstall,
    registerBuild,
    registerTest,
    registerShip,
    registerPublish,
    registerGraph,
    registerUpdate,
  ]) {
    register(program)
  }

  return program
}
