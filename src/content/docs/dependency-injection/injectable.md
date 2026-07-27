---
title: Injectable
description: Injectable + GetIt code generation with stackchain.
---

## YAML

```yaml
stackchain:
  di: injectable
```

## After generate

```bash
flutter pub get
dart run build_runner build --delete-conflicting-outputs
```

Injectable builds on GetIt. Prefer annotations on your services and keep stackchain-managed regions for generated registration glue.
