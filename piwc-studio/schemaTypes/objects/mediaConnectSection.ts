import { defineField, defineType } from "sanity";

export const mediaConnectSection = defineType({
  name: "mediaConnectSection",
  title: "Media — Connect",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "Stay Connected",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Stay connected beyond Sunday.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      initialValue:
        "Follow PIWC Philadelphia for messages, moments and updates throughout the week.",
    }),

    defineField({
      name: "ctaLabel",
      title: "Connect Button Label",
      type: "string",
      initialValue: "Everything PIWC",
    }),
  ],

  preview: {
    select: {
      title: "heading",
    },

    prepare({ title }) {
      return {
        title: title || "Stay Connected",
        subtitle: "Media Hub · Connect",
      };
    },
  },
});