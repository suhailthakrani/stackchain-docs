---
title: Riverpod
description: How stackchain generates and wires Riverpod for Flutter features.
---

## YAML

```yaml
stackchain:
  state_management: riverpod
```

## Generated structure

```text
presentation/providers/
  <feature>_provider.dart   # StateNotifier-style provider template
```

## Advantages

- Compile-safe providers, flexible scoping
- Production preset: `production_riverpod`

## How stackchain wires it

Infers `flutter_riverpod`, generates provider files, and syncs DI/router as configured (typically `get_it` + `go_router` in the production preset).

