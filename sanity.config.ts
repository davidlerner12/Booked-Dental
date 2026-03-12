import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import path from "path";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || "";
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || "production";

if (!projectId) {
  throw new Error(
    "Missing SANITY_STUDIO_PROJECT_ID (or VITE_SANITY_PROJECT_ID) for Sanity Studio configuration.",
  );
}

export default defineConfig({
  name: "default",
  title: "Booked Dental CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  vite: (config) => ({
    ...config,
    resolve: {
      ...(config.resolve || {}),
      alias: {
        ...((config.resolve && config.resolve.alias) || {}),
        "@": path.resolve(process.cwd(), "src"),
      },
    },
  }),
});
