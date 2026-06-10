import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/schemas";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || "6kr1a68s";
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "marlin-portfolio",
  title: "Marlin Portfolio",
  projectId,
  dataset,
  basePath: "/admin",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Marlin Admin")
          .items([
            S.listItem()
              .title("Artworks")
              .schemaType("artwork")
              .child(
                S.documentList()
                  .title("Artworks")
                  .schemaType("artwork")
                  .filter('_type == "artwork"')
                  .defaultOrdering([
                    { field: "featured", direction: "desc" },
                    { field: "order", direction: "asc" },
                    { field: "_createdAt", direction: "desc" }
                  ])
              ),
            S.divider(),
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Site Settings")
              )
          ])
    })
  ],
  schema: {
    types: schemaTypes
  }
});
