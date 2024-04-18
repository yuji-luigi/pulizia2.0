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
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Option 1", value: "option1" },
          { title: "Option 2", value: "option2" },
          { title: "Option 3", value: "option3" },
          // Add more options here
        ],
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
