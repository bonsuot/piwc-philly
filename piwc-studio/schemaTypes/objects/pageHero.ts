import { defineField, defineType } from "sanity";

export const pageHero = defineType({
  name: "pageHero",
  title: "Page Hero",
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
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "image",
      title: "Background Image",
      type: "accessibleImage",
    }),

    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      initialValue: "dark",
      options: {
        list: [
          { title: "Dark", value: "dark" },
          { title: "Light", value: "light" },
          { title: "Image", value: "image" },
        ],
      },
    }),
  ],
});