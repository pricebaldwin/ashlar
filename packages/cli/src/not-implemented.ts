// Placeholder action for commands that are wired but not built yet.
export function notImplemented(command: string): never {
  console.error(`ash ${command}: not implemented yet`)
  process.exit(1)
}
