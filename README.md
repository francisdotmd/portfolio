# Francis Ignacio — Portfolio

Public source repository for [francisdotmd.page](https://francisdotmd.page), the personal portfolio of Francis Ignacio.

This is the source code for one personal site, not a starter kit, theme, or content-configurable template. It is public for transparency and reference; it is not maintained as a drop-in portfolio builder.

## Stack

- [Bun](https://bun.sh/) and [Turborepo](https://turbo.build/repo) for the workspace
- [Vinext](https://vinext.dev/) with React and TypeScript for the web app
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Tabler Icons](https://tabler.io/icons) for interface icons
- [Cloudflare Workers](https://workers.cloudflare.com/) for deployment

## Repository structure

```text
apps/web/       Portfolio application, content, assets, and deployment config
packages/ui-w/  Shared UI components and styles
packages/       Shared metadata, ESLint, and TypeScript configuration
```

The portfolio content is defined directly in the web app. Works and social links live in `apps/web/data/`; profile sections and layout live in `apps/web/components/` and `apps/web/app/`. There is intentionally no separate content CMS or customization layer.

## Development

Requirements:

- Bun `1.3.14`
- Node.js `>=24`

```bash
bun install
bun run dev
```

The development server runs at [http://localhost:13001](http://localhost:13001).

## Checks

```bash
bun run lint
bun run check-types
bun run format:check
bun run build
```

Use `bun run format` to format the repository with Prettier.

## Deployment

`.github/workflows/deploy-web.yml` deploys `apps/web` to Cloudflare when changes reach `main` in the web app, shared packages, or deployment inputs. It can also be started manually from GitHub Actions.

The workflow requires these repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The `development` branch is used for integration; changes are released to `main` through a pull request.

## Public repository scope

Issues and pull requests may document changes to this site, but this repository does not promise compatibility as a reusable portfolio template. Personal copy, links, imagery, analytics, and deployment configuration are specific to this site.
