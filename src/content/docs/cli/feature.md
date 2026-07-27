---
title: feature / add
description: Generate a vertical feature slice and wire router, DI, tests, lockfile, and quality gate.
---

## Description

`feature` (alias `add`) creates a vertical slice for a named feature: folders/files for your architecture + state management, then syncs router and DI managed regions, updates the lockfile, and runs the quality gate.

## Usage

```bash
dart run stackchain feature <name>
dart run stackchain feature --name <name>
dart run stackchain add <name>
```

Feature names must be snake_case: `^[a-z][a-z0-9_]*$`.

## Options

| Option | Description |
| --- | --- |
| `--name`, `-n` | Feature name (alternative to positional) |
| `--overwrite`, `-f` | Overwrite existing generated files |
| `--dry-run` | Preview only |
| `--skip-analyze` | Skip analyze in gate |

## What it does

1. Appends the feature to `stackchain.yaml` if new
2. Generates feature files (+ recipe extras)
3. Runs `ProjectSync` (router + DI regions)
4. Updates `.stackchain/lock.yaml`
5. Runs quality gate

## Named recipes

| Name | Extra behavior |
| --- | --- |
| `auth` | Richer auth extras (form widget, session/guards integration, tests) |
| `settings` | Settings-oriented extras + tests |
| `profile` | Profile-oriented extras + tests |
| *other* | Baseline slice + smoke/type tests |

## Examples

```bash
dart run stackchain feature auth
dart run stackchain add notifications
dart run stackchain feature --name onboarding --dry-run
```

## Expected output

New folders under `lib/features/<name>/`, updated route/DI regions, YAML feature list update, and a passing (or reported) quality gate.
