import {
  type Application,
  type CommandContext,
  generateHelpTextForAllCommands,
} from '@stricli/core'
import { describe, expect, it } from 'vitest'
import { app, routes } from '../app.ts'
import { runAsh } from '../test-context.ts'

describe('app', () => {
  it('routes the command surface from spec section 7', () => {
    const names = routes.getAllEntries().map((e) => e.name.original)
    expect(names).toEqual([
      'init',
      'create',
      'add',
      'install',
      'build',
      'test',
      'ship',
      'publish',
      'graph',
      'update',
    ])
  })

  // The CLI surface is the public API. Any change to a command, flag,
  // positional, or brief shows up as a diff in this snapshot; review it as an
  // API change (see CLAUDE.md, "CLI surface is the public API").
  it('keeps the documented surface stable', () => {
    // Stricli types this for the base context only; it never runs a command,
    // so widening our context away is safe.
    const docs = generateHelpTextForAllCommands(
      app as unknown as Application<CommandContext>,
    )
    for (const [route, help] of docs) {
      expect(help).toMatchSnapshot(route)
    }
  })
})

describe('runAsh', () => {
  it('exits 1 with a message for an unbuilt command', async () => {
    const result = await runAsh(['create', 'lib-template', 'button'])
    expect(result.exitCode).toBe(1)
    expect(result.stderr).toContain('ash create: not implemented yet')
  })

  it('rejects an unknown flag before the command runs', async () => {
    const result = await runAsh(['build', '--nope'])
    expect(result.exitCode).not.toBe(0)
    expect(result.stderr).not.toContain('not implemented yet')
  })

  it('rejects a missing required positional', async () => {
    const result = await runAsh(['graph'])
    expect(result.exitCode).not.toBe(0)
    expect(result.stderr).not.toContain('not implemented yet')
  })

  it('accepts optional positionals and repeated blocks', async () => {
    expect((await runAsh(['publish'])).stderr).toContain('not implemented yet')
    expect((await runAsh(['ship'])).stderr).toContain('not implemented yet')
    expect(
      (await runAsh(['ship', 'a', 'b', '--minor', '--scratch'])).stderr,
    ).toContain('not implemented yet')
  })
})
