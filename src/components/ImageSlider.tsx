import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ArtworkImage } from "@/lib/types";

interface ImageSliderProps {
  images: ArtworkImage[];
  title: string;
  variant?: "framed" | "natural";
}

export default function ImageSlider({ images, title, variant = "framed" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const hasMultipleImages = images.length > 1;

  const currentImage = useMemo(
    () => images[Math.min(currentIndex, images.length - 1)] || null,
    [currentIndex, images]
  );

  function showPrevious() {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  function showNext() {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  useEffect(() => {
    if (currentIndex > images.length - 1) {
      setCurrentIndex(0);
    }
  }, [currentIndex, images.length]);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentImage?.src]);

  useEffect(() => {
    if (imageRef.current?.complete) {
      setImageLoaded(true);
    }
  }, [currentImage?.src]);

  if (!currentImage) {
    return (
      <div
        className={`image-slider image-slider-${variant} image-slider-empty`}
        aria-label={`${title} image gallery`}
      >
        <div className="image-stage" />
      </div>
    );
  }

  return (
    <div
      className={`image-slider image-slider-${variant}`}
      aria-label={`${title} image gallery`}
      tabIndex={0}
      onKeyDown={(event) => {
        if (!hasMultipleImages) return;
        if (event.key === "ArrowLeft") showPrevious();
        if (event.key === "ArrowRight") showNext();
      }}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (!hasMultipleImages || touchStart.current === null) return;
        const delta = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(delta) > 42) {
          delta > 0 ? showPrevious() : showNext();
        }
        touchStart.current = null;
      }}
    >
      <div className={imageLoaded ? "image-stage is-loaded" : "image-stage"}>
        {!imageLoaded && <span className="image-loading">Loading image</span>}
        <img
          ref={imageRef}
          className={imageLoaded ? "is-loaded" : ""}
          src={currentImage.src}
          alt={currentImage.alt}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          onLoad={() => setImageLoaded(true)}
        />
        {hasMultipleImages && (
          <>
            <button
              className="slider-button slider-button-left"
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              title="Previous image"
            >
              <ChevronLeft aria-hidden="true" size={22} />
            </button>
            <button
              className="slider-button slider-button-right"
              type="button"
              onClick={showNext}
              aria-label="Next image"
              title="Next image"
            >
              <ChevronRight aria-hidden="true" size={22} />
            </button>
          </>
        )}
      </div>
      {hasMultipleImages && (
        <div className="slider-meta" aria-live="polite">
          <span>
            {currentIndex + 1} / {images.length}
          </span>
          <div className="slider-dots" aria-hidden="true">
            {images.map((image, index) => (
              <span
                className={index === currentIndex ? "slider-dot active" : "slider-dot"}
                key={`${image.src}-${index}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
