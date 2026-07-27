---
title: Custom bricks
description: Author and discover custom stackchain bricks with list and new.
---

## Discover

```bash
dart run stackchain list
```

## Scaffold

```bash
dart run stackchain new my_generator
```

Creates `.stackchain/bricks/my_generator/`.

## Template syntax

Files end in `.tpl` and support:

| Token | Meaning |
| --- | --- |
| `{{name}}` | Raw name |
| `{{name.snakeCase}}` | snake_case |
| `{{name.pascalCase}}` | PascalCase |
| `{{name.camelCase}}` | camelCase |
| `{{name.paramCase}}` | param-case |
| `{{name.titleCase}}` | Title Case |
| `{{name.constantCase}}` | CONSTANT_CASE |
| `#` / `^` sections | Conditional blocks |

Pass extras:

```bash
dart run stackchain make page foo -V title=Foo
```

## Note on `bricks/feature`

The package ships a GetX-style `bricks/feature` brick, but `make feature` / `feature` use the **vertical slice generator**, not that brick.
