---
title: init
description: Scaffold a full Flutter project from stackchain.yaml — app shell, core, features, deps, lockfile, and quality gate.
---

## Description

`init` performs a full project scaffold from `stackchain.yaml` (or defaults if missing).

## Usage

```bash
dart run stackchain init [options]
dart run stackchain:init [options]
```

No subcommand is equivalent to `init`.

## Options

| Option | Description |
| --- | --- |
| `--overwrite`, `-f` | Overwrite existing generated files |
| `--dry-run` | Preview actions without writing |
| `--verbose`, `-v` | Verbose logging |
| `--skip-analyze` | Skip analyze step in quality gate |
| `--path`, `-p` | Project root |

## Pipeline

1. Detect Flutter app via `pubspec.yaml`
2. Load / parse config (defaults if absent)
3. Ensure feature directories
4. Write templates: app, router, core, features, modules
5. Merge pubspec dependencies
6. Write default `stackchain.yaml` if missing
7. Remove stock `test/widget_test.dart`
8. Write `.stackchain/lock.yaml`
9. Run quality gate

## Overwrite policy

Existing files are **skipped** unless `--overwrite` / `-f` is set. The stock counter `main.dart` may be force-replaced as part of baseline setup.

## Examples

```bash
dart run stackchain init
dart run stackchain init --overwrite
dart run stackchain init --dry-run -v
```

## Expected output

You should see file write/skip logs, dependency merges, lockfile update, and a quality gate summary. On success, `lib/app`, `lib/core`, and `lib/features` exist and the app boots with `configureDependencies` + `App`.
