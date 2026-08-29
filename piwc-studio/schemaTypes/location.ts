import { defineField, defineType } from "sanity";

export const location = defineType({
  name: "location",
  title: "Location",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Location Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "street",
      title: "Street Address",
      type: "string",
    }),

    defineField({
      name: "city",
      title: "City",
      type: "string",
    }),

    defineField({
      name: "state",
      title: "State",
      type: "string",
    }),

    defineField({
      name: "zip",
      title: "ZIP Code",
      type: "string",
    }),

    defineField({
      name: "mapsUrl",
      title: "Google Maps URL",
      type: "url",
    }),

    defineField({
      name: "parkingInstructions",
      title: "Parking Instructions",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "image",
      title: "Location Image",
      type: "accessibleImage",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "city",
      media: "image",
    },
  },
});