---
title: GetIt
description: Default GetIt dependency injection wiring in stackchain.
---

## YAML

```yaml
stackchain:
  di: get_it
```

## How it works

- `configureDependencies()` is called from the app bootstrap/entrypoint
- Core services (network, storage, session) register in the `core` region
- Features register in the `features` region via `sync` / `feature`

Hand-written registrations should live **outside** markers so sync cannot wipe them.
