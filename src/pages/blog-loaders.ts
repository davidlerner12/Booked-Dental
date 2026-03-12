import type { LoaderFunctionArgs } from "react-router-dom";
import { getAllBlogPosts, getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";

export interface BlogPostLoaderData {
  post: Awaited<ReturnType<typeof getBlogPostBySlug>>;
  related: Awaited<ReturnType<typeof getAllBlogPosts>>;
}

export async function blogListLoader() {
  return getAllBlogPosts();
}

export async function blogPostLoader({
  params,
}: LoaderFunctionArgs): Promise<BlogPostLoaderData> {
  const slug = params.slug;
  if (!slug) {
    return { post: null, related: [] };
  }

  const [post, allPosts] = await Promise.all([getBlogPostBySlug(slug), getAllBlogPosts()]);
  const related = post ? allPosts.filter((item) => item.slug !== post.slug).slice(0, 2) : [];
  return { post, related };
}

export async function blogPostStaticPaths() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => `blog/${slug}`);
}
