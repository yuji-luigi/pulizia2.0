import { defineField, defineType } from "sanity";

export default defineType({
  name: "website",
  title: "Website",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "owner" },
    },
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "owner",
      title: "Owner",
      type: "string",
    }),
    defineField({
      name: "tel",
      title: "Tel",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: "bio",
    //   title: "Bio",
    //   type: "array",
    //   of: [
    //     {
    //       title: "Block",
    //       type: "block",
    //       styles: [{ title: "Normal", value: "normal" }],
    //       lists: [],
    //     },
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
