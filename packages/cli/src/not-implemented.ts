// Placeholder result for commands that are wired but not built yet. Stricli
// prints a returned Error to stderr and exits 1.
export function notImplemented(command: string): Error {
  return new Error(`ash ${command}: not implemented yet`)
}
