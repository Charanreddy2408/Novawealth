"use client";

import { useEffect, useState } from "react";

export function SocialThumbnail({
  url,
  alt,
  className = "",
  // fallback & sizes kept for backwards-compat but no longer used as stock images
  fallback: _fallback,
  sizes: _sizes,
}: {
  url: string;
  fallback?: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setSrc(null);

    fetch(`/api/oembed?url=${encodeURIComponent(url)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (active && data?.thumbnailUrl) setSrc(data.thumbnailUrl);
      })
      .catch(() => undefined);

    return () => { active = false; };
  }, [url]);

  if (!src) {
    // Dark pulsing skeleton — no stock image shown while TikTok thumbnail loads
    return <span className={`${className} social-thumb-skeleton`} aria-hidden="true" />;
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}
