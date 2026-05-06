# Astro SEO Blog Starter

A reusable Astro 6.2+ starter for SEO-focused content websites with Tailwind CSS, sitemap, RSS, categories, featured images, JSON-LD, Docker and Coolify-oriented deployment files.

## Included

- Astro-only `.astro` components
- Tailwind latest via `@tailwindcss/vite`
- No React or UI-framework integrations
- Blog with Astro content collections
- 6 demo categories and 18 demo posts
- Featured images like WordPress Featured Images
- Blog index, category overview, category archives and pagination
- Sitemap with `@astrojs/sitemap`
- RSS feed with `@astrojs/rss`
- SEO head component with Open Graph and Twitter metadata
- JSON-LD helpers for Article, BreadcrumbList, CollectionPage, WebSite and Organization
- Dockerfile, Docker Compose and nginx config for static deployment
- Coolify deployment checklist
- Production checklist
- Reusable prompts

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Docker

```bash
docker compose build
docker compose up
```

The container serves the static Astro build on internal port `8080` and exposes `/healthz/` for Docker and Coolify health checks.

## Create a new website from this starter

Change these first:

- `PUBLIC_SITE_URL` in `.env` and Coolify
- `astro.config.mjs` fallback site URL if desired
- `public/robots.txt` Sitemap URL
- `src/data/site.ts`
- `src/data/categories.ts`
- `src/content/blog/*`
- `src/assets/blog/*`
- `public/favicon.svg`
- default OG image in `src/assets/blog/default-og.svg`
- `DESIGN.md`

Then run:

```bash
npm run build
npm run guard:no-react
```

## Featured images

Each post defines one `featuredImage` in frontmatter. It is reused on post cards, the post hero, Open Graph metadata, Twitter card metadata, RSS metadata and Article JSON-LD.

## Coolify

Use `docker-compose.yml` for Compose-based Coolify deployments. Set `PUBLIC_SITE_URL` in Coolify before deployment. The Compose file uses `expose: 8080` so Coolify can proxy traffic without binding a public host port.

See `COOLIFY.md` and `PRODUCTION.md` before deploying.
