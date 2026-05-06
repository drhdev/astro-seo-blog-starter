import { site } from "../data/site";

export function stripTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}

export function ensureLeadingSlash(value: string) {
  return value.startsWith("/") ? value : `/${value}`;
}

export function absoluteUrl(path = "/", base = site.url) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${stripTrailingSlash(base)}${ensureLeadingSlash(path)}`;
}

export function canonicalPath(pathname: string) {
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}
