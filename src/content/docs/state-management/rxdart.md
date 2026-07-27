---
title: RxDart
description: How stackchain generates and wires RxDart for Flutter features.
---

## YAML

```yaml
stackchain:
  state_management: rxdart
```

## Generated structure

```text
presentation/controllers/
  <feature>_state.dart
  <feature>_controller.dart   # stream-based
```

## Advantages

- Reactive streams without a full state-management framework
- Preset: `production_rxdart`

## How stackchain wires it

Adds `rxdart` and generates stream/controller templates (including stream-based ViewModels in MVVM where applicable).

