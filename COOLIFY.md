# Coolify v4 Deployment Notes

This starter is designed to work well with Coolify v4-style Docker Compose deployments.

## Deployment model

Use `docker-compose.yml` as the source of truth.

The service:

- builds the static Astro site in a Node build stage
- serves `dist/` through unprivileged nginx
- listens on internal port `8080`
- defines a Docker health check for `/healthz/`
- uses `expose`, not public `ports`, so Coolify's proxy can route traffic

## Required environment variable

Set this in Coolify before deployment:

```text
PUBLIC_SITE_URL=https://your-domain.example
```

The Compose file marks it as required with `${PUBLIC_SITE_URL:?message}` so Coolify can prevent incomplete deployments.

Optional variables:

```text
PUBLIC_SITE_NAME=Your Site Name
PUBLIC_SITE_LOCALE=de-DE
PUBLIC_SITE_AUTHOR=Editorial Team
```

## Domain and port

In Coolify, route the public domain to service `astro-site` on port `8080`.

Do not add a public `ports:` mapping unless you intentionally want to bypass Coolify's proxy.

## Health checks

The Dockerfile and Compose file both define health check behavior against:

```text
/healthz/
```

Coolify can also configure health checks in the UI, but when Dockerfile or Compose health checks are present, prefer keeping them in the repository so the deployment is reproducible.

## Static build caveat

This is a static Astro build. Environment values that affect SEO output, canonical URLs, sitemap and RSS are baked in at build time. Changing `PUBLIC_SITE_URL` after the image is built requires a rebuild.
