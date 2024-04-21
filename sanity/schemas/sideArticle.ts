import { defineField, defineType } from "sanity";

export default defineType({
  name: "sideArticle",
  title: "SideArticle",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
