---
title: Provider
description: How stackchain generates and wires Provider for Flutter features.
---

## YAML

```yaml
stackchain:
  state_management: provider
```

## Generated structure

```text
presentation/providers/
  <feature>_provider.dart   # ChangeNotifier-style
```

## Advantages

- Familiar API for simpler apps
- Low learning curve

## How stackchain wires it

Adds `provider` and generates ChangeNotifier-based provider templates.

