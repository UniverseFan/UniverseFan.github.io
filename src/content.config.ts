import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const entrySchema = z.object({
    icon: z.string().default('1'),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(false),
});

const createCollection = (base: string) => defineCollection({
    loader: glob({ base, pattern: '**/*.{md,mdx}' }),
    schema: entrySchema,
});

export const collections = {
    blog: createCollection('./src/content/blog'),
    cook: createCollection('./src/content/cook'),
    learn: createCollection('./src/content/learn'),
    work: createCollection('./src/content/work'),
};
