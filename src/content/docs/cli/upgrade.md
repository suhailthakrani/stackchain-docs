---
title: upgrade
description: Refresh dependencies and re-sync wiring.
---

```bash
dart run stackchain upgrade
dart run stackchain upgrade --dry-run
```

Refreshes packages inferred from your stack, re-syncs router/DI, updates the lockfile, and runs a health check.

Use after pulling config changes, or when deps feel stale. For switching Bloc → Cubit (etc.), use [`migrate`](/stackchain-docs/cli/migrate/) instead.
