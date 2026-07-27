---
title: presets
description: List and understand stackchain blueprint presets.
---

## Description

`presets` prints built-in blueprint IDs.

## Usage

```bash
dart run stackchain presets
```

## Built-in presets

| ID | Fingerprint |
| --- | --- |
| `production_bloc` | feature_first / bloc / go_router / get_it (+ localization, flavors, ci, strict_quality, secure storage) |
| `production_riverpod` | feature_first / riverpod / go_router / get_it (+ production toggles) |
| `production_rxdart` | feature_first / rxdart / go_router / get_it |
| `clean_cubit` | clean / cubit / go_router / get_it |
| `getx_mvc` | mvc / getx / getx / getx |
| `firebase_bloc` | feature_first / bloc + firebase / analytics / crashlytics |
| `minimal` | feature_first / bloc; core_services, widgets, flavors, ci off |

## Apply a preset

```yaml
stackchain:
  preset: production_bloc
  features: [splash, auth, home]
```

Or migrate:

```bash
dart run stackchain migrate --preset production_riverpod
```

Full details: [Presets reference](/stackchain-docs/reference/presets/).
