---
title: sync
description: Re-wire router and DI without regenerating features.
---

```bash
dart run stackchain sync
dart run stackchain sync --dry-run
```

Updates only the marked regions in router and DI files. Your code outside markers is untouched.

```dart
// <stackchain:routes>
// …generated routes…
// </stackchain:routes>
```

Use this after manual edits to feature lists, or anytime routes/DI look out of date.
