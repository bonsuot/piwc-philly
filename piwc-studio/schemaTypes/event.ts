import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),

    defineField({
      name: "startTime",
      title: "Start Time",
      type: "string",
      description: "Example: 6:00 PM",
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
    }),

    defineField({
      name: "customLocation",
      title: "Custom Location",
      type: "string",
      description:
        "Use this when the event is not being held at one of the saved PIWC locations.",
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(240),
    }),

    defineField({
      name: "description",
      title: "Full Description",
      type: "text",
      rows: 6,
    }),

    defineField({
      name: "image",
      title: "Event Image",
      type: "accessibleImage",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "registrationUrl",
      title: "Registration URL",
      type: "url",
    }),

    defineField({
      name: "featured",
      title: "Feature on Homepage",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "ministries",
      title: "Related Ministries",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "ministry" }],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "startDate",
      media: "image",
    },
  },
});