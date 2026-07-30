---
title: remove & rename
description: Remove or rename a feature — files, yaml, routes, and DI.
---

## Remove

```bash
dart run stackchain remove auth
dart run stackchain remove notifications --dry-run
```

Deletes the feature folder + tests, updates `stackchain.yaml`, and re-wires routes/DI.

You can't remove the last remaining feature — add another first.

## Rename

```bash
dart run stackchain rename profile account
dart run stackchain rename --from auth --to login --dry-run
```

Both names must be snake_case. Rewrites yaml, files, tests, routes, and DI.

## Tips

1. Commit first.
2. Prefer `--dry-run`.
3. Hand-written files under a removed feature folder are deleted with it — move keepers out first.
