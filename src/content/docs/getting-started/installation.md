---
title: Installation
description: Install stackchain as a Flutter/Dart dev dependency and prepare your project for scaffolding.
---

stackchain is published on [pub.dev](https://pub.dev/packages/stackchain) and runs via `dart run`. Add it only to **dev_dependencies**.

## Requirements

| Requirement | Notes |
| --- | --- |
| Dart SDK | `^3.5.0` (as declared by the package) |
| Flutter app | An existing project with a Flutter `pubspec.yaml` |
| Network | First run resolves packages from pub.dev |

## Add the package

### Option A — dart pub

```bash
cd my_app
dart pub add --dev stackchain
```

### Option B — flutter pub

```bash
cd my_app
flutter pub add --dev stackchain
```

### Option C — pubspec.yaml

```yaml
dev_dependencies:
  stackchain: ^1.1.1
```

Then:

```bash
dart pub get
# or
flutter pub get
```

## Verify the CLI

```bash
dart run stackchain help
```

You should see the command list (`init`, `feature`, `sync`, `upgrade`, `migrate`, `doctor`, `presets`, `make`, `list`, `new`).

### Executable aliases

| Invocation | Behavior |
| --- | --- |
| `dart run stackchain …` | Main CLI (`bin/stackchain.dart`) |
| `dart run stackchain:init` | Shortcut that runs `init` (`bin/init.dart`) |

## First init without a config file

If `stackchain.yaml` is missing, `init` applies **production defaults** and writes a starter `stackchain.yaml` (with `features: [home]` and commented options).

```bash
dart run stackchain init
```

Defaults include:

| Key | Default |
| --- | --- |
| `architecture` | `feature_first` |
| `state_management` | `bloc` |
| `routing` | `go_router` |
| `di` | `get_it` |
| `network` | `dio` |
| `storage` | `[shared_preferences, secure_storage]` |
| `features` | `[home]` |
| `dark_mode` | `true` |
| `core_services` / `core_widgets` | `true` |
| `flavors` / `ci` | `true` |

Smart defaults: if you set `state_management: getx` and omit `routing` / `di`, both become `getx`.

## Global flags

These work on most generate commands:

| Flag | Short | Description |
| --- | --- | --- |
| `--help` | `-h` | Show usage |
| `--overwrite` | `-f` | Overwrite existing generated files |
| `--dry-run` | | Print actions without writing |
| `--verbose` | `-v` | Verbose logging |
| `--skip-analyze` | | Skip `dart analyze` in the quality gate |
| `--path` | `-p` | Flutter project root (default: cwd) |

## Next step

Follow the [Quick start](/getting-started/quick-start/) to scaffold and run the app.
