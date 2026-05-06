# Production Checklist

Use this before every new website deployment.

## Required site settings

- [ ] `PUBLIC_SITE_URL` is set to the real production URL.
- [ ] `PUBLIC_SITE_NAME` is set.
- [ ] `PUBLIC_SITE_LOCALE` is correct.
- [ ] `PUBLIC_SITE_AUTHOR` is correct.
- [ ] `astro.config.mjs` uses the correct site URL or environment fallback.
- [ ] `public/robots.txt` contains the correct absolute Sitemap URL.

## Brand and content

- [ ] `DESIGN.md` matches the new website brand.
- [ ] `src/data/site.ts` is updated.
- [ ] `src/data/categories.ts` is updated or intentionally kept.
- [ ] Demo posts are replaced or intentionally kept.
- [ ] Demo images are replaced or intentionally kept.
- [ ] Favicon is replaced.
- [ ] Default OG image is replaced.
- [ ] Navigation links are correct.
- [ ] Footer links are correct.

## Legal

- [ ] `/privacy/` reviewed by a qualified person.
- [ ] `/imprint/` reviewed by a qualified person.
- [ ] Placeholder legal text removed before production.

## SEO

- [ ] Homepage title and description are unique.
- [ ] Every page has a unique title and description.
- [ ] Every post has a featured image and useful alt text.
- [ ] Canonical URLs resolve correctly.
- [ ] Open Graph preview image resolves publicly.
- [ ] RSS feed builds at `/rss.xml`.
- [ ] Sitemap builds.
- [ ] Draft posts are not included.
- [ ] Future posts are not included unless intended.

## Docker and Coolify

- [ ] Coolify project uses Docker Compose build pack or equivalent Compose deployment.
- [ ] `PUBLIC_SITE_URL` is set in Coolify environment variables.
- [ ] Coolify domain points to internal service port `8080`.
- [ ] No host `ports:` are exposed unless intentionally needed.
- [ ] Health check path `/healthz/` returns HTTP 200.
- [ ] Docker health status becomes healthy in Coolify.

## Final checks

- [ ] `npm install` completed.
- [ ] `npm run build` passes.
- [ ] `npm run guard:no-react` passes.
- [ ] `docker compose build` passes.
- [ ] `docker compose up` serves the site locally.
- [ ] No React, Vue, Svelte, Solid, Preact, shadcn/ui or Next.js dependency exists.
