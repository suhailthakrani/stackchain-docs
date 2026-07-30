---
title: Storage
description: SharedPreferences, secure storage, and Hive.
---

```yaml
stackchain:
  storage:
    - shared_preferences
    - secure_storage
```

| Value | For |
| --- | --- |
| `shared_preferences` | Simple key/value |
| `secure_storage` | Tokens / secrets (recommended) |
| `hive` | Local structured data |

Default: prefs + secure storage. Session uses secure storage when present.
