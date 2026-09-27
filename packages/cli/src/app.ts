import { buildApplication, buildRouteMap } from '@stricli/core'
import { addCommand } from './commands/add.ts'
import { buildBlocksCommand } from './commands/build.ts'
import { createCommand } from './commands/create.ts'
import { graphCommand } from './commands/graph.ts'
import { initCommand } from './commands/init.ts'
import { installCommand } from './commands/install.ts'
import { publishCommand } from './commands/publish.ts'
import { shipCommand } from './commands/ship.ts'
import { testCommand } from './commands/test.ts'
import { updateCommand } from './commands/update.ts'

// The command surface from spec section 7. Each command lives in its own
// module and delegates to @ashlar/core; this file only wires them together.
export const routes = buildRouteMap({
  routes: {
    init: initCommand,
    create: createCommand,
    add: addCommand,
    install: installCommand,
    build: buildBlocksCommand,
    test: testCommand,
    ship: shipCommand,
    publish: publishCommand,
    graph: graphCommand,
    update: updateCommand,
  },
  docs: { brief: 'Compose, ship, and publish blocks from git libraries.' },
})

export const app = buildApplication(routes, {
  name: 'ash',
  // Flags are declared camelCase and accepted as kebab-case too
  // (--dry-run for dryRun). Help shows the kebab form.
  scanner: { caseStyle: 'allow-kebab-for-camel' },
})
