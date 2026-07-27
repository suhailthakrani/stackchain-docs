---
title: migrate
description: Intentionally evolve architecture, state management, routing, DI, network, or apply a preset.
---

## Description

`migrate` evolves the stack. Presentation / state / bindings are regenerated; domain and data layers are left intact. Optionally cleans old generated files/packages unless `--keep-old` is set. Rewrites `stackchain.yaml`, syncs, and runs the gate.

## Usage

```bash
dart run stackchain migrate [options]
```

## Options

| Option | Values / notes |
| --- | --- |
| `--architecture` | `feature_first` \| `clean` \| `mvvm` \| `mvc` |
| `--state` | `bloc` \| `cubit` \| `riverpod` \| `provider` \| `getx` \| `rxdart` |
| `--routing` | `go_router` \| `auto_route` \| `navigator` \| `getx` |
| `--di` | `get_it` \| `injectable` \| `getx` |
| `--network` | `dio` \| `http` |
| `--preset` | Named preset ID |
| `--keep-old` | Do not delete old generated files/packages |
| `--dry-run` | Preview |
| `--skip-analyze` | Skip analyze |

## Examples

```bash
dart run stackchain migrate --state cubit --dry-run
dart run stackchain migrate --preset production_riverpod
dart run stackchain migrate --architecture clean --state cubit --keep-old
```

## Safety tips

1. Commit your tree first.
2. Prefer `--dry-run`.
3. Use `--keep-old` if you need a manual cleanup pass.
4. Re-run tests and `doctor` after migrate.
