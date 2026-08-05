---
title: FAQ
description: Common questions about stackchain.
---

## Is this a one-shot generator?

No. Keep it as a dev dependency. Use `feature`, `test`, `sync`, `upgrade`, and `migrate` over time.

## Does it replace flutter create?

No. Create the app first, then run stackchain inside it.

## Will sync delete my code?

Only code inside managed markers (`routes`, `core`, `features`, `generated`) is replaced. Put your methods in `// <stackchain:custom>` or in `*_custom_test.dart`.

## Where do I put custom tests?

```bash
dart run stackchain test auth
```

Then edit `test/features/auth_custom_test.dart` — that file is never overwritten.

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

Pages and state classes are rewritten for the new API. `// <stackchain:custom>` is ported. Domain/data stay. App shell (`bootstrap` / `main` / `app.dart`) is regenerated — don't put business logic there. Commit first.

## Which version is this docs for?

**stackchain 1.3.1**
