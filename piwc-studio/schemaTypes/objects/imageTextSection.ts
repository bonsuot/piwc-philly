import { defineField, defineType } from "sanity";

export const imageTextSection = defineType({
  name: "imageTextSection",
  title: "Image + Text",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      description:
        "Optional word or phrase shown in the editorial serif style.",
      type: "string",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "accessibleImage",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "cta",
      title: "Call to Action",
      type: "cta",
    }),

    defineField({
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      initialValue: "right",
      options: {
        layout: "radio",
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
      },
    }),

    defineField({
      name: "theme",
      title: "Section Theme",
      type: "string",
      initialValue: "light",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
      },
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "eyebrow",
      media: "image",
    },
  },
});