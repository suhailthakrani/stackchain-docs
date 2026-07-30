---
title: FAQ
description: Common questions about stackchain.
---

## Is this a one-shot generator?

No. Keep it as a dev dependency. Use `feature`, `sync`, `upgrade`, and `migrate` over time.

## Does it replace flutter create?

No. Create the app first, then run stackchain inside it.

## Will sync delete my code?

Only code inside `// <stackchain:…>` markers is replaced. Everything else is preserved.

## Can I rename or remove a feature?

Yes:

```bash
dart run stackchain rename profile account
dart run stackchain remove auth
```

You can't remove the last remaining feature.

## Can I switch state management later?

Yes. Preview first:

```bash
dart run stackchain migrate --state cubit --dry-run
dart run stackchain migrate --state cubit
```

Domain/data layers stay; presentation and wiring are regenerated. Commit first.

## Which version is this docs for?

**stackchain 1.1.3**
