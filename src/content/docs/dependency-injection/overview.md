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
| `core` | Core registrations |
| `features` | Per-feature registrations |

```dart
// <stackchain:core>
// ...
// </stackchain:core>

// <stackchain:features>
// ...
// </stackchain:features>
```
