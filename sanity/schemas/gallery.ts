import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),

    defineField({
      name: "active",
      title: "Show in gallery",
      type: "boolean",
      options: {
        layout: "switch",
      },
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "owner" },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
