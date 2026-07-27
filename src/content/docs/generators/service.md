---
title: Service generator
description: Generate a core service stub with stackchain make service.
---

```bash
dart run stackchain make service sync
```

## Output

```text
lib/core/services/sync_service.dart
```

Stub with `init` / `run` methods — register it in DI (outside or inside managed regions deliberately).
