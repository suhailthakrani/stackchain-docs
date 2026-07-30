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
| --- | --- |
| `--help` | `-h` | Usage |
| `--overwrite` | `-f` | Overwrite files |
| `--dry-run` | | No writes |
| `--verbose` | `-v` | Verbose |
| `--skip-analyze` | | Skip analyze |
| `--path` | `-p` | Project root |

## Commands

| Command | Args | Notes |
| --- | --- |
| `help` | `[command]` | |
| `init` | | Full scaffold |
| `feature` | `<name>` | Add a feature |
| `add` | `<name>` | Same as feature |
| `remove` | `<name>` | Delete a feature |
| `rename` | `<from> <to>` | Rename a feature |
| `sync` | | Re-wire routes & DI |
| `upgrade` | | Refresh deps |
| `migrate` | stack flags | Switch stack |
| `doctor` | | Health check |
| `presets` | | List presets |
| `make` | `<type> <name>` | page / widget / service |
| `list` | | List generators |
| `new` | `<name>` | Custom generator |

### migrate flags

`--architecture` `--state` `--routing` `--di` `--network` `--preset` `--keep-old` `--dry-run` `--skip-analyze`

### rename flags

`--from` `--to` `--dry-run` `--skip-analyze`

### make flags

`--name/-n` `--var/-V key=value` (multi) `--overwrite` `--dry-run` `--skip-analyze`
