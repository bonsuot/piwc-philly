import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Page Title",
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
      name: "parent",
      title: "Parent Page",
      type: "reference",
      to: [{ type: "page" }],
      description:
      "Optional. Select a parent page when this page belongs underneath another page, for example Mission & Vision under About.",
      }),

    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),

    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",

      of: [
        { type: "pageHero" },
        { type: "imageTextSection" },
        { type: "richTextSection" },
        { type: "serviceInfoSection" },
        { type: "locationSection" },
        { type: "faqSection" },
        { type: "ministryGridSection" },
        { type: "eventGridSection" },
        { type: "sermonGridSection" },
        { type: "ctaSection" },
        { type: "valuesSection" },
        { type: "beliefsSection" },
        { type: "prayerRequestSection" },
        { type: "peopleGridSection" },
        { type: "livestreamSection" },
        { type: "seriesGridSection" },
        { type: "mediaLatestMessageSection" },
        { type: "mediaSeriesShowcaseSection" },
        { type: "mediaGalleryShowcaseSection" },
        { type: "mediaConnectSection" },
        { type: "givingMethodsSection" },
      ],

      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});