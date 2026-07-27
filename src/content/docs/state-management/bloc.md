---
title: Bloc
description: How stackchain generates and wires Bloc for Flutter features.
---

## YAML

```yaml
stackchain:
  state_management: bloc
```

## Generated structure (feature_first / clean)

```text
presentation/bloc/
  <feature>_event.dart
  <feature>_state.dart
  <feature>_bloc.dart
```

## Advantages

- Explicit events and states — excellent for complex flows
- First-class testing with `bloc_test`
- Default production preset: `production_bloc`

## How stackchain wires it

- Adds `flutter_bloc` / `bloc` to pubspec
- Generates event/state/bloc trio per feature
- Pages consume the bloc via Flutter Bloc patterns in templates
- DI registers feature dependencies in managed regions

