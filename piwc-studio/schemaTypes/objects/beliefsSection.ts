import { defineField, defineType } from "sanity";

export const beliefsSection = defineType({
  name: "beliefsSection",
  title: "Church Beliefs",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "WHAT WE BELIEVE",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "OUR BELIEFS",
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      initialValue: "Rooted in truth.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "selectionMode",
      title: "Which beliefs should appear?",
      type: "string",
      initialValue: "all",
      options: {
        layout: "radio",
        list: [
          { title: "Featured Beliefs", value: "featured" },
          { title: "All Beliefs", value: "all" },
          { title: "Choose Beliefs", value: "manual" },
        ],
      },
    }),

    defineField({
      name: "beliefs",
      title: "Selected Beliefs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "belief" }],
        },
      ],
      hidden: ({ parent }) =>
        parent?.selectionMode !== "manual",
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
});