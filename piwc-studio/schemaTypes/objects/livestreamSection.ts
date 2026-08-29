import { defineField, defineType } from "sanity";

export const livestreamSection = defineType({
  name: "livestreamSection",
  title: "Watch Live",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "WATCH LIVE",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "JOIN US ONLINE",
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      initialValue: "Church wherever you are.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "image",
      title: "Image Override",
      type: "accessibleImage",
      description:
        "Optional. If empty, the global livestream image will be used.",
    }),

    defineField({
      name: "ctaLabel",
      title: "Button Label",
      type: "string",
      initialValue: "WATCH LIVE",
    }),
  ],
});