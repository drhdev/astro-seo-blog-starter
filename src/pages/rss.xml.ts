import rss from "@astrojs/rss";
import { getPublishedPosts, getPostUrl } from "../utils/blog";
import { absoluteUrl } from "../utils/urls";
import { site } from "../data/site";

export async function GET() {
  const posts = await getPublishedPosts();
  return rss({
    title: site.name,
    description: site.description,
    site: site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: getPostUrl(post),
      categories: [post.data.category, ...post.data.tags],
      author: post.data.author,
      customData: `<media:content xmlns:media="http://search.yahoo.com/mrss/" url="${absoluteUrl(post.data.featuredImage.src)}" medium="image" />`,
    })),
    customData: `<language>${site.locale}</language>`,
  });
}
