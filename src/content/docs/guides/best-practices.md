---
title: Best practices
description: Simple habits for using stackchain well.
---

## Config

1. Prefer a **preset**, then override only what you must.
2. Keep feature names snake_case (`auth`, `user_profile`).
3. Commit `stackchain.yaml` and `.stackchain/lock.yaml`.

## Day to day

1. Add features with `feature` — don't hand-wire routes/DI.
2. Keep custom logic **outside** `// <stackchain:…>` markers.
3. Preview big changes: `--dry-run` before `migrate` or `--overwrite`.

## Evolving

| Need | Command |
| --- | --- |
| Re-wire routes/DI | `sync` |
| Refresh packages | `upgrade` |
| Switch Bloc → Cubit, etc. | `migrate --state cubit` |

## Security

Keep `secure_storage` for tokens. Turn on `strict_quality: true` for production apps.
