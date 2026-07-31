---
title: Commands overview
description: The stackchain commands you'll use day to day.
---

```bash
dart run stackchain <command>
```

No command? Same as `init`.

## Everyday

| Command | What it does |
| --- | --- |
| `init` | Scaffold the whole app |
| `feature <name>` | Add a feature (files + routes + DI + tests) |
| `test <feature>` | Generate unit / widget / integration tests |
| `rename <from> <to>` | Rename a feature |
| `remove <name>` | Remove a feature |
| `sync` | Re-wire router & DI |
| `upgrade` | Refresh dependencies |
| `migrate` | Switch architecture / state / routing / DI / preset |
| `doctor` | Health check only |
| `presets` | List built-in presets |

## Also useful

| Command | What it does |
| --- | --- |
| `make page\|widget\|service <name>` | Generate a single piece |
| `list` | List available generators |
| `new <name>` | Create a custom generator |
| `help [command]` | Help for a command |

## Useful flags

| Flag | Meaning |
| --- | --- |
| `--dry-run` | Preview, don't write |
| `--overwrite` / `-f` | Overwrite / refresh existing files |
| `--skip-analyze` | Skip analyzer in the quality check |
| `--path` / `-p` | Project root (default: current folder) |

```bash
dart run stackchain help test
dart run stackchain test auth --dry-run
```
