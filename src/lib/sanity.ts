import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2024-07-01";
const token = import.meta.env.VITE_SANITY_READ_TOKEN;
const isServer = import.meta.env.SSR;

export function assertSanityConfig() {
  if (!projectId || !dataset) {
    throw new Error(
      "Missing Sanity environment variables. Set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET.",
    );
  }
}

export const sanityClient = createClient({
  projectId: projectId || "missing-project-id",
  dataset: dataset || "production",
  apiVersion,
  useCdn: !isServer,
  token: isServer ? token || undefined : undefined,
  perspective: "published",
});

const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlFor(source: unknown) {
  return imageBuilder.image(source);
}
