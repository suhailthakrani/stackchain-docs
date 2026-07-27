---
title: Troubleshooting
description: Fix common stackchain init, sync, analyze, and migrate issues.
---

## init says not a Flutter app

Ensure `pubspec.yaml` contains Flutter SDK dependencies and you are in the project root (or pass `--path`).

## Files not updating

Default behavior skips existing files. Use `--overwrite` or rely on `sync` for managed regions.

## Analyze failures in the gate

```bash
dart run stackchain doctor --skip-analyze
# or temporarily
strict_quality: false
```

Fix analyze issues, then re-enable strict mode for production.

## GetX routing/DI not selected

Set them explicitly, or omit them while `state_management: getx` so smart defaults apply.

## AutoRoute / Injectable not generating

Run build_runner after pub get:

```bash
dart run build_runner build --delete-conflicting-outputs
```

## Migrate removed files I still needed

Re-run with `--keep-old` from a clean commit, or restore from VCS and migrate again with `--keep-old`.

## Feature name rejected

Use snake_case: `^[a-z][a-z0-9_]*$` — e.g. `user_profile`, not `UserProfile`.
