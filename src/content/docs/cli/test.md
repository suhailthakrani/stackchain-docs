---
title: test
description: Generate unit, widget, and integration tests for a feature.
---

## Usage

```bash
dart run stackchain test auth
dart run stackchain test auth --type unit,widget
dart run stackchain test auth --type integration --overwrite
dart run stackchain test --all
```

Feature must already exist in `stackchain.yaml`.

## What it generates

| Type | Output |
| --- | --- |
| `unit` | state tests — e.g. `test/features/auth_bloc_test.dart` |
| `widget` | page smoke — `test/features/auth_page_test.dart` |
| `integration` | flow smoke — `integration_test/auth_flow_test.dart` |

Default `--type` is all three.

Also creates once (never overwritten):

```text
test/features/<feature>_custom_test.dart
```

Put tests for **your** methods there.

## Stub custom methods

Scan `// <stackchain:custom>` and append failing placeholder tests to `*_custom_test.dart`:

```bash
dart run stackchain stub auth
dart run stackchain stub --all
```

`test` also stubs by default (`--stub-custom`; use `--no-stub-custom` to skip).

## Options

| Flag | Meaning |
| --- | --- |
| `--type`, `-t` | `unit`, `widget`, `integration` (comma-separated) |
| `--all`, `-a` | Every feature in `stackchain.yaml` |
| `--overwrite`, `-f` | Refresh scaffold files (custom_test untouched) |
| `--stub-custom` | Stub custom methods (default on; `--no-stub-custom`) |
| `--dry-run` | Preview only |
| `--skip-analyze` | Skip analyzer in the quality check |

## Safe refresh

Scaffold tests use `// <stackchain:generated>` regions — hand-written tests **outside** those markers survive a refresh.

Presentation classes (Bloc / Cubit / Page) use `// <stackchain:custom>` for your methods — see [Your code stays safe](/stackchain-docs/guides/smart-merge/).

## Tip

`feature auth` still adds a default unit test. Use `test` for the full suite, or to refresh after a `migrate`.
