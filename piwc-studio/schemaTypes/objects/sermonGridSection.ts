import { defineField, defineType } from "sanity";

export const sermonGridSection = defineType({
  name: "sermonGridSection",
  title: "Sermon Grid",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "MESSAGES",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "GROW IN YOUR FAITH",
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
      name: "selectionMode",
      title: "Which sermons should appear?",
      type: "string",
      initialValue: "latest",
      options: {
        layout: "radio",
        list: [
          { title: "Latest Sermons", value: "latest" },
          { title: "Featured Sermons", value: "featured" },
          { title: "Choose Sermons", value: "manual" },
        ],
      },
    }),

    defineField({
      name: "sermons",
      title: "Selected Sermons",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sermon" }],
        },
      ],
      hidden: ({ parent }) => parent?.selectionMode !== "manual",
    }),

    defineField({
      name: "limit",
      title: "Maximum Items",
      type: "number",
      initialValue: 3,
      validation: (Rule) => Rule.min(1).max(12),
      hidden: ({ parent }) => parent?.selectionMode === "manual",
    }),

    defineField({
      name: "cta",
      title: "CTA",
      type: "cta",
    }),
  ],
});