export type ArtworkCategory =
  | "Temari"
  | "Macrame"
  | "Tatting"
  | "Knitting"
  | "Painting";

export type ArtworkStatus =
  | "available"
  | "sold"
  | "reserved"
  | "not_for_sale"
  | "archive";

export interface ArtworkImage {
  src: string;
  alt: string;
}

export interface Artwork {
  id: string;
  title: string;
  slug: string;
  category: ArtworkCategory;
  status: ArtworkStatus;
  description: string;
  year?: string;
  materials?: string;
  size?: string;
  collection?: string;
  coverImage: ArtworkImage;
  detailImages: ArtworkImage[];
  altText: string;
  published: boolean;
  featured: boolean;
  order: number;
  createdAt?: string;
  updatedAt?: string;
  notes?: string;
  price?: string;
  links?: {
    instagram?: FutureLink;
    patreon?: FutureLink;
    shop?: FutureLink;
  };
}

export interface FutureLink {
  url: string;
  visible: boolean;
}

export interface SiteSettings {
  artistName: string;
  description: string;
  contactEmail: string;
  heroImage: string;
  profileImage: string;
  links: {
    instagram: FutureLink;
    patreon: FutureLink;
    shop: FutureLink;
    etsy: FutureLink;
    newsletter: FutureLink;
    commission: FutureLink;
  };
}
