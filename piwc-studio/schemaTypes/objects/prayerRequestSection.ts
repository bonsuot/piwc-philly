import { defineField, defineType } from "sanity";

export const prayerRequestSection = defineType({
  name: "prayerRequestSection",
  title: "Prayer Request Form",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "WE'RE HERE TO PRAY",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "HOW CAN WE PRAY FOR YOU?",
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      initialValue: "You don't have to carry it alone.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "text",
      rows: 3,
      initialValue:
        "Thank you for sharing your prayer request. Our prayer team will be praying with you.",
    }),
  ],
});