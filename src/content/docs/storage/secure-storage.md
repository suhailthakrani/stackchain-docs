---
title: Secure Storage
description: flutter_secure_storage integration and session handling in stackchain.
---

## YAML

```yaml
stackchain:
  storage:
    - secure_storage
```

Generates `secure_storage.dart`. Used by `SessionService` for tokens/secrets. Dio unauthorized interceptor clears session on 401 when wired.
