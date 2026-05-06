# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

FROM node:22-alpine AS build
WORKDIR /app
ENV NODE_ENV=production
ARG PUBLIC_SITE_URL=https://example.com
ARG PUBLIC_SITE_NAME="Astro SEO Blog Starter"
ARG PUBLIC_SITE_LOCALE=de-DE
ARG PUBLIC_SITE_AUTHOR="Editorial Team"
ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL
ENV PUBLIC_SITE_NAME=$PUBLIC_SITE_NAME
ENV PUBLIC_SITE_LOCALE=$PUBLIC_SITE_LOCALE
ENV PUBLIC_SITE_AUTHOR=$PUBLIC_SITE_AUTHOR
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine AS runtime
LABEL org.opencontainers.image.title="Astro SEO Blog Starter" \
      org.opencontainers.image.description="Static Astro SEO blog starter served by unprivileged nginx" \
      org.opencontainers.image.source="https://example.com" \
      org.opencontainers.image.licenses="MIT"

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
