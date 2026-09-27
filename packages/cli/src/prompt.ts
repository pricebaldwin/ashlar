import * as clack from '@clack/prompts'

// The questions a command can ask. Every question should also be answerable
// by a flag, so a prompt only runs when that flag is missing.
export interface Prompter {
  text(message: string, opts?: { readonly default?: string }): Promise<string>
  select<T extends string>(message: string, options: readonly T[]): Promise<T>
  confirm(message: string): Promise<boolean>
}

// Thrown when the user cancels a prompt (Ctrl+C or Esc).
export class PromptCancelled extends Error {
  constructor() {
    super('cancelled')
  }
}

function answered<T>(value: T | symbol): T {
  if (clack.isCancel(value)) throw new PromptCancelled()
  return value as T
}

export const clackPrompter: Prompter = {
  async text(message, opts) {
    return answered<string>(
      await clack.text({
        message,
        placeholder: opts?.default,
        defaultValue: opts?.default,
      }),
    )
  },
  async select(message, options) {
    // Selected as plain strings: clack's Option type does not resolve for an
    // unconstrained generic.
    const choice = answered<string>(
      await clack.select<string>({
        message,
        options: options.map((value) => ({ value })),
      }),
    )
    return choice as (typeof options)[number]
  },
  async confirm(message) {
    return answered<boolean>(await clack.confirm({ message }))
  },
}
