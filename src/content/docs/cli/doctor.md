---
title: doctor & presets
description: Health check and built-in stack presets.
---

## doctor

```bash
dart run stackchain doctor
```

Runs the health check without generating files. Set `strict_quality: true` in YAML to fail generates on analyze issues.

## presets

```bash
dart run stackchain presets
```

| Preset | Stack |
| --- | --- |
| `production_bloc` | feature_first / bloc / go_router / get_it |
| `production_riverpod` | feature_first / riverpod / go_router / get_it |
| `production_rxdart` | feature_first / rxdart / go_router / get_it |
| `clean_cubit` | clean / cubit / go_router / get_it |
| `getx_mvc` | mvc / getx / getx / getx |
| `firebase_bloc` | bloc + firebase extras |
| `minimal` | smallest useful scaffold |

```yaml
stackchain:
  preset: production_bloc
  features: [splash, auth, home]
```
