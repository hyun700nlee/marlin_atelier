import { Grid2X2, Tag } from "lucide-react";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import ArtworkModal from "./ArtworkModal";
import { fetchPublishedSanityArtworks } from "@/lib/sanity";
import { categories, getCategoryLabel, statusLabels, statusTone } from "@/lib/site";
import type { Artwork, ArtworkCategory } from "@/lib/types";

type FilterValue = "All" | ArtworkCategory;

interface GalleryExperienceProps {
  artworks: Artwork[];
  contactEmail: string;
  artistName: string;
  siteUrl: string;
}

export default function GalleryExperience({
  artworks,
  contactEmail,
  artistName,
  siteUrl
}: GalleryExperienceProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const [currentArtworks, setCurrentArtworks] = useState(artworks);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  useEffect(() => {
    setCurrentArtworks(artworks);
  }, [artworks]);

  useEffect(() => {
    let isMounted = true;

    fetchPublishedSanityArtworks()
      .then((freshArtworks) => {
        if (isMounted && freshArtworks.length) {
          setCurrentArtworks(freshArtworks);
        }
      })
      .catch((error) => {
        console.warn("Unable to refresh artwork list from Sanity.", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const visibleArtworks = useMemo(() => {
    if (activeFilter === "All") return currentArtworks;
    return currentArtworks.filter((artwork) => artwork.category === activeFilter);
  }, [activeFilter, currentArtworks]);

  function openArtwork(event: MouseEvent<HTMLAnchorElement>, artwork: Artwork) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    setSelectedArtwork(artwork);
  }

  return (
    <div className="gallery-experience">
      <div className="gallery-toolbar" aria-label="Artwork filters">
        <div className="toolbar-label">
          <Grid2X2 aria-hidden="true" size={18} />
          <span>{visibleArtworks.length} Works</span>
        </div>
        <div className="filter-list">
          {(["All", ...categories] as FilterValue[]).map((category) => (
            <button
              className={category === activeFilter ? "filter-chip active" : "filter-chip"}
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              aria-pressed={category === activeFilter}
            >
              {category !== "All" && <Tag aria-hidden="true" size={14} />}
              {category === "All" ? "All" : getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </div>

      <div className="artwork-grid">
        {visibleArtworks.map((artwork) => (
          <a
            className="artwork-card"
            href={`/artworks/${artwork.slug}`}
            key={artwork.id}
            aria-label={`Open detail page for ${artwork.title}`}
            onClick={(event) => openArtwork(event, artwork)}
          >
            <span className="artwork-image-wrap">
              <img src={artwork.coverImage.src} alt={artwork.coverImage.alt} loading="lazy" />
              <span className={`status-badge ${statusTone[artwork.status]}`}>
                {statusLabels[artwork.status]}
              </span>
            </span>
            <span className="artwork-card-copy">
              <span className="artwork-title">{artwork.title}</span>
              <span className="artwork-category">{getCategoryLabel(artwork.category)}</span>
            </span>
          </a>
        ))}
      </div>

      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          contactEmail={contactEmail}
          artistName={artistName}
          siteUrl={siteUrl}
          showDetailLink={false}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </div>
  );
}
