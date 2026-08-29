import { defineField, defineType } from "sanity";

export const valuesSection = defineType({
  name: "valuesSection",
  title: "Church Values",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "WHAT SHAPES US",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "OUR VALUES",
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      initialValue: "What we carry matters.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "selectionMode",
      title: "Which values should appear?",
      type: "string",
      initialValue: "featured",
      options: {
        layout: "radio",
        list: [
          { title: "Featured Values", value: "featured" },
          { title: "All Values", value: "all" },
          { title: "Choose Values", value: "manual" },
        ],
      },
    }),

    defineField({
      name: "values",
      title: "Selected Values",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "value" }],
        },
      ],
      hidden: ({ parent }) =>
        parent?.selectionMode !== "manual",
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
});