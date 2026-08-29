import { defineField, defineType } from "sanity";

export const person = defineType({
  name: "person",
  title: "Person",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),

    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      description: "Example: Resident Pastor",
    }),

    defineField({
      name: "category",
      title: "Leadership Category",
      type: "string",
      options: {
        list: [
          { title: "Pastoral Leadership", value: "pastoral" },
          { title: "Ministry Leadership", value: "ministry" },
          { title: "Church Leadership", value: "church" },
          { title: "Staff", value: "staff" },
        ],
      },
    }),

    defineField({
      name: "photo",
      title: "Photo",
      type: "accessibleImage",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),

    defineField({
      name: "bio",
      title: "Full Bio",
      type: "text",
      rows: 7,
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "email",
    }),

    defineField({
      name: "featured",
      title: "Featured Leader",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
  ],

  orderings: [
    {
      title: "Display Order",
      name: "displayOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "photo",
    },
  },
});