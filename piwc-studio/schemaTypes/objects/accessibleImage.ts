import { defineField, defineType } from "sanity";

export const accessibleImage = defineType({
  name: "accessibleImage",
  title: "Image",
  type: "image",

  options: {
    hotspot: true,
  },

  fields: [
    defineField({
      name: "alt",
      title: "Alternative Text",
      description:
        "Describe the image for visitors using screen readers.",
      type: "string",
      validation: (Rule) =>
        Rule.required().warning(
          "Alternative text is important for accessibility."
        ),
    }),

    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
});