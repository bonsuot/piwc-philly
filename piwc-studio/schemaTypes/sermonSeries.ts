import { defineField, defineType } from "sanity";

export const sermonSeries = defineType({
  name: "sermonSeries",
  title: "Sermon Series",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Series Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "image",
      title: "Series Artwork",
      type: "accessibleImage",
    }),

    defineField({
      name: "featured",
      title: "Featured Series",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});