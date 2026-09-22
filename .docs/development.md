# Development

## Requirements

- Bun `1.3.14`
- Node.js `>=24`

Install dependencies from the repository root:

```bash
bun install
```

Start the web app:

```bash
bun run dev
```

The development server runs at [http://localhost:13001](http://localhost:13001).

## Repository structure

```text
apps/web/       Portfolio application, content, assets, and deployment config
packages/ui-w/  Shared UI components and styles
packages/       Shared metadata, ESLint, and TypeScript configuration
```

The site is intentionally not driven by a CMS or a reusable content configuration. Update the personal site directly in the web app:

- Works and social links: `apps/web/data/`
- Pages and layout: `apps/web/app/`
- Page components: `apps/web/components/`
- Public assets and manifest: `apps/web/public/`
- Shared metadata: `packages/metadata/`

## Checks

Run the repository checks before opening a pull request:

```bash
bun run lint
bun run check-types
bun run format:check
bun run build
```

Format the repository with Prettier:

```bash
bun run format
```

## Branch flow

Use `development` as the integration branch. Release changes to `main` through a pull request. Production deployment starts only after relevant changes reach `main`.
