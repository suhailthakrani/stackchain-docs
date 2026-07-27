---
title: GetX
description: How stackchain generates and wires GetX for Flutter features.
---

## YAML

```yaml
stackchain:
  state_management: getx
```

## Generated structure

```text
presentation/controllers/
  <feature>_controller.dart
bindings/
  <feature>_binding.dart
```

## Advantages

- Controllers + bindings + optional GetX routing/DI in one ecosystem
- Preset: `getx_mvc`

## Smart defaults

If `routing` / `di` are omitted while state is `getx`, both default to `getx`.

## How stackchain wires it

Generates controllers and bindings; with GetX routing/DI, sync updates match GetX patterns.

