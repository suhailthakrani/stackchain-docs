---
title: Dependency injection
description: get_it, injectable, and getx.
---

```yaml
stackchain:
  di: get_it
```

| Value | Notes |
| --- | --- |
| `get_it` | Default |
| `injectable` | Needs `build_runner` after generate |
| `getx` | Default when state is GetX |

Registrations live in `lib/core/di/injection.dart` inside markers. `feature` / `sync` / `migrate` keep them up to date.
