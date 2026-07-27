---
title: MVC
description: MVC architecture in stackchain — models, controllers, views, widgets, and optional GetX bindings.
---

## YAML

```yaml
stackchain:
  architecture: mvc
  state_management: getx
  routing: getx
  di: getx
```

Or use the preset:

```yaml
stackchain:
  preset: getx_mvc
```

## Folder structure

```text
lib/features/<name>/
  models/
  controllers/
  views/
  widgets/
  bindings/    # when GetX
```

## Pros

- Minimal ceremony with GetX
- Fast iteration for small/medium apps

## Cons

- Controllers can accumulate god-object logic without discipline
- Harder to enforce domain purity than clean/feature_first

## When to choose

GetX-centric codebases and rapid delivery teams comfortable with MVC.

## Generated output

Model, controller, binding (GetX), page, header widget — with other state variants as configured.
