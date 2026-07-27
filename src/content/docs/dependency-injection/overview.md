---
title: Dependency injection overview
description: GetIt, Injectable, and GetX DI options in stackchain.
---

```yaml
stackchain:
  di: get_it
```

| Value | Packages |
| --- | --- |
| `get_it` | `get_it` (default) |
| `injectable` | `injectable` + `injectable_generator` |
| `getx` | `get` |

Primary file: `lib/core/di/injection.dart`

Managed regions:

| ID | Purpose |
| --- | --- |
| `core` | Core registrations (session, network, storage, …) |
| `features` | Per-feature datasource / repository / use case / state |

```dart
// <stackchain:core>
// ...
// </stackchain:core>

// <stackchain:features>
// ...
// </stackchain:features>
```

`feature`, `remove`, `rename`, `sync`, and `migrate` all keep these regions aligned with `stackchain.yaml`.
