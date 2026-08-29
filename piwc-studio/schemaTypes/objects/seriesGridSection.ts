import { defineField, defineType } from "sanity";

export const seriesGridSection = defineType({
  name: "seriesGridSection",
  title: "Sermon Series Grid",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "SERMON SERIES",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "EXPLORE SERIES",
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      initialValue: "Go deeper.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "selectionMode",
      title: "Which series should appear?",
      type: "string",
      initialValue: "featured",

      options: {
        layout: "radio",
        list: [
          { title: "Featured Series", value: "featured" },
          { title: "All Series", value: "all" },
          { title: "Choose Series", value: "manual" },
        ],
      },
    }),

    defineField({
      name: "series",
      title: "Selected Series",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sermonSeries" }],
        },
      ],

      hidden: ({ parent }) =>
        parent?.selectionMode !== "manual",
    }),

    defineField({
      name: "limit",
      title: "Maximum Items",
      type: "number",
      initialValue: 3,
      validation: (Rule) => Rule.min(1).max(12),

      hidden: ({ parent }) =>
        parent?.selectionMode === "manual",
    }),
  ],
});