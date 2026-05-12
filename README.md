# secops-ng-website

The public website for **Project SecOps-NG** — a collective of practitioners
building sovereign, durable, agentic security for mid-size organizations
across the European Union.

This repository contains the source for [secops-ng.github.io](https://secops-ng.github.io)
(placeholder; final URL pending).

## Stack

- [Astro 4.x](https://astro.build) — static site generator
- Plain CSS (no Tailwind), Astro scoped styles
- Content collections (`src/content/config.ts`) for the blog
- Target deploy: GitHub Pages

## Local development

We prefer [pnpm](https://pnpm.io), but `npm` works just as well.

```sh
# Install dependencies
pnpm install        # or: npm install

# Run the dev server
pnpm dev            # or: npm run dev

# Build the static site into ./dist
pnpm build          # or: npm run build

# Preview the production build locally
pnpm preview        # or: npm run preview
```

## Project layout

```
.
├── astro.config.mjs        # site URL + base path (GitHub Pages-friendly)
├── src/
│   ├── layouts/Base.astro  # shared header / footer / global styles
│   ├── pages/
│   │   ├── index.astro     # landing — mission + three pillars + CTA
│   │   ├── about.astro     # about the collective
│   │   └── blog/index.astro# blog index (empty for now)
│   └── content/
│       └── config.ts       # blog collection schema (no posts yet)
├── LICENSE-CODE            # Apache-2.0 — covers source code
└── LICENSE-CONTENT         # CC BY-SA 4.0 — covers prose, copy, designs
```

## Deployment

The site is intended to deploy to **GitHub Pages** from the `main` branch
(either via the `gh-pages` workflow or by publishing the `dist/` output to the
`gh-pages` branch).

> **Governance note — CI provider sovereignty.** There is an open governance
> flag in the collective about which CI provider we use for production
> deploys (GitHub Actions vs. an EU-sovereign alternative such as Forgejo
> Actions on Nebul). Until that flag is resolved, **this repository
> intentionally ships without a `.github/workflows/` deploy pipeline.** Build
> the site locally and consult the deployment manuals in
> [secops-ng/secops-ng-deployment](https://github.com/secops-ng) if you need
> to publish a preview.

When the flag is resolved, the deploy job will live either at
`.github/workflows/deploy.yml` (Pages) or in the chosen sovereign CI's
config file.

## Licensing

The collective publishes under a dual license:

- **Code** (anything Astro / JS / TS / config) — [Apache License 2.0](./LICENSE-CODE)
- **Content** (prose, copy, designs, page text) — [CC BY-SA 4.0](./LICENSE-CONTENT)

Contributions are assumed to be made under the same terms unless explicitly
stated otherwise in a PR.

## How to contribute

The collective lives on GitHub: <https://github.com/secops-ng>.

- File an issue if copy is wrong, unclear, or missing.
- Open a PR if you want to add a blog post (see `src/content/config.ts` for
  the front-matter schema) or improve a page.
- Join the conversation on any open RFC.

Federations beat monopolies. Welcome aboard.
