import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      description: z.string().min(50).max(180),
      publishedAt: z.date(),
      updatedAt: z.date().optional(),
      category: z.enum([
        "astro",
        "seo",
        "design-systems",
        "performance",
        "content-strategy",
        "automation",
      ]),
      tags: z.array(z.string()).default([]),
      featuredImage: image(),
      featuredImageAlt: z.string().min(10),
      draft: z.boolean().default(false),
      author: z.string().default("Editorial Team"),
    }),
});

export const collections = { blog };
