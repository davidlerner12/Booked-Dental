import type { LoaderFunctionArgs } from "react-router-dom";
import { getAllBlogPosts, getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";

export interface BlogPostLoaderData {
  post: Awaited<ReturnType<typeof getBlogPostBySlug>>;
  related: Awaited<ReturnType<typeof getAllBlogPosts>>;
}

export async function blogListLoader({ params }: LoaderFunctionArgs) {
  return getAllBlogPosts(params.lang);
}

export async function blogPostLoader({
  params,
}: LoaderFunctionArgs): Promise<BlogPostLoaderData> {
  const slug = params.slug;
  if (!slug) {
    return { post: null, related: [] };
  }

  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(slug, params.lang),
    getAllBlogPosts(params.lang),
  ]);
  const related = post ? allPosts.filter((item) => item.slug !== post.slug) : [];
  return { post, related };
}

export async function blogPostStaticPaths() {
  const [englishSlugs, hebrewSlugs] = await Promise.all([
    getAllBlogSlugs("en"),
    getAllBlogSlugs("he"),
  ]);
  return [
    ...englishSlugs.map((slug) => `en/blog/${slug}`),
    ...hebrewSlugs.map((slug) => `he/blog/${slug}`),
  ];
}
