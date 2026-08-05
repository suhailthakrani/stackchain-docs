---
title: Changelog
description: Release history for the stackchain Flutter CLI package.
---

Documentation tracks the published package. Source of truth: package `CHANGELOG.md`.

## 1.3.1

- **Fix** migrate / `feature --overwrite`: rewrite presentation pages for the new state API (Bloc → Cubit, etc.) while preserving `// <stackchain:custom>`
- **Fix** quality gate: `dart analyze` errors/warnings always fail the gate (no longer “non-blocking”)
- **Fix** `production_riverpod` (and any `localization: true`): add `flutter_localizations` SDK dep, enable `generate: true`, stop pinning conflicting `intl: ^0.19.0`
- **Fix** migrate shell: state-only migrates no longer wipe router/DI files — sync updates markers and keeps hand-written code outside them
- Page templates wrap UI in `// <stackchain:generated>` for safe soft-merge refreshes

## 1.3.0

- Richer shippable recipes: deepen auth (form + widget test) and settings (preferences + persistence test); add onboarding, notifications, search
- Add `crud <entity>` for list tile + form + form tests on top of a vertical slice
- Add `stub <feature>` (and `test --stub-custom`) to scan `// <stackchain:custom>` and append placeholder tests
- Add `doctor --fix`: detect marker/lock/orphan drift and auto sync + refresh lockfile

## 1.2.0

- Add `test <feature>` — unit, widget, and integration tests (`--type`, `--all`, `--overwrite`)
- Preserve user code in `// <stackchain:custom>` across `migrate` / `feature` / `test`
- Port custom regions when state management changes (e.g. Bloc → Cubit)
- Add `test/features/<feature>_custom_test.dart` (never overwritten)
- Scaffold tests use `// <stackchain:generated>` (safe refresh)
- Legacy unmarked customized files backed up as `*.stackchain.bak` before replace

## 1.1.4

- Clarify README for pub.dev: quicker onboarding, support matrix, examples, contribution CTA

## 1.1.3

- Harden `migrate` so any stack change refreshes bootstrap/app/router/DI and feature tests
- Add `rename <from> <to>` for end-to-end feature rename
- Add `remove <name>` — delete feature files/tests, drop yaml entry, re-sync router/DI
- GetIt DI registers datasource + repository + use case + state per feature

## 1.1.2

- Official documentation site published
- Homepage / docs URLs pointed at this site

## 1.1.1

- `migrate` cleans up old state files and unused packages (`--keep-old` to keep them)
- Fix `migrate` / `upgrade` / `sync` on older apps (SessionService, Dio, guards)
- Fix package logo on pub.dev

## 1.1.0

- `sync` / `upgrade` / `migrate` / `doctor` / `presets`
- `feature` wires router, DI, and tests
- Quality gate on generate; secure session + guards; flavors; CI; RxDart

## 1.0.0

- Config-driven Flutter scaffolding via `stackchain.yaml`
- Architectures, state, routing, DI, network options
- Commands: `init`, `feature`, `make`, `list`, `new`
