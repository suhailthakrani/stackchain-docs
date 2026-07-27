---
title: remove
description: Remove a feature — yaml, files, tests, and router/DI wiring.
---

## Description

`remove` tears down a feature that was added with `feature` / `add`:

- drops it from `stackchain.yaml`
- deletes `lib/features/<name>/` and matching `test/features/<name>_*.dart`
- re-syncs router + DI managed regions
- strips GoRouter auth redirect when removing `auth`
- updates the lockfile and runs the quality gate

You cannot remove the last remaining feature — add another first.

## Usage

```bash
dart run stackchain remove <name>
dart run stackchain remove --name <name>
```

## Options

| Option | Description |
| --- | --- |
| `--name`, `-n` | Feature name (alternative to positional) |
| `--dry-run` | Preview only |
| `--skip-analyze` | Skip analyze in gate |

## Examples

```bash
dart run stackchain remove auth
dart run stackchain remove notifications --dry-run
```

## Safety tips

1. Commit first.
2. Prefer `--dry-run` to preview deletions.
3. Hand-written files under the feature folder are deleted with the tree — move keepers out first if needed.
