import { defineField, defineType } from "sanity";

export const locationSection = defineType({
  name: "locationSection",
  title: "Location",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "FIND US",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "COME WORSHIP WITH US",
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      initialValue: "See you in Philadelphia.",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
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
      location: "location.name",
    },

    prepare({ title, location }) {
      return {
        title: title || "Location",
        subtitle: location,
      };
    },
  },
});