---
title: doctor
description: Run the stackchain quality gate without generating files.
---

## Description

`doctor` executes the quality gate alone — structure checks, security baseline, and optional analyze — with no scaffold writes.

## Usage

```bash
dart run stackchain doctor [options]
```

## Options

| Option | Description |
| --- | --- |
| `--skip-analyze` | Skip `dart analyze` |

## Examples

```bash
dart run stackchain doctor
```

Enable `strict_quality: true` in YAML to fail the gate on analyze issues during generates as well.
