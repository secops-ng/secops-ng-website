import { defineConfig } from 'astro/config';

// Project SecOps-NG public website.
// Deployment target: GitHub Pages (placeholder URL — flip when the org page
// or custom domain is finalized).
//
// Governance note: CI provider for the deploy pipeline is still an open
// flag (see README) — Actions config intentionally omitted for now.
export default defineConfig({
  site: 'https://secops-ng.github.io',
  base: '/',
  trailingSlash: 'ignore',
});
