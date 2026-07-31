---
title: Troubleshooting
description: Fix common stackchain issues.
---

## "Not a Flutter app"

Run from the project root (where `pubspec.yaml` is), or pass `--path`.

## Files not updating

Existing files are skipped by default. Use `--overwrite`, or `sync` for router/DI markers.

## Analyze failures

```bash
dart run stackchain doctor --skip-analyze
```

Or set `strict_quality: false` temporarily, fix issues, then turn it back on.

## GetX routing/DI wrong

Set them explicitly, or omit both while `state_management: getx` so defaults kick in.

## AutoRoute / Injectable

After `pub get`:

```bash
dart run build_runner build --delete-conflicting-outputs
```

## Migrate removed something I needed

Restore from git and re-run with `--keep-old`. Look for `*.stackchain.bak` backups if a legacy unmarked file was replaced.

## Custom code disappeared after migrate

Put methods inside `// <stackchain:custom>…// </stackchain:custom>` in presentation/state classes. Outside that region (or inside `generated` / `routes`) gets rewritten.

## test says unknown feature

Add it first: `dart run stackchain feature auth`, then `dart run stackchain test auth`.

## Feature name rejected

Use snake_case: `user_profile`, not `UserProfile`.

## Can't remove the last feature

Add another feature first, then remove the one you don't want.
