import React, { useEffect, useState } from "react";
import "../styles/gallery.css";

const WP_BASE = "https://www.gezegenhavuz.com";

function pickImageSizes(media) {
  const sizes = media?.media_details?.sizes || {};

  const grid =
    sizes.medium?.source_url || sizes.thumbnail?.source_url || media.source_url;

  const full = sizes.large?.source_url || media.source_url;

  return { grid, full };
}

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);



  async function load(pageToLoad) {
    setLoading(true);

    const perPage = 24;

    const url =
      `${WP_BASE}/wp-json/wp/v2/media` +
      `?per_page=${perPage}&page=${pageToLoad}` +
      `&media_type=image` +
      `&_fields=id,source_url,alt_text,media_details,title`;

    const res = await fetch(url);

    if (!res.ok) {
      setHasMore(false);
      setLoading(false);
      return;
    }

    const totalPages = Number(res.headers.get("X-WP-TotalPages") || "1");
    const data = await res.json();
    

    const mapped = data.map((m) => {
      const { grid, full } = pickImageSizes(m);
      return {
        id: m.id,
        thumb: grid,
        full,
        alt: m.alt_text || m.title?.rendered || "image",
      };
    });

setItems((prev) =>
  pageToLoad === 1
    ? mapped.slice(3, -2) 
    : [...prev, ...mapped],
);
    setHasMore(pageToLoad < totalPages);
    setLoading(false);
  }

  useEffect(() => {
    load(1);
  }, []);

  const onLoadMore = () => {
    const next = page + 1;
    setPage(next);
    load(next);
  };

  return (
    <section className="gallerySection">
      <h2 className="galleryTitle">Daha Fazla Fotoğraf Gör</h2>

      <div className="galleryGrid">
        {items.slice(2,-3).map((img) => (
          <a
            key={img.id}
            className="galleryItem"
            href={img.full}
            target="_blank"
            rel="noopener noreferrer"
            title="Open full image"
          >
            <img loading="lazy" src={img.thumb} alt={img.alt} />
          </a>
        ))}
      </div>

      <div className="galleryActions">
        {hasMore && (
          <button
            className="galleryBtn"
            onClick={onLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        )}
        {!hasMore && items.length > 0 && (
          <div className="galleryEnd">No more photos.</div>
        )}
      </div>
    </section>
  );
}
