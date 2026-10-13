import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Jedes Kapitel ist eine Markdown-Datei in src/content/chapters/
const chapters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chapters' }),
  schema: z.object({
    title: z.string(),
    number: z.number(), // fürs Sortieren; Zwischenspiel z. B. 7.5
    part: z.string().optional(), // Teil/Region, z. B. Durotar, Brachland, Silberwald
    interlude: z.boolean().default(false), // true = Zwischenspiel statt nummeriertes Kapitel
    summary: z.string().optional(),
    cover: z.string().optional(), // z. B. /images/kapitel-01.jpg
    draft: z.boolean().default(false), // true = wird nicht veröffentlicht
  }),
});

export const collections = { chapters };
