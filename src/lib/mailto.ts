import type { Artwork } from "./types";

interface MailtoOptions {
  email: string;
  artistName?: string;
  artwork?: Artwork;
  pageUrl?: string;
}

export function buildMailto({ email, artistName = "Marlin", artwork, pageUrl }: MailtoOptions) {
  const subject = artwork
    ? `Inquiry about ${artwork.title} by ${artistName}`
    : `Inquiry for ${artistName}`;

  const body = artwork
    ? [
        `Hello ${artistName},`,
        "",
        "I would like to ask about this work.",
        "",
        `Artwork: ${artwork.title}`,
        pageUrl ? `Page: ${pageUrl}` : "",
        "",
        "Thank you."
      ]
        .filter(Boolean)
        .join("\n")
    : [`Hello ${artistName},`, "", "I would like to ask about your works.", "", "Thank you."].join(
        "\n"
      );

  const params = new URLSearchParams({ subject, body });
  return `mailto:${email}?${params.toString()}`;
}
