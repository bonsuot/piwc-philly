import { defineArrayMember, defineField, defineType } from "sanity";

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "GOOD TO KNOW",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "BEFORE YOU VISIT",
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      initialValue: "We've got you.",
    }),

    defineField({
      name: "items",
      title: "Questions",
      type: "array",

      of: [
        defineArrayMember({
          name: "faqItem",
          title: "Question",
          type: "object",

          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],

          preview: {
            select: {
              title: "question",
            },
          },
        }),
      ],

      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      initialValue: "ivory",

      options: {
        list: [
          { title: "Ivory", value: "ivory" },
          { title: "White", value: "white" },
          { title: "Navy", value: "navy" },
        ],
      },
    }),
  ],

  preview: {
    select: {
      title: "heading",
    },

    prepare({ title }) {
      return {
        title: title || "FAQ",
        subtitle: "FAQ Section",
      };
    },
  },
});