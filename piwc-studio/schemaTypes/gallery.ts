import { defineField, defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Gallery Title",
      type: "string",
      description:
        "Example: Maranatha Gathering 2026",
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
      description:
        "When this service, event, or gathering took place.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          {
            title: "Sunday Worship",
            value: "sunday-worship",
          },
          {
            title: "Events",
            value: "events",
          },
          {
            title: "Youth & PENSA",
            value: "youth-pensa",
          },
          {
            title: "Community",
            value: "community",
          },
          {
            title: "Prayer",
            value: "prayer",
          },
          {
            title: "Outreach",
            value: "outreach",
          },
          {
            title: "Other",
            value: "other",
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description:
        "A short introduction to this gallery.",
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "accessibleImage",
      description:
        "Main image used on the Gallery page and at the top of this gallery.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "items",
      title: "Photos & Videos",
      type: "array",
      description:
        "Add and reorder photos and videos. Their order here determines their order on the website.",
      of: [{ type: "galleryItem" }],
      validation: (Rule) =>
        Rule.required().min(1),
    }),

    defineField({
      name: "featured",
      title: "Featured Gallery",
      type: "boolean",
      description:
        "Feature this gallery more prominently on the main Gallery page.",
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: "title",
      date: "date",
      category: "category",
      media: "coverImage",
    },

    prepare({
      title,
      date,
      category,
      media,
    }) {
      return {
        title,
        subtitle: [category, date]
          .filter(Boolean)
          .join(" • "),
        media,
      };
    },
  },
});