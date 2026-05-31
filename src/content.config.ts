import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog collection — the printing press of the collective.
// Posts live under src/content/blog/*.md(x).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
