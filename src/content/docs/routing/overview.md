---
title: Routing overview
description: stackchain routing options — go_router, auto_route, navigator, and getx.
---

```yaml
stackchain:
  routing: go_router
```

| Value | Packages |
| --- | --- |
| `go_router` | `go_router` (default) |
| `auto_route` | `auto_route` + `auto_route_generator` (dev) |
| `navigator` | none extra — `ProjectSync` skips router file sync |
| `getx` | `get` |

Generated under `lib/app/router/`:

```text
app_routes.dart
route_guards.dart
app_router.dart
```

Managed region id: `routes` (`// <stackchain:routes>…// </stackchain:routes>`).

When an `auth` feature exists, route guards + redirect patterns are wired for secure session flows.
