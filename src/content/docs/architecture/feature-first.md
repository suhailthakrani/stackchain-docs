---
title: Feature First
description: Feature-first architecture in stackchain — folder structure, pros and cons, and generated output.
---

## YAML

```yaml
stackchain:
  architecture: feature_first
```

**Default architecture.**

## Folder structure

```text
lib/features/<name>/
  data/
    datasources/
    repositories/
    models/
  domain/
    entities/
    repositories/
    usecases/
  presentation/
    <bloc|cubit|providers|controllers>/
    pages/
    widgets/
  bindings/          # when state_management: getx
```

State folder name depends on state management:

| State | Folder |
| --- | --- |
| `bloc` | `presentation/bloc` |
| `cubit` | `presentation/cubit` |
| `riverpod` / `provider` | `presentation/providers` |
| `getx` / `rxdart` | `presentation/controllers` |

## Pros

- Features own their full stack — easy to delete or extract
- Scales with team ownership per feature
- Matches common Flutter production guidance

## Cons

- Shared cross-cutting logic must live in `core/` deliberately
- Large features can still bloat without module boundaries

## When to choose

Default for most apps. Prefer `clean` only if you want the same tree with stricter conventions.

## Generated output (layered)

Per feature at init / feature command:

- Domain entity, repository contract, `get_<feature>` use case
- Data model, remote datasource, repository impl
- Page + header widget
- State files matching your state library
