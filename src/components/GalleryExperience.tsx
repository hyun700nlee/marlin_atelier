import { Grid2X2, Tag } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, getCategoryLabel, statusLabels, statusTone } from "@/lib/site";
import type { Artwork, ArtworkCategory } from "@/lib/types";

type FilterValue = "All" | ArtworkCategory;

interface GalleryExperienceProps {
  artworks: Artwork[];
}

export default function GalleryExperience({ artworks }: GalleryExperienceProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const visibleArtworks = useMemo(() => {
    if (activeFilter === "All") return artworks;
    return artworks.filter((artwork) => artwork.category === activeFilter);
  }, [activeFilter, artworks]);

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
    </div>
  );
}
