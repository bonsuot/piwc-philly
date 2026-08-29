import { defineField, defineType } from "sanity";

export const sermon = defineType({
  name: "sermon",
  title: "Sermon",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Sermon Title",
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
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "speakerName",
      title: "Speaker",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "series",
      title: "Sermon Series",
      type: "reference",
      to: [{ type: "sermonSeries" }],
    }),

    defineField({
      name: "scripture",
      title: "Scripture",
      type: "string",
      description: "Example: Romans 8:28–39",
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
      name: "thumbnail",
      title: "Thumbnail",
      type: "accessibleImage",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "YouTube or Vimeo URL",
    }),

    defineField({
      name: "audioUrl",
      title: "Audio URL",
      type: "url",
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "speakerName",
      media: "thumbnail",
    },
  },
});