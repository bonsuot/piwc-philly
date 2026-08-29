import { defineField, defineType } from "sanity";

export const link = defineType({
  name: "link",
  title: "Link",
  type: "object",

  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      initialValue: "internal",
      options: {
        layout: "radio",
        list: [
          { title: "Internal Page", value: "internal" },
          { title: "Internal Route", value: "route" },
          { title: "External URL", value: "external" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    

    defineField({
      name: "internalReference",
      title: "Internal Page",
      type: "reference",

      to: [
        { type: "page" },
        { type: "ministry" },
        { type: "event" },
        { type: "sermon" },
      ],

      hidden: ({ parent }) =>
        parent?.linkType !== "internal",

      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as
            | { linkType?: string }
            | undefined;

          if (parent?.linkType === "internal" && !value) {
            return "Select an internal destination.";
          }

          return true;
        }),
    }),

    defineField({
  name: "internalPath",
  title: "Internal Route",
  type: "string",
  description:
    "Use for routes without a Sanity document, e.g. /events or /media/sermons",
  hidden: ({ parent }) =>
    parent?.linkType !== "route",
}),

    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",

      hidden: ({ parent }) => parent?.linkType !== "external",

      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as
            | { linkType?: string }
            | undefined;

          if (parent?.linkType === "external" && !value) {
            return "External URL is required";
          }

          return true;
        }),
    }),

    defineField({
      name: "openInNewTab",
      title: "Open in new tab",
      type: "boolean",
      initialValue: false,
      hidden: ({ parent }) => parent?.linkType !== "external",
    }),


  ],
});