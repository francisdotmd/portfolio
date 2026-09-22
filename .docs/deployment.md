# Deployment

The web app is deployed to Cloudflare Workers through GitHub Actions.

## Workflow

The workflow is [`deploy-web.yml`](../.github/workflows/deploy-web.yml).

It deploys automatically when a push to `main` changes one of these paths:

- `apps/web/**`
- `packages/**`
- `package.json`
- `bun.lock`
- `turbo.json`
- `.github/workflows/deploy-web.yml`

Changes pushed to `development` do not deploy. Merge the work into `main` to trigger the production deployment. Changes to documentation, such as files under `.docs/`, do not trigger a deployment.

The workflow can also be started manually from GitHub Actions, but the deployment job only runs for `main`.

## Build and deploy

The workflow:

1. Checks out the repository.
2. Installs Bun `1.3.14`.
3. Installs dependencies with `bun install --frozen-lockfile`.
4. Runs `bun x turbo run deploy:cloudflare --filter=portfolio-web`.

The Cloudflare project is `portfolio-web` and serves [francisdotmd.page](https://francisdotmd.page).

## Required secrets

Configure these repository secrets in GitHub:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Do not commit these values or place them in frontend environment variables.

## Troubleshooting

If a push does not start a deployment, check:

1. The commit reached `main`.
2. The push changed one of the paths listed above.
3. The workflow is enabled in the repository’s Actions settings.
4. Both Cloudflare secrets are configured and valid.
5. The run logs for the `Deploy Web to Cloudflare` workflow.
