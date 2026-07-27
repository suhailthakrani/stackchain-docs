---
title: upgrade
description: Refresh inferred dependencies, re-sync managed regions, update the lockfile, and re-run the quality gate.
---

## Description

`upgrade` refreshes the stack in place: inferred package versions, region sync, lockfile, and quality gate.

## Usage

```bash
dart run stackchain upgrade [options]
```

## Options

| Option | Description |
| --- | --- |
| `--dry-run` | Preview |
| `--skip-analyze` | Skip analyze |

## Examples

```bash
dart run stackchain upgrade
dart run stackchain upgrade --dry-run
```

Use this when package versions inferred from your YAML stack have drifted, or after pulling config changes that should re-sync wiring without a full `migrate`.
