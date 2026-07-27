---
title: Cubit
description: How stackchain generates and wires Cubit for Flutter features.
---

## YAML

```yaml
stackchain:
  state_management: cubit
```

## Generated structure

```text
presentation/cubit/
  <feature>_state.dart
  <feature>_cubit.dart
```

## Advantages

- Simpler than Bloc when events are unnecessary
- Same `flutter_bloc` ecosystem
- Mid-point via `migrate --state cubit`

## How stackchain wires it

Uses Cubit templates under the presentation layer and the `clean_cubit` preset for a ready stack.

