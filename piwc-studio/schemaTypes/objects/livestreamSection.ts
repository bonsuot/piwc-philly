import { defineField, defineType } from "sanity";

export const livestreamSection = defineType({
  name: "livestreamSection",
  title: "Watch Live",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "WATCH LIVE",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "JOIN US ONLINE",
    }),

    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      initialValue: "Church wherever you are.",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      initialValue: "immersive",
      options: {
        layout: "radio",
        list: [
          {
            title: "Immersive",
            value: "immersive",
          },
          {
            title: "Media Hub",
            value: "mediaHub",
          },
        ],
      },
      description:
        "Use Media Hub for a more compact presentation inside the Media page.",
    }),

    defineField({
      name: "image",
      title: "Image Override",
      type: "accessibleImage",
      description:
        "Optional. If empty, the global livestream image will be used.",
    }),

    defineField({
      name: "ctaLabel",
      title: "Button Label",
      type: "string",
      initialValue: "WATCH LIVE",
    }),

    defineField({
  name: "liveStreamUrl",
  title: "Livestream URL",
  type: "url",
  description:
    "Paste the YouTube Live or YouTube channel URL here.",
}),

defineField({
  name: "featuredVideoUrl",
  title: "Featured Video URL",
  type: "url",
  description:
    "Optional. Paste a YouTube video URL if you want to feature a specific service.",
}),

  ],
});