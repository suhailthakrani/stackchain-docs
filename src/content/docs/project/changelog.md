---
title: Changelog
description: Release history for the stackchain Flutter CLI package.
---

Documentation tracks the published package. Source of truth: package `CHANGELOG.md`.

## 1.1.3

- Harden `migrate` so any stack change refreshes bootstrap/app/router/DI and feature tests
- Add `rename <from> <to>` for end-to-end feature rename
- Add `remove <name>` — delete feature files/tests, drop yaml entry, re-sync router/DI
- GetIt DI registers datasource + repository + use case + state per feature

## 1.1.2

- Official documentation site published
- Homepage / docs URLs pointed at this site

## 1.1.1

- Migrate cleanup improvements
- Baseline ensurer fixes

## 1.1.0

- `sync` / `upgrade` / `migrate` / `doctor` / `presets`
- RxDart state management support
- Smarter lifecycle tooling beyond one-shot init

## 1.0.0

- Initial generators for architectures, state, routing, DI, network, storage
- Feature scaffolding and core app templates
