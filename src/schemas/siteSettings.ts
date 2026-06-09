import { defineField, defineType } from "sanity";

const futureLinkFields = [
  defineField({
    name: "url",
    title: "URL",
    type: "url"
  }),
  defineField({
    name: "visible",
    title: "Visible",
    type: "boolean",
    initialValue: false
  })
];

const imageAltField = defineField({
  name: "alt",
  title: "Image Alt Text",
  type: "string"
});

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "artistName",
      title: "Artist Name",
      type: "string",
      initialValue: "Marlin"
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "email",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "Representative artwork used in the home hero when available.",
      options: {
        hotspot: true
      },
      fields: [imageAltField]
    }),
    defineField({
      name: "profileImage",
      title: "About Image",
      type: "image",
      description: "Profile image or representative artwork for the About section.",
      options: {
        hotspot: true
      },
      fields: [imageAltField]
    }),
    defineField({
      name: "links",
      title: "Future External Links",
      type: "object",
      fields: [
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "object",
          fields: futureLinkFields
        }),
        defineField({
          name: "patreon",
          title: "Patreon",
          type: "object",
          fields: futureLinkFields
        }),
        defineField({
          name: "shop",
          title: "Online Shop",
          type: "object",
          fields: futureLinkFields
        }),
        defineField({
          name: "etsy",
          title: "Etsy",
          type: "object",
          fields: futureLinkFields
        }),
        defineField({
          name: "newsletter",
          title: "Newsletter",
          type: "object",
          fields: futureLinkFields
        }),
        defineField({
          name: "commission",
          title: "Commission Request",
          type: "object",
          fields: futureLinkFields
        })
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings"
      };
    }
  }
});
