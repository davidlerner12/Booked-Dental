import groq from "groq";
import type { PortableTextBlock } from "@portabletext/types";
import { assertSanityConfig, sanityClient } from "@/lib/sanity";
import { supplementalBlogPosts } from "@/data/supplemental-blog-posts";
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
]{
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
  const combinedPosts = [
    ...applyBlogSeoListOverrides(posts || []),
    ...supplementalBlogPosts,
  ].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  return filterPostsByLanguage(combinedPosts, lang);
}

export async function getBlogPostBySlug(slug: string, lang?: string) {
  assertSanityConfig();
  const supplementalPost = supplementalBlogPosts.find((post) => post.slug === slug);
  if (supplementalPost && (!lang || getPostLanguage(supplementalPost) === lang)) {
    return supplementalPost;
  }

  const posts = await sanityClient.fetch<BlogPostDetail[]>(BLOG_POST_QUERY, {
    slug: resolveSourceBlogSlug(slug),
  });
  const post = lang === "en" || lang === "he"
    ? (posts || []).find((item) => getPostLanguage(item) === lang)
    : (posts || [])[0];
  if (!post) return null;
  return applyBlogSeoOverrides(post);
}

export async function getAllBlogSlugs(lang?: string) {
  assertSanityConfig();
  const posts = await sanityClient.fetch<BlogPostListItem[]>(BLOG_LIST_QUERY);
  const combinedPosts = [
    ...applyBlogSeoListOverrides(posts || []),
    ...supplementalBlogPosts,
  ];
  return filterPostsByLanguage(combinedPosts, lang).map((item) =>
    toCanonicalBlogSlug(item.slug),
  );
}
