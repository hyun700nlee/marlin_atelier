import { ArrowLeft, Mail } from "lucide-react";
import ImageSlider from "./ImageSlider";
import { buildMailto } from "@/lib/mailto";
import { getCategoryLabel, getInquiryLabel, statusLabels, statusTone } from "@/lib/site";
import type { Artwork } from "@/lib/types";

interface ArtworkDetailProps {
  artwork: Artwork;
  canonicalUrl: string;
  contactEmail: string;
  artistName: string;
  showBackLink?: boolean;
}

export default function ArtworkDetail({
  artwork,
  canonicalUrl,
  contactEmail,
  artistName,
  showBackLink = true
}: ArtworkDetailProps) {
  const mailto = buildMailto({
    email: contactEmail,
    artistName,
    artwork,
    pageUrl: canonicalUrl
  });

  return (
    <article className="artwork-detail">
      {showBackLink && (
        <a className="detail-back" href="/#works">
          <ArrowLeft aria-hidden="true" size={18} />
          Works
        </a>
      )}
      <div className="detail-layout">
        <ImageSlider images={artwork.detailImages} title={artwork.title} variant="natural" />
        <div className="detail-copy">
          <div className="detail-eyebrow">
            <span>{getCategoryLabel(artwork.category)}</span>
            <span className={`status-badge ${statusTone[artwork.status]}`}>
              {statusLabels[artwork.status]}
            </span>
          </div>
          <h1>{artwork.title}</h1>
          <p className="detail-description">{artwork.description}</p>
          <dl className="detail-list">
            {artwork.year && (
              <>
                <dt>Year</dt>
                <dd>{artwork.year}</dd>
              </>
            )}
            {artwork.materials && (
              <>
                <dt>Materials</dt>
                <dd>{artwork.materials}</dd>
              </>
            )}
            {artwork.size && (
              <>
                <dt>Size</dt>
                <dd>{artwork.size}</dd>
              </>
            )}
            {artwork.collection && (
              <>
                <dt>Collection</dt>
                <dd>{artwork.collection}</dd>
              </>
            )}
          </dl>
          <div className="detail-actions">
            <a className="detail-button" href={mailto}>
              <Mail aria-hidden="true" size={18} />
              {getInquiryLabel(artwork.status)}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
