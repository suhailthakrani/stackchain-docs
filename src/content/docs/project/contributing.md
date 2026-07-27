---
title: Contributing
description: How to contribute to stackchain and this documentation site.
---

## Package (CLI)

Repository: [github.com/suhailthakrani/stackchain](https://github.com/suhailthakrani/stackchain)

1. Fork and clone
2. Create a feature branch
3. Add tests for parser / generators / merge behavior
4. Run analyzer and package tests
5. Open a PR with a clear problem statement

## Documentation site

This site lives in `stackchain-docs` (Astro + Starlight).

```bash
npm install
npm run dev
npm run build
```

### Content guidelines

- Match real CLI behavior — verify against source when unsure
- Prefer tables for options; include examples on every page
- Use Aside tip/caution for footguns (overwrite, markers, migrate)
- Keep tone like official Flutter docs — no filler

### Adding a page

1. Add Markdown/MDX under `src/content/docs/…`
2. Register it in `astro.config.mjs` sidebar
3. Include `title` + `description` frontmatter (SEO)

## Code of conduct

Be respectful. Assume good intent. Prefer actionable review comments.
