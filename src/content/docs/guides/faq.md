---
title: FAQ
description: Frequently asked questions about stackchain.
---

## Is stackchain a one-shot generator?

No. Keep it as a dev dependency and use `sync`, `upgrade`, and `migrate` over time.

## Does it replace flutter create?

No. Create the app first, then run stackchain inside it.

## Will sync delete my code?

Only content inside `// <stackchain:…>` markers is replaced. Outside markers is preserved. Whole-file overwrites require `--overwrite`.

## Why is clean the same folder tree as feature_first?

By design in the current architecture plugins — clean emphasizes conventions on the same layered layout.

## Can I use SQLite?

Not as a `storage` enum value today. Use Hive / prefs / secure storage. Drift/Isar offline modules are on the roadmap.

## What is make feature vs bricks/feature?

`make feature` and `feature` use the vertical slice generator. The GetX-oriented brick under `bricks/feature/` is not that path.

## Which version is documented?

Documentation targets **stackchain 1.1.2**.
