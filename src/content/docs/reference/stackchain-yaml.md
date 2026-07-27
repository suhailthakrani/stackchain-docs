---
title: stackchain.yaml reference
description: Canonical field reference for stackchain.yaml including types, defaults, and allowed values.
---

Root key: `stackchain` (legacy: `flutter_starter`).

| Key | Type | Allowed | Default |
| --- | --- | --- | --- |
| `preset` | string? | see presets | none |
| `architecture` | string | `feature_first`, `clean`, `mvvm`, `mvc` | `feature_first` |
| `state_management` | string | `bloc`, `cubit`, `riverpod`, `provider`, `getx`, `rxdart` | `bloc` |
| `routing` | string | `go_router`, `auto_route`, `navigator`, `getx` | `go_router`* |
| `di` | string | `get_it`, `injectable`, `getx` | `get_it`* |
| `network` | string | `dio`, `http` | `dio` |
| `storage` | string \| list | `shared_preferences`, `hive`, `secure_storage` | `[shared_preferences, secure_storage]` |
| `features` | string[] | snake_case | `[home]` |
| `localization` | bool | | `false` |
| `firebase` | bool | | `false` |
| `analytics` | bool | | `false` |
| `crashlytics` | bool | | `false` |
| `biometrics` | bool | | `false` |
| `dark_mode` | bool | | `true` |
| `core_services` | bool | | `true` |
| `core_widgets` | bool | | `true` |
| `flavors` | bool | | `true` |
| `ci` | bool | | `true` |
| `strict_quality` | bool | | `false` |

\* If `state_management: getx` and `routing` / `di` omitted → both `getx`.

Explicit keys override preset expansion. Module toggles may nest under `modules:`.
