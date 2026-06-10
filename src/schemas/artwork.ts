import { defineField, defineType } from "sanity";

const categories = [
  { title: "Temari", value: "Temari" },
  { title: "Macramé", value: "Macrame" },
  { title: "Tatting", value: "Tatting" },
  { title: "Knitting", value: "Knitting" },
  { title: "Painting", value: "Painting" }
];

const statuses = [
  { title: "Available", value: "available" },
  { title: "Sold", value: "sold" },
  { title: "Reserved", value: "reserved" },
  { title: "Not for Sale", value: "not_for_sale" },
  { title: "Archive", value: "archive" }
];

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
  type: "string",
  description: "Short English description for screen readers and image SEO."
});

export default defineType({
  name: "artwork",
  title: "Artwork",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "")
            .slice(0, 96)
      },
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          const current = slug?.current;
          if (!current) return true;
          return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(current)
            ? true
            : "Use lowercase letters, numbers, and single hyphens only.";
        })
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: categories,
        layout: "radio"
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "status",
      title: "Sale Status",
      type: "string",
      initialValue: "available",
      options: {
        list: statuses,
        layout: "radio"
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string"
    }),
    defineField({
      name: "materials",
      title: "Materials",
      type: "string"
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "string"
    }),
    defineField({
      name: "collection",
      title: "Collection",
      type: "string"
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true
      },
      fields: [imageAltField],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "detailImages",
      title: "Detail Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true
          },
          fields: [imageAltField]
        }
      ],
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({
      name: "altText",
      title: "Alt Text",
      description:
        "Fallback alt text used when an individual image does not have its own alt text.",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 100,
      validation: (Rule) => Rule.integer().min(1)
    }),
    defineField({
      name: "links",
      title: "Future Artwork Links",
      type: "object",
      description: "Kept hidden on the MVP public site unless future UI support is enabled.",
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
          title: "Shop",
          type: "object",
          fields: futureLinkFields
        })
      ]
    }),
    defineField({
      name: "processImages",
      title: "Future Process Images",
      type: "array",
      hidden: true,
      of: [
        {
          type: "image",
          options: {
            hotspot: true
          },
          fields: [imageAltField]
        }
      ]
    }),
    defineField({
      name: "notes",
      title: "Internal Notes",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "price",
      title: "Future Price Field",
      type: "string",
      hidden: true
    })
  ],
  orderings: [
    {
      title: "Portfolio Order",
      name: "portfolioOrder",
      by: [
        { field: "featured", direction: "desc" },
        { field: "order", direction: "asc" },
        { field: "_createdAt", direction: "desc" }
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      status: "status",
      published: "published",
      media: "coverImage"
    },
    prepare({ title, category, status, published, media }) {
      return {
        title,
        subtitle: `${category || "Uncategorized"} · ${status || "unknown"} · ${
          published === false ? "Draft" : "Published"
        }`,
        media
      };
    }
  }
});
