import { defineField, defineType } from "sanity";

export const richTextSection = defineType({
  name: "richTextSection",
  title: "Rich Text",
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
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "array",

      of: [
        {
          type: "block",

          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],

          marks: {
            annotations: [
              {
                name: "link",
                title: "Link",
                type: "object",

                fields: [
                  {
                    name: "href",
                    title: "URL",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
      ],
    }),

    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      initialValue: "ivory",

      options: {
        list: [
          { title: "Ivory", value: "ivory" },
          { title: "White", value: "white" },
          { title: "Navy", value: "navy" },
        ],
      },
    }),
  ],

  preview: {
    select: {
      title: "heading",
      subtitle: "eyebrow",
    },

    prepare({ title, subtitle }) {
      return {
        title: title || "Rich Text",
        subtitle,
      };
    },
  },
});