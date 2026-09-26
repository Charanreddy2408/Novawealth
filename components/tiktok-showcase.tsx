"use client";

import { ChevronLeft, ChevronRight, ExternalLink, MessageCircle, Play, Loader2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { tiktokVideos } from "@/content/social-content";

function circularOffset(index: number, active: number, length: number) {
  let offset = index - active;
  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;
  return offset;
}

function NativeMp4Player({ url, active, fallback }: { url: string, active: boolean, fallback?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!active && isPlaying) {
      setIsPlaying(false);
      videoRef.current?.pause();
    }
  }, [active, isPlaying]);

  return (
    <>
      <video
        ref={videoRef}
        src={url}
        playsInline
        controls={isPlaying}
        preload="metadata"
        poster={fallback}
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px', background: '#1c1c1c' }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <>
          <button 
             type="button"
             className="social-video-click-area" 
             onClick={(e) => {
                e.preventDefault();
                if (active) {
                   videoRef.current?.play();
                   setIsPlaying(true);
                }
             }}
             style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 10, cursor: active ? 'pointer' : 'default', border: 'none', background: 'transparent' }}
             aria-label="Play video"
          />
          <span className="social-video-shade" />
          <span className="social-video-top" style={{ zIndex: 2 }}>
            <small>Insights</small>
            <small>VIDEO</small>
          </span>
          <span className="social-play" style={{ zIndex: 2 }}><Play fill="currentColor" /></span>
          <span className="social-open-tag" style={{ zIndex: 2, pointerEvents: 'none' }}>
            Play video <Play size={11} fill="currentColor" />
          </span>
        </>
      )}
    </>
  );
}

function TikTokInlinePlayer({ url, fallback, active }: { url: string, fallback?: string, active: boolean }) {
  const isMp4 = url.toUpperCase().endsWith(".MP4");
  
  const [embedData, setEmbedData] = useState<{ thumbnailUrl?: string, embedUrl?: string } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(!isMp4);

  // Stop playing if this card is no longer the active center card
  useEffect(() => {
    if (!active) {
      setIsPlaying(false);
    }
  }, [active]);

  useEffect(() => {
    if (isMp4) return;
    let mounted = true;
    setIsLoading(true);
    fetch(`/api/oembed?url=${encodeURIComponent(url)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (mounted && data) setEmbedData(data);
      })
      .finally(() => {
         if (mounted) setIsLoading(false);
      });
    return () => { mounted = false; };
  }, [url, isMp4]);

  if (isMp4) {
    return <NativeMp4Player url={url} active={active} fallback={fallback} />;
  }

  if (isPlaying && embedData?.embedUrl) {
    return (
      <iframe
        className="social-video-iframe"
        src={embedData.embedUrl}
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, borderRadius: '24px' }}
      />
    );
  }

  return (
    <>
      <button 
         type="button"
         className="social-video-click-area" 
         onClick={(e) => {
            e.preventDefault();
            if (active && embedData?.embedUrl) {
               setIsPlaying(true);
            }
         }}
         style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 10, cursor: active ? 'pointer' : 'default', border: 'none', background: 'transparent' }}
         aria-label="Play video"
      />
      {isLoading && !embedData?.thumbnailUrl ? (
        <span className="social-video-thumb social-thumb-skeleton" style={{ width: '100%', height: '100%' }} />
      ) : embedData?.thumbnailUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={embedData.thumbnailUrl} alt="" className="social-video-thumb" loading="lazy" />
      ) : fallback ? (
        <Image src={fallback as any} alt="Fallback cover" fill className="social-video-thumb" style={{ objectFit: 'cover' }} />
      ) : (
        <div className="social-video-thumb" style={{ width: '100%', height: '100%', background: '#1c1c1c' }} />
      )}
      <span className="social-video-shade" />
      <span className="social-video-top" style={{ zIndex: 2 }}>
        <small>TikTok</small>
        <small>{!embedData?.thumbnailUrl && isLoading ? <Loader2 size={12} className="spinner" /> : "VIDEO"}</small>
      </span>
      <span className="social-play" style={{ zIndex: 2 }}><Play fill="currentColor" /></span>
      <span className="social-open-tag" style={{ zIndex: 2, pointerEvents: 'none' }}>
        Play video <Play size={11} fill="currentColor" />
      </span>
    </>
  );
}

export function TikTokShowcase() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const selected = tiktokVideos[active];

  const move = (direction: number) => {
    setActive((current) => (current + direction + tiktokVideos.length) % tiktokVideos.length);
  };

  return (
    <section className="section social-showcase-section" id="tiktok-education">
      <div className="shell">
        <div className="social-showcase-head">
          <div>
            <p className="eyebrow">TikTok & short-form education</p>
            <h2>Simplifying complex ideas into bite-sized financial wisdom.</h2>
          </div>
        </div>

        <div className="social-showcase-layout">
          <div className="social-cylinder">
            <div className="social-cylinder-stage" aria-live="polite">
              {tiktokVideos.map((video, index) => {
                const offset = circularOffset(index, active, tiktokVideos.length);
                const isActive = offset === 0;
                const visible = Math.abs(offset) <= 1;

                return (
                  <motion.div
                    className="social-video-card"
                    data-active={isActive}
                    aria-label={`View video: ${video.caption}`}
                    onClick={() => {
                        if (!isActive) setActive(index);
                    }}
                    animate={{
                      x: offset * 215,
                      scale: isActive ? 1 : 0.85,
                      rotateY: offset * -25,
                      opacity: visible ? (isActive ? 1 : 0.4) : 0,
                      zIndex: isActive ? 3 : visible ? 2 : 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    key={index}
                  >
                     <TikTokInlinePlayer url={video.url} active={isActive} />
                  </motion.div>
                );
              })}
            </div>
            <div className="social-carousel-controls">
              <button type="button" onClick={() => move(-1)} aria-label="Previous TikTok video">
                <ChevronLeft />
              </button>
              <span><strong>0{active + 1}</strong> / 0{tiktokVideos.length}</span>
              <button type="button" onClick={() => move(1)} aria-label="Next TikTok video">
                <ChevronRight />
              </button>
            </div>
          </div>

          <aside className="social-preview-panel" aria-live="polite">
            <div className="social-comments-head">
              <div>
                <MessageCircle />
                <span>Now previewing</span>
              </div>
              <small>0{active + 1} / 0{tiktokVideos.length}</small>
            </div>
            <div className="social-preview-body">
              <p className="eyebrow eyebrow-light">{selected.category}</p>
              <h3>{selected.caption}</h3>
              {/* @ts-ignore */}
              {selected.description && <p className="text-foreground/80" style={{ marginBottom: "1.5rem" }}>{selected.description}</p>}
              <a href={selected.url} target="_blank" rel="noopener noreferrer" className="button button-light mt-auto">
                {selected.url.toUpperCase().endsWith(".MP4") ? (
                  <>Watch Video <Play size={16} fill="currentColor" /></>
                ) : (
                  <>Watch on TikTok <ExternalLink /></>
                )}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
