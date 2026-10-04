import { defineField, defineType } from "sanity";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "object",

  fields: [
    defineField({
      name: "type",
      title: "Media Type",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Photo", value: "photo" },
          { title: "Video", value: "video" },
        ],
      },
      initialValue: "photo",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Photo",
      type: "accessibleImage",
      hidden: ({ parent }) => parent?.type !== "photo",
    }),

    defineField({
      name: "videoUrl",
      title: "YouTube Video URL",
      type: "url",
      description:
        "Paste the YouTube URL. The website will load the video only when needed.",
      hidden: ({ parent }) => parent?.type !== "video",
    }),

    defineField({
      name: "videoThumbnail",
      title: "Video Thumbnail",
      type: "accessibleImage",
      description:
        "Optional custom thumbnail shown before the video is opened.",
      hidden: ({ parent }) => parent?.type !== "video",
    }),

    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description:
        "Optional short description of this moment.",
    }),

    defineField({
      name: "displaySize",
      title: "Display Size",
      type: "string",
      description:
        "Controls how prominently this item appears in the gallery.",
      options: {
        layout: "radio",
        list: [
          { title: "Standard", value: "standard" },
          { title: "Large", value: "large" },
          { title: "Full Width", value: "full" },
        ],
      },
      initialValue: "standard",
    }),
  ],

  preview: {
    select: {
      type: "type",
      caption: "caption",
      photo: "image",
      videoThumbnail: "videoThumbnail",
    },

    prepare({
      type,
      caption,
      photo,
      videoThumbnail,
    }) {
      return {
        title:
          caption ||
          (type === "video" ? "Video" : "Photo"),
        subtitle:
          type === "video"
            ? "YouTube Video"
            : "Gallery Photo",
        media:
          type === "video"
            ? videoThumbnail
            : photo,
      };
    },
  },
});