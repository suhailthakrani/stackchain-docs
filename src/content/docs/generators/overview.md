---
title: Generators overview
description: How stackchain generation works — templates, vertical slices, bricks, and overwrite rules.
---

stackchain uses two generation systems:

| System | Used by | Source |
| --- | --- | --- |
| **In-code templates** | `init`, feature slices, sync/migrate presentation | `AppTemplates`, `RouterTemplates`, `CoreTemplates`, `FeatureTemplates`, `ModuleTemplates` |
| **Bricks (`.tpl`)** | `make page|widget|service`, `new`, `list` | Package `bricks/` + `.stackchain/bricks/` + project `bricks/` |

## Overwrite rules

- Existing files are skipped unless `--overwrite` / `-f`
- Smart merge updates **only** managed regions for sync paths
- Stock counter `main.dart` may be force-replaced on init baseline

## Quality gate

Every generate path can run the gate (structure, security baseline, optional analyze). Disable analyze with `--skip-analyze`.
