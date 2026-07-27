---
title: CLI overview
description: Overview of the stackchain CLI — commands, global flags, and how invocations map to generators.
---

Run stackchain with:

```bash
dart run stackchain <command> [arguments]
```

With **no subcommand**, the CLI behaves like `init`.

## Commands

| Command | Purpose |
| --- | --- |
| `help [command]` | Usage / per-command help |
| `init` | Full scaffold from `stackchain.yaml` |
| `feature <name>` | Vertical slice (files + router + DI + tests + gate) |
| `add <name>` | Alias for `feature` |
| `sync` | Smart-merge managed regions only |
| `upgrade` | Refresh deps, sync, lockfile, quality gate |
| `migrate` | Evolve stack (architecture / state / routing / DI / network / preset) |
| `doctor` | Quality gate only (no generate) |
| `presets` | List blueprint IDs |
| `make <type> <name>` | Brick generators (`page`, `widget`, `service`; `feature` routes to vertical slice) |
| `list` | List built-in + local bricks |
| `new <brick_name>` | Scaffold a custom brick under `.stackchain/bricks/` |

## Global options

| Flag | Short | Description |
| --- | --- | --- |
| `--help` | `-h` | Show usage |
| `--overwrite` | `-f` | Overwrite existing generated files |
| `--dry-run` | | Print actions, no writes |
| `--verbose` | `-v` | Verbose logging |
| `--skip-analyze` | | Skip `dart analyze` in quality gate |
| `--path` | `-p` | Flutter project root (default: cwd) |

## Help

```bash
dart run stackchain help
dart run stackchain help migrate
dart run stackchain help feature
```

## Project path

```bash
dart run stackchain init --path ../my_app
```

Browse detailed pages for each command in this section, or the condensed [CLI reference](/stackchain-docs/reference/cli/).
