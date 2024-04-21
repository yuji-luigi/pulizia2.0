import { createClient, groq } from "next-sanity";
import { Website } from "./types/Website";
import clientConfig from "./config/client-config";
import { Page } from "./types/Page";
import { SideArticle } from "./types/SideArticle";

export async function getWebsite(): Promise<Website[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "website"]{
      _id,
      title,
      tel,
      owner,
      address,
      email,
      footer,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      _createdAt,
      content
    }`
  );
}

export async function getSideArticles(): Promise<SideArticle[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "sideArticle"]{
      _id,
      title,
      text,
    }`
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

// export async function getPage(slug: string): Promise<Page> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "page" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current,
//       content
//     }`,
//     { slug }
//   );
// }
