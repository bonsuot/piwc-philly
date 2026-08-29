import { defineField, defineType } from "sanity";

export const eventGridSection = defineType({
  name: "eventGridSection",
  title: "Event Grid",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "WHAT'S HAPPENING",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "UPCOMING EVENTS",
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
      title: "Which events should appear?",
      type: "string",
      initialValue: "upcoming",
      options: {
        layout: "radio",
        list: [
          { title: "Upcoming Events", value: "upcoming" },
          { title: "Featured Events", value: "featured" },
          { title: "Choose Events", value: "manual" },
        ],
      },
    }),

    defineField({
      name: "events",
      title: "Selected Events",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "event" }],
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