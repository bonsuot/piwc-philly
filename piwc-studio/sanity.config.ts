import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'PIWC Philadelphia',

  projectId: '493tg5cp',
  dataset: 'production',

  document: {
  actions: (prev, context) => {
    const singletonTypes = new Set([
      "siteSettings",
      "navigation",
      "homepage",
    ]);

    if (singletonTypes.has(context.schemaType)) {
      return prev.filter(
        ({ action }) =>
          action !== "duplicate" &&
          action !== "delete"
      );
    }

    return prev;
  },
},

  plugins: [structureTool({
  structure: (S) =>
    S.list()
      .title("PIWC Content")
      .items([
        S.listItem()
          .title("Site Settings")
          .id("siteSettings")
          .child(
            S.document()
              .schemaType("siteSettings")
              .documentId("siteSettings")
          ),

          

        S.listItem()
          .title("Homepage")
          .id("homepage")
          .child(
            S.document()
              .schemaType("homepage")
              .documentId("homepage")
          ),

        S.listItem()
          .title("Navigation")
          .id("navigation")
          .child(
            S.document()
              .schemaType("navigation")
              .documentId("navigation")
          ),

          S.listItem()
            .title("Ministries")
            .schemaType("ministry")
            .child(
              S.documentTypeList("ministry")
                .title("Ministries")
            ),
            
          S.divider(),

          S.listItem()
            .title("Locations")
            .schemaType("location")
            .child(
              S.documentTypeList("location")
                .title("Locations")
            ),

          S.listItem()
            .title("Services")
            .schemaType("service")
            .child(
              S.documentTypeList("service")
                .title("Services")
            ),

            S.listItem()
  .title("Sermons")
  .schemaType("sermon")
  .child(
    S.documentTypeList("sermon")
      .title("Sermons")
  ),

S.listItem()
  .title("Sermon Series")
  .schemaType("sermonSeries")
  .child(
    S.documentTypeList("sermonSeries")
      .title("Sermon Series")
  ),

  S.listItem()
  .title("Events")
  .schemaType("event")
  .child(
    S.documentTypeList("event")
      .title("Events")
  ),

  S.listItem()
  .title("Pages")
  .schemaType("page")
  .child(
    S.documentTypeList("page")
      .title("Pages")
  ),

  S.listItem()
  .title("Church Values")
  .schemaType("value")
  .child(
    S.documentTypeList("value")
      .title("Church Values")
      .defaultOrdering([{ field: "order", direction: "asc" }])
  ),

  S.listItem()
  .title("People & Leadership")
  .schemaType("person")
  .child(
    S.documentTypeList("person")
      .title("People & Leadership")
      .defaultOrdering([{ field: "order", direction: "asc" }])
  ),
  
      ]),
}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
