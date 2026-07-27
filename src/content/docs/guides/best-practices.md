---
title: Best practices
description: Recommended workflows for using stackchain safely in production Flutter apps.
---

## Config

1. Prefer a **preset**, then override only what you must.
2. Keep `features` snake_case and stable — renaming is a manual migrate.
3. Commit `stackchain.yaml` and `.stackchain/lock.yaml`.

## Generation hygiene

1. Dry-run before overwrite or migrate.
2. Never put irreplaceable logic inside managed regions.
3. Run `doctor` in CI (in addition to the generated workflow when `ci: true`).

## Features

1. Use named recipes (`auth`, `settings`, `profile`) when they match the domain.
2. Keep domain/data pure; put UI state in presentation only.
3. Register manual services outside `<stackchain:…>` markers or extend via bricks.

## Evolution

1. `sync` for wiring; `upgrade` for deps; `migrate` for stack changes.
2. Use `--keep-old` when you need a staged cleanup.
3. Re-run widget/unit tests after migrate.

## Security

1. Keep `secure_storage` enabled for tokens.
2. Do not log secrets — rely on generated logger/interceptor patterns carefully.
3. Treat `strict_quality: true` as the bar for production presets.
