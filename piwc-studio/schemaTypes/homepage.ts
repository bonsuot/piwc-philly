import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",

  groups: [
    {
      name: "hero",
      title: "Hero",
      default: true,
    },

    {
    name: "content",
    title: "Homepage Content",
    },

    {
      name: "seo",
      title: "SEO",
    },
  ],

  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "hero",
      initialValue: "WELCOME TO",
    }),

    defineField({
      name: "heroHeading",
      title: "Heading",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required(),
      initialValue: "PIWC PHILADELPHIA",
    }),

    defineField({
      name: "heroDescription",
      title: "Description",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue: "A Place of Love, Healing & Provision.",
    }),

    defineField({
      name: "heroSlides",
      title: "Hero Photography",
      description:
        "Upload 5–8 high-quality landscape photographs. Drag to reorder them.",
      type: "array",
      group: "hero",
      of: [{ type: "heroSlide" }],

      validation: (Rule) =>
        Rule.required()
          .min(5)
          .error("Add at least 5 hero photographs.")
          .max(8)
          .error("Use no more than 8 hero photographs."),
    }),

    defineField({
      name: "primaryCta",
      title: "Primary Action",
      type: "cta",
      group: "hero",
    }),

    defineField({
      name: "secondaryCta",
      title: "Secondary Action",
      type: "cta",
      group: "hero",
    }),

    defineField({
        name: "introSection",
        title: "Who Is PIWC?",
        type: "imageTextSection",
        group: "content",
    }),

    defineField({
  name: "communitySection",
  title: "Find Your Community",
  type: "object",
  group: "content",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "GET INVOLVED",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "FIND YOUR COMMUNITY",
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      initialValue: "There’s a place for you here.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "cta",
      title: "View All Ministries CTA",
      type: "cta",
    }),
  ],
}),

    defineField({
      name: "sundaySection",
      title: "Sunday Experience",
      type: "object",
      group: "content",
      fields: [

    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "JOIN US THIS SUNDAY",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "COME EXPERIENCE PIWC",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "service",
      title: "Service",
      type: "reference",
      to: [{ type: "service" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "cta",
      title: "Plan Your Visit CTA",
      type: "cta",
    }),

    
    
  ],
  
}),

    defineField({
  name: "latestMessageSection",
  title: "Latest Message",
  type: "object",
  group: "content",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "LATEST MESSAGE",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "GROW IN YOUR FAITH",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "cta",
      title: "View All Messages CTA",
      type: "cta",
    }),
  ],
}),


defineField({
  name: "eventsSection",
  title: "Upcoming Events",
  type: "object",
  group: "content",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "WHAT'S HAPPENING",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "UPCOMING EVENTS",
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      initialValue: "Come be part of it.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "cta",
      title: "View All Events CTA",
      type: "cta",
    }),
  ],
}),


  ],

  preview: {
    prepare() {
      return {
        title: "Homepage",
      };
    },
  },
});


