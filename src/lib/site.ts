import type { ArtworkCategory, ArtworkStatus, SiteSettings } from "./types";

export const categories: ArtworkCategory[] = [
  "Temari",
  "Macrame",
  "Tatting",
  "Knitting",
  "Painting"
];

export const categoryLabels: Record<ArtworkCategory, string> = {
  Temari: "Temari",
  Macrame: "Macramé",
  Tatting: "Tatting",
  Knitting: "Knitting",
  Painting: "Painting"
};

export const statusLabels: Record<ArtworkStatus, string> = {
  available: "Available",
  sold: "Sold",
  reserved: "Reserved",
  not_for_sale: "Not for Sale",
  archive: "Archive"
};

export const inquiryLabels: Record<ArtworkStatus, string> = {
  available: "Inquire about this work",
  reserved: "Inquire about this work",
  sold: "Ask about similar works",
  not_for_sale: "Contact Marlin",
  archive: "Ask about this archive work"
};

export const statusTone: Record<ArtworkStatus, string> = {
  available: "status-available",
  sold: "status-sold",
  reserved: "status-reserved",
  not_for_sale: "status-private",
  archive: "status-archive"
};

export const defaultSiteSettings: SiteSettings = {
  artistName: "Marlin",
  description:
    "Marlin is an artist exploring handcraft, pattern, texture, and quiet repetition through Temari, macramé, tatting, knitting, and painting.",
  contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL || "hello@example.com",
  heroImage: "/images/samples/artwork-01-cover.svg",
  profileImage: "/images/samples/artwork-02-cover.svg",
  links: {
    instagram: { url: "", visible: false },
    patreon: { url: "", visible: false },
    shop: { url: "", visible: false },
    etsy: { url: "", visible: false },
    newsletter: { url: "", visible: false },
    commission: { url: "", visible: false }
  }
};

export const siteSettings = defaultSiteSettings;

export function getCategoryLabel(category: ArtworkCategory) {
  return categoryLabels[category];
}

export function getInquiryLabel(status: ArtworkStatus) {
  return inquiryLabels[status];
}

export function getSiteUrl() {
  return (import.meta.env.PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "");
}
