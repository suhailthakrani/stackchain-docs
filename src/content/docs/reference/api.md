---
title: API reference
description: Library and CLI surface reference for stackchain consumers and extenders.
---

stackchain is primarily a **CLI**. Most apps only need:

```bash
dart run stackchain <command>
```

## Public package identity

| Field | Value |
| --- | --- |
| Package | `stackchain` |
| Version | `1.2.0` |
| SDK | `^3.5.0` |
| License | MIT |
| Repository | https://github.com/suhailthakrani/stackchain |
| pub.dev | https://pub.dev/packages/stackchain |

## Executables

| Executable | Entry |
| --- | --- |
| `stackchain` | `bin/stackchain.dart` → `cli.run(args)` |
| `init` | `bin/init.dart` → `cli.run(['init', …])` |

## Key libraries (for contributors)

| Concern | Path |
| --- | --- |
| CLI | `lib/src/cli/cli.dart` |
| Config model | `lib/src/models/stackchain_config.dart` |
| Enums | `lib/src/models/enums.dart` |
| YAML parser | `lib/src/parser/yaml_parser.dart` |
| Project generator | `lib/src/generators/project_generator.dart` |
| Vertical slice | `lib/src/slices/vertical_slice.dart` |
| Feature remove / rename | `lib/src/slices/feature_remover.dart`, `feature_renamer.dart` |
| Feature tests | `lib/src/testing/feature_test_generator.dart` |
| Architecture registry | `lib/src/architecture/architecture_registry.dart` |
| Presets | `lib/src/presets/preset_registry.dart` |
| Sync / merge | `lib/src/sync/project_sync.dart`, `lib/src/merge/region_merger.dart` |
| Preserve custom | `lib/src/merge/preserving_file_writer.dart` |
| Migrate / upgrade | `lib/src/migrate/` |
| Bricks | `lib/src/bricks/brick_engine.dart` |
| Quality gate | `lib/src/quality/quality_gate.dart` |
| Version constant | `lib/src/version.dart` |

Apps depending on stackchain as a library (beyond CLI) should treat `lib/src/**` as internal unless re-exported intentionally in future versions.
