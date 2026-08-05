---
title: Troubleshooting
description: Fix common stackchain issues.
---

## "Not a Flutter app"

Run from the project root (where `pubspec.yaml` is), or pass `--path`.

## Files not updating

Existing files are skipped by default. Use `--overwrite`, or `sync` for router/DI markers.

## Analyze failures

The quality gate **fails** when `dart analyze` exits non-zero. Fix the reported issues, then re-run.

```bash
dart run stackchain doctor
```

`strict_quality: true` also treats analyzer **infos** as fatal (`--fatal-infos`).

## Localization / production_riverpod broken

Need `flutter_localizations` (SDK) and `generate: true`. Run:

```bash
dart run stackchain upgrade
flutter pub get
flutter gen-l10n   # if needed
```

Do not pin an old `intl` (e.g. `^0.19.0`) — it conflicts with the Flutter SDK.

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

- Feature logic → `// <stackchain:custom>` in presentation/state classes
- Don't put irreplaceable code in `bootstrap.dart` / `main*.dart` / `app.dart` (those are rewritten)
- Router/DI hand-written code **outside** markers survives state-only migrates

## Pages still use old Bloc after migrate to Cubit

Upgrade to **1.3.1+**. Then:

```bash
dart run stackchain migrate --state cubit
# or heal one feature:
dart run stackchain feature auth --overwrite
```

## test says unknown feature

Add it first: `dart run stackchain feature auth`, then `dart run stackchain test auth`.

## Feature name rejected

Use snake_case: `user_profile`, not `UserProfile`.

## Can't remove the last feature

Add another feature first, then remove the one you don't want.
