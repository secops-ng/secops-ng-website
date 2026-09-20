import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Project SecOps-NG public website.
// Deployment target: GitHub Pages with custom domain (secops-ng.com).
// The CNAME is set via public/CNAME and the .github/workflows/deploy-pages.yml
// workflow uploads ./dist as the Pages artifact.
export default defineConfig({
  site: 'https://secops-ng.com',
  base: '/',
  trailingSlash: 'ignore',
  // Emits sitemap-index.xml + sitemap-0.xml; robots.txt points at it.
  integrations: [sitemap()],
});
