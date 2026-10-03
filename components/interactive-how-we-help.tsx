"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { track } from "@/lib/analytics";

type Pillar = {
  id: string;
  number: string;
  title: string;
  hook: string;
  body: string[];
};

export function InteractivePillars({ pillars }: { pillars: Pillar[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const activePillar = pillars[activeTab];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    track("carousel_prev", { section: "pillars" });
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    track("carousel_next", { section: "pillars" });
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      {/* ── DESKTOP VIEW (Original) ── */}
      <div className="desktop-pillars">
        <div className="interactive-display-container">
          <div className="display-sidebar">
            {pillars.map((pillar, i) => {
              const isActive = activeTab === i;
              return (
                <button
                  key={pillar.id}
                  className={`display-tab ${isActive ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab(i);
                    track("tab_click", { tab: pillar.title });
                  }}
                  onMouseEnter={() => setActiveTab(i)}
                >
                  <span style={{ 
                    fontFamily: "var(--font-display)", 
                    opacity: isActive ? 1 : 0.4, 
                    color: isActive ? "#FBB811" : "inherit",
                    fontSize: "1.2rem", 
                    marginRight: "0.8rem", 
                    pointerEvents: "none",
                    transition: "all 0.3s ease"
                  }}>
                    {pillar.number}
                  </span>
                  <span className="font-medium">{pillar.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="pillar-tab-indicator"
                      className="display-tab-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="display-content-area">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="display-content-inner"
              >
                <div 
                  style={{ 
                    fontFamily: "var(--font-display)", 
                    background: "linear-gradient(135deg, #FBB811 0%, #F5761A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "7rem", 
                    lineHeight: 0.9,
                    opacity: 1, 
                    marginBottom: "2rem",
                    display: "inline-block",
                    filter: "drop-shadow(0px 8px 16px rgba(251, 184, 17, 0.2))"
                  }}
                >
                  {activePillar.number}
                </div>
                
                <h2>{activePillar.title}</h2>
                
                {/* The hook is strong/brand colored in the design system for h3 */}
                <h3>{activePillar.hook}</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  {activePillar.body.map((paragraph, i) => (
                    <p key={i}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── MOBILE VIEW (Carousel) ── */}
      <div className="mobile-pillars">
        <div className="pillars-carousel-wrapper">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container pillars-container">
              {pillars.map((pillar) => (
                <div className="embla__slide pillar-slide" key={pillar.id}>
                  <div className="pillar-card">
                    <div 
                      className="pillar-card-number"
                      style={{ 
                        fontFamily: "var(--font-display)", 
                        background: "linear-gradient(135deg, #FBB811 0%, #F5761A 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        lineHeight: 0.9,
                        filter: "drop-shadow(0px 8px 16px rgba(251, 184, 17, 0.2))"
                      }}
                    >
                      {pillar.number}
                    </div>
                    
                    <h2>{pillar.title}</h2>
                    <h3>{pillar.hook}</h3>
                    
                    <div className="pillar-card-body">
                      {pillar.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pillars-carousel-controls">
            <button
              className="carousel-btn"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              aria-label="Previous pillar"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              className="carousel-btn"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              aria-label="Next pillar"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
