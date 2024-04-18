import { createClient, groq } from "next-sanity";
import { Project } from "./types/Project";
import clientConfig from "./config/client-config";
import { Page } from "./types/Page";

export async function getWebsite(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "website"]{
      _id,
      title,
      tel,
      owner,
      address,
      email,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      _createdAt,
      content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
