#!/usr/bin/env node
import { run } from '@stricli/core'
import { app } from './app.ts'
import { clackPrompter } from './prompt.ts'

await run(app, process.argv.slice(2), {
  process,
  prompt: clackPrompter,
  interactive: Boolean(process.stdin.isTTY && process.stdout.isTTY),
})
