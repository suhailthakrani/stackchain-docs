---
title: init
description: Scaffold your Flutter app from stackchain.yaml.
---

## Usage

```bash
dart run stackchain init
dart run stackchain init --dry-run
dart run stackchain init --overwrite
```

## What it does

1. Reads `stackchain.yaml` (or applies defaults)
2. Creates `lib/app`, `lib/core`, `lib/features`
3. Adds the right packages to `pubspec.yaml`
4. Replaces the counter `main.dart`
5. Writes `.stackchain/lock.yaml`
6. Runs a health check

## Tips

- Existing files are **skipped** unless you pass `--overwrite`
- No config file? Defaults are fine — a starter YAML is written for you
- Always safe to preview: `--dry-run`
