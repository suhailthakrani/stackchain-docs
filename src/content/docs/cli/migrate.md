---
title: migrate
description: Switch architecture, state, routing, DI, network, or apply a preset.
---

## Usage

```bash
# Preview first
dart run stackchain migrate --state cubit --dry-run

# Apply
dart run stackchain migrate --state cubit
dart run stackchain migrate --preset production_riverpod
dart run stackchain migrate --routing go_router --di get_it
```

## Options

| Flag | Values |
| --- | --- |
| `--architecture` | `feature_first` \| `clean` \| `mvvm` \| `mvc` |
| `--state` | `bloc` \| `cubit` \| `riverpod` \| `provider` \| `getx` \| `rxdart` |
| `--routing` | `go_router` \| `auto_route` \| `navigator` \| `getx` |
| `--di` | `get_it` \| `injectable` \| `getx` |
| `--network` | `dio` \| `http` |
| `--preset` | any preset ID |
| `--keep-old` | don't delete old generated files/packages |
| `--dry-run` | preview only |

## What changes

| Area | Behavior |
| --- | --- |
| **Presentation pages + state classes** | Rewritten for the new API (Bloc → Cubit, etc.). `// <stackchain:custom>` is preserved and ported |
| **App shell** (`bootstrap`, `main`, `app.dart`) | Regenerated for the target stack (e.g. drops `ProviderScope` when leaving Riverpod) |
| **Router / DI** | State-only migrates: markers updated via sync — code **outside** markers stays. Routing/DI-type changes: full template refresh |
| **Domain / data** | Kept (unless architecture changes) |
| **Packages** | Target deps added; obsolete ones dropped (unless `--keep-old`) |
| **Tests** | Feature scaffolds refreshed; `*_custom_test.dart` never overwritten |

## Honest limits

- Do **not** put irreplaceable logic in `bootstrap.dart` / `main*.dart` / `app.dart` — migrate rewrites those files for the new stack.
- Put feature logic in `// <stackchain:custom>` or your own unmarked files under `domain/` / `data/`.
- After migrate, if anything looks stale: `dart run stackchain feature <name> --overwrite` (pages refresh; custom regions stay).

## Tips

1. Commit first.
2. Always `--dry-run` once.
3. Re-run `dart run stackchain test --all` after migrate if you want a full suite refresh.
