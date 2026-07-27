---
title: Navigator
description: Imperative Navigator routing with stackchain — sync skips router file merges.
---

## YAML

```yaml
stackchain:
  routing: navigator
```

## Behavior

- No extra routing package is added
- `ProjectSync` **skips** router file sync when `routing == navigator`
- You own imperative navigation; feature generators still create pages

Use when you need full manual control of `Navigator` 1.0 APIs.
