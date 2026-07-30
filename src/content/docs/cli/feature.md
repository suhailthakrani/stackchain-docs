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
| `auth` | Form, session/guards, richer tests |
| `settings` | Settings-oriented extras |
| `profile` | Profile-oriented extras |
| anything else | Solid baseline + smoke tests |

## Related

```bash
dart run stackchain rename profile account
dart run stackchain remove auth
```
