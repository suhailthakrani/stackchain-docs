---
title: Smart merge and regeneration
description: How stackchain preserves hand-written code using managed regions and merge engines.
---

## Markers

```dart
// <stackchain:routes>
// generated
// </stackchain:routes>
```

Known IDs: `routes`, `core`, `features`.

## Engines

| Component | Role |
| --- | --- |
| `RegionMerger` | Replace region bodies only |
| `SmartFileMerger` | Merge missing Dart imports |
| `ProjectSync` | Router + DI sync entrypoint |

## Commands that merge

- `sync`
- `feature` / `add`
- `upgrade`
- `migrate`
- `make page` (auto-sync)

## Overwrite vs merge

| Flag / mode | Effect |
| --- | --- |
| default write | Skip existing files |
| `--overwrite` / `-f` | Replace whole files |
| region merge | Replace only marker interiors |

## Best practice

Never hand-edit inside markers if you plan to re-sync. Add companion methods, wrappers, or unmarked sections instead.
