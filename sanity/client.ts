import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "5xo2k521",
  dataset: "production",
  apiVersion: "2024-01-01",
  // unless you have caching for your front end, `useCdn` should be `true` for most production environments
  useCdn: false,
});
