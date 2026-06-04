import groq from "groq";
import type { PortableTextBlock } from "@portabletext/types";
import { assertSanityConfig, sanityClient } from "@/lib/sanity";
import {
  applyBlogSeoListOverrides,
  applyBlogSeoOverrides,
  resolveSourceBlogSlug,
  toCanonicalBlogSlug,
} from "@/lib/blog-seo-overrides";

export type BlogLanguage = "en" | "he";

export interface BlogPostListItem {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  mainImage?: unknown;
  mainImageAlt?: string;
  seoImage?: string;
}

export interface BlogPostDetail extends BlogPostListItem {
  body: PortableTextBlock[];
}

function hasHebrewText(value: string) {
  return /[\u0590-\u05FF]/.test(value);
}

function getPostLanguage(post: Pick<BlogPostListItem, "title" | "slug" | "excerpt">): BlogLanguage {
  return hasHebrewText(`${post.title} ${post.slug} ${post.excerpt}`) ? "he" : "en";
}

function filterPostsByLanguage<T extends BlogPostListItem>(posts: T[], lang?: string) {
  if (lang !== "en" && lang !== "he") return posts;
  return posts.filter((post) => getPostLanguage(post) === lang);
}

export const BLOG_LIST_QUERY = groq`*[
  _type == "post" &&
  defined(slug.current) &&
  defined(publishedAt)
] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage,
  "mainImageAlt": mainImage.alt
}`;

export const BLOG_POST_QUERY = groq`*[
  _type == "post" &&
  slug.current == $slug
][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage,
  "mainImageAlt": mainImage.alt,
  body
}`;

export const BLOG_SLUGS_QUERY = groq`*[
  _type == "post" &&
  defined(slug.current) &&
  defined(publishedAt)
] | order(publishedAt desc) {
  "slug": slug.current
}`;

export async function getAllBlogPosts(lang?: string) {
  assertSanityConfig();
  const posts = await sanityClient.fetch<BlogPostListItem[]>(BLOG_LIST_QUERY);
  return filterPostsByLanguage(applyBlogSeoListOverrides(posts || []), lang);
}

export async function getBlogPostBySlug(slug: string, lang?: string) {
  assertSanityConfig();
  const post = await sanityClient.fetch<BlogPostDetail | null>(BLOG_POST_QUERY, {
    slug: resolveSourceBlogSlug(slug),
  });
  if (!post) return null;
  const enhancedPost = applyBlogSeoOverrides(post);
  if (lang === "en" || lang === "he") {
    return getPostLanguage(enhancedPost) === lang ? enhancedPost : null;
  }
  return enhancedPost;
}

export async function getAllBlogSlugs(lang?: string) {
  assertSanityConfig();
  const posts = await sanityClient.fetch<BlogPostListItem[]>(BLOG_LIST_QUERY);
  return filterPostsByLanguage(applyBlogSeoListOverrides(posts || []), lang).map((item) =>
    toCanonicalBlogSlug(item.slug),
  );
}
