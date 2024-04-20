import { schemaTypes } from "./sanity/schemas/index";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: "default",
  title: "pulizia_2.0",
  projectId: "5xo2k521",
  dataset: "production",
  plugins: [structureTool()],
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
});
