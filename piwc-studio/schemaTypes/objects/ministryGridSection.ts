import { defineField, defineType } from "sanity";

export const ministryGridSection = defineType({
  name: "ministryGridSection",
  title: "Ministry Grid",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "GET INVOLVED",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "FIND YOUR COMMUNITY",
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
      title: "Which ministries should appear?",
      type: "string",
      initialValue: "featured",
      options: {
        layout: "radio",
        list: [
          { title: "Featured Ministries", value: "featured" },
          { title: "All Ministries", value: "all" },
          { title: "Choose Ministries", value: "manual" },
        ],
      },
    }),

    defineField({
      name: "ministries",
      title: "Selected Ministries",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "ministry" }],
        },
      ],
      hidden: ({ parent }) => parent?.selectionMode !== "manual",
    }),

    defineField({
      name: "limit",
      title: "Maximum Items",
      type: "number",
      initialValue: 6,
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