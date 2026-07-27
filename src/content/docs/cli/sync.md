---
title: sync
description: Smart-merge only managed stackchain regions without regenerating entire feature trees.
---

## Description

`sync` updates **managed regions** only — router routes and DI registrations — without rewriting hand-authored code outside markers.

## Usage

```bash
dart run stackchain sync [options]
```

## Options

| Option | Description |
| --- | --- |
| `--dry-run` | Preview merges |
| `--skip-analyze` | Skip analyze in gate |

## Managed regions

| Region ID | Typical file |
| --- | --- |
| `routes` | `lib/app/router/…` |
| `core` | `lib/core/di/injection.dart` |
| `features` | `lib/core/di/injection.dart` |

Markers look like:

```dart
// <stackchain:routes>
// ... generated route table ...
// </stackchain:routes>
```

When `routing: navigator`, router file sync is skipped.

## Examples

```bash
dart run stackchain sync
dart run stackchain sync --dry-run
```
