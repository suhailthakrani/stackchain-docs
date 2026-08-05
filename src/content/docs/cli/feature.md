---
title: feature
description: Add a feature with files, routes, DI, and tests in one command.
---

## Usage

```bash
dart run stackchain feature auth
dart run stackchain add notifications   # same thing
dart run stackchain feature onboarding --dry-run
```

Names must be snake_case: `auth`, `user_profile`, `notifications`.

## What it does

1. Adds the name to `stackchain.yaml`
2. Creates the feature folder for your architecture + state library
3. Wires routes and DI
4. Adds tests
5. Runs a health check

## Named recipes

Some names get richer extras:

| Name | Extra |
| --- | --- |
| `auth` | Form widget + form widget test, session/guards |
| `settings` | Settings tile, preferences persistence + unit test |
| `onboarding` | Page-view style onboarding widget |
| `notifications` | Notification list tile extras |
| `search` | Search box widget |
| `profile` | Profile-oriented extras |
| anything else | Solid baseline + smoke tests |

## CRUD entity

For a list + form slice (not just a named recipe):

```bash
dart run stackchain crud product
dart run stackchain crud order --overwrite
```

Same as `feature`, plus list tile, form, and form widget test.

## Related

```bash
dart run stackchain test auth          # full unit + widget + integration suite
dart run stackchain stub auth          # placeholder tests for custom methods
dart run stackchain rename profile account
dart run stackchain remove auth
```

Custom methods in generated classes go in `// <stackchain:custom>` — see [Your code stays safe](/stackchain-docs/guides/smart-merge/).

Use `feature <name> --overwrite` after a state migrate if a page still looks stale; custom regions stay.
