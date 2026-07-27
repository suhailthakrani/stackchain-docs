---
title: Migration guide
description: Migrate an existing Flutter app onto stackchain, or evolve an existing stackchain project.
---

## Adopting stackchain in an existing app

1. Ensure the repo is a Flutter app with a normal `pubspec.yaml`.
2. `dart pub add --dev stackchain`
3. Write `stackchain.yaml` matching your intended target stack (or a preset).
4. `dart run stackchain init --dry-run` then `init` (use `--overwrite` carefully).
5. Resolve conflicts manually — stackchain skips existing files by default.
6. Move hand-written features into the generated layout gradually; use `feature` for new slices.

## Evolving stack within stackchain

```bash
# Preview
dart run stackchain migrate --state cubit --dry-run

# Apply
dart run stackchain migrate --state cubit

# Apply a whole preset
dart run stackchain migrate --preset production_riverpod
```

### What migrate changes

- Regenerates presentation / state / bindings
- Leaves domain & data intact
- Optionally deletes old generated files/packages (unless `--keep-old`)
- Rewrites YAML, syncs, runs gate

## From counter app

`init` replaces the stock counter entrypoint with `configureDependencies` + `App`.
