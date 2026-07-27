---
title: list and new
description: Discover built-in and local bricks, and scaffold custom generators under .stackchain/bricks.
---

## list

Lists built-in package bricks and local project bricks.

```bash
dart run stackchain list
```

Discovery order includes:

- Package `bricks/`
- Project `.stackchain/bricks/`
- Project `bricks/`

## new

Scaffolds a custom brick:

```bash
dart run stackchain new my_generator
```

Creates a starter under `.stackchain/bricks/my_generator/`.

## Template language

Bricks use `.tpl` files with Mustache-like syntax:

- `{{name}}`
- `{{name.snakeCase}}`, `{{name.pascalCase}}`, `{{name.camelCase}}`, `{{name.paramCase}}`, `{{name.titleCase}}`, `{{name.constantCase}}`
- Sections with `#` / `^`

See [Custom bricks](/generators/bricks/) for authoring guidance.
