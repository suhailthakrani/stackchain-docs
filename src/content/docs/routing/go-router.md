---
title: GoRouter
description: Default GoRouter setup generated and synced by stackchain.
---

## YAML

```yaml
stackchain:
  routing: go_router
```

## What gets generated

- Declarative route table in managed `routes` region
- `RouteGuards` for auth-aware redirects when applicable
- App router entry used by the root `App` widget

## Sync behavior

`dart run stackchain feature …` and `sync` merge new feature routes into the managed region without wiping custom routes declared outside markers.

## Example

```bash
dart run stackchain feature home
dart run stackchain sync
```
