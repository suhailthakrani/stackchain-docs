---
title: api
description: Generate models and API repositories from an OpenAPI spec.
---

## Usage

```bash
dart run stackchain api openapi.yaml
dart run stackchain api          # refresh from last spec
```

Reads OpenAPI 3 **schemas** and writes:

```text
lib/core/api/models/<name>_model.dart
lib/core/api/repositories/<name>_api_repository.dart
lib/core/api/api.dart
```

## Why

When the backend changes DTOs, re-run `api` instead of hand-editing models. Code inside `// <stackchain:custom>` is kept.

## Honest limits

- Uses `components.schemas` (not full path/operation codegen yet)
- Repos default to `/<schema_snake>` — adjust in custom if your API differs
- Does not auto-wire DI/routes; register or import where you need them

## Safe re-run

| Region | Behavior |
| --- | --- |
| `// <stackchain:generated>` | Refreshed |
| `// <stackchain:custom>` | Preserved |

Last spec path is stored in `.stackchain/openapi.yaml`.

## Options

| Flag | Meaning |
| --- | --- |
| `--spec`, `-s` | Spec path (or pass as positional) |
| `--overwrite`, `-f` | Force refresh owned files |
| `--dry-run` | Preview only |
| `--skip-analyze` | Skip analyzer |
