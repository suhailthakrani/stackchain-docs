---
title: Clean Architecture
description: Clean architecture mode in stackchain — same directories as feature-first with stricter conventions.
---

## YAML

```yaml
stackchain:
  architecture: clean
```

## Folder structure

Identical directory layout to [Feature First](/stackchain-docs/architecture/feature-first/):

```text
lib/features/<name>/
  data/…
  domain/…
  presentation/…
```

## Pros

- Familiar Clean Architecture vocabulary (entities, use cases, repositories)
- Same generator path as feature_first — low migration friction between the two labels

## Cons

- Does not invent a separate hexagonal/ports folder tree
- Discipline is still yours — stackchain scaffolds; deeper architecture linting is on the roadmap

## When to choose

Teams that standardize on “clean” naming in RFCs/reviews. Functionally close to `feature_first`.

## Preset

```yaml
stackchain:
  preset: clean_cubit
```
