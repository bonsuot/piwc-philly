import { defineField, defineType } from "sanity";

export const givingMethod = defineType({
  name: "givingMethod",
  title: "Giving Method",
  type: "object",

  fields: [
    defineField({
      name: "name",
      title: "Method Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "methodType",
      title: "Method Type",
      type: "string",
      options: {
        list: [
          { title: "Online Giving", value: "online" },
          { title: "Zelle", value: "zelle" },
          { title: "Cash App", value: "cashapp" },
          { title: "In Person", value: "inPerson" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "displayValue",
      title: "Giving Address / Account",
      type: "string",
      description:
        "For example, a Zelle email or Cash App $Cashtag. Leave blank when not needed.",
      hidden: ({ parent }) =>
        !["zelle", "cashapp", "other"].includes(
          parent?.methodType
        ),
    }),

    defineField({
      name: "url",
      title: "Giving Link",
      type: "url",
      description:
        "Optional external giving link, such as Tithely.",
    }),

    defineField({
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
      description:
        "Examples: Give Online, Copy Zelle Address, Open Cash App.",
    }),

    defineField({
      name: "instructions",
      title: "Additional Instructions",
      type: "text",
      rows: 3,
      description:
        "Optional short instructions for this giving method.",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "methodType",
    },

    prepare({ title, subtitle }) {
      const labels: Record<string, string> = {
        online: "Online Giving",
        zelle: "Zelle",
        cashapp: "Cash App",
        inPerson: "In Person",
        other: "Other",
      };

      return {
        title: title || "Giving Method",
        subtitle: labels[subtitle] ?? subtitle,
      };
    },
  },
});