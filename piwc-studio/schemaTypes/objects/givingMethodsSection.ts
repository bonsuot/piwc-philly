import { defineField, defineType } from "sanity";

export const givingMethodsSection = defineType({
  name: "givingMethodsSection",
  title: "Giving — Ways to Give",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "Ways to Give",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Simple. Secure. Generous.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      initialValue:
        "Choose the giving method that works best for you.",
    }),

    defineField({
      name: "methods",
      title: "Giving Methods",
      type: "array",
      of: [{ type: "givingMethod" }],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(6),
    }),
  ],

  preview: {
    select: {
      title: "heading",
    },

    prepare({ title }) {
      return {
        title: title || "Ways to Give",
        subtitle: "Giving Page · Giving Methods",
      };
    },
  },
});