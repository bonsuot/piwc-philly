import { defineField, defineType } from "sanity";

export const heroSlide = defineType({
  name: "heroSlide",
  title: "Hero Photo",
  type: "object",

  fields: [
    defineField({
      name: "image",
      title: "Photo",
      type: "accessibleImage",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "label",
      title: "Internal Label",
      type: "string",
      description:
        "Optional. Helps editors identify the photo, e.g. Worship, Community or Prayer.",
    }),
  ],

  preview: {
    select: {
      title: "label",
      media: "image",
      alt: "image.alt",
    },

    prepare({ title, media, alt }) {
      return {
        title: title || alt || "Hero Photo",
        media,
      };
    },
  },
});