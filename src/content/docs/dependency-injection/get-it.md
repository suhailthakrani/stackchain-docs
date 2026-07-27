---
title: GetIt
description: Default GetIt dependency injection wiring in stackchain.
---

## YAML

```yaml
stackchain:
  di: get_it
```

## How it works

- `configureDependencies()` is called from `lib/bootstrap.dart`
- Core services (network, storage, session, logger, …) register in the `core` region
- Per-feature registrations live in the `features` region via `sync` / `feature` / `migrate` / `rename`

For layered architectures (`feature_first` / `clean`), each feature registers:

| Registration | Lifetime |
| --- | --- |
| `<Feature>RemoteDataSource` → impl | lazy singleton |
| `<Feature>Repository` → impl | lazy singleton |
| `Get<Feature>` use case | lazy singleton |
| `<Feature>Bloc` / `Cubit` / `Controller` (when applicable) | factory |

Hand-written registrations should live **outside** markers so sync cannot wipe them.

```dart
// <stackchain:core>
// SessionService, DioClient, …
// </stackchain:core>

// <stackchain:features>
// HomeRemoteDataSource, HomeRepository, GetHome, HomeBloc, …
// </stackchain:features>
```
