---
title: Presets reference
description: Built-in stackchain preset blueprints and their stack fingerprints.
---

List at runtime:

```bash
dart run stackchain presets
```

| ID | Architecture | State | Routing | DI | Notes |
| --- | --- | --- | --- | --- | --- |
| `production_bloc` | feature_first | bloc | go_router | get_it | localization, flavors, ci, strict_quality, secure storage |
| `production_riverpod` | feature_first | riverpod | go_router | get_it | production toggles |
| `production_rxdart` | feature_first | rxdart | go_router | get_it | |
| `clean_cubit` | clean | cubit | go_router | get_it | |
| `getx_mvc` | mvc | getx | getx | getx | |
| `firebase_bloc` | feature_first | bloc | go_router | get_it | firebase / analytics / crashlytics |
| `minimal` | feature_first | bloc | go_router | get_it | core_services/widgets/flavors/ci off |

Apply:

```yaml
stackchain:
  preset: production_bloc
```

Or:

```bash
dart run stackchain migrate --preset production_riverpod
```
