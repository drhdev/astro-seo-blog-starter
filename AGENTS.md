# AGENTS.md

## Project

This is a reusable production-oriented Astro 6.2+ starter for static-first websites, blogs, and content hubs.

The project is intentionally Astro-only and Tailwind-first. It should behave like a lightweight Astro-native alternative to a WordPress blog: static-first, fast, SEO-ready, with pages, posts, categories, RSS, sitemap, featured images and deployment assets, but without React, client-side UI frameworks or CMS bloat.

## Non-negotiable rules

- Use Astro components only.
- Use `.astro` files for UI components and layouts.
- Do not install React, Vue, Svelte, Solid, Preact, Next.js, shadcn/ui or any other client-side UI framework.
- Do not use React-based component libraries.
- Do not use `@astrojs/tailwind`.
- Use Tailwind CSS through the official Tailwind v4 Vite plugin: `@tailwindcss/vite`.
- Do not add client islands.
- Do not use `client:load`, `client:idle`, `client:visible`, `client:media`, `client:only` or similar hydration directives.
- No browser JavaScript unless explicitly requested.
- Prefer static-first pages and server-rendered HTML.
- Keep dependencies minimal.

## Required structure

```text
src/
  pages/        route files
  layouts/      shared page shells
  components/   reusable Astro components
  styles/       global CSS and Tailwind import
  content/      local markdown content collections
  data/         typed local site data
  utils/        typed helpers
public/         unprocessed static assets
```

## Tailwind CSS

Expected setup:

```js
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

Expected global stylesheet:

```css
@import "tailwindcss";
```

Import `src/styles/global.css` exactly once in `BaseLayout.astro`.

## Blog, SEO, Sitemap, RSS and discoverability

Ranking cannot be guaranteed, but the implementation must follow modern technical SEO best practices.

Required features:

- Sitemap generation with `@astrojs/sitemap`.
- RSS feed at `/rss.xml` with `@astrojs/rss`.
- `robots.txt` with a Sitemap reference.
- Unique title and meta description for every indexable page.
- Canonical URL for every indexable page.
- Open Graph metadata for every public page.
- Twitter card metadata for every public page.
- Article JSON-LD for blog posts.
- BreadcrumbList JSON-LD for blog posts and category pages.
- CollectionPage JSON-LD for category archive pages.
- WebSite and Organization JSON-LD for the homepage when site data exists.

Do not create spammy SEO pages. Do not keyword-stuff. Prefer helpful, human-readable content.

## Featured images

Every blog post must have a featured image, similar to the WordPress Featured Image concept.

The featured image is defined once in post frontmatter and reused for:

- blog cards
- blog post hero
- Open Graph image
- Twitter image
- Article JSON-LD image
- RSS metadata where practical

Featured images must be local whenever possible, have useful alt text and be visible as HTML images, not only CSS backgrounds.

## Content publishing rules

- Exclude draft posts from pages, lists, RSS and sitemap.
- Exclude future-dated posts by default.
- Sort by `publishedAt` descending.
- Show `updatedAt` only if it is later than `publishedAt`.
- Use helpers in `src/utils/blog.ts` for filtering, sorting and related posts.

## Docker and Coolify

This starter includes Docker and Docker Compose assets intended for Coolify v4-style deployments.

Rules:

- Use a multi-stage Dockerfile.
- Build Astro statically.
- Serve `/dist` with an unprivileged web server image.
- Do not run the final container as root.
- Include `.dockerignore`.
- Include a Docker health check.
- Expose the internal app port via `expose`, not public `ports`, for Coolify proxy routing.
- Use Docker Compose environment variable syntax so Coolify can detect required variables.
- Keep `docker-compose.yml` as the deployment source of truth for Compose-based Coolify deployments.

## Accessibility

- Exactly one h1 per page.
- Logical heading hierarchy.
- Accessible nav labels.
- Visible focus states.
- Post cards must have accessible link text.
- Breadcrumbs use `nav aria-label="Breadcrumb"`.

## Validation

Before finishing any task:

```bash
npm run build
npm run guard:no-react
```

Fix build errors before reporting completion.
