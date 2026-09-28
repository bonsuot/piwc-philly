import { defineField, defineType } from "sanity";

export const belief = defineType({
  name: "belief",
  title: "Church Belief",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Belief",
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
        "A short summary of the belief.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "scripture",
      title: "Supporting Scripture",
      type: "string",
      description:
        "Example: 2 Timothy 3:16–17",
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