import { defineField, defineType } from "sanity";

export const mediaGalleryShowcaseSection = defineType({
  name: "mediaGalleryShowcaseSection",
  title: "Media — Gallery Showcase",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "Life at PIWC",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Faith. Family. Community.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      initialValue:
        "Experience moments from worship, fellowship and life together at PIWC Philadelphia.",
    }),

    defineField({
      name: "selectionMode",
      title: "Gallery Selection",
      type: "string",
      initialValue: "featured",
      options: {
        layout: "radio",
        list: [
          {
            title: "Featured gallery",
            value: "featured",
          },
          {
            title: "Latest gallery",
            value: "latest",
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "ctaLabel",
      title: "Gallery Link Label",
      type: "string",
      initialValue: "Explore the Gallery",
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "selectionMode",
    },

    prepare({ title, subtitle }) {
      return {
        title: title || "Gallery Showcase",
        subtitle:
          subtitle === "latest"
            ? "Media Hub · Latest gallery"
            : "Media Hub · Featured gallery",
      };
    },
  },
});