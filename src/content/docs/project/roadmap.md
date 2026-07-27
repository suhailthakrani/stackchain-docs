---
title: Roadmap
description: Quality-first roadmap for the stackchain Flutter ecosystem.
---

Ship only when quality is real — no hollow stubs. Planned moats:

1. **OpenAPI → vertical slice** — typed models/repos/pages from a spec (compiles + tests)
2. **Architecture linter pack** — `custom_lint` rules that enforce the chosen architecture
3. **Token refresh flow** — production refresh queue on 401 (not just clear session)
4. **Offline-first module** — Drift/Isar + cache policy + conflict strategy
5. **Deep links + app links** — platform manifests + GoRouter from config
6. **Observability pack** — Crashlytics / `FlutterError` / Zones + analytics that initialize
7. **Golden + integration recipes** — per-feature goldens and critical-path integration tests
8. **Org brick registry** — share company-approved slices privately
9. **Security audit command** — `stackchain audit`
10. **Melos monorepo mode** — apps + packages from one config without losing sync/migrate

## Documentation extensibility

This docs site is structured to grow into 100+ pages. Natural future sections:

| Section | Intent |
| --- | --- |
| Templates | Deep template authoring |
| Plugins | Architecture / module plugins |
| AI Integration | Assisted slice generation |
| Migration Engine | Advanced migrate recipes |
| Blueprints | Community presets |
| Code Modifications | Codemods |
| AST Engine | Structured rewrites |

Rule: if it is not trustworthy in a production app review, it does not ship.
