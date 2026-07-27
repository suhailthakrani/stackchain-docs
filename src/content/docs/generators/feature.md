---
title: Feature generator
description: Vertical feature generation — files, recipes, router/DI sync, tests, and lockfile.
---

## Commands

```bash
dart run stackchain feature auth
dart run stackchain add settings
dart run stackchain make feature profile   # same vertical slice path
dart run stackchain rename profile account
dart run stackchain remove auth
```

## Pipeline (`feature` / `add`)

1. Validate snake_case name
2. Append to `features` in YAML if new
3. Generate architecture-specific files + recipe extras
4. Sync router + DI regions (full feature DI graph for GetIt)
5. Update `.stackchain/lock.yaml`
6. Quality gate

## Recipes

| Feature name | Extras |
| --- | --- |
| `auth` | Form widget, session/guards integration, richer tests |
| `settings` | Settings-oriented extras + tests |
| `profile` | Profile-oriented extras + tests |
| other | Baseline slice + smoke/type tests |

## Layered output example

```text
lib/features/auth/
  data/…
  domain/…
  presentation/bloc|cubit|providers|controllers/…
  presentation/pages/
  presentation/widgets/
```

## Related

- [feature CLI](/stackchain-docs/cli/feature/)
- [remove](/stackchain-docs/cli/remove/)
- [rename](/stackchain-docs/cli/rename/)
