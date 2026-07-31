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

- Presentation, bootstrap, router, DI, and feature tests are regenerated
- Domain/data layers stay (unless you change architecture)
- Obsolete packages are dropped (unless `--keep-old`)
- Code in `// <stackchain:custom>` is preserved and ported across state changes
- Legacy unmarked customized files get a `*.stackchain.bak` backup

## Tips

1. Commit first.
2. Always `--dry-run` once.
3. Keep custom methods inside `// <stackchain:custom>` (or separate unmarked files).
4. Re-run `dart run stackchain test --all` after migrate if you want a full suite refresh.
