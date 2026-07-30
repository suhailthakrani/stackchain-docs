---
title: State management
description: bloc, cubit, riverpod, provider, getx, and rxdart.
---

```yaml
stackchain:
  state_management: bloc
```

| Value | Packages added |
| --- | --- |
| `bloc` / `cubit` | `flutter_bloc`, `bloc` |
| `riverpod` | `flutter_riverpod` |
| `provider` | `provider` |
| `getx` | `get` |
| `rxdart` | `rxdart` |

Default: **`bloc`**.

Switch later:

```bash
dart run stackchain migrate --state cubit --dry-run
dart run stackchain migrate --state cubit
```
