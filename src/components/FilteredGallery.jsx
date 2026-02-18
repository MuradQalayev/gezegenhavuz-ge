import React, { useEffect, useMemo, useRef, useState } from "react";
import "../styles/filteredGallery.css";

const WP_BASE = "https://www.gezegenhavuz.com";

const CATEGORY_MAP = [
  { slug: "naturel-havuz", label: "Naturel Havuz" },
  { slug: "selale-havuz", label: "Şelale Havuz" },
  { slug: "yapay-kaya", label: "Yapay Kaya" },
];
const normalizeUrl = (u) => (u || "").replace(/^http:\/\//i, "https://").trim();

const EXCLUDE_URLS = new Set(
  [
    "https://www.gezegenhavuz.com/wp-content/uploads/2022/08/tr.jpg",
    "https://www.gezegenhavuz.com/wp-content/uploads/2022/08/en.jpg",
    "https://www.gezegenhavuz.com/wp-content/uploads/2021/06/gezegen-havuz-logo-png.png",
  ].map(normalizeUrl),
);



function detectCategoryFromUrl(url) {
  const lower = decodeURIComponent(url).toLowerCase();
  for (const c of CATEGORY_MAP) {
    if (lower.includes(c.slug)) return c.label;
  }
  return "Other";
}

function pickThumb(media) {
  const sizes = media?.media_details?.sizes || {};
  return (
    sizes.medium?.source_url || sizes.thumbnail?.source_url || media.source_url
  );
}

function useInViewOnce(opts = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, opts);

    obs.observe(el);
    return () => obs.disconnect();
  }, [opts]);

  return [ref, inView];
}

function AnimatedTile({ img }) {
  const [ref, inView] = useInViewOnce();

  return (
    <a
      ref={ref}
      className={`fgItem ${inView ? "in" : ""}`}
      href={img.full}
      target="_blank"
      rel="noopener noreferrer"
      title="Open full image"
    >
      <img loading="lazy" src={img.thumb} alt={img.alt} />
    </a>
  );
}

export default function FilteredGallery() {
  const [all, setAll] = useState([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(false);

  const categories = useMemo(
    () => ["All", ...CATEGORY_MAP.map((c) => c.label), "Other"],
    [],
  );

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);


        const res = await fetch(
          `${WP_BASE}/wp-json/wp/v2/media?per_page=100&media_type=image&_fields=id,source_url,alt_text,media_details,title`,
        );

        if (!res.ok) throw new Error(`WP error: ${res.status}`);

        const data = await res.json();
        

        const mapped = data.map((m) => {
          const full = m.source_url;
          return {
            id: m.id,
            thumb: pickThumb(m),
            full,
            alt: m.alt_text || m.title?.rendered || "image",
            category: detectCategoryFromUrl(full),
          };
        });
        const cleaned = mapped.filter(
          (img) => !EXCLUDE_URLS.has(normalizeUrl(img.full)),
        );


        setAll(cleaned);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(() => {
    if (active === "All") return all;
    return all.filter((x) => x.category === active);
  }, [all, active]);

  return (
    <section className="fgSection">
      <h2 className="fgTitle">Foto Galeri</h2>

      <div className="fgFilters">
        {categories.map((c) => (
          <button
            key={c}
            className={`fgFilterBtn ${active === c ? "active" : ""}`}
            onClick={() => setActive(c)}
            type="button"
          >
            {c}
          </button>
        ))}
      </div>

      {loading && <div className="fgLoading">Loading...</div>}

      <div className="fgGrid">
        {filtered.map((img) => (
          <AnimatedTile key={img.id} img={img} />
        ))}
      </div>
    </section>
  );
}
