import { createImageUrlBuilder } from "@sanity/image-url";
import { createClient } from "@sanity/client";
import type {
  Artwork,
  ArtworkCategory,
  ArtworkImage,
  ArtworkStatus,
  FutureLink,
  SiteSettings
} from "./types";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || "6kr1a68s";
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-06-09";

export const isSanityConfigured =
  Boolean(projectId) && projectId !== "replacewithprojectid";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published"
});

const imageBuilder = createImageUrlBuilder(sanityClient);

type SanityArtwork = {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
  title?: string;
  slug?: { current?: string };
  category?: ArtworkCategory;
  status?: ArtworkStatus;
  description?: string;
  year?: string;
  materials?: string;
  size?: string;
  collection?: string;
  coverImage?: unknown;
  detailImages?: unknown[];
  altText?: string;
  published?: boolean;
  featured?: boolean;
  order?: number;
  notes?: string;
  price?: string;
  links?: {
    instagram?: FutureLink;
    patreon?: FutureLink;
    shop?: FutureLink;
  };
};

export const artworksQuery = `*[_type == "artwork" && published == true] | order(featured desc, order asc, _createdAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  category,
  status,
  description,
  year,
  materials,
  size,
  collection,
  coverImage,
  detailImages,
  altText,
  published,
  featured,
  order,
  notes,
  price,
  links
}`;

export async function fetchPublishedSanityArtworks(): Promise<Artwork[]> {
  if (!isSanityConfigured) return [];

  const results = await sanityClient.fetch<SanityArtwork[]>(artworksQuery);
  return Array.isArray(results)
    ? (results.map(mapSanityArtwork).filter(Boolean) as Artwork[])
    : [];
}

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  artistName,
  description,
  contactEmail,
  heroImage,
  profileImage,
  links
}`;

type SanitySiteSettings = Partial<SiteSettings> & {
  heroImage?: unknown;
  profileImage?: unknown;
};

function getImageAlt(source: unknown, fallback: string) {
  if (source && typeof source === "object" && "alt" in source) {
    const alt = (source as { alt?: unknown }).alt;
    if (typeof alt === "string" && alt.trim()) return alt;
  }

  return fallback;
}

function imageFromSanity(source: unknown, alt: string, width = 1600): ArtworkImage | null {
  if (!source) return null;

  try {
    return {
      src: imageBuilder.image(source).width(width).auto("format").url(),
      alt
    };
  } catch {
    return null;
  }
}

function mergeFutureLink(fallback: FutureLink, link?: FutureLink): FutureLink {
  return {
    url: link?.url || fallback.url,
    visible: link?.visible ?? fallback.visible
  };
}

function mergeLinks(
  fallback: SiteSettings["links"],
  links?: Partial<SiteSettings["links"]>
): SiteSettings["links"] {
  return {
    instagram: mergeFutureLink(fallback.instagram, links?.instagram),
    patreon: mergeFutureLink(fallback.patreon, links?.patreon),
    shop: mergeFutureLink(fallback.shop, links?.shop),
    etsy: mergeFutureLink(fallback.etsy, links?.etsy),
    newsletter: mergeFutureLink(fallback.newsletter, links?.newsletter),
    commission: mergeFutureLink(fallback.commission, links?.commission)
  };
}

export function mapSanitySiteSettings(
  item: SanitySiteSettings | null,
  fallback: SiteSettings
): SiteSettings {
  if (!item) return fallback;

  const heroImage =
    imageFromSanity(item.heroImage, `${item.artistName || fallback.artistName} featured artwork.`, 1800)
      ?.src || fallback.heroImage;
  const profileImage =
    imageFromSanity(
      item.profileImage,
      `${item.artistName || fallback.artistName} profile or representative artwork.`,
      1200
    )?.src || fallback.profileImage;

  return {
    artistName: item.artistName || fallback.artistName,
    description: item.description || fallback.description,
    contactEmail: item.contactEmail || fallback.contactEmail,
    heroImage,
    profileImage,
    links: mergeLinks(fallback.links, item.links)
  };
}

export function mapSanityArtwork(item: SanityArtwork): Artwork | null {
  if (!item.title || !item.slug?.current || !item.category || !item.status) {
    return null;
  }

  const altText =
    item.altText?.trim() || `${item.title}, an artwork from Marlin's ${item.category} portfolio.`;
  const coverImage = imageFromSanity(item.coverImage, getImageAlt(item.coverImage, altText), 900);
  if (!coverImage) return null;

  const detailImages = (item.detailImages || [])
    .map((image, index) =>
      imageFromSanity(image, getImageAlt(image, `${item.title}, detail image ${index + 1}.`), 1800)
    )
    .filter(Boolean) as ArtworkImage[];

  return {
    id: item._id,
    title: item.title,
    slug: item.slug.current,
    category: item.category,
    status: item.status,
    description: item.description || "",
    year: item.year,
    materials: item.materials,
    size: item.size,
    collection: item.collection,
    coverImage,
    detailImages: detailImages.length ? [coverImage, ...detailImages] : [coverImage],
    altText,
    published: item.published ?? true,
    featured: item.featured ?? false,
    order: item.order ?? 999,
    createdAt: item._createdAt,
    updatedAt: item._updatedAt,
    notes: item.notes,
    price: item.price,
    links: item.links
  };
}
