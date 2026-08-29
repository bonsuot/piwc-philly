import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",

  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description:
        "Recommended: approximately 50–60 characters.",
      validation: (Rule) =>
        Rule.max(70).warning(
          "Long titles may be truncated in search results."
        ),
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description:
        "Recommended: approximately 140–160 characters.",
      validation: (Rule) =>
        Rule.max(180).warning(
          "Long descriptions may be truncated in search results."
        ),
    }),

    defineField({
      name: "shareImage",
      title: "Social Share Image",
      type: "accessibleImage",
      description:
        "Used when the page is shared on social media.",
    }),

    defineField({
      name: "noIndex",
      title: "Hide from Search Engines",
      type: "boolean",
      initialValue: false,
      description:
        "Enable only when this page should not appear in search results.",
    }),
  ],
});