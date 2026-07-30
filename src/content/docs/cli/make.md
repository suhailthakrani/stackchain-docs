---
title: make & bricks
description: Generate a page, widget, or service — or add your own generator.
---

## make

```bash
dart run stackchain make page onboarding
dart run stackchain make widget app_chip
dart run stackchain make service analytics
```

| Type | Creates |
| --- | --- |
| `page` | a page under `lib/shared/pages/` |
| `widget` | a widget under `lib/core/widgets/` |
| `service` | a service under `lib/core/services/` |
| `feature` | same as `feature` command |

## Custom generators

```bash
dart run stackchain list          # see available generators
dart run stackchain new my_gen    # scaffold a custom one
```

Custom bricks live in `.stackchain/bricks/<name>/`. Template files end in `.tpl`.
