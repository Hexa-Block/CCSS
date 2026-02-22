# Contributing

Thanks for your interest in improving this CCSS Dashboard.

This is a community project intended to make CCSS easier to explore.

## Ways to contribute

- Report bugs (steps to reproduce + screenshots if possible)
- Suggest improvements (open an issue)
- Fix/extend datasets under `data/raw/` (include source link)
- Improve UX / accessibility / performance

## Development setup

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm (or pnpm / yarn)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open http://localhost:3000

### Lint / build

```bash
npm run lint
npm run build
```

## Data updates

If you change or add datasets under `data/raw/`:

1. Keep the JSON structure consistent with `types/ccss.ts`.
2. Prefer small, focused diffs.
3. In your PR description, include the official source link(s) you used.

## Pull requests

- Keep PRs focused (one topic per PR).
- Write a clear description: what changed, why, and how to test.
- If the change affects UI behavior, add a screenshot.

## Code of Conduct

By participating, you agree to follow the Code of Conduct in `CODE_OF_CONDUCT.md`.
