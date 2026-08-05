---
title: Installation
description: Add stackchain as a Flutter dev dependency.
---

Add stackchain to **dev_dependencies** only.

## Requirements

- Dart SDK `^3.5.0`
- An existing Flutter project (`flutter create my_app`)

## Install

```bash
cd my_app
dart pub add --dev stackchain
```

Or in `pubspec.yaml`:

```yaml
dev_dependencies:
  stackchain: ^1.3.1
```

Then `flutter pub get`.

## Check it works

```bash
dart run stackchain help
```

## Next

[Quick start](/stackchain-docs/getting-started/quick-start/)
