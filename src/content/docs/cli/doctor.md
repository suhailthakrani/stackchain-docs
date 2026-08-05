---
title: doctor & presets
description: Health check, auto-repair, and built-in stack presets.
---

## doctor

```bash
dart run stackchain doctor
dart run stackchain doctor --fix
```

Runs the health check without generating files. Checks:

- `.stackchain/lock.yaml` presence / drift
- Missing feature markers
- Orphan routes / DI registrations

`--fix` auto-repairs what it can: syncs router/DI and refreshes the lockfile, then re-diagnoses.

Set `strict_quality: true` in YAML to fail generates on analyze issues. The quality gate fails on `dart analyze` errors/warnings (infos are fatal only with `strict_quality`).

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

`production_riverpod` (and any config with `localization: true`) needs `flutter_localizations` + `generate: true` — stackchain 1.3.1+ wires that for you. Don't pin an old `intl`.
