import { sampleArtworks } from "@/data/sampleArtworks";
import { fetchPublishedSanityArtworks, isSanityConfigured } from "./sanity";
import type { Artwork } from "./types";

function sortArtworks(artworks: Artwork[]) {
  return [...artworks].sort((left, right) => {
    if (left.featured !== right.featured) return left.featured ? -1 : 1;
    if (left.order !== right.order) return left.order - right.order;
    return (right.createdAt || "").localeCompare(left.createdAt || "");
  });
}

export async function getArtworks(): Promise<Artwork[]> {
  if (!isSanityConfigured) {
    return sortArtworks(sampleArtworks.filter((artwork) => artwork.published));
  }

  try {
    const mapped = await fetchPublishedSanityArtworks();
    return mapped.length ? sortArtworks(mapped) : sortArtworks(sampleArtworks);
  } catch (error) {
    console.warn("Falling back to sample artwork data because Sanity fetch failed.", error);
    return sortArtworks(sampleArtworks);
  }
}

export async function getArtworkBySlug(slug: string) {
  const artworks = await getArtworks();
  return artworks.find((artwork) => artwork.slug === slug);
}
