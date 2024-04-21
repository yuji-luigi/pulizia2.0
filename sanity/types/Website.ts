import { Image, PortableTextBlock } from "sanity";

export type Website = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  owner: string;
  tel: string;
  address: string;
  email: string;
  image: string;
  footer: string;
  url: string;
  content: PortableTextBlock[];
};
