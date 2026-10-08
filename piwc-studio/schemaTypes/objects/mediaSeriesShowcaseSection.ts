import { defineField, defineType } from "sanity";

export const mediaSeriesShowcaseSection = defineType({
  name: "mediaSeriesShowcaseSection",
  title: "Media — Series Showcase",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "Explore",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Message Series",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      initialValue: "Teaching for every season.",
    }),

    defineField({
      name: "selectionMode",
      title: "Series Selection",
      type: "string",
      initialValue: "featured",
      options: {
        layout: "radio",
        list: [
          {
            title: "Featured series",
            value: "featured",
          },
          {
            title: "Latest series",
            value: "latest",
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "limit",
      title: "Number of Series",
      type: "number",
      initialValue: 3,
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(4),
      description:
        "Choose how many series to display. Three is recommended.",
    }),

    defineField({
      name: "ctaLabel",
      title: "All Series Link Label",
      type: "string",
      initialValue: "View All Series",
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "selectionMode",
    },

    prepare({ title, subtitle }) {
      return {
        title: title || "Message Series",
        subtitle:
          subtitle === "latest"
            ? "Media Hub · Latest series"
            : "Media Hub · Featured series",
      };
    },
  },
});