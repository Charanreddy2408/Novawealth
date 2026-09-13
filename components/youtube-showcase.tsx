"use client";

import { Play, Loader2, Maximize, Minimize, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { youtubeVideos } from "@/content/social-content";

// Helper component to manage fetching oEmbed details per video
function VideoPlayer({ url, caption, category, fallbackImage }: { url: string, caption: string, category: string, fallbackImage: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [embedData, setEmbedData] = useState<{ thumbnailUrl?: string, embedUrl?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    fetch(`/api/oembed?url=${encodeURIComponent(url)}`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (active && data) setEmbedData(data);
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });
    return () => { active = false; setIsPlaying(false); };
  }, [url]);

  const coverImage = embedData?.thumbnailUrl || fallbackImage;

  return (
    <div className="inline-yt-player-wrapper" ref={containerRef}>
      {!isPlaying ? (
        <button
          type="button"
          className="inline-yt-cover"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play: ${caption}`}
        >
          <Image
            src={coverImage}
            alt={caption}
            fill
            sizes="(max-width: 980px) 100vw, 65vw"
          />
          <div className="inline-yt-shade" />
          
          <div className="inline-yt-play-btn">
            {isLoading ? <Loader2 className="spinner" /> : <Play fill="currentColor" />}
          </div>
          
          <div className="inline-yt-overlay-info">
            <span className="yt-badge">{category}</span>
            <h3>{caption}</h3>
          </div>
        </button>
      ) : (
        <iframe
          className="inline-yt-iframe"
          src={embedData?.embedUrl || url}
          title={caption}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      
      {/* Player Actions Overlay */}
      <div className="yt-actions-overlay" onClick={e => e.stopPropagation()}>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="yt-action-btn"
          aria-label="View original post"
          title="View original post"
        >
          <ExternalLink size={18} />
        </a>
        <button 
          type="button" 
          className="yt-action-btn" 
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>
      </div>
    </div>
  );
}

function PlaylistThumbnail({ url, fallbackImage, isActive }: { url: string, fallbackImage: string, isActive: boolean }) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch(`/api/oembed?url=${encodeURIComponent(url)}`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (active && data?.thumbnailUrl) setThumbnailUrl(data.thumbnailUrl);
      })
      .catch(() => undefined);
    return () => { active = false; };
  }, [url]);

  return (
    <div className="playlist-item-thumb">
      <Image
        src={thumbnailUrl || fallbackImage}
        alt="Playlist video cover"
        fill
        sizes="180px"
      />
      {isActive && (
        <div className="playlist-item-active-overlay">
          <span>Playing</span>
        </div>
      )}
    </div>
  );
}

export function YouTubeShowcase() {
  const [active, setActive] = useState(0);
  const selected = youtubeVideos[active];

  return (
    <section className="section inline-yt-section" id="youtube-education">
      <div className="shell">
        <div className="inline-yt-header">
          <div>
            <p className="eyebrow">YouTube & Long-form</p>
            <h2>Deeper financial conversations when you have more time.</h2>
          </div>
          <p className="inline-yt-desc">
            Explore comprehensive guides and structured financial strategies.
            Select a video from the playlist to watch it directly here.
          </p>
        </div>

        <div className="inline-yt-layout">
          <div className="inline-yt-main">
            <VideoPlayer
               url={selected.url}
               caption={selected.caption}
               category={selected.category}
               fallbackImage={selected.fallbackImage as string}
            />
          </div>

          <div className="inline-yt-playlist" role="tablist">
            <h3 className="playlist-heading">More Episodes</h3>
            {youtubeVideos.map((video, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={active === index}
                className="inline-yt-playlist-item"
                onClick={() => setActive(index)}
              >
                <PlaylistThumbnail 
                   url={video.url} 
                   fallbackImage={video.fallbackImage as string} 
                   isActive={active === index} 
                />
                <div className="playlist-item-content">
                  <span className="playlist-item-cat">{video.category}</span>
                  <h4>{video.caption}</h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
