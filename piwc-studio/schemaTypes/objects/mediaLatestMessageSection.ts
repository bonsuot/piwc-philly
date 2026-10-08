import { defineField, defineType } from "sanity";

export const mediaLatestMessageSection = defineType({
  name: "mediaLatestMessageSection",
  title: "Media — Latest Message",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "Latest Message",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Word for the Week",
    }),

    defineField({
      name: "description",
      title: "Intro Description",
      type: "text",
      rows: 2,
      description:
        "Optional introductory copy displayed above the latest message.",
    }),

    defineField({
      name: "selectionMode",
      title: "Message Selection",
      type: "string",
      initialValue: "latest",
      options: {
        layout: "radio",
        list: [
          {
            title: "Latest sermon automatically",
            value: "latest",
          },
          {
            title: "Latest featured sermon",
            value: "featured",
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "ctaLabel",
      title: "All Messages Link Label",
      type: "string",
      initialValue: "View All Messages",
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "selectionMode",
    },

    prepare({ title, subtitle }) {
      return {
        title: title || "Latest Message",
        subtitle:
          subtitle === "featured"
            ? "Media Hub · Featured sermon"
            : "Media Hub · Latest sermon",
      };
    },
  },
});