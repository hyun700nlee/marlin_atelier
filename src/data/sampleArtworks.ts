import type { Artwork, ArtworkCategory, ArtworkStatus } from "@/lib/types";

const statusCycle: ArtworkStatus[] = [
  "available",
  "reserved",
  "not_for_sale",
  "sold",
  "archive"
];

const categoryDetails: Record<
  ArtworkCategory,
  {
    label: string;
    materials: string;
    size: string;
    description: string;
  }
> = {
  Temari: {
    label: "Temari Study",
    materials: "Cotton thread, core, metallic thread",
    size: "8 cm diameter",
    description:
      "A hand-wrapped Temari work inspired by layered blue hydrangea petals and measured repetition."
  },
  Macrame: {
    label: "Macramé Wall Piece",
    materials: "Cotton cord, dyed thread, brass ring",
    size: "24 x 42 cm",
    description:
      "A quiet macramé composition balancing pale fiber, knotted texture, and soft blue accents."
  },
  Tatting: {
    label: "Tatting Lace Study",
    materials: "Lace cotton thread",
    size: "12 x 16 cm",
    description:
      "A small lace study built from patient loops, negative space, and hydrangea-toned thread."
  },
  Knitting: {
    label: "Knitted Textile",
    materials: "Wool, cotton blend yarn",
    size: "32 x 46 cm",
    description:
      "A knitted textile sample exploring soft structure, subtle color shifts, and hand rhythm."
  },
  Painting: {
    label: "Quiet Blue Painting",
    materials: "Acrylic and pigment on paper",
    size: "21 x 29.7 cm",
    description:
      "A painting study using translucent blue, lavender, and ivory fields with restrained marks."
  }
};

const categories = Object.keys(categoryDetails) as ArtworkCategory[];
const toneNames = [
  "Hydrangea",
  "Rain Garden",
  "Indigo Thread",
  "Morning Washi",
  "Lavender Mist",
  "Quiet Tide"
];

function pad(index: number) {
  return String(index).padStart(2, "0");
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const sampleArtworks: Artwork[] = Array.from({ length: 30 }, (_, itemIndex) => {
  const index = itemIndex + 1;
  const category = categories[itemIndex % categories.length];
  const categoryInfo = categoryDetails[category];
  const title = `${toneNames[itemIndex % toneNames.length]} ${categoryInfo.label} ${pad(index)}`;
  const slug = slugify(title);
  const imageBase = `/images/samples/artwork-${pad(index)}`;
  const altText = `${title}, a sample placeholder image for Marlin's ${category.toLowerCase()} portfolio work.`;

  return {
    id: `sample-${pad(index)}`,
    title,
    slug,
    category,
    status: statusCycle[itemIndex % statusCycle.length],
    description: categoryInfo.description,
    year: index <= 15 ? "2026" : "2025",
    materials: categoryInfo.materials,
    size: categoryInfo.size,
    collection: index <= 10 ? "Hydrangea Studies" : undefined,
    coverImage: {
      src: `${imageBase}-cover.svg`,
      alt: altText
    },
    detailImages: [
      {
        src: `${imageBase}-cover.svg`,
        alt: altText
      },
      {
        src: `${imageBase}-detail-01.svg`,
        alt: `${title}, detail view of texture and pattern.`
      },
      {
        src: `${imageBase}-detail-02.svg`,
        alt: `${title}, close view of materials and color.`
      }
    ],
    altText,
    published: true,
    featured: index <= 5,
    order: index,
    notes: "Sample placeholder content. Replace this record from Sanity when real artwork is ready."
  };
});
