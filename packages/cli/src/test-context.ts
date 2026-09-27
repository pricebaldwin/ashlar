import { run } from '@stricli/core'
import { app } from './app.ts'
import type { Prompter } from './prompt.ts'

// Test helper, not a test: runs the CLI in-process with captured output and
// scripted prompt answers. Lives outside __tests__ so vitest does not collect it.

export interface RunResult {
  readonly stdout: string
  readonly stderr: string
  readonly exitCode: number
}

// Answers prompts in order. Fails the run if a command asks more questions
// than the test scripted.
export function scriptedPrompter(
  answers: readonly (string | boolean)[],
): Prompter {
  const queue = [...answers]
  const next = (message: string) => {
    if (queue.length === 0) throw new Error(`unexpected prompt: ${message}`)
    return queue.shift()!
  }
  return {
    async text(message) {
      return String(next(message))
    },
    async select(message) {
      return String(next(message)) as never
    },
    async confirm(message) {
      return Boolean(next(message))
    },
  }
}

export async function runAsh(
  argv: readonly string[],
  opts: { answers?: readonly (string | boolean)[]; interactive?: boolean } = {},
): Promise<RunResult> {
  let stdout = ''
  let stderr = ''
  const proc = {
    stdout: { write: (s: string) => void (stdout += s) },
    stderr: { write: (s: string) => void (stderr += s) },
    env: {},
    exitCode: undefined as number | string | null | undefined,
  }
  await run(app, argv, {
    process: proc,
    prompt: scriptedPrompter(opts.answers ?? []),
    interactive: opts.interactive ?? false,
  })
  return { stdout, stderr, exitCode: Number(proc.exitCode ?? 0) }
}
