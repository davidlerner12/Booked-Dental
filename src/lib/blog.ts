import groq from "groq";
import type { PortableTextBlock } from "@portabletext/types";
import { assertSanityConfig, sanityClient } from "@/lib/sanity";

export interface BlogPostListItem {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  mainImage?: unknown;
  mainImageAlt?: string;
}

export interface BlogPostDetail extends BlogPostListItem {
  body: PortableTextBlock[];
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

export async function getAllBlogPosts() {
  assertSanityConfig();
  return sanityClient.fetch<BlogPostListItem[]>(BLOG_LIST_QUERY);
}

export async function getBlogPostBySlug(slug: string) {
  assertSanityConfig();
  return sanityClient.fetch<BlogPostDetail | null>(BLOG_POST_QUERY, { slug });
}

export async function getAllBlogSlugs() {
  assertSanityConfig();
  const items = await sanityClient.fetch<Array<{ slug: string }>>(BLOG_SLUGS_QUERY);
  return items.map((item) => item.slug);
}
