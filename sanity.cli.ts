import { defineCliConfig } from "sanity/cli";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.VITE_SANITY_PROJECT_ID ||
  "replace-with-project-id";
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || "production";
const studioHost = process.env.SANITY_STUDIO_HOST || "booked-dental-sanity-admin";

export default defineCliConfig({
  studioHost,
  api: {
    projectId,
    dataset,
  },
});
