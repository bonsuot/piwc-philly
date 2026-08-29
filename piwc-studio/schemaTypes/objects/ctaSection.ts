import { defineField, defineType } from "sanity";

export const ctaSection = defineType({
  name: "ctaSection",
  title: "Call to Action",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "cta",
      title: "Action",
      type: "cta",
    }),

    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      initialValue: "navy",
      options: {
        list: [
          { title: "Navy", value: "navy" },
          { title: "Ivory", value: "ivory" },
        ],
      },
    }),
  ],
});