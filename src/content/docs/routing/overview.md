---
title: Routing
description: go_router, auto_route, navigator, and getx.
---

```yaml
stackchain:
  routing: go_router
```

| Value | Notes |
| --- | --- |
| `go_router` | Default. Auth redirects when `auth` feature exists |
| `auto_route` | Needs `build_runner` after generate |
| `navigator` | Basic Navigator 1.0 |
| `getx` | Default when state is GetX |

Routes live under `lib/app/router/` and update via markers when you add/remove features.
