---
title: Your code stays safe
description: How stackchain preserves your code across sync, feature, test, and migrate.
---

## Three kinds of markers

### Router & DI (wiring)

```dart
// <stackchain:routes>
GoRoute(path: AppRoutes.home, ...),
// </stackchain:routes>
```

`sync` / `feature` / `upgrade` / `migrate` replace **only** the inside.

### Your methods (presentation)

```dart
// <stackchain:custom>
Future<void> myExtraLogic() async { ... }
// </stackchain:custom>
```

Put custom methods here in Bloc / Cubit / Page / Controller classes. They survive `feature`, `test`, and `migrate` — including state swaps (e.g. Bloc → Cubit).

### Generated test scaffolds

```dart
// <stackchain:generated>
// …scaffold assertions…
// </stackchain:generated>
```

Refresh keeps anything **outside** these markers. Your permanent custom tests live in:

```text
test/features/<feature>_custom_test.dart   # never overwritten
```

## Rules of thumb

1. **Don't edit inside** `routes` / `core` / `features` / `generated` markers — they'll be rewritten.
2. **Do put logic in** `// <stackchain:custom>` or in your own files / `*_custom_test.dart`.
3. **Use `--dry-run`** before `migrate` or `--overwrite`.
4. Legacy files without markers get a `*.stackchain.bak` backup before replace.

## Overwrite vs merge

| Mode | Effect |
| --- | --- |
| Default | Skip files that already exist (where applicable) |
| `--overwrite` | Refresh scaffolds; custom regions & `*_custom_test` stay |
| Region merge | Replace only marked interiors |

Domain / data layers stay yours unless you change architecture.
