---
title: rename
description: Rename a feature end-to-end — yaml, files, tests, router, and DI.
---

## Description

`rename` renames a feature across the project:

- rewrites the name in `stackchain.yaml`
- regenerates Stackchain-owned feature files under the new name
- preserves hand-written files under the old feature tree (path + identifier rewrite)
- deletes the old feature directory and old tests
- re-syncs router + DI
- updates the lockfile and runs the quality gate

## Usage

```bash
dart run stackchain rename <from> <to>
dart run stackchain rename --from <from> --to <to>
```

Both names must be snake_case: `^[a-z][a-z0-9_]*$`.

## Options

| Option | Description |
| --- | --- |
| `--from` | Current feature name |
| `--to` | New feature name |
| `--dry-run` | Preview only |
| `--skip-analyze` | Skip analyze in gate |

## Examples

```bash
dart run stackchain rename profile account
dart run stackchain rename --from auth --to login --dry-run
```

## Rules

- Source feature must exist in YAML and/or `lib/features/<from>/`
- Target must not already exist
- Old and new names cannot be identical

## Safety tips

1. Commit first.
2. Prefer `--dry-run`.
3. Review hand-written renames — Stackchain rewrites common identifiers (`Profile` → `Account`, path segments, etc.), but complex custom code may need a manual pass.
