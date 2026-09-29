import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  groups: [
    {
      name: "general",
      title: "General",
      default: true,
    },
    {
      name: "contact",
      title: "Contact",
    },
    {
      name: "social",
      title: "Social Media",
    },
    {
      name: "branding",
      title: "Branding",
    },

    {
      name: "media",
      title: "Media",
    },

    {
      name: "alert",
      title: "Site Alert",
    },
  ],

  fields: [
    defineField({
      name: "churchName",
      title: "Church Name",
      type: "string",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "shortName",
      title: "Short Name",
      type: "string",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "general",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      group: "general",
    }),

    defineField({
      name: "email",
      title: "Church Email",
      type: "email",
      group: "contact",
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      group: "contact",
    }),

    defineField({
      name: "givingUrl",
      title: "Giving URL",
      type: "url",
      group: "general",
    }),

    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      group: "social",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",

              options: {
                list: [
                  { title: "Instagram", value: "instagram" },
                  { title: "YouTube", value: "youtube" },
                  { title: "Facebook", value: "facebook" },
                  { title: "TikTok", value: "tiktok" },
                  { title: "X / Twitter", value: "x" },
                ],
              },

              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
          ],

          preview: {
            select: {
              title: "platform",
              subtitle: "url",
            },
          },
        },
      ],
    }),

    defineField({
      name: "logo",
      title: "Official Logo",
      type: "accessibleImage",
      group: "branding",
    }),

    defineField({
      name: "logoLight",
      title: "Light Logo / Wordmark",
      description:
        "Optional logo intended for dark backgrounds.",
      type: "accessibleImage",
      group: "branding",
    }),

    defineField({
      name: "footerDescription",
      title: "Footer Description",
      type: "text",
      rows: 3,
      group: "general",
    }),

    defineField({
      name: "footerLinks",
      title: "Footer Links",
      type: "array",
      group: "general",
      of: [{ type: "link" }],
    }),

    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
      group: "general",
    }),

    defineField({
      name: "defaultSeo",
      title: "Default SEO",
      type: "seo",
      group: "general",
    }),

    defineField({
      name: "liveStreamUrl",
      title: "Live Stream URL",
      type: "url",
      group: "media",
      description:
        "Primary livestream destination, e.g. YouTube Live.",
    }),

    defineField({
      name: "youtubeChannelUrl",
      title: "YouTube Channel URL",
      type: "url",
      group: "media",
    }),

    defineField({
      name: "youtubeChannelId",
      title: "YouTube Channel ID",
      type: "string",
      group: "media",
      description:
        "The YouTube channel ID used to automatically detect when PIWC Philadelphia is live.",
    }),

    defineField({
      name: "liveStreamImage",
      title: "Livestream Image",
      type: "accessibleImage",
      group: "media",
    }),

    defineField({
      name: "siteAlert",
      title: "Site Alert",
      type: "object",
      group: "alert",

      fields: [
        defineField({
          name: "enabled",
          title: "Show Alert",
          type: "boolean",
          initialValue: false,
        }),

      defineField({
        name: "message",
        title: "Message",
        type: "string",
        validation: (Rule) => Rule.max(180),
      }),

      defineField({
        name: "style",
        title: "Alert Style",
        type: "string",
        initialValue: "info",
        options: {
          layout: "radio",
          list: [
            { title: "Info", value: "info" },
            { title: "Important", value: "important" },
            { title: "Urgent", value: "urgent" },
          ],
        },
      }),

      defineField({
        name: "link",
        title: "Optional Link",
        type: "link",
      }),

      defineField({
        name: "dismissible",
        title: "Allow visitors to dismiss",
        type: "boolean",
        initialValue: true,
      }),
    ],
  }),

    
  ],

  preview: {
    prepare() {
      return {
        title: "PIWC Website Settings",
      };
    },
  },
});