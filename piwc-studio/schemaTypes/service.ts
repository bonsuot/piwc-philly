import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Service Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "day",
      title: "Day",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "startTime",
      title: "Start Time",
      type: "string",
      description: "Example: 10:00 AM",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "endTime",
      title: "End Time",
      type: "string",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
});