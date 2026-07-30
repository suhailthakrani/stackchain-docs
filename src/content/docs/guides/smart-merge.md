---
title: Your code stays safe
description: How stackchain updates router and DI without overwriting your work.
---

## Markers

Generated files use markers like this:

```dart
// <stackchain:routes>
GoRoute(path: AppRoutes.home, ...),
// </stackchain:routes>
```

`sync`, `feature`, `upgrade`, and `migrate` replace **only** what is between the markers.

## Rules of thumb

1. **Don't put custom logic inside markers** — it will be overwritten on the next sync.
2. **Write your code outside markers** — or in your own files.
3. **Use `--dry-run`** before big changes (`migrate`, `--overwrite`).

## Overwrite vs merge

| Mode | Effect |
| --- | --- |
| Default | Skip files that already exist |
| `--overwrite` | Replace whole files |
| Region merge | Replace only marker interiors |

That's it. Your business logic in `domain/`, `data/`, and unmarked presentation code stays yours.
