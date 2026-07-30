---
title: Examples
description: Copy-paste stacks for common Flutter setups.
---

## Bloc (recommended default)

```yaml
stackchain:
  preset: production_bloc
  features: [splash, auth, home, settings]
```

```bash
dart run stackchain init
dart run stackchain feature auth
flutter pub get
flutter run -t lib/main_dev.dart --dart-define=FLAVOR=dev
```

## Riverpod

```yaml
stackchain:
  preset: production_riverpod
  features: [home, profile]
```

## GetX

```yaml
stackchain:
  preset: getx_mvc
  features: [splash, auth, home]
```

## Minimal

```yaml
stackchain:
  preset: minimal
  features: [home]
```

## Manual (no preset)

```yaml
stackchain:
  architecture: feature_first
  state_management: bloc
  routing: go_router
  di: get_it
  network: dio
  features: [splash, auth, home]
```

## Evolve later

```bash
dart run stackchain feature notifications
dart run stackchain rename profile account
dart run stackchain remove notifications
dart run stackchain migrate --state cubit --dry-run
dart run stackchain migrate --state cubit
dart run stackchain upgrade
```
