---
title: Examples
description: Practical stackchain.yaml and CLI examples for common Flutter stacks.
---

## Production Bloc

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

## Riverpod production

```yaml
stackchain:
  preset: production_riverpod
  features: [home, profile]
```

## GetX MVC

```yaml
stackchain:
  preset: getx_mvc
  features: [home, auth]
```

## Minimal

```yaml
stackchain:
  preset: minimal
  features: [home]
```

## Full manual stack

```yaml
stackchain:
  architecture: feature_first
  state_management: bloc
  routing: go_router
  di: get_it
  network: dio
  storage: [shared_preferences, secure_storage, hive]
  flavors: true
  ci: true
  features: [splash, auth, home, profile]
```

## Evolve mid-project

```bash
dart run stackchain feature notifications
dart run stackchain rename profile account
dart run stackchain remove notifications

dart run stackchain migrate --state bloc --dry-run
dart run stackchain migrate --state bloc
dart run stackchain migrate --preset production_riverpod
dart run stackchain upgrade
```

## Bricks

```bash
dart run stackchain make page onboarding
dart run stackchain make widget primary_button
dart run stackchain make service analytics
dart run stackchain new company_auth_slice
```
