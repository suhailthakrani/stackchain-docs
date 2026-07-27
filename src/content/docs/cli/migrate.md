---
title: migrate
description: Intentionally evolve architecture, state management, routing, DI, network, or apply a preset.
---

## Description

`migrate` evolves the stack end-to-end. It is not limited to presentation files — any stack change refreshes the shell that depends on that stack.

## What migrate refreshes

| Area | Behavior |
| --- | --- |
| `stackchain.yaml` | Rewritten to the target stack |
| App shell | `bootstrap.dart`, `main*.dart`, `app.dart` (e.g. Riverpod `ProviderScope` removed when leaving Riverpod) |
| Router / DI seeds | Regenerated when routing, DI, state, or architecture change |
| Presentation | Regenerated for every feature |
| Architecture change | Regenerates the full feature tree for the new layout |
| Feature tests | Refreshed for the new state management |
| GetX routing | Ensures per-feature bindings exist |
| Pubspec | Adds target packages; drops obsolete ones unless `--keep-old` |
| Stale files | Deletes old generated presentation/tests unless `--keep-old` |
| Sync + gate | Re-wires managed regions and runs the quality gate |

Domain and data layers are preserved for state/routing/DI migrations. An **architecture** migration regenerates more of the feature tree — review carefully.

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
# Preview a state swap
dart run stackchain migrate --state bloc --dry-run

# Riverpod → Bloc (rewrites bootstrap + presentation + DI + tests)
dart run stackchain migrate --state bloc

# Routing / DI together
dart run stackchain migrate --routing go_router --di get_it

# Apply a whole preset
dart run stackchain migrate --preset production_riverpod

# Keep leftovers for a manual cleanup pass
dart run stackchain migrate --architecture clean --state cubit --keep-old
```

## Safety tips

1. Commit your tree first.
2. Prefer `--dry-run`.
3. Use `--keep-old` if you need a manual cleanup pass.
4. Re-run tests and `doctor` after migrate.
5. Generated presentation files you edited by hand are rewritten — move custom UI into unmarked widgets when possible.
