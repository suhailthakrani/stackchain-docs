---
title: State management overview
description: Supported state libraries in stackchain — bloc, cubit, riverpod, provider, getx, and rxdart.
---

Configure with:

```yaml
stackchain:
  state_management: bloc
```

| Value | Inferred packages |
| --- | --- |
| `bloc` / `cubit` | `flutter_bloc`, `bloc` (+ `bloc_test` in dev) |
| `riverpod` | `flutter_riverpod` |
| `provider` | `provider` |
| `getx` | `get` |
| `rxdart` | `rxdart` |

Also inferred globally: `equatable`, `logger`, `connectivity_plus`.

Default: **`bloc`**.

Change later with:

```bash
dart run stackchain migrate --state cubit
```
