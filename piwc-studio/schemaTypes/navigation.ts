import { defineField, defineType } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",

  fields: [
    defineField({
      name: "mainItems",
      title: "Main Navigation",
      type: "array",

      of: [
        {
          type: "object",
          name: "navigationItem",
          title: "Navigation Item",

          fields: [
            defineField({
              name: "link",
              title: "Link",
              type: "link",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "children",
              title: "Dropdown Items",
              type: "array",
              of: [{ type: "link" }],
            }),
          ],

          preview: {
            select: {
              title: "link.label",
            },
          },
        },
      ],
    }),

    defineField({
      name: "primaryCta",
      title: "Primary CTA",
      description: "Main action displayed in the header.",
      type: "cta",
    }),

    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "cta",
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Main Navigation",
      };
    },
  },
});