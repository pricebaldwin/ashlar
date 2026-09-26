import { describe, expect, it } from 'vitest'
import { createProgram } from '../program.ts'

describe('createProgram', () => {
  it('registers the command surface from spec section 7', () => {
    const names = createProgram().commands.map((c) => c.name())
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
})
