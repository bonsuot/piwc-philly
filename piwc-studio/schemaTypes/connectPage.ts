import { defineField, defineType } from "sanity";

export const connectPage = defineType({
  name: "connectPage",
  title: "Connect Page",
  type: "document",

  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "links",
      title: "Links",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      group: "content",
      initialValue: "Connect With Us",
      validation: (Rule) => Rule.max(60),
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      group: "content",
      initialValue: "Everything PIWC.",
      validation: (Rule) => Rule.required().max(80),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      group: "content",
      initialValue:
        "One place to stay connected with PIWC Philadelphia.",
      validation: (Rule) => Rule.max(240),
    }),

    defineField({
      name: "links",
      title: "Connect Links",
      description:
        "Add and reorder the links visitors should see when they scan the PIWC Connect QR code.",
      type: "array",
      group: "links",

      of: [
        {
          type: "object",
          name: "connectLink",
          title: "Connect Link",

          fields: [
            defineField({
              name: "eyebrow",
              title: "Small Label",
              description:
                'Examples: "New Here?", "Watch", "Follow", "Prayer", "Generosity".',
              type: "string",
              validation: (Rule) => Rule.max(30),
            }),

            defineField({
              name: "label",
              title: "Link Label",
              description:
                'Examples: "Plan Your Visit", "YouTube", "Instagram".',
              type: "string",
              validation: (Rule) => Rule.required().max(60),
            }),

            defineField({
              name: "destination",
              title: "Destination",
              type: "string",
              initialValue: "custom",

              options: {
                list: [
                  {
                    title: "Website Home",
                    value: "home",
                  },
                  {
                    title: "YouTube",
                    value: "youtube",
                  },
                  {
                    title: "Instagram",
                    value: "instagram",
                  },
                  {
                    title: "Facebook",
                    value: "facebook",
                  },
                  {
                    title: "TikTok",
                    value: "tiktok",
                  },
                  {
                    title: "Prayer Request",
                    value: "prayer",
                  },
                  {
                    title: "Upcoming Events",
                    value: "events",
                  },
                  {
                    title: "Plan Your Visit",
                    value: "visit",
                  },
                  {
                    title: "Give",
                    value: "give",
                  },
                  {
                    title: "Gallery",
                    value: "gallery",
                  },
                  {
                    title: "Messages",
                    value: "messages",
                  },
                  {
                    title: "Custom Link",
                    value: "custom",
                  },
                ],
              },

              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "customUrl",
              title: "Custom URL / Path",
              description:
                "Only required when Destination is Custom Link. Internal links should begin with /.",
              type: "string",
              hidden: ({ parent }) =>
                parent?.destination !== "custom",

              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const parent = context.parent as
                    | { destination?: string }
                    | undefined;

                  if (
                    parent?.destination === "custom" &&
                    !value
                  ) {
                    return "Enter a URL or internal path.";
                  }

                  return true;
                }),
            }),

            defineField({
              name: "featured",
              title: "Featured Link",
              description:
                "Featured links receive stronger visual emphasis on the Connect page.",
              type: "boolean",
              initialValue: false,
            }),

            defineField({
              name: "openInNewTab",
              title: "Open in New Tab",
              type: "boolean",
              initialValue: false,
            }),
          ],

          preview: {
            select: {
              title: "label",
              eyebrow: "eyebrow",
              destination: "destination",
              featured: "featured",
            },

            prepare({
              title,
              eyebrow,
              destination,
              featured,
            }) {
              return {
                title:
                  `${featured ? "★ " : ""}${title ?? "Connect Link"}`,
                subtitle:
                  eyebrow ??
                  destination ??
                  "Connect link",
              };
            },
          },
        },
      ],
    }),

    defineField({
      name: "footerText",
      title: "Footer Message",
      type: "string",
      group: "content",
      initialValue:
        "A Place of Love, Healing & Provision.",
      validation: (Rule) => Rule.max(120),
    }),

    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "PIWC Connect Page",
        subtitle: "/connect",
      };
    },
  },
});