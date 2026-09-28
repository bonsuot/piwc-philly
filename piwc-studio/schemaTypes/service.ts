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
      description: "Examples: Sunday, Tuesday, or Monday–Friday",
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
      description: "Physical meeting location. Leave blank for online-only gatherings.",
    }),

    defineField({
      name: "meetingUrl",
      title: "Online Meeting Link",
      type: "url",
      description: "Optional Zoom or other online meeting URL. May be used alongside a physical location.",
      validation: (Rule) => Rule.uri({ scheme: ["https", "http"] }),
    }),

    defineField({
      name: "meetingLinkLabel",
      title: "Online Meeting Button Text",
      type: "string",
      description: "Example: Join Bible Study. Defaults to Join Online.",
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
