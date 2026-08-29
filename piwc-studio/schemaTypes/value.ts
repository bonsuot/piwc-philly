import { defineField, defineType } from "sanity";

export const value = defineType({
  name: "value",
  title: "Church Value",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Value",
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
    }),

    defineField({
      name: "shortStatement",
      title: "Short Statement",
      type: "string",
      description:
        "A short supporting statement, e.g. 'We choose love because Christ first loved us.'",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "scripture",
      title: "Supporting Scripture",
      type: "string",
      description: "Example: John 13:34–35",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "accessibleImage",
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: true,
    }),
  ],

  orderings: [
    {
      title: "Display Order",
      name: "displayOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "shortStatement",
      media: "image",
    },
  },
});