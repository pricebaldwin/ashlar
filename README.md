# Ashlar

Ashlar keeps small, trusted, versioned units of code in git libraries. You change them in disposable workspaces, ship them back with a verified build, and query them as one dependency graph across libraries.

Status: scaffolding. The `ash` CLI parses every planned command, and each one exits with `not implemented yet`.

## Getting started from a fresh clone

### 1. Prerequisites

Node 24 or newer and pnpm. The pnpm version is pinned in `package.json` (`packageManager`), so `corepack enable` gets you the right one. From the repo root:

```
pnpm install
```

### 2. Put `ash` on your PATH (once per machine)

```
pnpm link-cli
ash --help
```

This links the repo globally (`pnpm add -g link:<repo>`), so `ash` runs `bin/ash`, which runs `packages/cli/src/bin.ts` through tsx in your current directory. There is no build step, and edits take effect on the next run.

If `pnpm link-cli` fails with `The configured global bin directory ... is not in PATH`, pnpm's global bin directory is not on your PATH yet. Run `pnpm setup` (it edits your shell rc file) or add `$PNPM_HOME/bin` to PATH yourself, then open a new shell. To remove the link: `pnpm remove -g ashlar`.

Without the link, `./bin/ash --help` from the repo root does the same thing. `pnpm ash --help` works too, but it runs from `packages/cli`, not your current directory, which matters for commands that act on the cwd. For the built binary, run `pnpm build`, then `node packages/cli/dist/bin.mjs --help`.

## Commands

| Command           | What it does                             |
| ----------------- | ---------------------------------------- |
| `pnpm link-cli`   | put `ash` on PATH (once per machine)     |
| `pnpm ash <args>` | run the CLI from source, in packages/cli |
| `pnpm build`      | build every package                      |
| `pnpm test`       | vitest across every package, run once    |
| `pnpm test:watch` | vitest, watch mode                       |
| `pnpm check`      | typecheck every package, then oxlint     |
| `pnpm lint`       | oxlint                                   |
| `pnpm format`     | prettier, writes in place                |

## Layout

| Path                   | What it is                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| `packages/cli`         | `@ashlar/cli`, the `ash` binary                                                                        |
| `packages/core`        | `@ashlar/core`, the domain logic: libraries, workspaces, graph, ship, publish                          |
| `packages/env-default` | `@ashlar/env-default`, the default env (TypeScript, Vite, Vitest, Oxlint, Storybook) and its templates |

## Architecture notes

- **Monorepo, CLI first.** The CLI, core, and default env are separate packages. The CLI only parses arguments and prints; the logic goes in core so a later UI (for example a graph browser) can reuse it.
- **No web app, database, or hosting yet.** The repo started as a forge TanStack Start + Prisma/SQLite + Netlify scaffold. All of that was removed to keep the start light, since the plan is CLI first. It is in git history (commit `7d3d2f1`) if a UI such as a graph browser is wanted later.
- **The default env is its own package** because each library has exactly one env, chosen per library. A second env becomes a sibling package, not a flag in core.
- **The CLI surface is treated as the public API.** It uses Stricli, so each command's flags and arguments are declared as data and checked against the command's types. A snapshot test of every command's help text turns any change to the surface into a visible diff. Interactive questions use `@clack/prompts`, and every question can also be answered by a flag so scripts and CI never block on a prompt.
- **Only the CLI has a build.** The other packages export `.ts` source and tsdown bundles them into the CLI. This keeps the workspace build-free until a package needs to be published on its own.
