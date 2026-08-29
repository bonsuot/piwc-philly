import { defineField, defineType } from "sanity";

export const ministry = defineType({
  name: "ministry",
  title: "Ministry",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Ministry Name",
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
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(220),
    }),

    defineField({
      name: "description",
      title: "Full Description",
      type: "text",
      rows: 6,
    }),

    defineField({
      name: "image",
      title: "Featured Image",
      type: "accessibleImage",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "audience",
      title: "Audience",
      type: "string",
      options: {
        list: [
          { title: "Students", value: "students" },
          { title: "Young Adults", value: "young-adults" },
          { title: "Men", value: "men" },
          { title: "Women", value: "women" },
          { title: "Children", value: "children" },
          { title: "Families", value: "families" },
          { title: "Everyone", value: "everyone" },
        ],
      },
    }),

    defineField({
      name: "featured",
      title: "Feature on Homepage",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "email",
    }),

    defineField({
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
      initialValue: "LEARN MORE",
    }),

    defineField({
  name: "leaders",
  title: "Ministry Leaders",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "person" }],
    },
  ],
}),

defineField({
  name: "meetingInfo",
  title: "Meeting Information",
  type: "object",

  fields: [
    defineField({
      name: "day",
      title: "Day",
      type: "string",
    }),

    defineField({
      name: "time",
      title: "Time",
      type: "string",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
    }),

    defineField({
      name: "notes",
      title: "Notes",
      type: "text",
      rows: 3,
    }),
  ],
}),

defineField({
  name: "heroImage",
  title: "Hero Image",
  type: "accessibleImage",
}),

defineField({
  name: "cta",
  title: "Get Connected CTA",
  type: "cta",
}),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "audience",
      media: "image",
    },
  },
});