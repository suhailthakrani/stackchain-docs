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
dart run stackchain migrate --state bloc --dry-run

# Apply (rewrites bootstrap, presentation, DI, tests, pubspec)
dart run stackchain migrate --state bloc

# Routing / DI
dart run stackchain migrate --routing go_router --di get_it

# Apply a whole preset
dart run stackchain migrate --preset production_riverpod
```

### What migrate changes

- Refreshes app shell (`bootstrap.dart`, mains, `app.dart`) for the target stack
- Regenerates presentation / state / bindings (and fuller tree on architecture change)
- Refreshes feature tests for the new state management
- Leaves domain & data intact (unless architecture itself changes)
- Optionally deletes old generated files/packages (unless `--keep-old`)
- Rewrites YAML, syncs router/DI, runs gate

### Example: Riverpod → Bloc

Before migrate, bootstrap may look like:

```dart
runApp(const ProviderScope(child: App()));
```

After `migrate --state bloc`:

```dart
runApp(const App());
```

Riverpod packages are dropped from `pubspec.yaml`, Bloc presentation files are generated, and DI registers Bloc + datasource/repository/use case for each feature.

See [migrate](/stackchain-docs/cli/migrate/) for the full option list.

## Feature lifecycle

```bash
dart run stackchain feature auth
dart run stackchain rename profile account
dart run stackchain remove auth
```

## From counter app

`init` replaces the stock counter entrypoint with `configureDependencies` + `App` via `bootstrap.dart`.
