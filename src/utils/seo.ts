import { absoluteUrl } from "./urls";
import { site } from "../data/site";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    description: site.description,
    url: absoluteUrl("/"),
    inLanguage: site.locale,
    publisher: organizationJsonLd(),
  };
}

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    name: site.organization.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl(site.organization.logo),
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: Date;
  dateModified?: Date;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: [absoluteUrl(input.image)],
    datePublished: input.datePublished.toISOString(),
    dateModified: (input.dateModified || input.datePublished).toISOString(),
    author: {
      "@type": "Person",
      name: input.author,
    },
    publisher: organizationJsonLd(),
    mainEntityOfPage: absoluteUrl(input.url),
  };
}

export function collectionPageJsonLd(input: { title: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.url),
  };
}
