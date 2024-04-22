import { Image, PortableTextBlock } from "sanity";

export type Gallery = {
  _id: string;
  createdAt: Date;
  text: string;
  title: string;
  description: string;
  active: boolean;
  slug: boolean;
  image: string;
};
