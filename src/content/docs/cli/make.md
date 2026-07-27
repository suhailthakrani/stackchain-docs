---
title: make
description: Generate pages, widgets, and services from bricks — plus feature routing into the vertical slice generator.
---

## Description

`make` runs brick-based generators.

## Usage

```bash
dart run stackchain make <type> <name> [options]
```

## Types

| Type | Output |
| --- | --- |
| `feature` | Routes to the vertical slice generator (same as `feature`) — **not** the GetX-style brick under `bricks/feature/` |
| `page` | `lib/shared/pages/<name>_page.dart` then auto-sync (analyze skipped) |
| `widget` | `lib/core/widgets/<name>.dart` |
| `service` | `lib/core/services/<name>_service.dart` |

## Options

| Option | Description |
| --- | --- |
| `--name`, `-n` | Name |
| `--var`, `-V key=value` | Extra template vars (repeatable) |
| `--overwrite`, `-f` | Overwrite |
| `--dry-run` | Preview |
| `--skip-analyze` | Skip analyze |

## Examples

```bash
dart run stackchain make page onboarding
dart run stackchain make widget app_chip
dart run stackchain make service sync
dart run stackchain make page checkout -V title=Checkout
```
