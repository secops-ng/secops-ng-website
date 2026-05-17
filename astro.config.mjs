import { defineConfig } from 'astro/config';

// Project SecOps-NG public website.
// Deployment target: GitHub Pages with custom domain (secops-ng.com).
// The CNAME is set via public/CNAME and the .github/workflows/deploy-pages.yml
// workflow uploads ./dist as the Pages artifact.
export default defineConfig({
  site: 'https://secops-ng.com',
  base: '/',
  trailingSlash: 'ignore',
});
