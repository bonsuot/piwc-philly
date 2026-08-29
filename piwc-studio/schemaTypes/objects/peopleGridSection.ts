import { defineField, defineType } from "sanity";

export const peopleGridSection = defineType({
  name: "peopleGridSection",
  title: "Leadership / People Grid",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "OUR LEADERSHIP",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "MEET OUR LEADERS",
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      initialValue: "Serving with faith and purpose.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "selectionMode",
      title: "Which people should appear?",
      type: "string",
      initialValue: "featured",
      options: {
        layout: "radio",
        list: [
          { title: "Featured Leaders", value: "featured" },
          { title: "All Leaders", value: "all" },
          { title: "Choose Leaders", value: "manual" },
        ],
      },
    }),

    defineField({
      name: "people",
      title: "Selected Leaders",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "person" }],
        },
      ],
      hidden: ({ parent }) =>
        parent?.selectionMode !== "manual",
    }),

    defineField({
      name: "category",
      title: "Filter by Category",
      type: "string",
      options: {
        list: [
          { title: "All", value: "all" },
          { title: "Pastoral Leadership", value: "pastoral" },
          { title: "Ministry Leadership", value: "ministry" },
          { title: "Church Leadership", value: "church" },
          { title: "Staff", value: "staff" },
        ],
      },
      initialValue: "all",
      hidden: ({ parent }) =>
        parent?.selectionMode === "manual",
    }),
  ],
});