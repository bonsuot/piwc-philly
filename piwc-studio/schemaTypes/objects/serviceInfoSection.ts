import { defineField, defineType } from "sanity";

export const serviceInfoSection = defineType({
  name: "serviceInfoSection",
  title: "Service Information",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "JOIN US",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "SUNDAY AT PIWC",
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      initialValue: "We'd love to meet you.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "service",
      title: "Service",
      type: "reference",
      to: [{ type: "service" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "showParking",
      title: "Show Parking Information",
      type: "boolean",
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: "heading",
      service: "service.name",
    },

    prepare({ title, service }) {
      return {
        title: title || "Service Information",
        subtitle: service,
      };
    },
  },
});