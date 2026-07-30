---
title: Migration guide
description: Adopt stackchain in an existing app, or switch stacks later.
---

## Existing Flutter app → stackchain

```bash
dart pub add --dev stackchain
# write stackchain.yaml (or use a preset)
dart run stackchain init --dry-run
dart run stackchain init
```

Existing files are skipped by default. Use `--overwrite` carefully. Move old features into the new layout gradually; use `feature` for anything new.

## Switch stack later

```bash
dart run stackchain migrate --state cubit --dry-run
dart run stackchain migrate --state cubit
dart run stackchain migrate --preset production_riverpod
```

Presentation + wiring regenerate. Domain/data stay (unless you change architecture). Commit first.

See [migrate](/stackchain-docs/cli/migrate/) for all flags.
