import { ArrowUpRight, Mail, X } from "lucide-react";
import { useEffect, useRef } from "react";
import ImageSlider from "./ImageSlider";
import { buildMailto } from "@/lib/mailto";
import { getCategoryLabel, getInquiryLabel, statusLabels, statusTone } from "@/lib/site";
import type { Artwork } from "@/lib/types";

interface ArtworkModalProps {
  artwork: Artwork;
  contactEmail: string;
  artistName: string;
  siteUrl: string;
  showDetailLink?: boolean;
  onClose: () => void;
}

export default function ArtworkModal({
  artwork,
  contactEmail,
  artistName,
  siteUrl,
  showDetailLink = true,
  onClose
}: ArtworkModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const canonicalUrl = `${siteUrl}/artworks/${artwork.slug}`;
  const mailto = buildMailto({
    email: contactEmail,
    artistName,
    artwork,
    pageUrl: canonicalUrl
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      );

      if (!focusableElements.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="artwork-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="artwork-modal-title"
        ref={dialogRef}
        tabIndex={-1}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close artwork details"
          title="Close"
        >
          <X aria-hidden="true" size={21} />
        </button>
        <div className="modal-grid">
          <ImageSlider images={artwork.detailImages} title={artwork.title} variant="natural" />
          <div className="modal-copy">
            <div className="detail-eyebrow">
              <span>{getCategoryLabel(artwork.category)}</span>
              <span className={`status-badge ${statusTone[artwork.status]}`}>
                {statusLabels[artwork.status]}
              </span>
            </div>
            <h2 id="artwork-modal-title">{artwork.title}</h2>
            <p>{artwork.description}</p>
            <dl className="detail-list compact">
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
            <div className="modal-actions">
              <a className="detail-button" href={mailto}>
                <Mail aria-hidden="true" size={18} />
                {getInquiryLabel(artwork.status)}
              </a>
              {showDetailLink && (
                <a className="detail-link" href={`/artworks/${artwork.slug}`}>
                  Detail Page
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
