#!/usr/bin/env node
// Post-build guard: every field-note link the site emits must resolve to a
// page that was actually built.
//
// This exists because the site shipped for months with 190 unreachable field
// notes. `src/pages/blog/index.astro` linked every entry as `/blog/${post.id}`
// while `src/pages/` contained no dynamic post route, so the build produced
// exactly one file under dist/blog/ and every inbound link 404'd. Nothing
// failed: `astro build` exited 0, the index page rendered correctly with all
// titles and dates, and no CI ran on pull requests.
//
// The two assertions below are the three signals that were missing:
//   1. every emitted /blog/ href has a corresponding built page;
//   2. the number of built post pages matches the number of source posts, so
//      a route that silently drops entries is caught as well as one that is
//      absent entirely.
//
// Pure Node, no dependencies. Run after `astro build`.

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(process.argv[2] ?? '.');
const dist = join(root, 'dist');
const indexPath = join(dist, 'blog', 'index.html');
const sourceDir = join(root, 'src', 'content', 'blog');

const problems = [];

if (!existsSync(dist)) {
  console.error(`check-blog-routes: no dist/ at ${dist} — run the build first.`);
  process.exit(2);
}
if (!existsSync(indexPath)) {
  console.error(`check-blog-routes: ${indexPath} was not built.`);
  process.exit(2);
}

// 1. Every /blog/ link on the index must resolve to a built page.
const html = readFileSync(indexPath, 'utf8');
const hrefs = [...new Set([...html.matchAll(/href="(\/blog\/[^"]+)"/g)].map((m) => m[1]))];

const unresolved = hrefs.filter((href) => {
  const clean = href.split('#')[0].split('?')[0].replace(/^\/+|\/+$/g, '');
  return !existsSync(join(dist, clean, 'index.html')) && !existsSync(join(dist, `${clean}.html`));
});

if (unresolved.length > 0) {
  problems.push(
    `${unresolved.length} of ${hrefs.length} field-note link(s) on /blog resolve to nothing:\n` +
      unresolved.slice(0, 10).map((h) => `    ${h}`).join('\n') +
      (unresolved.length > 10 ? `\n    … and ${unresolved.length - 10} more` : '')
  );
}

// 2. Built post pages must match source posts one for one.
const sourceCount = existsSync(sourceDir)
  ? readdirSync(sourceDir).filter((f) => /\.mdx?$/.test(f)).length
  : 0;

const blogDir = join(dist, 'blog');
const builtCount = readdirSync(blogDir).filter((entry) => {
  const p = join(blogDir, entry);
  return statSync(p).isDirectory() && existsSync(join(p, 'index.html'));
}).length;

if (sourceCount !== builtCount) {
  problems.push(
    `built post pages (${builtCount}) do not match source posts (${sourceCount}). ` +
      `A post route that drops entries fails here even when every emitted link happens to resolve.`
  );
}

if (problems.length > 0) {
  console.error('check-blog-routes: FAILED\n');
  for (const p of problems) console.error(`  - ${p}\n`);
  console.error(
    '  The post route lives at src/pages/blog/[...id].astro and must emit one\n' +
      "  page per entry in the 'blog' collection, keyed on post.id so it agrees\n" +
      '  with the href src/pages/blog/index.astro already generates.\n'
  );
  process.exit(1);
}

console.log(
  `check-blog-routes: ok — ${hrefs.length} link(s) resolve, ` +
    `${builtCount} post page(s) built from ${sourceCount} source post(s).`
);
