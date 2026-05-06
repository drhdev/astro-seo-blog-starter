import { getCollection, type CollectionEntry } from "astro:content";
import { categories } from "../data/categories";

export type BlogPost = CollectionEntry<"blog">;
export const POSTS_PER_PAGE = 9;

export function isPublished(post: BlogPost, now = new Date()) {
  return !post.data.draft && post.data.publishedAt <= now;
}

export async function getAllPosts() {
  return await getCollection("blog");
}

export async function getPublishedPosts() {
  const posts = await getAllPosts();
  return posts.filter((post) => isPublished(post)).sort(sortByDateDesc);
}

export function sortByDateDesc(a: BlogPost, b: BlogPost) {
  return b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf();
}

export async function getPostsByCategory(category: string) {
  const posts = await getPublishedPosts();
  return posts.filter((post) => post.data.category === category);
}

export async function getAllCategoriesWithCounts() {
  const posts = await getPublishedPosts();
  return categories.map((category) => ({
    ...category,
    count: posts.filter((post) => post.data.category === category.slug).length,
  }));
}

export function getPostUrl(post: BlogPost) {
  return `/blog/${post.slug}/`;
}

export function getCategoryUrl(slug: string) {
  return `/categories/${slug}/`;
}

export function getRelatedPosts(current: BlogPost, posts: BlogPost[], count = 3) {
  return posts
    .filter((post) => post.id !== current.id)
    .map((post) => ({
      post,
      score:
        (post.data.category === current.data.category ? 10 : 0) +
        post.data.tags.filter((tag) => current.data.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score || sortByDateDesc(a.post, b.post))
    .slice(0, count)
    .map((item) => item.post);
}
