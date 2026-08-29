import { defineField, defineType } from "sanity";

export const cta = defineType({
  name: "cta",
  title: "Call to Action",
  type: "object",

  fields: [
    defineField({
      name: "link",
      title: "Link",
      type: "link",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "style",
      title: "Style",
      type: "string",
      initialValue: "primary",

      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Text Link", value: "text" },
        ],
      },

      validation: (Rule) => Rule.required(),
    }),
  ],
});