---
title: CLI reference
description: Condensed reference of all stackchain commands, arguments, and flags.
---

```bash
dart run stackchain [global-options] <command> [command-options]
```

No command ⇒ `init`.

## Global options

| Flag | Short | Description |
| --- | --- | --- |
| `--help` | `-h` | Usage |
| `--overwrite` | `-f` | Overwrite files |
| `--dry-run` | | No writes |
| `--verbose` | `-v` | Verbose |
| `--skip-analyze` | | Skip analyze |
| `--path` | `-p` | Project root |

## Commands

| Command | Args | Notes |
| --- | --- | --- |
| `help` | `[command]` | |
| `init` | | Full scaffold |
| `feature` | `<name>` or `--name` | Vertical slice |
| `add` | `<name>` | Alias of feature |
| `sync` | | Region merge |
| `upgrade` | | Deps + sync + lock + gate |
| `migrate` | stack flags | Evolve stack |
| `doctor` | | Gate only |
| `presets` | | List IDs |
| `make` | `<type> <name>` | `feature\|page\|widget\|service` |
| `list` | | Bricks |
| `new` | `<brick_name>` | Custom brick |

### migrate flags

`--architecture` `--state` `--routing` `--di` `--network` `--preset` `--keep-old` `--dry-run` `--skip-analyze`

### make flags

`--name/-n` `--var/-V key=value` (multi) `--overwrite` `--dry-run` `--skip-analyze`
