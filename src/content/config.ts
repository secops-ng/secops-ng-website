import { defineCollection, z } from 'astro:content';

// Blog collection — the printing press of the collective.
// Posts live under src/content/blog/*.md(x). None yet.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
