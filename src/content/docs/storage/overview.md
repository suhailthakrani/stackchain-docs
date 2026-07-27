---
title: Storage overview
description: SharedPreferences, secure storage, and Hive options in stackchain.
---

```yaml
stackchain:
  storage:
    - shared_preferences
    - secure_storage
```

| Value | Package |
| --- | --- |
| `shared_preferences` | `shared_preferences` |
| `secure_storage` | `flutter_secure_storage` |
| `hive` | `hive` + `hive_flutter` |

**Default:** `[shared_preferences, secure_storage]`.

Always generated:

- `lib/core/storage/storage_keys.dart`
- `lib/core/storage/cache_manager.dart`

`SessionService` uses secure storage + prefs when present.
